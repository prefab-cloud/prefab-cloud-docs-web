---
title: Ruby
sidebar_position: 1
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

## Getting Started With the Ruby SDK

```bash
 gem install prefab-cloud-ruby
```

## Initialize Client

If you set `PREFAB_API_KEY` as an environment variable, initializing the client is as easy as

```ruby
$prefab = Prefab::Client.new # reads PREFAB_API_KEY env var
```

### Client Initialization Options

For more control, you can initialize your client with options. Here are the defaults with explanations.

```ruby
options = Prefab::Options.new(
  api_key: ENV['PREFAB_API_KEY'],
  namespace: "",
  logdev: $stdout,
  # Optional. `log_prefix` can prefix your log lines. `app.controllers.my_controller.index` would be `com.yourapp.app.controllers.my_controller.index`
  log_prefix: "com.yourapp",
  log_formatter: Prefab::Options::DEFAULT_LOG_FORMATTER,
  # one of
  # - Prefab::Options::ON_NO_DEFAULT::RAISE -- raise an exception when no value or default is available
  # - Prefab::Options::ON_NO_DEFAULT::RETURN_NIL -- return nil if no value or default is available
  on_no_default: Prefab::Options::ON_NO_DEFAULT::RAISE,
  # how long to wait before on_init_failure
  initialization_timeout_sec: 10,
  # one of
  # - Prefab::Options::ON_INITIALIZATION_FAILURE::RAISE -- raise an error if no connection can be made
  # - Prefab::Options::ON_INITIALIZATION_FAILURE::RETURN -- continue without error using failover config
  on_init_failure: Prefab::Options::ON_INITIALIZATION_FAILURE::RAISE,
  prefab_datasources: ENV['PREFAB_DATASOURCES'] == "LOCAL_ONLY" ? Prefab::Options::DATASOURCES::LOCAL_ONLY : Prefab::Options::DATASOURCES::ALL,
  prefab_config_override_dir: Dir.home,
  prefab_config_classpath_dir: ".",
  prefab_api_url: ENV["PREFAB_API_URL"] || 'https://api.prefab.cloud',
  prefab_grpc_url: ENV["PREFAB_GRPC_URL"] || 'grpc.prefab.cloud:443',
  # You can specify an array of one ore more items here OR set PREFAB_ENVS to
  # be split on commas into an array
  prefab_envs: ENV['PREFAB_ENVS'].nil? ? [] : ENV['PREFAB_ENVS'].split(','),
)
$prefab = Prefab::Client.new(options)
```

### Rails Applications

Initializing Prefab in your `application.rb` will allow you to reference dynamic configuration in your environment (e.g. `staging.rb`) and initializers. This is useful for setting environment-specific config like your redis connection URL.

```ruby
#application.rb
module MyApplication
  class Application < Rails::Application
    #...

    $prefab = Prefab::Client.new
    $prefab.set_rails_loggers
  end
end
```


#### Special Considerations with Forking servers like Puma & Unicorn that use workers

Many ruby web servers fork. In order to work properly we should have a Prefab Client running independently in each fork. You do not need to do this if you are only using threads and not workers. 
We also need to set the reset the logger for ActionView and friends because those get set pre-fork.

<Tabs groupId="lang">
<TabItem value="puma" label="Puma">
If using workers in Puma, you can initialize inside an on_worker_boot hook in your puma.rb config file.

```ruby
# puma.rb
on_worker_boot do
  $prefab = Prefab::Client.new
  $prefab.set_rails_loggers
end
```
</TabItem>

<TabItem value="unicorn" label="Unicorn">
If using workers in Unicorn, you can initialize inside an after_fork hook in your unicorn.rb config file:

```ruby
# unicorn.rb
after_fork do |server, worker|
  $prefab = Prefab::Client.new
  $prefab.set_rails_loggers
end
```
</TabItem>
</Tabs>

## Basic Usage

### Defaults

It is a best practice to specify a default value for all configuration. This reduces the likelihood of exceptions due to
nil values. Prefab encourages this practice by raising an error if you try to reference a value that is unset.

Here we ask for the value of a config named `max-jobs-per-second`, and we specify `10` as a default value if no value is available.

```ruby
$prefab.get("max-jobs-per-second", 10) # => returns `10` if no value is available
```

If we don't provide a default and no value is available, a `Prefab::Errors::MissingDefaultError` error will be raised.

```ruby
$prefab.get("max-jobs-per-second") # => raises if no value is available
```

:::note

You can modify this behavior by setting the config option `on_no_default` to `Prefab::Options::ON_NO_DEFAULT::RETURN_NIL`

:::

You can specify defaults for your application by creating a file `.prefab.default.config.yaml`

Add the following:

```yaml
# .prefab.default.config.yaml
log-level.cloud.prefab: info
my-first-int-config: 30
my-first-feature-flag: false
```

[Learn more about defaults](/docs/explanations/defaults).

### Getting Started

```ruby
config_key = "my-first-int-config"
puts "#{config_key} is: #{$prefab.get(config_key)}"

flag_name = "my-first-feature-flag"
puts "#{flag_name} is: #{$prefab.enabled? flag_name}"
```

Run these and you should see the following:

```bash
my-first-int-config is: 30
my-first-feature-flag is: false
```

Now create a config named `my-first-int-config` in the Prefab UI. Set a default value to 50 and sync your change to the
API.

Add a feature flag named `my-first-feature-flag` in the Prefab UI. Add boolean variants of `true` and `false`.
Set the inactive variant to `false`, make the flag active and add a rule of type `ALWAYS_TRUE` with the variant to serve
as `true`.
Remember to sync your change to the API.

Run your command again and you should see:

```bash
my-first-int-config is: 50
my-first-feature-flag is: true
```

Congrats! You're ready to rock!

## Feature Flags

Feature flags become more powerful when we give the flag evaluation rules more information to work with.

We do this by providing a lookup key and identity attributes.

The lookup key serves two purposes. First, it will be the unique key that helps us target a specific user
using `Lookup Key In` when evaluating a flag.

Second, this key is used to make sure that percent rollout evaluations are consistently applied.

Attributes come into play when using the `Property Is One Of` and similar rule criteria.

```ruby
lookup_key = "user-123"
identity_attributes = {
  team_id: 432,
  user_id: 123,
  subscription_level: 'pro',
  email: "alice@example.com"
}
result = $prefab.enabled? "my-first-feature-flag", lookup_key, identity_attributes

puts "my-first-feature-flag is: #{result} for #{lookup_key}"
```

:::tip

How you choose the `tracking_id` for your user is up to you, but we have some suggestions and we would generally
discourage
`user.id` unless you are positive you don't have anonymous users. See the section on [Tracking IDs](tracking-ids) for our suggestion.

:::

Feature flags don't have to return just true or false. You can get other data types using `get`:

```ruby
$prefab.get("ff-with-string", default_string_value)
$prefab.get("ff-with-int", default_int_value)
```

## Namespaces

Namespaces allow you to share config between many applications while still allowing you to override when necessary.

For instance, let's assume that all our code shares an HTTP library. We can configure the HTTP library to get its retry
count & timeout duration from our config store. We'll set `http.connection.retries` and `http.connection.timeout` in the
default namespace.

All of our apps should initialize their config store in a namespace. For instance our User service can initialize
with:

```ruby
options = Prefab::Options.new(
  namespace: "services.user-service.web"
)
```

Prefab config will find the "closest" matching config when the UserService goes to look for a value of
http.connection.timeout.

If our service namespace is `services.user-service.web` it will match overrides in namespaces `services`
, `services.user-service`
and `services.user-service.web`, but not `services.user-service.cron` or `services.user-service.web.tools`.

Let's imagine that the `UserService` starts to go down because too many requests are timing out to a 3rd party service. We
can quickly reduce the `http.connection.timeout` for our `services.user-service` namespace and solve the issue without
pushing code or restarting.

## Local Overrides

It can be very useful to modify your defaults locally without changing the defaults file or values in the API. To do
this, add a file in your home directory or classpath called `.prefab.default.config.yaml`

```yaml
# .prefab.default.config.yaml
mycorp.auth.api.url: "auth.staging.mycorp.com"
```

```yaml
#~/.prefab.default.config.yaml
mycorp.auth.api.url: "localhost:9090"
```

Prefab will first load the defaults. Then merge the API values over the top. Finally it will apply the overrides file on
top.

## Emergencies

Prefab is designed to be extremely resilient. The client will try to pull live values from:

1. A Fastly CDN backed by the API
2. A Cloudflare CDN backed by an S3 bucket
3. The Prefab API
4. Prefab Streaming APIs

This strategy ensures the utmost reliability for your clients being able to pull live values, even in the case of a
major outage of the Prefab APIs.

But wait, there's more.

In the terrible occurrence that the Prefab APIs are down for an extended period of time, your services should be able to
bootstrap themselves and load from the CDN, but you would be unable to modify configuration.

To fix this, Prefab clients will also read from the `live_override_url`. This should be a URL that you are in fully in
control of. Prefab clients, will periodically poll this endpoint and if any values are found there it will prefer them
over all other values. The format of this file is the same as a default config value file.

## Using Prefab For Rollouts

So you've built a new pipeline and are hoping to slowly dial up how much traffic uses it. You've got two great ways to
do that with Prefab.

One approach is to simply use dynamic config. We can use a floating point number to specify the percent of traffic we
want to rollout to and then evaluate that against a random number to determine whether to run the new code.

```ruby
if rand() < @config.get_float("percent-to-rollout")
  do_new_pipeline
end
```

This approach works fine, but each evaluation of `rand()` will get you a different result. Sometimes this is what you
want, but if you'd like the rollout to be sticky and keep server, requests, users in the new pipeline you may want to use a feature flag.

```ruby
$prefab.enabled? "new-feature", any_consistent_id
```

## Debugging

You can control the Prefab client's log level by changing the configuration value of `log-level.cloud.prefab`. In the rare
case that you are trying to debug issues that occur before this config file has been read, set env var

```bash
PREFAB_LOG_CLIENT_BOOTSTRAP_LOG_LEVEL = debug
```

## Testing

Specify `LOCAL_ONLY` and use your [config.yaml file](/docs/explanations/bootstrapping).

```ruby
options = Prefab::Options.new(data_sources: LOCAL_ONLY)

$prefab = Prefab::Client.initialize(options)
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

[Meltano]: https://meltano.com/
[Singer]: https://www.singer.io/
