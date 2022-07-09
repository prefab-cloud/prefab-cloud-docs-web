---
title: Ruby
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

## Getting Started With the Ruby SDK

```bash
 gem install prefab-cloud-ruby
```

## Initialize Client

```ruby
$prefab = Prefab::Client.new # reads PREFAB_API_KEY env var
```

### Client Initialization Options

```ruby
options = Prefab::Options.new(
  api_key: ENV['PREFAB_API_KEY'],
  namespace: "",
  defaults_env: "", # Set to something like Rails.env to use env specific local overrides
  logdev: $stdout,
  log_formatter: DEFAULT_LOG_FORMATTER,
  stats: NoopStats.new, # receives increment("prefab.limitcheck", {:tags=>["policy_group:page_view", "pass:true"]})
  shared_cache: NoopCache.new, # Something that quacks like Rails.cache ideally memcached
  on_no_default: ON_NO_DEFAULT::RAISE, # options :raise, :warn_and_return_nil,
  initialization_timeout_sec: 10, # how long to wait before on_init_failure
  on_init_failure: ON_INITIALIZATION_FAILURE::RAISE, #options :unlock_and_continue, :lock_and_keep_trying, :raise
  # new_config_callback: nil, #callback method
  # live_override_url: nil,
  prefab_datasources: ENV['PREFAB_DATASOURCES'] == "LOCAL_ONLY" ? DATASOURCES::LOCAL_ONLY : DATASOURCES::ALL,
  prefab_config_override_dir: Dir.home,
  prefab_config_classpath_dir: ".",
  prefab_api_url: ENV["PREFAB_API_URL"] || 'https://api.prefab.cloud',
  prefab_grpc_url: ENV["PREFAB_GRPC_URL"] || 'grpc.prefab.cloud:443',
)
$prefab = Prefab::Client.new(options)
```

### Rails Applications

If your application is using Rails put your initializer in `config/initializers/prefab.rb`. For many popular forking
webserver, read on.

If you are going to use dynamic configuration in files like `staging.rb` that are loaded before initializers, you can initialize Prefab in `application.rb`
```ruby
#application.rb
module MyApplication
  class Application < Rails::Application
    #...
    $prefab = Prefab::Client.new()
  end 
end
```



### Special Considerations with Unicorn & Puma when using workers

Many ruby web servers fork. In order to work properly we should have a Prefab Client running independently in each fork. You do not need to do this if you are only using threads and not workers.

If using workers in Unicorn, you can initialize inside an after_fork hook in your unicorn.rb config file:

```ruby
after_fork do |server, worker|
  $prefab = Prefab::Client.new
end
```

If using workers in Puma, you can initialize inside an on_worker_boot hook in your puma.rb config file:

```ruby
on_worker_boot do
  $prefab = Prefab::Client.new
end
```

## Basic Usage

### Defaults

It is a best practice to specify a default value for all configuration. This reduces the likelihood of exceptions due to
nil values. Prefab encourages this practice by reading a shared defaults file and raising an error if you try to
reference a value that is unset.
:::note

You can modify this behavior with the config option `on_no_default` or by
using `Prefab::Client.config_client.get_int_or_nil('key')`

:::

Create a file `.prefab.config.defaults.yaml`
Add the following:

```yaml
#.prefab.config.defaults.yaml
log_level.prefab: info
my-first-int-config: 30
my-first-ff: false
```

### Getting Started

```ruby
config_key = "my-first-int-config"
puts "#{config_key} is: #{$prefab.get_int(config_key)}"

flag_name = "my-first-ff"
puts "#{flag_name} is: #{$prefab.feature_is_on? flag_name}"
```

Run these and you should see the following:

```bash
my-first-int-config is: 30
my-first-ff is: false
```

Now create a config named `my-first-int-config` in the Prefab UI. Set a default value to 50 and sync your change to the
API.

Add a feature flag named `my-first-ff` in the Prefab UI. Add boolean variants of `true` and `false`
Set the inactive variant to `false`, make the flag active and add a rule of type `ALWAYS_TRUE` with the variant to serve
as `true`
Remember to sync you change to the API.

Run your command again and you should see:

```bash
my-first-int-config is: 50
my-first-ff is: true
```

Congrats! You're ready to rock!

## Feature Flags

Feature flags become more powerful when we give the flag evaluation rules more information to work with.

We do this by passing the feature flag client a `Prefab::Identity`.

```ruby
identity = Prefab::Identity.new(tracking_id,
                                { #attributes
                                  team_id: 432,
                                  user_id: 123,
                                  subscription_level: 'pro'
                                },
                                { #private_attributes
                                  email: "alice@example.com",
                                  sensitive_info: "sensitive"
                                }
)
```

The lookup key serves two purposes. First, it will be the unique key that helps us target a specific user
using `Lookup Key In` when evaluating a flag.

Second, this key is used to make sure that percent rollout evaluations are consistently applied.

Attributes come into play when using the `Property Is One Of` and similar rule criteria. Private attributes can be used
in just the same way as attributes, but they will never be sent to the Prefab API.

```ruby
result = $prefab.feature_is_on? "my-first-ff", identity

puts "my-first-ff is: #{result} for #{identity}"
```

:::tip

How you choose the `tracking_id` for your user is up to you, but we have some suggestions and we would generally
discourage
`user.id` unless you are positive you don't have anonymous users. See the section on Tracking IDs for our suggestion.

:::

Feature flags don't have to return just true or false. If you have a string variants of feature flags, use:

```ruby
$prefab.get_string("ff-with-string")
$prefab.get_int("ff-with-int")
$prefab.get_double("ff-with-double")
```

## Namespaces

Namespaces allow you to share config amongst many applications while still allowing you to override when necessary.

For instance, let's assume that all our code shares an HTTP library. We can configure the HTTP library to get its retry
count & timeout duration from our config store. We'll set `http.connection.retries` and `http.connection.timeout` in the
default namespace.

All of our apps should initialize their config store in a namespace. For instance our User MicroService can initialize
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

Let's imagine that the UserService starts to go down because too many requests are timing out to a 3rd party service. We
can quickly reduce the `http.connection.timeout` for our `services.user-service` namespace and solve the issue without
pushing code or restarting.

## Logging

Prefab's Ruby Client comes with a powerful upgrade to you Rails logging stack.

To use it, set your Rails logger to `Prefab::Client.log`

```ruby
#config/initializers/prefab.rb
options = Prefab::Options.new(
  logdev: $stdout
)

$prefab = Prefab::Client.new(options)
Rails.logger = $prefab.log
```

You can now control logging at any level of your stack. To test it out, edit your `.prefab.config.defaults.yaml`

```yaml
#.prefab.config.defaults.yaml
log_level.app.controllers.my_controller: info
log_level.app.controllers.my_controller.index: warn
log_level.app.controllers.my_controller.show: debug
```

```ruby

class MyController < ApplicationController
  def index
    Rails.logger.warn "shown"
    Rails.logger.info "disabled"
    Rails.logger.debug "disabled"
  end

  def show
    Rails.logger.warn "shown"
    Rails.logger.info "shown"
    Rails.logger.debug "shown"
  end

  def edit
    Rails.logger.warn "shown"
    Rails.logger.info "showm"
    Rails.logger.debug "disabled"
  end
end
```

## Local Overrides

It can be very useful to modify your defaults locally without changing the defaults file or values in the API. To do
this, add a file in your home directory or classpath called `.prefab.overrides.config.yaml`

```yaml
#.prefab.config.defaults.yaml
mycorp.auth.api.url: "auth.staging.mycorp.com"
```

```yaml
#~.prefab.overrides.config.yaml
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
major outtage of the Prefab APIs.

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
```

This approach works fine, but each evaluation of `rand()` will get you a different result. Sometimes this is what you
want, but if you'd like the rollout to keep server, requests, users in the new pipeline you may want to use a feature
flag.

```ruby
@feature_flags.feature_is_on? "new-feature", any_consistent_id
```

## Experimentation

Much like feature flags are built on configuration, experimentation is built upon features flags. In fact, there are
only two real difference between a feature flag and an experiment.

1. With an experiment, we need to record the fact that we exposed a user
2. We will eventually analyze the results, looking at user behavior and segmenting by how the user was exposed.

```ruby
  variant = $prefab.experiments.get_string_variant("my-experiment", @tracking_id)
```

This will record an exposure for `@tracking_id` and store it in the Prefab.Cloud. Prefab.Cloud has a singer tap that
Multano or other tools can use to bring the raw exposure data into your data warehouse.

There are instances were you may want to know what variant a user is in, but not necessarily expose them. In these
instances you can just use the feature flag client.

```ruby
  variant = $prefab.features.get_string("my-experiment", @tracking_id)
````

## Debugging

You can control the Prefab client's log level by changing the configuration value of `log_level.prefab`. In the rare
case that you are trying to debug issues that occur before this config file has been read, set env var

```bash
PREFAB_LOG_CLIENT_BOOTSTRAP_LOG_LEVEL = debug
```