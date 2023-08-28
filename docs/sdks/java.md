---
title: Java
sidebar_label: Java
sidebar_position: 12
---

## Getting Started With the Java SDK

[Github](https://github.com/prefab-cloud/prefab-cloud-java) | [Maven Repository](https://mvnrepository.com/artifact/cloud.prefab/prefab-cloud-java)

### Install the latest version

```xml
<dependency>
    <groupId>cloud.prefab</groupId>
    <artifactId>client</artifactId>
    <version>0.3.13</version>
</dependency>
```

### Dependency-Reduced Version

There's an optional uber-jar with shaded and relocated guava and failsafe dependencies

```xml
<dependency>
    <groupId>cloud.prefab</groupId>
    <artifactId>client</artifactId>
    <version>0.3.13</version>
    <classifier>uberjar</classifier>
</dependency>
```

## Initialize the client

```java
final PrefabCloudClient prefabCloudClient = new PrefabCloudClient(new Options());
```

### Options

```java
Options options = new Options()
  .setNamespace("billing-service.jobs.dunning-job")
  .setConfigOverrideDir(System.getProperty("user.home"))
  .setApikey(System.getenv("PREFAB_API_KEY"))
  .setPrefabDatasource(Options.Datasources.ALL) // Option: Datasources.LOCAL_ONLY
  .setOnInitializationFailure(Options.OnInitializationFailure.) // Option Options.OnInitializationFailure.UNLOCK
  .setInitializationTimeoutSec(10);
```

#### Option Definitions

| Name                       | Description                                                                                                                           | Default          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| collectEvaluationSummaries | Send counts of config/flag evaluation results back to Prefab to view in web app                                                       | true             |
| collectLoggerCounts        | Send counts of logger usage back to Prefab to power log-levels configuration screen                                                   | true             |
| contextUploadMode          | Upload either context "shapes" (the names and data types your app uses in prefab contexts) or periodically send full example contexts | PERIODIC_EXAMPLE |
| onInitializationFailure    | Choose to crash or continue with local data only if unable to fetch config data from prefab at startup                                | RAISE (crash)    |
| prefabDatasources          | Use either only-local data or local + API data                                                                                        | ALL              |

## Get FeatureFlag

```java
FeatureFlagClient featureFlagClient = prefabCloudClient.featureFlagClient();

featureFlagClient.featureIsOn(
    "features.example-flag",
    PrefabContext.newBuilder("customer")
      .put("group", "beta")
      .build()
  )
```

## Get Config

```java
final Optional<Prefab.ConfigValue> configValue = prefabCloudClient.configClient().get("the.key");
if(configValue.isPresent()){
  System.out.println(configValue.get().getString());
}
```

## Provide Context

To finely-target configuration rule evaluation, we accept contextual information both inline when making a get request

```java
prefabCloudClient.configClient().get("the.key", PrefabContext.newBuilder("user")
                                                    .put("name", "james")
                                                    .put("tier", "gold")
                                                    .put("customerMonths", 12)
                                                    .build()
                                                 )
```

and globally or request-scoped with the ContextStore which will affect all logging, featureflag and config lookups.

```java

prefabCloudClient.configClient().getContextStore().addContext(PrefabContext.newBuilder("User")
                        .put("name", user.getName())
                        .build());
```

See [contexts](../explanations/context) for more information

## Typical Usage

We recommend using the PrefabCloudClient as a singleton in your application. This is the most common way to use the SDK.

```java
// Micronaut Factory
@Factory
public class PrefabFactory {

  @Singleton
  public PrefabCloudClient prefabCloudClient() {
    PrefabCloudClient.Options builder = new PrefabCloudClient.Options();
    return new PrefabCloudClient(builder);
  }

  @Singleton
  public FeatureFlagClient featureFlagClient(
    PrefabCloudClient prefabCloudClient
  ) {
    return prefabCloudClient.featureFlagClient();
  }

  @Singleton
  public ConfigClient configClient(PrefabCloudClient prefabCloudClient) {
    return prefabCloudClient.configClient();
  }
}


public class MyClass {
  @Inject
  private ConfigClient configClient;

  public String test(String key){
    Optional<Prefab.ConfigValue> val = configClient.get(key);
    return "Live value of %s is %s".formatted(key, val.orElse("no value found"));
  }
}

```

## Live Values

Live values are a convenient and clear way to use configuration throughout your system. Inject a prefab client and get live values for the configuration keys you need.

In code, `.get()` will return the value. These values will update automatically when the configuration is updated in Prefab Cloud.

### Get a live value

```yaml
# .prefab.config.default.yaml
sample:
  long: 123
  string: "hello"
```

```java
import java.util.function.Supplier;

class MyClass {

  private Supplier<String> sampleString;
  private Supplier<Long> sampleLong;

  @Inject
  public MyClass(ConfigClient configClient) {
    this.sampleString = configClient.liveString("sample.string");
    this.sampleLong = configClient.liveLong("sample.long");
  }

  public String test(){
    return "I got %s and %d from Prefab Cloud.".formatted(sampleString.get(), sampleLong.get());
  }
}
```

## Dynamic Logging with the Java SDK

Setting up a dynamic logger with Prefab is easy.

We need to give our `ConfigClient` a LoggingListener when we create it. This listener will be called whenever the config changes,
it will detect LogLevel changes, find the appropriate logger based on the config key, and map the LogLevel to the appropriate Logger specific level.

Prefab comes with support for most common logging platforms

Java Util Logging is [supported](https://github.com/prefab-cloud/prefab-cloud-java/blob/main/src/main/java/cloud/prefab/client/config/logging/JavaUtilLoggingConfigListener.java) within the client.

Other Logging Platforms are provided in separate maven dependencies:

- [LogbackConfigListener](https://github.com/prefab-cloud/prefab-cloud-java/tree/main/logback-listener)
- [Log4j1ConfigListener](https://github.com/prefab-cloud/prefab-cloud-java/tree/main/log4j-one-listener)
- [Log4j2ConfigListener](https://github.com/prefab-cloud/prefab-cloud-java/tree/main/log4j-two-listener)

### Set Up Dynamic Logging With LogBack

To set up dynamic logging with LogBack, we need to install the `PrefabMDCTurboFilter` as seen in the configClient() method below.

You may want to make sure your bean initializes on `@Context` so it is available immediately.

```java
// this is a Micronaut example
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

  // in Micronaut @Context is basically eager-singleton
  @Context
  public ConfigClient configClient(PrefabCloudClient prefabCloudClient) {
    ConfigClient client = prefabCloudClient.getClient();
    PrefabMDCTurboFilter.install(client);
    return client;
  }
}
```

### Profit

Now we can set our log levels dynamically in the UI and they will update immediately.

![example screenshot](/img/docs/explanations/dynamic-levels.png)

### Targeted Log Levels

You can use [Targeting](../explanations/targeted-log-levels) to change your log levels based on the current user/request/device [context](../explanations/context) using our [rules](/docs/explanations/rules-and-segmentation) engine.

## Testing

Prefab suggests testing with generous usage of Mockito. We also provide a useful `FixedValue` for testing Live Values.

```java
  @Test
  void testPrefab(){
    ConfigClient mockConfigClient = mock(ConfigClient.class);
    when(mockConfigClient.liveString("sample.string")).thenReturn(FixedValue.of("test value"));
    when(mockConfigClient.liveLong("sample.long")).thenReturn(FixedValue.of(123L));

    MyClass myClass = new MyClass(mock(ConfigClient.class));

    // test business logic

  }
```

## Reference
