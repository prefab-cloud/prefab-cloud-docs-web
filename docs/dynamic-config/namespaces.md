---
title: Namespaces
sidebar_label: Namespaces
sidebar_position: 3
---





import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Namespaces
Namespaces allow you to share config amongst many applications while still allowing you to override when necessary.

For instance, let's assume that all our code shares an HTTP library. We can configure the HTTP library to get its retry count & timeout duration from our config store. We'll set http.connection.retries and http.connection.timeout in the default namespace.

All of our apps should initialize their config store in a namespace. For instance our User Service can Prefab::Client.new(namespace: "userservice"). Prefab config will find the "closest" matching config when the UserService goes to look for a value of http.connection.timeout. By default that will match the global namespace.

Let's imagine that the UserService starts to go down because too many requests are timing out to a 3rd party service. We can quickly reduce the http.connection.timeout for our userservice namespace and solve the issue without pushing code or restarting.

<Tabs>
<TabItem value="ruby" label="Ruby">

```ruby
client = Prefab::Client.new(namespace: "userservice").config_client
client.get("http.connection.timeout") # returns 10

client = Prefab::Client.new(namespace: "paymentservice").config_client
client.get("http.connection.timeout") # returns 30

client = Prefab::Client.new(namespace: "userservice.background_job").config_client
client.get("http.connection.timeout") # returns 50

#an undefined namespace like "userservice.api" will get the "closest" value
#in this case that is the value of "userservice"
client = Prefab::Client.new(namespace: "userservice.api").config_client
client.get("http.connection.timeout") # returns 10
```

</TabItem>
<TabItem value="java" label="Java">

```java
configClient = new PrefabCloudClient(new PrefabCloudClient.Builder()
    .setNamespace("userservice")).configClient();
configClient.get("http.connection.timeout") // returns 10

configClient = new PrefabCloudClient(new PrefabCloudClient.Builder()
    .setNamespace("paymentservice")).configClient();
configClient.get("http.connection.timeout") // returns 30

configClient = new PrefabCloudClient(new PrefabCloudClient.Builder()
    .setNamespace("userservice.background_job")).configClient();
configClient.get("http.connection.timeout") // returns 50

// an undefined namespace like "userservice.api" will get the "closest" value
// in this case that is the value of "userservice"
configClient = new PrefabCloudClient(new PrefabCloudClient.Builder()
    .setNamespace("userservice.api")).configClient();
configClient.get("http.connection.timeout") // returns 10
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
var prefab = new PrefabCloudClient({namespace: "userservice");
prefab.get("http.connection.timeout"); //returns 10

var prefab = new PrefabCloudClient({namespace: "paymentservice");
prefab.get("http.connection.timeout"); //returns 30
```

</TabItem>
</Tabs>
