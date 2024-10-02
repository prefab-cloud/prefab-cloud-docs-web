---
title: Ruby
---

## Install the latest version

```bash
 gem install prefab-cloud-ruby
```

## Initialize Client

If you set `PREFAB_API_KEY` as an environment variable, initializing the client is as easy as

```ruby
Prefab.init # reads PREFAB_API_KEY env var by default
```

### Rails Applications

Initializing Prefab in your `application.rb` will allow you to reference dynamic configuration in your environment (e.g. `staging.rb`) and initializers. This is useful for setting environment-specific config like your redis connection URL.

```ruby
#application.rb
module MyApplication
  class Application < Rails::Application
    #...

    Prefab.init
  end
end
```

<details className="alert--warning">
<summary>

#### Special Considerations with Forking servers like Puma & Unicorn that use workers

</summary>

Many ruby web servers fork. In order to work properly we should have a Prefab Client running independently in each fork. You do not need to do this if you are only using threads and not workers.
If using SemanticLogger, you will also need to reopen the logger in each fork.

<Tabs groupId="lang">
<TabItem value="puma" label="Puma">

If using workers in Puma, you can initialize inside an on_worker_boot hook in your puma.rb config file.

```ruby
# puma.rb
on_worker_boot do
  Prefab.fork
  SemanticLogger.reopen # if you are using SemanticLogger
end
```

</TabItem>

<TabItem value="unicorn" label="Unicorn">

If using workers in Unicorn, you can initialize inside an after_fork hook in your unicorn.rb config file:

```ruby
# unicorn.rb
after_fork do |server, worker|
  Prefab.fork
  SemanticLogger.reopen # if you are using SemanticLogger
end
```

</TabItem>
</Tabs>

</details>

## Feature Flags

For boolean flags, you can use the `enabled?` convenience method:

```ruby
if Prefab.enabled?("my-first-feature-flag")
  # ...
else
  # ...
end
```

<details className="alert--info">
<summary>
Feature flags don't have to return just true or false.
</summary>

You can get other data types using `get`:

```ruby
Prefab.get("ff-with-string")
Prefab.get("ff-with-int")
```

</details>

## Context

Feature flags become more powerful when we give the flag evaluation rules more information to work with. We do this by providing [context](/docs/explanations/concepts/context) of the current user (and/or team, request, etc.)

### Global Context

When initializing the client, you can set a global context that will be used for all evaluations.

```ruby
Prefab.init(
  global_context: {
    application: {key: "my.corp.web"},
    cpu: {count: 4},
    clock: {timezone: "UTC"}
  }
)
```

Global context is the least specific context and will be overridden by more specific context passed in at the time of evaluation.

### Thread-local (Request-scoped)

To make the best use of Prefab, we recommend setting [context](/docs/explanations/concepts/context) in an `around_action` in your `ApplicationController`. Setting this context for the life-cycle of the request means the Prefab logger can be aware of your user/etc. for feature flags and [targeted log levels](/docs/explanations/features/targeted-log-levels) and you won't have to explicitly pass context into your `.enabled?` and `.get` calls.

```ruby
# application_controller.rb
class ApplicationController < ActionController::Base
  around_action do |_, block|
    Prefab.with_context(prefab_context, &block)
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
Just-in-time Context
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
result = Prefab.enabled?("my-first-feature-flag", context)

puts "my-first-feature-flag is: #{result} for #{context.inspect}"
```

</details>

## Dynamic Config

Config values are accessed the same way as feature flag values. You can use `enabled?` as a convenience for boolean values, and `get` works for all data types

```ruby
config_key = "my-first-int-config"
puts "#{config_key} is: #{Prefab.get(config_key)}"
```

<details>
<summary>

#### Default Values for Configs

</summary>

Here we ask for the value of a config named `max-jobs-per-second`, and we specify `10` as a default value if no value is available.

```ruby
Prefab.get("max-jobs-per-second", 10) # => returns `10` if no value is available
```

If we don't provide a default and no value is available, a `Prefab::Errors::MissingDefaultError` error will be raised.

```ruby
Prefab.get("max-jobs-per-second") # => raises if no value is available
```

:::note

You can modify this behavior by setting the option `on_no_default` to `Prefab::Options::ON_NO_DEFAULT::RETURN_NIL`

:::

</details>

## Dynamic Log Levels

To use dynamic logging, we recommend [semantic logger]. Add semantic_logger to your Gemfile and then we'll configure our app to use it.

<Tabs groupId="ruby-usage">
<TabItem value="ruby" label="Ruby">

```ruby
# Gemfile
gem "semantic_logger"
```

```ruby
require "semantic_logger"
require "prefab"

Prefab.init

SemanticLogger.sync!
SemanticLogger.default_level = :trace # Prefab will take over the filtering
SemanticLogger.add_appender(
  io: $stdout,
  formatter: :json,
  filter: Prefab.log_filter,
)
```

</TabItem>

<TabItem value="rails" label="Rails">

```ruby
# Gemfile
gem "amazing_print"
gem "rails_semantic_logger"
```

```ruby
# config/application.rb
Prefab.init
```

```ruby
# config/initializers/logging.rb
SemanticLogger.sync!
SemanticLogger.default_level = :trace # Prefab will take over the filtering
SemanticLogger.add_appender(
  io: $stdout,
  formatter: Rails.env.development? ? :color : :json,
  filter: Prefab.log_filter,
)
```

:::caution
Please read the [Puma/Unicorn](ruby#special-considerations-with-forking-servers-like-puma--unicorn-that-use-workers) notes for special considerations with forking servers.
:::

</TabItem>
</Tabs>

Now we are free to adjust our log levels, down to the controller or method level in real-time. Invaluable for debugging! You can set and tweak these on-the-fly in the Prefab web app.

### Targeted Log Levels

You can use [Targeting](/docs/explanations/features/targeted-log-levels) to change your log levels based on the current user/request/device context using our [rules](/docs/explanations/features/rules-and-segmentation) engine.

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

    Prefab.init(options)
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

## Asset Precompilation in Rails

Developers trying to run `rake assets:precompile` or `rails assets:precompile` in CI/CD know the pain of missing environment variables. Prefab can help with this, but you don't want to hardcode your Prefab API key in your Dockerfile. What should you do instead?

We recommend using a [datafile](/docs/explanations/concepts/testing#testing-with-datafiles) for `assets:precompile`. You can generate a datafile for your environment using the Prefab CLI:

```bash
prefab download --environment test
```

This will generate a JSON file (e.g., `prefab.test.108.config.json`) based on your Prefab project’s test environment. You can check into your repo for use in CI/CD and automated testing.

Now you can use the datafile for `assets:precompile`:

```bash
PREFAB_DATAFILE=prefab.test.108.config.json bundle exec rake assets:precompile
```

Of course, you can generate a datafile for any environment you like and use it in the same way.

## Bootstrap & Stub Client-side JavaScript flags and configs

If you're using JavaScript on the client side, you can use the Prefab Ruby client to bootstrap your client-side flags and configs. This helps you avoid loading states while you wait on an HTTP request to Prefab's evaluation endpoint. You can skip the HTTP request altogether.

### With the Frontend SDKs

If you want the power of the [JavaScript SDK](/docs/sdks/javascript) or [React SDK](/docs/sdks/react), you can use the Ruby client to bootstrap the page with the evaluated flags and configs for the current user context. Just put this in the DOM (perhaps in your application layout) before you load your Prefab frontend SDK.

```erb
<%= Prefab.bootstrap_javascript(context) %>
```

Things work as they normally would with the frontend SDKs, you'll just skip the HTTP request.

### Without the Frontend SDKs

If you don't want to use the frontend SDKs, you can get a global `window.prefab` object to call `get` and `isEnabled` on the client side.

```erb
<%= Prefab.generate_javascript_stub(context, callback = nil) %>
```

This will give you feature flags and config values for your current context. You can provide an optional callback to record experiment exposures or other metrics. No HTTP request or SDK needed!

## Testing

### Test Setup

You can use a datafile for consistency, reproducibility, and offline testing. See [Testing with DataFiles](/docs/explanations/concepts/testing#testing-with-datafiles).

If you need to test multiple scenarios that depend on a single config or feature key, you can change the Prefab value using a mock or stub.

### Example Test

Imagine we want to test a `batches` method on our `Job` class. `batches` depends on `job.batch.size` and the value for `job.batch.size` in our default config file is `3`.

We can test how `batches` performs with different values for `job.batch.size` by mocking the return value of `Prefab.get`.

```ruby
class Job < Array
  def batches
    slice_size = Prefab.get('job.batch.size')
    each_slice(slice_size)
  end
end

RSpec.describe Job do
  describe '#batches' do
    it 'returns batches of jobs' do
      jobs = Job.new([1, 2, 3, 4, 5])

      expect(jobs.batches.map(&:size)).to eq([3, 2])

      allow(Prefab).to receive(:get).with('job.batch.size').and_return(2)
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
  allow_telemetry_in_local_mode: false,
  global_context: {}
)

Prefab.init(options)
```

[semantic logger]: https://logger.rocketjob.io/
