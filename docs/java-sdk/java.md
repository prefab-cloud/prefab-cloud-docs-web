---
title: Java SDK
sidebar_label: Java SDK
sidebar_position: 1
---
[Github](https://github.com/prefab-cloud/prefab-cloud-java) | [Maven Repository](https://mvnrepository.com/artifact/cloud.prefab/prefab-cloud-java)

## Getting Started With the Java SDK

## Install the latest version
```xml
<dependency>
    <groupId>cloud.prefab</groupId>
    <artifactId>client</artifactId>
    <version>0.3.3</version>
</dependency>
```

## Install a GRPC provider

We don't provide a transitive dependency so you need to add **one** of the options below.
_The version number is up to you, these are the current versions at this time._

### Netty Shaded

```xml
 <dependency>
    <groupId>io.grpc</groupId>
    <artifactId>grpc-netty-shaded</artifactId>
    <version>1.53.0</version>
</dependency>
```

### Netty Regular

```xml
 <dependency>
    <groupId>io.grpc</groupId>
    <artifactId>grpc-netty</artifactId>
    <version>1.53.0</version>
</dependency>
```

### OK Http

Smaller, often used on Android

```xml
<dependency>
    <groupId>io.grpc</groupId>
    <artifactId>grpc-okhttp</artifactId>
    <version>1.53.0</version>
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

## Get FeatureFlag
```java
  FeatureFlagClient featureFlagClient = prefabCloudClient.featureFlagClient();

  featureFlagClient.featureIsOnFor(
    "features.example-flag",
    "123",
    Map.of("customer-group", "beta")
  );
```

## Get Config
```java
final Optional<Prefab.ConfigValue> configValue = prefabCloudClient.configClient().get("the.key");
if(configValue.isPresent()){
  System.out.println(configValue.get().getString());
}
```


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
