---
title: Dynamic Log Levels
sidebar_label: Dynamic Log Levels
---

## Setting Dynamic Log Levels

A simple example here is worth a million words. 

First add a simple controller.

```ruby
class PrefabController < ApplicationController
  def index
    Rails.logger.warn "warn level logging"
    Rails.logger.info "info level logging"
    Rails.logger.debug "debug level logging"
  end
end
```

Next, we'll set the Rails logger to use our logger

```ruby
#application.rb
$prefab = Prefab::Client.new(options)
Rails.logger = $prefab.log
```

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

Now we are free to adjust our log levels, down to the controller or method level in realtime. Invaluable for debugging!

### Trace IDs

A final trick to share is adding in the concept of `trace-ids`. This isn't a new feature per-se, it's really just a cool
way to use regular Prefab config. To do it, we can just create a new string config called trace-ids. Put in a comma delimitted list of user ids. 
Then look for this value and only log if our current user is in the list.

```ruby
$prefab.log.debug "very detailed logging"  if $base_prefab.get("trace-ids").split(",").include? user_id.to_s
```

<div style={{position: 'relative', 'padding-bottom': '41.86046511627907%', height: 0}}>
<iframe src="https://www.loom.com/embed/f78a0ca6328d4d8994d0f5bb4adfdf02" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position:'absolute', top: '0', left: '0', width: '100%', height: '100%'}}>
</iframe></div>

Enjoy!  
