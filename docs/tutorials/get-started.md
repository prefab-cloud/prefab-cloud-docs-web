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

After that you'll create your environments:

You probably want something like:
- Development
- Staging
- Production



For now you can just create 'Development'

![image](/img/docs/getting-started/add-project-env.png)

You'll see your first environment has been added. Prefab has no limit on how many environments you can add.

Our clients will need to connect to the Prefab APIs. To do that they'll need API Keys. Prefab has 2 different types of API Keys.
SDK API Keys are used for the server side APIs. These keys will have access to all information for their respective environment.
Client API Keys are used in mobile applications or websites. These keys will allow the clients to evaluate feature flags for a single user, but will not expose the raw flag data.

Let's create an SDK Key for now. You can create many API keys which is helpful when rotating keys.

![image](/img/docs/getting-started/add-project-api-key.png)


Ok! We're all set, copy this API Key and we'll use it in the next step.

![image](/img/docs/getting-started/created-project-api-key.png)
