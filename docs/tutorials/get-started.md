---
title: Get Started
sidebar_label: Get Started
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial Intro

Let's discover **Prefab in less than 5 minutes**.

Getting setup with prefab cloud should take you 5 minutes, but only if we start right now ;)

## Dashboard

After signing up, you'll see an onboarding dashboard. We've created your first project for you.

![image](/img/docs/getting-started/dashboard.png)

Most organizations will only want a single project.

## Project Environments

Click on your project name to add environments.

You probably want something like:

- Development
- Staging
- Production

There's no limit on the number of environments you can have. We've already created the Development environment for you.

![image](/img/docs/getting-started/add-project-env.png)

## API Keys

Our clients will need to connect to the Prefab APIs. To do that they'll need API Keys. Prefab has 2 different types of API Keys.

- **SDK API** keys are used for the server side APIs. These keys will have access to all information for their respective environment.
- **Client API** keys are used in mobile applications or websites. These keys will allow the clients to evaluate feature flags for a single user, but will not expose the raw flag data.

:::info
Only use Client API Keys in code that gets shipped to end users, 
:::

Let's create an SDK Key for now.

![image](/img/docs/getting-started/add-project-api-key.png)

OK! We're all set, copy this API Key down we'll use it in the next step. We only show you the API key once and only store a
secure hash on our end. Don't worry if you lose it, you can easily create as many as you like, which makes key rotation a snap.

![image](/img/docs/getting-started/api-key-created.png)


## Adding a Feature Flag

Now that we have an API key, we're ready to go. Select Flags from the navigation and then choose "Add Flag".

Let's name our flag `features.example-flag` and use the default type (`bool`).

Prefab suggests that you name things all in lowercase, with `.` as a logical separator and `-` between words.

![image](/img/docs/getting-started/add-flag.png)


Click Save and now we can take a look at our new feature flag. There are 4 elements to call your attention to.

![image](/img/docs/getting-started/new-feature-flag-variants.png)

There are 4 areas to note:

1. The app has automatically created two boolean variants for us. Feature flags can return strings or numbers as well, but booleans are most common.
2. The Publish Changes button is disabled because we haven't confirmed the default value for our environment. Once we save the default value rule, we can publish our flag.
3. Each environment gets a tab for its own rules.
4. Code snippets live here, making it easy to copy out the correct code into your application.

## Configuring our Feature Flag

Time for some fun. Let's set up a feature flag that will show us a bit of the power of Prefab.
For this example, let's say that we have a new thing we're ready to ship. We want to get ship to everyone in our Beta group.
Additionally, since the beta group might not reflect our whole user base, so we also want to rollout to 5% of all traffic.

For the rollout, click the false dropdown and pick "Rollout". Now enter `95` as your percent for `false` and `5` for `true`.

Now click "Add Rule" to add our customer group rule. Select "true" and "Property is one of". Enter "customer-group" for the "Property" field and "beta" for the values field.

![image](/img/docs/getting-started/ff-edit-form.png)

Save both rules and publish.

:::tip
The order of the rules matters. Rules are evaluated from top to bottom and the value of the first matching rule is used.

You can drag the rules to re-order them but the default rule sticks to the bottom.
:::

## Use in Code

To use the flag, all we need to do is initialize a client with the SDK key we created and

<Tabs groupId="lang">
<TabItem value="ruby" label="Ruby">

```ruby
$prefab = Prefab::Client.new(api_key: "SDK-KEY, or set ENV var PREFAB_API_KEY")
# Users in the beta group will always return true
puts $prefab.enabled?("features.example-flag", { user: { "customer-group": "beta" } })
# 5% of other users will return true
puts $prefab.enabled?("features.example-flag", {})
```

</TabItem>
<TabItem value="java" label="Java">

```java
PrefabCloudClient client = new PrefabCloudClient(new PrefabCloudClient.Options()
  .setApikey("SDK-KEY, or set ENV var PREFAB_API_KEY"));
FeatureFlagClient featureFlagClient = client.featureFlagClient();

// true for 5 % of the users
featureFlagClient.featureIsOn(
      "features.example-flag",
      PrefabContextStore.newBuilder("user")
        .put("trackingId", user.getTrackingId())
        .build()
    )

// true because of the beta group rule
featureFlagClient.featureIsOn(
      "features.example-flag",
      PrefabContextStore.newBuilder("customer")
        .put("group", "beta")
        .build()
    )
```

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
options = Prefab.Options.new(api_key: "SDK-KEY, or set ENV var PREFAB_API_KEY")
client = Prefab.Client.new(options)

# true for 5% of the users
Prefab.Client.enabled?(client, "features.example-flag", lookup_key: "123")

# true because of the beta group rule
Prefab.Client.enabled?(
  client,
  "features.example-flag",
  lookup_key: "456",
  attributes: %{"customer-group" => "beta"}
)
```

</TabItem>
</Tabs>


And that's it! A nice feature flag with a complex rule and a partial rollout in 5 minutes.

Read on in [Getting Started on The Client Side](/docs/tutorials/get-started-client) to learn how to use this same flag from the web.
