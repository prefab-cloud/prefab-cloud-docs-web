---
title: Java SDK
sidebar_label: Java SDK
---

## Getting Started With the Java SDK

```xml
<dependency>
    <groupId>cloud.prefab</groupId>
    <artifactId>prefab-cloud-java</artifactId>
    <version>0.1.5</version>
</dependency>
```

## Initialize Client
```java
PrefabCloudClient.Options builder = new PrefabCloudClient.Options();
final PrefabCloudClient prefabCloudClient = new PrefabCloudClient(builder);
```

### Options
```java
PrefabCloudClient.Options options = new PrefabCloudClient.Options()
  .setNamespace("billing-service.jobs.dunning-job")
  .setConfigOverrideDir(System.getProperty("user.home"))
  .setApikey(System.getenv("PREFAB_API_KEY"));
```

## Get Config
```java

Optional<Prefab.ConfigValue> value = con
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


```java
final FeatureFlagClient featureFlagClient = prefabCloudClient.featureFlagClient();

String flagName = "MyFeature";
print(String.format("%s is %b", flagName, featureFlagClient.featureIsOn(flagName));
```

Now create a flag named MyFeature in the UI. Drag the slider to 100% and run the program again and run your program again.



