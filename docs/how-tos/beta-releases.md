---
title: Beta Releases
sidebar_label: Beta Releases
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Beta Releases allow you to mitigate risk of bugs by slowly rolling out a feature to your audience.

Using feature flags and Prefab's [Rules and Segmentation](/docs/explanations/rules-and-segmentation) you can enable a feature for precisely who you want, when you want.

Let's walk through a common example beta release rollout.

## Example rollout

A common progression for rollout is

1. The people who worked on the feature: developers, designers, QA, PMs, etc.
2. Your entire org
3. A growing percentage of users

This progression allows the people who are closest to the feature to dogfood it first. Once they've fixed any rough edges they find, the rest of the org can test and uncover issues. Next you can slowly ramp up the percentage of other users the feature is available to.

## Feature flag code

You'll only need to set up the feature flag check once in your code and then you can modify the rules in the Prefab.Cloud app.

A feature flag check will always return false until it is fully enabled or a rule returns true. This means you can ship your code at any time before a feature flag is created on Prefab.Cloud and trust people are going down the `false` code path.

<Tabs groupId="lang">
<TabItem value="ruby" label="Ruby">

```ruby
  if $prefab.enabled?("my-feature-name", current_user.lookup_key, { email: current_user.email })
    # serve the new feature
  else
    # serve the old version of the page
  end
```

</TabItem>
<TabItem value="java" label="Java">

```java
```

</TabItem>
</Tabs>

## Rules

:::tip
Rules are evaluated in order. You can drag and drop rules to rearrange them. The first matching rule determines which variant is served. [Read more](/docs/explanations/rules-and-segmentation).
:::

To model the example rollout above in Prefab.Cloud, we'll create a "Simple Flag".

We'll modify the default `Always True` rule to return `false` so we can safely enable our flag while still returning `false` for everyone for now.

Toggle the flag to active. Sync the changes to the API.

### The people who worked on the feature

Use a `Lookup Key In` rule to target specific users and return the `true` variant if the user matches. Lookup keys are delimited by commas, so you might target `developer-1234,designer-29,developer-456` etc. When it matches, we'll serve variant `true`.

![lookup key screenshot](/img/docs/example-beta-release-rules/lookup-key-in.jpg)

Click "Create Rule" and then move this rule up above our `Always True` rule and sync changes to the API.

Once time has passed and we're ready to open this up further, we'll add our next rule.

### Your entire org

Use a `Property Ends With One Of` rule to target the `email` property and set the criteria values to `@YOUR_DOMAIN.com`. When it matches, we'll serve variant `true`.

Click "Create Rule" and then move this rule up above our `Always True` rule and sync changes to the API.

Time passes while the org tests the feature. Once we're confident that we're ready for customers to see this, we add our final rule.

![your org](/img/docs/example-beta-release-rules/lookup-key-in.jpg)

### A growing percentage of users

We'll modify our `Always True` rule to do a `Percentage rollout`. We'll start small -- maybe `5%` for the `true` variant and `95%` for the false variant.

![percentage screenshot](/img/docs/example-beta-release-rules/percentage-rollout.jpg)

Sync your changes.

This is the fun part where you talk to customer support and watch your error tracker.

What if things are broken? You can edit the `Always True` rule to serve the `true` variant to `0%` of people while you fix bugs. Now your customers are using the old code path again immediately.

Once you've dealt with any issues, you can slowly ramp the `5%` up to `100%`, syncing to the API and watching for issues each time.

## Exceptions

What if you want to roll this feature out slowly but you need to make sure that your biggest customer doesn't see it until you have successfully rolled it out to everyone else first?

No problem. Using what we learned with our "Your entire org" rule, we can create a rule that always returns `false` for this customer.

Use a `Property Ends With One Of` rule to target the `email` property and set the criteria values to `@CUSTOMER_DOMAIN.com`. When it matches, we'll serve variant `false`.

![exception](/img/docs/example-beta-release-rules/exception.jpg)

Click "Create Rule" and then move this rule up above our `Always True` rule and sync changes to the API.

Because rule evaluation happens in order, when we see that the user matches `@CUSTOMER_DOMAIN.com` we'll return `false` for the flag check and they won't see the new feature.

Once you've ramped the percentage up to `100%` for the `Always True` rule and you're ready for this customer to see the feature, you can delete this exception rule.

## Example Screenshot

Here's all the rules above and the exception as seen in the UI

![example screenshot](/img/docs/example-beta-release-rules/all-rules.jpg)
