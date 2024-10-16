---
title: Offline Mode
sidebar_label: Offline Mode
---

Prefab is intended to be bomb-proof. This means that your servers should happily continue to evaluate feature flags and config, even if, despite our [intense efforts][be], our servers are down. As a developer, you should also be able to run your app and test your code even if you don't have a reliable internet connection. This is why Prefab has an offline mode.

## Using Prefab offline

Prefab has Backend and Frontend SDKs, each supporting offline mode using [Datafiles][df]. Datafiles are JSON files containing the feature flags and configs you would normally get from the Prefab servers.

You can [download the datafile][download] for your project with the Prefab CLI.

You can check this datafile into your source control system, and use it to run your app in offline mode. Be sure to update this datafile periodically to get the latest rulesets from the Prefab servers.

### Backend SDKs

Backend SDKs can use [Datafiles][df] to run in offline mode. By specifying `PREFAB_DATAFILE=./path-to-your-datafile.json` in your environment, you can run your app without needing to connect to the Prefab servers. Since the datafile is a complete representation of the payload you'd normally get from prefab.cloud, your servers will continue to evaluate flags and configs using your complete ruleset (at the time the datafile was generated).

If you're using Ruby on Rails, for example, you can run your server using a datafile like this:

```bash
PREFAB_DATAFILE=./path-to-your-datafile.json rails server
```

### Frontend SDKs

Frontend SDKs have two options for offline mode. In both cases, you'll need a datafile.

#### Using Backend SDK JS stub/bootstrapping

If you're already using one of the Backend SDKs that supports [Frontend bootstrapping][0ms], you can use the same datafile for your frontend. Sending your evaluations from your backend to your frontend will save your users an HTTP request and allow you to run offline without any changes to your frontend code.

#### Using the Prefab CLI to Serve a datafile

Using [`prefab serve`][serve] with a datafile will start a local server that serves the datafile to your frontend. This is useful if you're not using a Backend SDK that supports bootstrapping, or if you want to run your frontend in isolation. You'll need to update your frontend code to point to wherever your `prefab serve` is running.

<Tabs groupId="lang">
<TabItem value="js" label="JavaScript">

```javascript
import { prefab } from "@prefab-cloud/prefab-cloud-js";

const endpoints = [
  // If using the prefab serve command locally
  "http://localhost:3099",
  // If using `prefab serve` on your server
  // (perhaps in a Docker image), use the server's URI here
  // "https://prefab.your-backend-server/",
];

const options = {
  apiKey: "YOUR_CLIENT_API_KEY",
  endpoints: endpoints,
};

await prefab.init(options);
```

</TabItem>

<TabItem value="react" label="React">

```jsx
import { PrefabProvider } from "@prefab-cloud/prefab-cloud-react";

const endpoints = [
  // If using the prefab serve command locally
  "http://localhost:3099",
  // If using `prefab serve` on your server
  // (perhaps in a Docker image), use the server's URI here
  // "https://prefab.your-backend-server/",
];

const WrappedApp = () => {
  const onError = (reason) => {
    console.error(reason);
  };

  return (
    <PrefabProvider
      endpoints={endpoints}
      apiKey={"YOUR_CLIENT_API_KEY"}
      onError={onError}
    >
      <MyApp />
    </PrefabProvider>
  );
};
```

</TabItem>

</Tabs>

[be]: ../explanations/architecture/resiliency
[download]: ../tools/cli#download
[serve]: ../tools/cli#serve
[df]: ../explanations/concepts/datafiles
[0ms]: ../explanations/concepts/zero-ms-frontend-feature-flags
