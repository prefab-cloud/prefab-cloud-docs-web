---
title: Java SDK
sidebar_label: Java SDK
---

## Getting Started With the Java SDK

```xml
<dependency>
    <groupId>cloud.prefab</groupId>
    <artifactId>prefab-cloud-java</artifactId>
    <version>0.1.6</version>
</dependency>
```

## Initialize Client
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

## Testing
Prefab suggests testing with generous usage of Mockito.
