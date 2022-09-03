---
title: Get Started
sidebar_label: Get Started
---

# Tutorial Intro

Let's discover **Prefab.Cloud in less than 5 minutes**.

Getting setup with prefab cloud should take you 5 minutes, but only if we start right now ;)

## Project Creation
First you will need to create a Project in the Prefab UI. Most organizations will only want a single project.

![image](/img/docs/getting-started/new-project-details.png)


## Project Environments
After that you'll create your environments:

You probably want something like:
- Development
- Staging
- Production

There's no limit on the number of environments you can have. For now you can just create 'Development'

![image](/img/docs/getting-started/add-project-env.png)

You'll see your first environment has been added.

## API Keys

Our clients will need to connect to the Prefab APIs. To do that they'll need API Keys. Prefab has 2 different types of API Keys.
SDK API Keys are used for the server side APIs. These keys will have access to all information for their respective environment.
Client API Keys are used in mobile applications or websites. These keys will allow the clients to evaluate feature flags for a single user, but will not expose the raw flag data.

:::info
In code that gets shipped to end users, only use Client API Keys.
:::

Let's create an SDK Key for now.

![image](/img/docs/getting-started/add-project-api-key.png)


Ok! We're all set, copy this API Key and we'll use it in the next step. We only show you the API key once and only store a 
secure hash on our end. Don't worry if you lose it, you can easily create as many as you like, which makes key rotation a snap.

![image](/img/docs/getting-started/api-key-created.png)


## Adding a Feature Flag

Now that we have an API key, we're ready to go. Select Flags from the navigation and then choose "Add Simple Flag".

![image](/img/docs/getting-started/add-flag.png)

:::note
You can always use the advanced UI for a feature flag even if you start simple. They are the same thing under the covers
:::

Let's name our flag `features.example-flag`. 

Prefab suggests that you name things all in lowercase, with `.` as a logical separator and `-` between words.

![image](/img/docs/getting-started/add-flag-details.png)

Click create and now we can take a look at our new feature flag. There are 4 elements to call your attention to.

![image](/img/docs/getting-started/new-feature-flag-variants.png)

There are 4 areas to note:

1. The 'Simple Flag' has automatically created two boolean variants for us. Feature flags can return strings or numbers as well, but booleans are most common.
2. Our status box says 'Sync to API' this tells us that we have pending changes that are not in the API. 
3. The environment we created is here. This is where we will turn the flag on. 
4. Code snippets live here, making it easy to copy out the correct code into your application.


## Configuring our Feature Flag

Time for some fun. Let's set up a feature flag that will show us a bit of the power of Prefab. 
For this example, let's say that we have a new thing we're ready to ship. We want to get ship to everyone in our Beta group. 
Additionally, since the beta group might not reflect our whole user base, so we also want to rollout to 5% of all traffic. 

![image](/img/docs/getting-started/ff-active.png)
There are 3 areas to note:

1. Flags start off as inactive in all environments. That means that the rules are not evaluated.
2. When the flag is inactive, simply return this variant.
3. When a flag is active, go through the list of rules in order. If a rule matches, return the given variant or variant distribution.

Let's add our Beta rule now.

## Add the Beta Rule
![image](/img/docs/getting-started/ff-edit-form.png)

## Re-Order the Rules
The order of the rules matters. If your first rule is "always true" we're not going to get to the Beta group evaluation.
You can drag the rules to re-order them.

![image](/img/docs/getting-started/ff-reorder.png)

## Set a Percentage Rollout
The order of the rules matters. If your first rule is "always true" we're not going to get to the Beta group evaluation.
You can drag the rules to re-order them.

![image](/img/docs/getting-started/ff-pct.png)

## Review your changes

![image](/img/docs/getting-started/ff-save.png)


:::tip
For something like a beta group it's often useful to use a re-usable Segment. You can create a segment as a dynamic config.
:::
