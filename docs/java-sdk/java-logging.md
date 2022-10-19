---
title: Logging
sidebar_label: Logging
sidebar_position: 2
---

## Dynamic Logging with the Java SDK

Setting up a dynamic logger with Prefab is easy. 

We need to give our `ConfigClient` a LoggingListener when we create it. This listener will be called whenever the config changes, 
it will detect LogLevel changes, find the appropriate logger based on the config key, and map the LogLevel to the appropriate Logger specific level.

Prefab comes with support out of the box for most common logging platforms:

- [LogbackConfigListener](https://github.com/prefab-cloud/prefab-cloud-java/blob/main/src/main/java/cloud/prefab/client/config/logging/LogbackConfigListener.java)
- [Log4j1ConfigListener](https://github.com/prefab-cloud/prefab-cloud-java/blob/main/src/main/java/cloud/prefab/client/config/logging/Log4j1ConfigListener.java)
- [Log4j2ConfigListener](https://github.com/prefab-cloud/prefab-cloud-java/blob/main/src/main/java/cloud/prefab/client/config/logging/Log4j2ConfigListener.java)
- [JavaUtilLoggingConfigListener](https://github.com/prefab-cloud/prefab-cloud-java/blob/main/src/main/java/cloud/prefab/client/config/logging/JavaUtilLoggingConfigListener.java)


## Set Up Dynamic Logging With LogBack

To set up dynamic logging with LogBack, we need to just add the `LogbackConfigListener` to our `ConfigClient`.

You may want to make sure your bean initializes on `@Context` so it is available immediately.

```java
@Factory
public class PrefabFactory {
  
  @Singleton
  public PrefabCloudClient prefabCloudClient() {
    final Options options = new Options();
    return new PrefabCloudClient(options);
  }

  @Singleton
  public FeatureFlagClient featureFlagClient(PrefabCloudClient prefabCloudClient) {
    return prefabCloudClient.featureFlagClient();
  }

  @Context
  public ConfigClient configClient(PrefabCloudClient prefabCloudClient) {
    return new ConfigClient(prefabCloudClient, LogbackConfigListener.getInstance());
  }
}
```

## Profit

Now we can set our log levels dynamically in the UI and they will update immediately.

![example screenshot](/img/docs/server-sdks/log-levels-java.png)
