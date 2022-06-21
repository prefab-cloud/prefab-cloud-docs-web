---
title: Dynamic Config Basics
sidebar_label: Basics
sidebar_position: 1
---





import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 



<Tabs>
<TabItem value="ruby" label="Ruby">

```ruby
client = Prefab::Client.new
client.config_client.upsert("example", Prefab::ConfigValue.new(int: 1))
client.config_client.get("example") #returns 1
```

</TabItem>
<TabItem value="java" label="Java">

```java
final PrefabCloudClient prefabCloudClient = new PrefabCloudClient(new PrefabCloudClient.Builder());
final ConfigClient configClient = prefabCloudClient.configClient();

    configClient.upsert("example", Prefab.ConfigValue.newBuilder()
    .setInt(1)
    .build());

    configClient.get("example"); //returns 1
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
var prefab = new PrefabCloudClient();
prefab.get("example");
```

</TabItem>
</Tabs>

## Isn't that just a KV store?
Yep. But with one big big difference. Much like something like Consul, the KV store is actually distributed to every client. You can think of it like Memcached, but without API calls.

Because it's so blazing fast, it really changes what you can do with it. It's totally appropriate to query it many times on every request.

## How it works
Under the hood, the config client maintains a simple, concurrency safe, hashmap of key -> value. It also starts a GRPC HTTP 2 streaming connection to Prefab which pulls in config updates with millisecond latency. That means that whenever you update a value, be it in the Prefab UI or via the API, all nodes/instances/clients will see the same value almost immediately.

Config is very important so the client also reads from a checkpoint in S3 to buffer any possible downtime / issues with Prefab.cloud. Read more about reliability for details.

## Use Cases
It can take a little while to think of all the fabulous things you can do with a store like this. Some examples:

- Change log levels on a per class basis on the fly
- Quickly change max cache sizes, timeouts, expiries without restarting
- Update concurrency levels, polling frequency
- Distribute feature flags to all nodes at light speed
