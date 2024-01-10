---
title: Elixir
sidebar_position: 20
---

## Getting Started with the Elixir SDK

:::caution
**Note: This library is under active development and not quite ready for production usage**

[Sign up to be notified when this library releases](https://forms.gle/BuAwqqmEDxfEybkN6)
:::

Add `prefab` to your mix dependencies

```elixir
# mix.exs
defp deps do
  [
    ...
    {:prefab, "~> 0.1.0"},
    ...
  ]
end
```

## Configure Options

```elixir
options = Prefab.Options.new(
  api_key: "SDK-your-api-key",
  prefab_api_url: "https://api.prefab.cloud",
  prefab_grpc_url: "grpc.prefab.cloud:443"
)
```

To avoid passing your API key in directly in code, we recommend setting up your
`config/*.exs` files to read that value from ENV

```elixir
# config/*.exs
config :prefab,
  api_key: System.get_env("PREFAB_API_KEY"),
  api_url: System.get_env("PREFAB_API_URL", "https://api.staging-prefab.cloud"),
  grpc_url: System.get_env("PREFAB_GRPC_URL", "grpc.staging-prefab.cloud:443")
```

### Available options

- `api_key` - your prefab.cloud SDK API key
- `prefab_api_url` - the API endpoint your API key has been created for (i.e. `https://api.prefab.cloud`)
- `prefab_grpc_url` - the gRPC endpoint (including port) you wish to connect to (i.e. `grpc.prefab.cloud:443`)
- `namespace` - an optional namespace to define your client's scope when looking up config
- `prefab_datasources` - one of `:all` (default) or `:local_only`, determines whether to fetch data from remote
  sources or use only local data
- `prefab_config_classpath_dir` - the directory from which to load locally defined configuration. This data
  will be overwritten by data pulled from remote sources
- `prefab_config_override_dir` - the directory from which to load local override data. Any data found will be
  loaded overtop of data pulled from remote sources
- `prefab_envs` - one or more environment names from which to load local configuration and overrides.
  See [Local config and overrides](#module-local-config-and-overrides) below for additional information.

## Initialize Client

```elixir
client = Prefab.Client.new(options)
```

Unless your options are configured to run using only local data, the client will attempt to connect to
the various remote data sources and begin syncing data to a local store.

## Basic Usage

### Defaults

Here we ask for the value of a config named max-jobs-per-second, and we specify
`10` as a default value if no value is available.

```elixir
Prefab.Client.get(client, "max-jobs-per-second", default: 10) # => 10
```

If no default is provided, the return value will be `nil`

```elixir
Prefab.Client.get(client, "max-jobs-per-second") # => nil
```

:::note

If you would prefer your application raise an error if no value is found
when no default is provided, you can use `get!`

```elixir
# raises a Prefab.Errors.MissingDefaultError
Prefab.Client.get!(client, "max-jobs-per-second")
```

:::

### Getting Started

Now create a config named `my-first-int-config` in the Prefab UI. Set a default
value to 50 and sync your change to the API.

Add a feature flag named `my-first-feature-flag` in the Prefab UI. Add boolean
variants of `true` and `false`. Set the inactive variant to false, make the flag
active and add a rule of type `ALWAYS_TRUE` with the variant to serve as `true`.
Remember to sync your change to the API.

```elixir
config_key = "my-first-int-config"
IO.puts("#{config_key}: #{Prefab.Client.get(client, config_key)}")

ff_key = "my-first-feature-flag"
IO.puts("#{ff_key}: #{Prefab.Client.enabled?(client, ff_key)}")
```

Run the code above and you should see:

```
my-first-int-config is: 50
my-first-feature-flag is: true
```

Congrats! You're ready to rock!

## Feature Flags

Feature flags become more powerful when we give the flag evaluation [rules](/docs/explanations/features/rules-and-segmentation) more information to work with.

We do this by providing a lookup key and identity attributes.

The lookup key serves two purposes. First, it will be the unique key that helps us
target a specific user using `Lookup Key In` when evaluating a flag.

Second, this key is used to make sure that percent rollout evaluations are
consistently applied.

Attributes come into play when using the `Property Is One Of` and similar rule
criteria.

```elixir
lookup_key = "user-1234"
identity_attributes = [
                        team_id: 432,
                        user_id: 123,
                        subscription_level: 'pro',
                        email: "alice@example.com"
                      ]
result = Prefab.Client.enabled?(
  client,
  "my-first-feature-flag",
  lookup_key: lookup_key,
  attributes: identity_attributes
)

IO.puts("my-first-feature-flag is: #{result} for #{lookup_key}")
```

:::tip

How you choose the `tracking_id` for your user is up to you, but we have some suggestions and we would generally
discourage
`user.id` unless you are positive you don't have anonymous users. See the section on [Tracking IDs](/docs/how-tos/tracking-ids) for our suggestion.

:::

Feature flags don't have to return just true or false. You can get other data types using `get`:

```elixir
Prefab.Client.get(client, "ff-with-string", default_string_value)
Prefab.Client.get(client, "ff-with-int", default_int_value)
```

## Namespaces

Namespaces allow you to share config between many applications while still allowing you to override when necessary.

For instance, let's assume that all our code shares an HTTP library. We can configure the HTTP library to get its retry
count & timeout duration from our config store. We'll set `http.connection.retries` and `http.connection.timeout` in the
default namespace.

All of our apps should initialize their config store in a namespace. For instance our User service can initialize
with:

```elixir
options = Prefab.Options.new(
  namespace: "services.user_service.web"
)
```

Prefab config will find the "closest" matching config when the UserService goes to look for a value of
http.connection.timeout.

If our service namespace is `services.user-service.web` it will match overrides in namespaces `services`
, `services.user_service`
and `services.user_service.web`, but not `services.user_service.cron` or `services.user_service.web.tools`.

Let's imagine that the `UserService` starts to go down because too many requests are timing out to a 3rd party service. We
can quickly reduce the `http.connection.timeout` for our `services.user_service` namespace and solve the issue without
pushing code or restarting.

## Logging

Prefab's Elixir Client comes with a powerful upgrade to the default Elixir `Logger` to provide dynamic log levels.

To use it, use the logging functions included in the `Prefab.Client` public API

```elixir
Prefab.Client.debug(client, message)
Prefab.Client.info(client, message)
Prefab.Client.warning(client, message)
Prefab.Client.error(client, message)
Prefab.Client.critical(client, message)
```

You can now control logging at any level of your stack. For convenience, we'll set these as local defaults in `.prefab.default.config.yaml` ([learn more](/docs/explanations/concepts/defaults)) but you can set and tweak these on-the-fly in the Prefab web app.

```yaml
# .prefab.default.config.yaml
log-level.app_web.controllers.my_controller: info
log-level.app_web.controllers.my_controller.index: warning
log-level.app_web.controllers.my_controller.show: debug
```

```elixir
defmodule AppWeb.MyController do
  ...
  def index(conn) do
    Prefab.Client.warning(conn.prefab_client, "shown")
    Prefab.Client.info(conn.prefab_client, "disabled")
    Prefab.Client.debug(conn.prefab_client, "disabled")
  end

  def show(conn, _) do
    Prefab.Client.warning(conn.prefab_client, "shown")
    Prefab.Client.info(conn.prefab_client, "shown")
    Prefab.Client.debug(conn.prefab_client, "shown")
  end

  def edit(conn, _) do
    Prefab.Client.warning(conn.prefab_client, "shown")
    Prefab.Client.info(conn.prefab_client, "shown")
    Prefab.Client.debug(conn.prefab_client, "disabled")
  end
end
```

### Targeted Log Levels

You can use [Targeting](/docs/explanations/features/targeted-log-levels) to change your log levels based on the current user/request/device context using our [rules](/docs/explanations/features/rules-and-segmentation) engine.

### Log levels

To be as language agnostic as possible, `Prefab` provides a standardized
subset of log levels that can be mapped to language-specific log levels.
The language-agnostic levels are the levels that should be set in the Prefab
UI or in your local overrides. The list below shows the mappings from Prefab
log levels to Elixir log levels

```elixir
Prefab => Elixir
--------------------
debug  => :debug
info   => :info
warn   => :warning
error  => :error
fatal  => :critical
```

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

Prefab will first load the defaults, then merge the remote API values over the top, and finally it will apply the overrides file on
top of those values.

## Debugging

You can control the Prefab client's log level by changing the configuration value of `log-level.prefab`. In the rare
case that you are trying to debug issues that occur before this config file has been read, set env var

```bash
PREFAB_LOG_CLIENT_BOOTSTRAP_LOG_LEVEL = debug
```

By default this level is set to `:warning`

## Testing

Specify `LOCAL_ONLY` and use your [config.yaml file](/docs/explanations/architecture/bootstrapping).

```elixir
options = Prefab.Options.new(data_sources: :local_only)

client = Prefab.Client.new(options)
```
