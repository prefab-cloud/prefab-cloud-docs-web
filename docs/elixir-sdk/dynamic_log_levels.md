---
title: Dynamic Log Levels
sidebar_label: Dynamic Log Levels
---

## Setting Dynamic Log Levels

A simple example here is worth a million words.

First add a simple module.

```ruby
defmodule PrefabLogTest do
  def run(client) do
    Prefab.Client.warning(client, "warn level logging")
    Prefab.Client.info(client, "info level logging")
    Prefab.Client.debug(client, "debug level logging")
  end
end
```
By default, `Prefab`'s global log level is configured at `:warning`, so running `PrefabLogTest.run(client)` we would only see

```shell
12:01:16.808 [warning] prefab_log_test.warning: warning
```

But we can change the final output by adjusting log levels.

```yaml
#.prefab.default.config.yaml
log-level:
  prefab_log_test: debug
```

Our results speak for themselves. You can see that we've enabled debug for the prefab internals, rails internals and our application code.

```shell
12:01:16.807 [debug] prefab_log_test.debug: debug

12:01:16.807 [info] prefab_log_test.info: info

12:01:16.808 [warning] prefab_log_test.warning: warning
```

We can also set the global `log-level` to reduce logging

```yaml
#.prefab.default.config.yaml
log-level:
  _: info
```

```shell
12:01:16.807 [info] prefab_log_test.info: info

12:01:16.808 [warning] prefab_log_test.warning: warning
```

:::tip
If the values are in your `.prefab.default.config.yaml` you'll need to restart the server to see new values ([learn more about defaults](/docs/explanations/defaults)). If you change these values on the server, they will update automatically.
:::

Now we are free to adjust our log levels, down to the controller or method level in realtime. Invaluable for debugging!

### Trace IDs

A final trick to share is adding in the concept of `trace-ids`. This isn't a new feature per-se, it's really just a cool
way to use regular Prefab config. To do it, we can just create a new string config called trace-ids. Put in a comma delimitted list of user ids.
Then look for this value and only log if our current user is in the list.

```ruby
trace_ids =
  Prefab.Client.get(client, "trace-ids")
  |> String.split(trim: true)

if to_string(user_id) in trace_ids do
  Prefab.Client.debug(client, "very detailed logging")
end
```

Enjoy!
