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
