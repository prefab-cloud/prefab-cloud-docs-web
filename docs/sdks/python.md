---
title: Python
---

## Getting Started with the Python SDK

:::caution
**Note: This library is under active development**

[Sign up to be notified about updates](https://forms.gle/2qsjMFvjGnkTnA9T8)
:::

Add `prefab_cloud_python` to your package dependencies

```python
# pyproject.toml
[tool.poetry.dependencies]
prefab-cloud-python = "^0.5.1"
```

## Initialize Client

If you set `PREFAB_API_KEY` as an environment variable, initializing the client is as easy as

```python
from prefab_cloud_python import Options, Client

prefab = Client(Options()) # reads PREFAB_API_KEY env var
```

<details>
<summary>
Client Options
</summary>

```python
from prefab_cloud_python import Options, Client

options = Options(
    api_key="SDK-your-api-key"
)
prefab = Client(options)
```

To avoid passing your API key directly in code, we recommend setting it in your
environment as `PREFAB_API_KEY`. Once you've done this you do not need to pass
a value for that key to `Options(...)`, as it will look in your ENV for a value
for that key.

#### Definitions of those options

| Name               | Description                                                                                                                                                                                | Default        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| prefab_datasources | Send counts of config/flag evaluation results back to Prefab to view in web app                                                                                                            | ALL            |
| api_key            | Your prefab.cloud SDK API key                                                                                                                                                              | PREFAB_API_KEY |
| prefab_envs        | One or more environment names from which to load local configuration and overrides. See [Local config and overrides](#module-local-config-and-overrides) below for additional information. | []             |

</details>

Unless your options are configured to run using only local data, the client will attempt to connect to
the remote CDN and gRPC data sources and begin syncing data to a local store.

## Basic Usage

### Defaults

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

<details>
<summary>
Handling Undefined Configs
</summary>

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

</details>

### Getting Started

Now create a config named `my-first-int-config` in the Prefab UI. Set a default
value to 50 and sync your change to the API.

Add a feature flag named `my-first-feature-flag` in the Prefab UI. Add boolean
variants of `true` and `false`. Set the inactive variant to false, make the flag
active and add a rule of type `ALWAYS_TRUE` with the variant to serve as `true`.
Remember to sync your change to the API.

```python
config_key = "my-first-int-config"
print(config_key, client.get(config_key))

ff_key = "my-first-feature-flag"
print(config_key, client.enabled(ff_key))
```

Run the code above and you should see:

```
my-first-int-config 50
my-first-feature-flag true
```

Congrats! You're ready to rock!

## Feature Flags

Feature flags become more powerful when we give the flag evaluation [rules](/docs/explanations/features/rules-and-segmentation) more
information to work with.

We do this by providing a [context](/docs/explanations/concepts/context)
for the current user (and/or team, request, etc)

```python
context = {
    "user": {
        "key": 123,
        "subscription_level": "pro",
        "email": "bob@example.com"
    },
    "team": {
        "key": 432,
    },
    "device": {
        "key": "abcdef",
        "mobile": False
    }
}

result = client.enabled("my-first-feature-flag", context=context)
```

Feature flags don't have to return just true or false. You can get other data types using `get`:

```python
client.get("ff-with-string", default="default-string", context=context)
client.get("ff-with-int", default=5)
```

### Global context

To avoid having to pass a context explicitly to every call to `get` or `enabled`, it is possible to set a thread-local
context that will be evaluated as the default argument to `context=` if none is given.

```python
from prefab_cloud_python import Context
context = {
    "user": {
        "key": 123,
        "subscription_level": "pro",
        "email": "bob@example.com"
    },
    "team": {
        "key": 432,
    },
    "device": {
        "key": "abcdef",
        "mobile": False
    }
}

shared_context = Context(context)

Context.set_current(shared_context)

# with this set, the following two client calls are equivalent

result = client.enabled("my-first-feature-flag")
result = client.enabled("my-first-feature-flag", context=context)
```

### Scoped context

It is also possible to scope a context for a particular block of code, without needing to set and unset
the thread-local context

```python
from prefab_cloud_python import Client

context = {
    "user": {
        "key": 123,
        "subscription_level": "pro",
        "email": "bob@example.com"
    },
    "team": {
        "key": 432,
    },
    "device": {
        "key": "abcdef",
        "mobile": False
    }
}

with Client.scoped_context(context):
    result1 = client.enabled("my-first-feature-flag")

result2 = client.enabled("my-first-feature-flag", context=context)

result1 == result2 #=> True
```

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

You can now control logging at any level of your stack.

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

You can use [Targeting](/docs/explanations/features/targeted-log-levels) to change your log levels based on the current user/request/device [context](/docs/explanations/concepts/context) using our [rules](/docs/explanations/features/rules-and-segmentation) engine.

### Log levels

To be as language agnostic as possible, `Prefab` provides a standardized
subset of log levels that can be mapped to language-specific log levels.
The language-agnostic levels are the levels that should be set in the Prefab
UI or in your local overrides. The list below shows the mappings from Prefab
log levels to Python log levels

```python
Prefab => Python
--------------------
debug  => :debug
info   => :info
warn   => :warn
error  => :error
fatal  => :critical
```

## Debugging

You can control the Prefab client's log level by changing the configuration value of `log-level.prefab`. In the rare
case that you are trying to debug issues that occur before this config file has been read, set env var

```bash
PREFAB_LOG_CLIENT_BOOTSTRAP_LOG_LEVEL = debug
```

By default this level is set to `:warn`

## Testing

Specify `LOCAL_ONLY` and use your [config.yaml file](/docs/explanations/architecture/bootstrapping).

```python
options = Options(data_sources="LOCAL_ONLY")
client = Client(options)
```

## Reference

### Available `Option` parameters

- `api_key` - your prefab.cloud SDK API key
- `prefab_api_url` - the API endpoint your API key has been created for (i.e. `https://api.prefab.cloud`)
- `prefab_datasources` - one of `"ALL"` (default) or `"LOCAL_ONLY"`, determines whether to fetch data from remote
  sources or use only local data
- `prefab_config_classpath_dir` - the directory from which to load locally defined configuration. This data
  will be overwritten by data pulled from remote sources. This value defaults to the root of your project (i.e. `"."`)
- `prefab_config_override_dir` - the directory from which to load local override data. Any data found will be
  loaded overtop of data pulled from remote sources. This value defaults to your `$HOME` directory.
- `prefab_envs` - one or more environment names from which to load local configuration and overrides.
  See [Local config and overrides](#module-local-config-and-overrides) below for additional information.
- `on_no_default` - one of `"RAISE"` (default) or `"RETURN_NONE"`. This determines how the client behaves when a request for
  a config cannot find a value, and no default is supplied. These settings will, respectively, raise a `MissingDefaultException`,
  or return `None`.
- `on_connection_failure` - one of `"RETURN"` (default) or `"RAISE"`. This determines what should happen if the connection to
  a remote datasource times out. These settings will, respectively, return whatever is in the local cache from the latest sync
  from the remote source, or else raise an `InitializationTimeoutException`.
- `collect_sync_interval` - how often to send telemetry to Prefab (seconds, defaults to 30)
- `collect_evaluation_summaries` - send aggregate data about config and feaure flag evaluations, results (defaults to True) **Evaluation Summary telemetry Implemented in v0.10+**
- `collect_logs` - send aggregate logger volume data to Prefab (defaults to True)
- `context_upload_mode` - send context information to prefab. Values (from the `Options.ContextUploadMode` enum) are `NONE` (don't send any context data), `SHAPE_ONLY` to only send the schema of the contexts to prefab (field name, data types), `PERIODIC_EXAMPLE` to send the data types AND the actual contexts being used to Prefab **Context telemetry Implemented in v0.10+**
