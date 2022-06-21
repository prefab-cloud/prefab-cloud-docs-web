---
title: Java SDK
sidebar_label: Java
---

## Getting Started With the Java SDK

```xml
<dependency>
    <groupId>cloud.prefab</groupId>
    <artifactId>prefab-cloud-java</artifactId>
    <version>0.1.0</version>
</dependency>
```
```java
final PrefabCloudClient prefabCloudClient = new PrefabCloudClient(new PrefabCloudClient.Builder());
// or
final PrefabCloudClient prefabCloudClient = new PrefabCloudClient(new PrefabCloudClient.Builder()
.setApikey("<%= api_key %>"));
```

```java
final PrefabCloudClient prefabCloudClient = new PrefabCloudClient(new PrefabCloudClient.Builder());
final FeatureFlagClient featureFlagClient = prefabCloudClient.featureFlagClient();

String flagName = "MyFeature";
print(String.format("%s is %b", flagName, featureFlagClient.featureIsOn(flagName));
```

Now create a flag named MyFeature in the UI. Drag the slider to 100% and run the program again and run your program again.


## LiveConfig

Our recommendation is to use PrefabCloud via [LiveConfig](https://github.com/HubSpot/live-config).

### LiveConfig with Guice
Live config with Guice offers a simple way to inject properties into your objecs.
```java
class Widgets {
    private Value<Integer> widgetCount;

    @Inject
    Widgets(@Named("widget.count") Value<Integer> widgetCount) {
      this.widgetCount = widgetCount;
    }

    int countWidgets() {
      return widgetCount.get();
    }
}
```

To configure this, setup LiveConfig with:
```java
Prefab.initialize();

LiveConfig config = LiveConfig.builder()
    .usingResolver(Prefab.liveConfigResolver())
    .build();
```


## PrefabOptions

```java
PrefabOptions options = new PrefabOptions.Builder();

//Defaaults
options.setApiKey(System.getenv("PREFAB_API_KEY"));
options.setNamespace(""); // "my.namespace"
options.setOnInitFailue(RAISE); // | UNLOCK_AND_CONTINUE | LOCK_AND_KEEP_TRYING
options.setInitializationTimeout(Duration.ofSeconds(30));
options.setNewConfigCallback(()->{});
options.setLiveOverrideUrl("");

Prefab.initialize(options.build());
```
