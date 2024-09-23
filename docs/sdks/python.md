---
title: Python
---

## Getting Started with the Python SDK

Add `prefab_cloud_python` to your package dependencies

```python
# pyproject.toml
[tool.poetry.dependencies]
prefab-cloud-python = "^0.10.3"
```

## Initialize Client

If you set `PREFAB_API_KEY` as an environment variable, initializing the client is as easy as

```python
import prefab_cloud_python

prefab_cloud_python.set_options(prefab_cloud_python.Options()) # reads PREFAB_API_KEY env var

```
Unless your options are configured to run using only local data, the client will attempt to connect to
the remote CDN.

<details className="alert--warning">
<summary>

#### Special Considerations with Forking servers like Gunicorn that use workers

</summary>

Webservers like gunicorn can be configured to either use threads or fork child process workers. When forking, the prefab client must be re-created in order to continue to fetch updated configuration.

```python

# gunicorn configuration hook
def post_worker_init(worker):
    prefab_cloud_python.reset_instance()
```

You may also do something like using uWSGI decorators

```python

@uwsgidecorators.postfork
def post_fork():
    prefab_cloud_python.reset_instance()
```


This clears the package-singleton client and on the next `prefab_cloud_python.get_client()` it will be recreated with the options previously set with `set_options()`


</details>


## Basic Usage

### Defaults

Here we ask for the value of a config named `max-jobs-per-second`, and we specify
`10` as a default value if no value is available.

```python
prefab_cloud_python.get_client().get("max-jobs-per-second", default=10) # => 10
```

If no default is provided, the default behavior is to raise a `MissingDefaultException`.

```python
# raises a `MissingDefaultException`
prefab_cloud_python.get_client().get("max-jobs-per-second")
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
prefab_cloud_python.set_options(options)
prefab_cloud_python.get_client().get("max-jobs-per-second") # => None
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
print(config_key, prefab_cloud_python.get_client().get(config_key))

ff_key = "my-first-feature-flag"
print(config_key, prefab_cloud_python.get_client().enabled(ff_key))
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

result = prefab_cloud_python.get_client().enabled("my-first-feature-flag", context=context)
```

Feature flags don't have to return just true or false. You can get other data types using `get`:

```python
prefab_cloud_python.get_client().get("ff-with-string", default="default-string", context=context)
prefab_cloud_python.get_client().get("ff-with-int", default=5)
```

### Thread-local context

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

result = prefab_cloud_python.get_client().enabled("my-first-feature-flag")
result = prefab_cloud_python.get_client().enabled("my-first-feature-flag", context=context)
```

### Scoped context

It is also possible to scope a context for a particular block of code, without needing to set and unset
the thread-local context

```python
import prefab_cloud_python
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
    result1 = prefab_cloud_python.get_client().enabled("my-first-feature-flag")

result2 = prefab_cloud_python.get_client().enabled("my-first-feature-flag", context=context)

result1 == result2 #=> True
```

## Logging

Prefab's Python Client upgrades provides a logging filter that can be plugged into `logging` or `structlogger` to provide dynamic log levels. The client assumes your loggers are initialized with the name of each module, ie `logger = logging.get_logger(__name__)`

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

### Configuration for Standard Logging

In standard logging there are two steps
1) Create an instance of `LoggerFilter` and configure it as a filter on the logging streamhandler
2) Set the root logger's loglevel to `logging.DEBUG` so that the `LoggerFilter` will see all the log records 


```python
import logging

 # basic logging setup - yours may vary

root_logger = logging.getLogger()
root_logger.setLevel(logging.DEBUG)
ch = logging.StreamHandler(sys.stdout)
ch.setFormatter(
    logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
)
root_logger.addHandler(ch)

# key step
ch.addFilter(LoggerFilter())
```

Now your normal logging use cases eg

```python
logger = logging.getLogger(__name__)
logger.debug("something")
```
can be controlled dynamically from Prefab

See [example](https://github.com/prefab-cloud/prefab-cloud-python/blob/main/examples/standard-logging/standard-logger-example.py)

Note the LoggerFilter has an overrideable `logger_name` method so you can subclass and determine your own logger name as needed


### Configuration for Structlogger

The configuration below is for a structlogger setup backed by the standard logger. 

Using the `structlog.stdlib.LoggerFactory()` ensures the logger instances have names. The initial two processors ensure the log name and level are available on the event dictionary.


```python
import structlog

 structlog.configure(
        processors=[
            structlog.stdlib.add_logger_name,
            structlog.processors.add_log_level,
            LoggerProcessor(),
            structlog.processors.StackInfoRenderer(),
            structlog.dev.set_exc_info,
            structlog.processors.TimeStamper(fmt="%Y-%m-%d %H:%M:%S", utc=False),
            structlog.dev.ConsoleRenderer(colors=True),
        ],
        logger_factory=structlog.stdlib.LoggerFactory(),  # Use Python's logging factory
        wrapper_class=structlog.stdlib.BoundLogger
    )
```

See [example](https://github.com/prefab-cloud/prefab-cloud-python/blob/main/examples/structlogger/structlogger-example.py)

Note the LoggerProcessor has an overrideable `logger_name` method so you can subclass and determine your own logger name from elements on the logger record as needed.

Please contact us for help with your configuration if it varies from one of these standard cases.


## Debugging

At this time, it's not possible to dynamically control the loglevel of the prefab client itself. Instead control the Prefab client's log level by changing the `bootstrap_loglevel` in the `Options` class at start up.

By default this level is set to `Logging.WARNING`

## Testing

Specify `LOCAL_ONLY` and use your [config.yaml file](/docs/explanations/architecture/bootstrapping).

```python
prefab_cloud_python.set_options(Options(data_sources="LOCAL_ONLY")
prefab_cloud_python.get_client()...
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
- `global_context` - an immutable global context to be used in all lookups. Use this for things like availability zone, machine type...
- `on_ready_callback` - register a single method to be called when the client has loaded its first configuration and is ready for use
