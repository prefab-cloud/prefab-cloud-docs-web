---
title: Get Started
sidebar_label: Get Started
---

# Tutorial Intro

Let's discover **Prefab.Cloud in less than 5 minutes**.

Getting setup with prefab cloud should take you 5 minutes, but only if we start right now ;)

## Project Creation
First you will need to create a Project in the Prefab UI.

![image](/img/docs/getting-started/new-project-details.png)


## Project Environments
After that you'll create your environments:

You probably want something like:
- Development
- Staging
- Production

There's no limit on the number of environments you can have. For now you can just create 'Development'

![image](/img/docs/getting-started/add-project-env.png)

You'll see your first environment has been added. Prefab has no limit on how many environments you can add.

## API Keys

Our clients will need to connect to the Prefab APIs. To do that they'll need API Keys. Prefab has 2 different types of API Keys.
SDK API Keys are used for the server side APIs. These keys will have access to all information for their respective environment.
Client API Keys are used in mobile applications or websites. These keys will allow the clients to evaluate feature flags for a single user, but will not expose the raw flag data.

:::info
Only use Client API Keys in code that get shipped to end users.
:::

Let's create an SDK Key for now. You can create many API keys which is helpful when rotating keys.

![image](/img/docs/getting-started/add-project-api-key.png)


Ok! We're all set, copy this API Key and we'll use it in the next step.

![image](/img/docs/getting-started/created-project-api-key.png)


## Adding a Feature Flag

Select Flags from the navigation and then choose "Add Simple Flag"

![image](/img/docs/getting-started/add-flag.png)

:::note
You can always use the advanced UI for a feature flag. They are the same thing under the covers
:::

Let's name our flag `features.example-flag`. Prefab suggests that you name things all in lowercase, with `.` as a logical separator and `-` between words. 

![image](/img/docs/getting-started/add-flag-details.png)

Now we can take a look at our new feature flag. 

![image](/img/docs/getting-started/new-feature-flag-variants.png)

There are 4 areas to note:

1. The 'Simple Flag' has automatically created two boolean variants for us. Feature flags can return strings or numbers as well, but booleans are most common.
2. Our status box says 'Sync to API' this tells us that we have pending changes that are not in the API. 
3. The environment we created is here. This is where we will turn the flag on. 
4. Code snippets live here, making it easy to copy out the correct code into your application.
