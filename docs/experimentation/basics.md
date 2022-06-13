---
title: Experimentation Basics
sidebar_label: Basics
slug: /experimentation/basics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## This is how you feature flag

Feature flags are the greatest thing in the world so when we built them for ourselves at Prefab.cloud we decided to make the same APIs we use internally available to all.

Feature flags can be created and controlled from within the Prefab.cloud UI or via code. Each feature flag can be set to anywhere from 0 to 100% on.


<Tabs>
<TabItem value="ruby" label="Ruby">

```ruby
client = Prefab::Client.new(api_key: "<%= api_key %>")
@feature_flags = client.feature_flag_client

# Create a flag that is on for 10% of traffic, the entire beta group and user:1
@feature_flags.upsert(Prefab::FeatureFlag.new(feature: "MyFeature", pct: 0.1, whitelisted: ["betas", "user:1"]))

# Use Flags By Themselves
puts @feature_flags.feature_is_on? "MyFeature"  # returns yes 10 pct of the time

# A single user should get the same result each time
puts @feature_flags.feature_is_on? "MyFeature", "user:1123" # with 10% probability user1123 will return yes, and if they do they always will

# Utilize the allowlist attributes to easily feature flag groups of people
puts @feature_flags.feature_is_on_for? "MyFeature", "user:234", attributes: ["betas"]}"
```

</TabItem>
<TabItem value="java" label="Java">

```java
PrefabCloudClient.Builder builder = new PrefabCloudClient.Builder();
final PrefabCloudClient prefabCloudClient = new PrefabCloudClient(builder);
final FeatureFlagClient featureFlagClient = prefabCloudClient.featureFlagClient();

//Create a flag that is on for 10 % of traffic, the entire beta group and user:1
    featureFlagClient.upsert("MyFeature", Prefab.FeatureFlag.newBuilder()
    .setPct(0.1)
    .addWhitelisted("betas")
    .addWhitelisted("user:1")
    .build());

//returns yes 10 pct of the time
    print(featureFlagClient.featureIsOn("MyFeature"));

//A single user should get the same result each time
//with 10 % probability user1123 will return yes, and if they do they always will
    print(featureFlagClient.featureIsOnFor("MyFeature",
    Optional.of("user:1123"),
    Lists.newArrayList()));

//Utilize the allowlist attributes to easily feature flag groups of people
    print(featureFlagClient.featureIsOnFor("MyFeature",
    Optional.of("user:234"),
    Lists.newArrayList("betas")));
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
var prefab = new PrefabCloudClient();

prefab.featureFlagIsOn("MyFeature") // returns yes 10 pct of the time

// A single user should get the same result each time
prefab.featureFlagIsOn("MyFeature", "user:1123") //with 10% probability user1123 will return yes, and if they do they always will

//Utilize the allowlist attributes to easily feature flag groups of people
prefab.featureFlagIsOn("user:234", ["betas"])
```

</TabItem>
</Tabs>

