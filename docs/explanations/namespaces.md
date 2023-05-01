---
title: Namespaces
sidebar_label: Namespaces
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Targetting Dynamic Configuration With Namespaces

Namespaces allow you to share config amongst many applications while still allowing you to override when necessary.

For instance, let's assume that all our code shares an HTTP library. We can configure the HTTP library to get its retry count & timeout duration from our config store.
We'll set `http.connection.retries` and `http.connection.timeout` in the default namespace.

All of our apps should initialize their config store in a namespace. For instance our User Service may have clients in the namespaces:
- `Prefab::Options.new(namespace: "userservice.web.app")`
- `Prefab::Options.new(namespace: "userservice.daemon.sidekiq")`
- `Prefab::Options.new(namespace: "userservice.cron.sync-to-billing")`
- `Prefab::Options.new(namespace: "userservice.cron.cleanup-job")`

:::tip
It's likely that you have a good namespace already defined as a tag on your pod. Something like `namespace = (ENV['DEPLOYED_NAME'] || "").gsub("-",".")` may be just what you're looking for.
:::

Prefab config will find the "closest" matching config when the UserService goes to look for a value of `http.connection.timeout`.

Let's imagine that the UserService starts to go down because too many requests are timing out to a our billing service. We can quickly reduce the `http.connection.timeout` for our `userservice.cron.sync-to-billing` namespace and solve the issue without pushing code or restarting.


With the following values

![namespaces for http-retries](/img/docs/explanations/namespace-retries.png)

<Tabs groupId="lang">
<TabItem value="ruby" label="Ruby">

```ruby
# staging
client = Prefab::Client.new(Prefab::Options.new())
client.get("http.connection.retries") # returns 1

# staging
client = Prefab::Client.new(Prefab::Options.new(namespace: "userservice.cron.sync-to-billing"))
client.get("http.connection.retries") # returns 1

# production
client = Prefab::Client.new(Prefab::Options.new(namespace: "userservice.web.web"))
client.get("http.connection.retries") # returns 3

# production
client = Prefab::Client.new(Prefab::Options.new(namespace: "userservice.cron.sync-to-billing"))
client.get("http.connection.retries") # returns 0

```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
import prefab, { Identity } from '@prefab-cloud/prefab-cloud-js'

const options = { apiKey: 'YOUR_CLIENT_API_KEY', namespace: "userservice.web.web", identity: new Identity('user-1234', { device: 'desktop' }) };
await prefab.init(options);

prefab.get("http.connection.retries"); //returns 3 in production

// Changing namespaces requires you to `init` again.
options.namespace = 'userservice.cron.sync-to-billing';
await prefab.init(options);

prefab.get("http.connection.retries");  //returns 0 in production
```

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# staging
client = Prefab.Client.new(Prefab.Options.new)
Prefab.Client.get(client, "http.connection.retries") # => 1

# staging
client = Prefab.Client.new(Prefab.Options.new(namespace: "userservice.cron.sync-to-billing"))
Prefab.Client.get(client, "http.connection.retries") # => 1

# production
client = Prefab.Client.new(Prefab.Options.new(namespace: "userservice.web.web"))
Prefab.Client.get(client, "http.connection.retries") # => 3

# production
client = Prefab.Client.new(Prefab.Options.new(namespace: "userservice.cron.sync-to-billing"))
Prefab.Client.get(client, "http.connection.retries") # => 0

```

</TabItem>
</Tabs>
