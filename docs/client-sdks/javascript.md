---
title: JavaScript
sidebar_label: JavaScript
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To install the Javascript SDK, you can use jsdelivr, npm or yarn:

<Tabs>

  <TabItem value="JSDelivr">

```html
<script src="https://cdn.jsdelivr.net/npm/prefab-cloud/build/prefab-cloud-javascript-client.min.js"></script>
```

  </TabItem>
  <TabItem value="NPM">

```shell
npm install prefab-cloud-javascript-client
```

  </TabItem>
  <TabItem value="yarn">

```shell
yarn add prefab-cloud-javascript-client
```

  </TabItem>
</Tabs>


## Initialization

```jsx
// Include this if using prefab-c via npm
// import prefab from 'prefab-cloud-javascript-client';
const user = {
  lookupKey: 'abda123'
};
await prefab.initialize(
    'YOUR_CLIENT_SDK_KEY',
    user,
);
```


## Basic Usage

```jsx
configKey = "my-first-int-config"
const config = prefab.getInt(configKey);


flagName = "my-first-ff"
const flag = prefab.feature_is_on?(flagName);
```


## Options
`prefab.initialize()` 3rd parameter is `options`. It takes:

- **localOnly** - boolean, default false
    - Pass true to this option to turn on Local Mode for the SDK, which will stop the SDK from issuing any network requests and make it only operate with only local overrides and cache.
