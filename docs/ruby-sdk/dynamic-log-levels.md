---
title: Dynamic Log Levels
sidebar_label: Dynamic Log Levels
---

## Setting Dynamic Log Levels

An example here is worth a million words.

First add a simple controller.

```ruby
class PrefabController < ApplicationController
  def index
    Rails.logger.warn "warn level logging"
    Rails.logger.info "info level logging"
    Rails.logger.debug "debug level logging"

    render plain: "Loaded. Check your logs."
  end
end
```

Next, we'll set the Rails logger to use our logger

```ruby
#application.rb
$prefab = Prefab::Client.new
$prefab.set_rails_loggers
```
:::info
Please read the [Puma/Unicorn](/docs/ruby-sdk/ruby#special-considerations-with-forking-servers-like-puma--unicorn-that-use-workers) notes for special considerations with forking servers.
:::

Finally we can start adjusting log levels. For convenience, we'll set these in our local defaults ([learn more](/docs/explanations/defaults)) but you can set and tweak these on-the-fly in the Prefab web app.

```yaml
#.prefab.default.config.yaml
log-level:
  _: debug
  cloud.prefab: debug
  app.controllers.prefab_controller: debug
```

Our results speak for themselves. You can see that we've enabled debug for the prefab internals, rails internals and our application code.

```shell
DEBUG 2022-09-06 13:01:54 -0400: cloud.prefab.client.sse:  Received event: #<struct SSE::StreamEvent type=:message, id=nil, last_event_id=nil>
DEBUG 2022-09-06 13:01:54 -0400: cloud.prefab.client.load_configs:  Checkpoint with highwater id 16621316872267098 from sse. No changes.
DEBUG 2022-09-06 13:02:03 -0400:  active_support.log_subscriber.debug:    (1.0ms)  SELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC
DEBUG 2022-09-06 13:02:03 -0400:  active_record.log_subscriber.log_query_source:   ↳ /Users/...
WARN  2022-09-06 13:02:03 -0400:  app.controllers.prefab_controller.index: warn level logging
INFO  2022-09-06 13:02:03 -0400:  app.controllers.prefab_controller.index: info level logging
DEBUG 2022-09-06 13:02:03 -0400:  app.controllers.prefab_controller.index: debug level logging
DEBUG 2022-09-06 13:02:03 -0400:  active_record.log_subscriber.log_query_source:   ↳ app/views/layouts/application.html.haml:47
INFO  2022-09-06 13:05:17 -0400:  lograge.log_subscriber.process_action: method=GET path=/prefab format=html controller=PrefabController action=index status=200 duration=151.10 view=141.43 db=6.20
```

If we set our levels to `info`, we see much less logging.
```yaml
#.prefab.default.config.yaml
log-level:
  _: info
  cloud.prefab: info
  app.controllers.prefab_controller: info
```

```shell
INFO  2022-09-06 13:05:17 -0400:  app.controllers.prefab_controller.index: info level logging
INFO  2022-09-06 13:05:17 -0400:  lograge.log_subscriber.process_action: method=GET path=/prefab format=html controller=PrefabController action=index status=200 duration=151.10 view=141.43 db=6.20
```

:::tip
If the values are in your `.prefab.default.config.yaml` you'll need to restart the server to see new values. If you change these values on the server, they will update automatically.
:::

Now we are free to adjust our log levels, down to the controller or method level in real-time. Invaluable for debugging!

### Targeted Log Levels

You can use [Targeting](/docs/explanations/targeted-log-levels) to change your log levels based on the current user/request/device context using our [rules](/docs/explanations/rules) engine.
