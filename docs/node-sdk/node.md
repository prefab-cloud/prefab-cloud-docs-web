---
title: Node
sidebar_position: 1
---

## Getting started with the Node SDK

`npm install @prefab-cloud/prefab-cloud-node` or `yarn add @prefab-cloud/prefab-cloud-node`

## Initialize a Client

```js
import { Prefab } from "@prefab-cloud/prefab-cloud-node";

if (!process.env.PREFAB_API_KEY) {
  throw new Error("PREFAB_API_KEY is not set");
}

const prefab = new Prefab({
  apiKey: process.env.PREFAB_API_KEY,
  enableSSE: true,
  enablePolling: true,
});

await prefab.init();
```

After the init completes you can use

- `prefab.get('some.config.name')` returns a raw value
- `prefab.isFeatureEnabled('some.feature.name')` returns true or false

Prefab supports [context](../explanations/context) for intelligent rule-based evaluation of `get` and `isFeatureEnabled` based on the current request/device/user/etc.

Given

```js
const context = {
  user: {
    email: "test@example.com",
    isAdmin: false,
  },
  subscription: {
    plan: "pro",
  },
};
```

You can pass this in to each call

- `prefab.get('some.config.name', context, defaultValue)`
- `prefab.isFeatureEnabled('some.feature.name', context, false)`

Or you can set the context in a block (perhaps surrounding evaluation of a web request)

```js
prefab.inContext(context, (pf) => {
  const optionalJustInTimeContext = { ... }

  console.log(pf.get("some.config.name", optionalJustInTimeContext, defaultValue))
  console.log(pf.isEnabled("some.config.name", optionalJustInTimeContext, false))
})
```
