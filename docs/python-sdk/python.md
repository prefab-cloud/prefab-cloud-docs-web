---
title: Python
sidebar_position: 1
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

## Getting Started with the Python SDK

Add `prefab_cloud_python` to your package dependencies

```python
# pyproject.toml

...

[tool.poetry.dependencies]
prefab_cloud_python = "0.1.0"
```

## Configure Options

```python
from prefab_cloud_python import Options

options = Options(
    api_key="SDK-your-api-key",
    prefab_api_url="https://api.prefab.cloud",
    prefab_grpc_url="grpc.prefab.cloud:443"
)
```

To avoid passing your API key directly in code, we recommend setting it in your
environment as `PREFAB_API_KEY`. Once you've done this you do not need to pass
a value for that key to `Options(...)`, as it will look in your ENV for a value
for that key.

### Available `Option` parameters

* `api_key` - your prefab.cloud SDK API key
* `prefab_api_url` - the API endpoint your API key has been created for (i.e. `https://api.prefab.cloud`)
* `prefab_grpc_url` - the gRPC endpoint (including port) you wish to connect to (i.e. `grpc.prefab.cloud:443`)
* `namespace` - an optional namespace to define your client's scope when looking up config
* `prefab_datasources` - one of `"ALL"` (default) or `"LOCAL_ONLY"`, determines whether to fetch data from remote
    sources or use only local data
* `prefab_config_classpath_dir` - the directory from which to load locally defined configuration. This data
    will be overwritten by data pulled from remote sources. This value defaults to the root of your project (i.e. `"."`)
* `prefab_config_override_dir` - the directory from which to load local override data. Any data found will be
    loaded overtop of data pulled from remote sources. This value defaults to your `$HOME` directory.
* `prefab_envs` - one or more environment names from which to load local configuration and overrides.
    See [Local config and overrides](#module-local-config-and-overrides) below for additional information.
* `on_no_default` - one of `"RAISE"` (default) or `"RETURN_NONE"`. This determines how the client behaves when a request for
    a config cannot find a value, and no default is supplied. These settings will, respectively, raise a `MissingDefaultException`,
    or return `None`.
* `on_connection_failure` - one of `"RETURN"` (default) or `"RAISE"`. This determines what should happen if the connection to
    a remote datasource times out. These settings will, respectively, return whatever is in the local cache from the latest sync
    from the remote source, or else raise an `InitializationTimeoutException`.

## Start the Client

```python
from prefab_cloud_python import Client, Options

options = Options(...)
client = Client(options)
```

Unless your options are configured to run using only local data, the client will attempt to connect to
the remote CDN and gRPC data sources and begin syncing data to a local store.

## Basic Usage

### Defaults

It is a best practice to specify a default value for all configuration. This
reduces the likelihood of exceptions due to `None` values.

Here we ask for the value of a config named `max-jobs-per-second`, and we specify
`10` as a default value if no value is available.

```python
client.get("max-jobs-per-second", default=10) # => 10
```

If no default is provided, the default behavior is to raise a `MissingDefaultException`.

```python
# raises a `MissingDefaultException`
client.get("max-jobs-per-second")
```

:::note

If you would prefer your application return `None` instead of raising an error,
you can set `on_no_default="RETURN_NONE"` when creating your Options object.


```python
options = Options(
    ...
    on_no_default="RETURN_NONE"
)
client = Client(options)
client.get("max-jobs-per-second") # => None
```

:::

You can specify defaults for your application by creating a file
`.prefab.default.config.yaml`

Add the following:

```yaml
# .prefab.default.config.yaml
log-level.prefab: info
my-first-int-config: 30
my-first-feature-flag: false
```

[Learn more about defaults](/docs/explanations/defaults).

### Getting Started

```python
config_key = "my-first-int-config"
print(config_key, client.get(config_key))

ff_key = "my-first-feature-flag"
print(config_key, client.enabled(ff_key))
```

Should output the following:

```
my-first-int-config 30
my-first-feature-flag false
```

Now create a config named `my-first-int-config` in the Prefab UI. Set a default
value to 50 and sync your change to the API.

Add a feature flag named `my-first-feature-flag` in the Prefab UI. Add boolean
variants of `true` and `false`. Set the inactive variant to false, make the flag
active and add a rule of type `ALWAYS_TRUE` with the variant to serve as `true`.
Remember to sync your change to the API.

Run the code above again and you should see:

```
my-first-int-config 50
my-first-feature-flag true
```

Congrats! You're ready to rock!

## Feature Flags

Feature flags become more powerful when we give the flag evaluation [rules](/docs/explanations/rules-and-segmentation) more
information to work with.

We do this by providing a lookup key and identity attributes.

The lookup key serves two purposes. First, it will be the unique key that helps us
target a specific user using `Lookup Key In` when evaluating a flag.

Second, this key is used to make sure that percent rollout evaluations are
consistently applied.

Attributes come into play when using the `Property Is One Of` and similar rule
criteria.

```python
lookup_key = "user-1234"
identity_attributes = {
    "team_id": 432,
    "user_id": 123,
    "subscription_level": 'pro',
    "email": "alice@example.com"
}

result = client.enabled("my-first-feature-flag", lookup_key=lookup_key, attributes=identity_attributes)
print("my-first-feature-flag is", result, "for", lookup_key)
```

:::tip

How you choose the `tracking_id` for your user is up to you, but we have some suggestions and we would generally
discourage
`user.id` unless you are positive you don't have anonymous users. See the section on [Tracking IDs](../how-tos/tracking-ids) for our suggestion.

:::

Feature flags don't have to return just true or false. You can get other data types using `get`:

```python
client.get("ff-with-string", default="default-string")
client.get("ff-with-int", default=5)
```

## Namespaces

Namespaces allow you to share config between many applications while still allowing you to override when necessary.

For instance, let's assume that all our code shares an HTTP library. We can configure the HTTP library to get its retry
count & timeout duration from our config store. We'll set `http.connection.retries` and `http.connection.timeout` in the
default namespace.

All of our apps should initialize their config store in a namespace. For instance our User service can initialize
with:

```python
options = Options(
  namespace="services.user_service.web"
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

Prefab's Python Client comes with a powerful upgrade to the default Python `logging` by building on top of [`structlog`](https://www.structlog.org/en/stable/) to provide dynamic log levels.

To use it, use the logging functions included in the `Client` public API

```python
client.logger().debug(message)
client.logger().info(message)
client.logger().warn(message)
client.logger().error(message)
client.logger().critical(message)
```

You can now control logging at any level of your stack. For convenience, we'll set these as local defaults in `.prefab.default.config.yaml` ([learn more](/docs/explanations/defaults)) but you can set and tweak these on-the-fly in the Prefab web app.


```yaml
# .prefab.default.config.yaml
log-level.my_app.my_class: info
log-level.my_app.my_class.warn: warn
log-level.my_app.my_class.debug: debug
```

```python
# my_app/my_class.py
class MyClass:
    def warn(self, client):
        client.logger().warn("shown")
        client.logger().info("never logs")
        client.logger().debug("never logs")

    def debug(self, client):
        client.logger().warn("shown")
        client.logger().info("shown")
        client.logger().debug("shown")

    def default(self, client):
        client.logger().warn("shown")
        client.logger().info("shown")
        client.logger().debug("never logs")
```

### Targeted Log Levels

You can use [Targeting](../explanations/targeted-log-levels) to change your log levels based on the current user/request/device [context](../explanations/context) using our [rules](/docs/explanations/rules-and-segmentation) engine.

### Log levels

To be as language agnostic as possible, `Prefab` provides a standardized
subset of log levels that can be mapped to language-specific log levels.
The language-agnostic levels are the levels that should be set in the Prefab
UI or in your local overrides. The list below shows the mappings from Prefab
log levels to Elixir log levels

```python
Prefab => Python
--------------------
debug  => :debug
info   => :info
warn   => :warn
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

In the event that one or all of these services become unavailable, the Python SDK stores a local copy of all data pulled
from the remote endpoints, so it can continue to serve the last available live data, but would not be able to fetch or
push new data until the APIs are restored.

## Using Prefab For Rollouts

So you've built a new pipeline and are hoping to slowly dial up how much traffic uses it. You've got two great ways to
do that with Prefab.

One approach is to simply use dynamic config. We can use a floating point number to specify the percent of traffic we
want to rollout to and then evaluate that against a random number to determine whether to run the new code.

```python
import random

if random.random() < client.get("percent-to-rollout"):
    do_new_pipeline
else:
    run_old_pipeline
```

This approach works fine, but each evaluation of `random.random()` will get you a different result. Sometimes this is what you
want, but if you'd like the rollout to keep server, requests, users in the new pipeline you may want to use a feature
flag.

```python
client.enabled("new-feature", lookup_key=any_consistent_id)
```

## Debugging

You can control the Prefab client's log level by changing the configuration value of `log-level.prefab`. In the rare
case that you are trying to debug issues that occur before this config file has been read, set env var

```bash
PREFAB_LOG_CLIENT_BOOTSTRAP_LOG_LEVEL = debug
```

By default this level is set to `:warn`

## Testing

Specify `LOCAL_ONLY` and use your [config.yaml file](/docs/explanations/bootstrapping).

```python
options = Options(data_sources="LOCAL_ONLY")
client = Client(options)
```
