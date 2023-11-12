---
title: Ruby
sidebar_position: 11
---

## Install the latest version

```bash
 gem install prefab-cloud-ruby
```

## Initialize Client

If you set `PREFAB_API_KEY` as an environment variable, initializing the client is as easy as

```ruby
$prefab = Prefab::Client.new # reads PREFAB_API_KEY env var
```

### Rails Applications

Initializing Prefab in your `application.rb` will allow you to reference dynamic configuration in your environment (e.g. `staging.rb`) and initializers. This is useful for setting environment-specific config like your redis connection URL.

```ruby
#application.rb
module MyApplication
  class Application < Rails::Application
    #...

    $prefab = Prefab::Client.new
  end
end
```

<details className="alert--warning">
<summary>

#### Special Considerations with Forking servers like Puma & Unicorn that use workers

</summary>

Many ruby web servers fork. In order to work properly we should have a Prefab Client running independently in each fork. You do not need to do this if you are only using threads and not workers.
We also need to set the reset the logger for ActionView and friends because those get set pre-fork.

<Tabs groupId="lang">
<TabItem value="puma" label="Puma">

If using workers in Puma, you can initialize inside an on_worker_boot hook in your puma.rb config file.

```ruby
# puma.rb
on_worker_boot do
  $prefab = $prefab.fork
  $prefab.set_rails_loggers
end
```

</TabItem>

<TabItem value="unicorn" label="Unicorn">

If using workers in Unicorn, you can initialize inside an after_fork hook in your unicorn.rb config file:

```ruby
# unicorn.rb
after_fork do |server, worker|
  $prefab = $prefab.fork
  $prefab.set_rails_loggers
end
```

</TabItem>
</Tabs>

</details>

## Feature Flags

For boolean flags, you can use the `enabled?` convenience method:

```ruby
flag_name = "my-first-feature-flag"
puts "#{flag_name} is: #{$prefab.enabled? flag_name}"
```

Feature flags don't have to return just true or false. You can get other data types using `get`:

```ruby
$prefab.get("ff-with-string")
$prefab.get("ff-with-int")
```

## Context

Feature flags become more powerful when we give the flag evaluation rules more information to work with. We do this by providing [context](/docs/explanations/concepts/context) of the current user (and/or team, request, etc.)

To make the best use of Prefab, we recommend setting [context](/docs/explanations/concepts/context) in an `around_action` in your `ApplicationController`. Setting this context for the life-cycle of the request means the Prefab logger can be aware of your user/etc. for feature flags and [targeted log levels](/docs/explanations/features/targeted-log-levels) and you won't have to explicitly pass context into your `.enabled?` and `.get` calls.

```ruby
# application_controller.rb
class ApplicationController < ActionController::Base
  around_action do |_, block|
    $prefab.with_context(prefab_context, &block)
  end

  def prefab_context
    {
      device: {
        mobile: mobile?
        # ...
      },
    }.merge(prefab_user_context)
  end

  def prefab_user_context
    return {} unless current_user

    {
      key: current_user.tracking_id,
      id: current_user.id,
      email: current_user.email,
      country: current_user.country,
      # ...
    }
  end
end
```

<details>
<summary>

#### Just-in-time Context

</summary>

You can also pass context when evaluating individual flags or config values.

```ruby
context = {
  user: {
    id: 123,
    key: 'user-123',
    subscription_level: 'pro',
    email: "alice@example.com"
  },
  team: {
    id: 432,
    key: 'team-abc',
  },
  device: {
    key: "abcdef",
    mobile: true,
  }
}
result = $prefab.enabled?("my-first-feature-flag", context)

puts "my-first-feature-flag is: #{result} for #{context.inspect}"
```

</details>

## Dynamic Config

Config values are accessed the same way as feature flag values. You can use `enabled?` as a convenience for boolean values, and `get` works for all data types

```ruby
config_key = "my-first-int-config"
puts "#{config_key} is: #{$prefab.get(config_key)}"
```

<details>
<summary>

#### Default Values for Configs

</summary>

Here we ask for the value of a config named `max-jobs-per-second`, and we specify `10` as a default value if no value is available.

```ruby
$prefab.get("max-jobs-per-second", 10) # => returns `10` if no value is available
```

If we don't provide a default and no value is available, a `Prefab::Errors::MissingDefaultError` error will be raised.

```ruby
$prefab.get("max-jobs-per-second") # => raises if no value is available
```

:::note

You can modify this behavior by setting the option `on_no_default` to `Prefab::Options::ON_NO_DEFAULT::RETURN_NIL`

:::

</details>

## Dynamic Log Levels

Set the Rails logger to use our logger

```ruby
#application.rb
module MyApplication
  class Application < Rails::Application
    #...

    $prefab = Prefab::Client.new
    // highlight-next-line
    $prefab.set_rails_loggers
  end
end
```

`$prefab.set_rails_loggers` wraps the Rails logger to allow using [dynamic log levels](/docs/explanations/features/targeted-log-levels) with your normal Rails logger calls.

Now we are free to adjust our log levels, down to the controller or method level in real-time. Invaluable for debugging! You can set and tweak these on-the-fly in the Prefab web app.

:::caution
Please read the [Puma/Unicorn](ruby#special-considerations-with-forking-servers-like-puma--unicorn-that-use-workers) notes for special considerations with forking servers.
:::

### Targeted Log Levels

You can use [Targeting](/docs/explanations/features/targeted-log-levels) to change your log levels based on the current user/request/device context using our [rules](/docs/explanations/features/rules-and-segmentation) engine.

<details>
<summary>

#### Setting default log levels in the Prefab config file

</summary>

</details>

## Telemetry

By default, Prefab uploads telemetry that enables a number of useful features. You can alter or disable this behavior using the following options:

| Name                         | Description                                                                                                                           | Default           |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| collect_evaluation_summaries | Send counts of config/flag evaluation results back to Prefab to view in web app                                                       | true              |
| collect_logger_counts        | Send counts of logger usage back to Prefab to power log-levels configuration screen                                                   | true              |
| context_upload_mode          | Upload either context "shapes" (the names and data types your app uses in prefab contexts) or periodically send full example contexts | :periodic_example |

If you want to change any of these options, you can pass an `options` object when initializing the Prefab client.

```ruby
#application.rb
module MyApplication
  class Application < Rails::Application
    #...

    // highlight-start
    options = Prefab::Options.new(
      collect_evaluation_summaries: true,
      collect_logger_counts: true,
      context_upload_mode: :periodic_example,
    )

    $prefab = Prefab::Client.new(options)
    // highlight-end
  end
end
```

## Debugging

You can control the Prefab client's log level by changing the configuration value of `log-level.cloud.prefab`. In the rare
case that you are trying to debug issues that occur before this config file has been read, set env var

```bash
PREFAB_LOG_CLIENT_BOOTSTRAP_LOG_LEVEL = debug
```

## Testing

### Test Setup

Specify `LOCAL_ONLY` via an env var and use your [config.yaml file](/docs/explanations/architecture/bootstrapping).

```sh
export PREFAB_DATASOURCES='LOCAL_ONLY'
```

If you need to test multiple scenarios that depend on a single config or feature key, you can use a mock or stub to change the Prefab value.

### Example Test

Imagine we want to test a `batches` method on our `Job` class. `batches` depends on `job.batch.size` and the value for `job.batch.size` in our default config file is `3`.

We can test how `batches` performs with different values for `job.batch.size` by mocking the return value of `$prefab.get`.

```ruby
class Job < Array
  def batches
    slice_size = $prefab.get('job.batch.size')
    each_slice(slice_size)
  end
end

RSpec.describe Job do
  describe '#batches' do
    it 'returns batches of jobs' do
      jobs = Job.new([1, 2, 3, 4, 5])

      expect(jobs.batches.map(&:size)).to eq([3, 2])

      allow($prefab).to receive(:get).with('job.batch.size').and_return(2)
      expect(jobs.batches.map(&:size)).to eq([2, 2, 1])
    end
  end
end
```

## Reference

### Client Initialization Options

For more control, you can initialize your client with options. Here are the defaults with explanations.

```ruby
options = Prefab::Options.new(
  api_key: ENV['PREFAB_API_KEY'],
  logdev: $stdout,
  namespace: '',
  log_formatter: DEFAULT_LOG_FORMATTER,
  log_prefix: nil,
  prefab_api_url: ENV['PREFAB_API_URL'] || 'https://api.prefab.cloud',
  on_no_default: ON_NO_DEFAULT::RAISE, # options :raise, :warn_and_return_nil,
  initialization_timeout_sec: 10, # how long to wait before on_init_failure
  on_init_failure: ON_INITIALIZATION_FAILURE::RAISE, # choose to crash or continue with local data only if unable to fetch config data from prefab at startup
  prefab_datasources: ENV['PREFAB_DATASOURCES'] == 'LOCAL_ONLY' ? DATASOURCES::LOCAL_ONLY : DATASOURCES::ALL,
  prefab_config_override_dir: Dir.home,
  prefab_config_classpath_dir: '.', # where to load local overrides
  prefab_envs: ENV['PREFAB_ENVS'].nil? ? [] : ENV['PREFAB_ENVS'].split(','),
  collect_logger_counts: true, # send counts of logger usage back to Prefab to power log-levels configuration screen
  collect_max_paths: DEFAULT_MAX_PATHS,
  collect_sync_interval: nil,
  context_upload_mode: :periodic_example, # :periodic_example, :shape_only, :none
  context_max_size: DEFAULT_MAX_EVAL_SUMMARIES,
  collect_evaluation_summaries: true, # send counts of config/flag evaluation results back to Prefab to view in web app
  collect_max_evaluation_summaries: DEFAULT_MAX_EVAL_SUMMARIES,
  allow_telemetry_in_local_mode: false
)

$prefab = Prefab::Client.new(options)
```

[Meltano]: https://meltano.com/
[Singer]: https://www.singer.io/
