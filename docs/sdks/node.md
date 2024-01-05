---
title: Node
sidebar_position: 13
---

## Install the Latest Version

<Tabs groupId="lang">
<TabItem value="npm" label="npm">

```bash
npm install @prefab-cloud/prefab-cloud-node
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn add @prefab-cloud/prefab-cloud-node
```

</TabItem>
</Tabs>

## Initialize a Client

```js
import { Prefab } from "@prefab-cloud/prefab-cloud-node";

if (!process.env.PREFAB_API_KEY) {
  throw new Error("PREFAB_API_KEY is not set");
}

const prefab = new Prefab({
  apiKey: process.env.PREFAB_API_KEY,
  enableSSE: true,
  defaultLogLevel: "warn",
});

await prefab.init();
```

## Feature Flags and Dynamic Config

After the init completes you can use

- `prefab.isFeatureEnabled('some.feature.name')` returns true or false
- `prefab.get('some.config.name')` returns a raw value

## Context

Prefab supports [context](/docs/explanations/concepts/context) for intelligent rule-based evaluation of `get` and `isFeatureEnabled` based on the current request/device/user/etc.

Given

```js
const context = {
  user: { key: "some-unique-identifier", country: "US" },
  subscription: { key: "pro-sub", plan: "pro" },
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

## Dynamic Logging

`prefab.shouldLog(loggerName, desiredLevel, defaultLevel, contexts)` returns true or false

## Reference

### Option Definitions

| Name                       | Description                                                                                                                           | Default           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| collectEvaluationSummaries | Send counts of config/flag evaluation results back to Prefab to view in web app                                                       | true              |
| collectLoggerCounts        | Send counts of logger usage back to Prefab to power log-levels configuration screen                                                   | true              |
| contextUploadMode          | Upload either context "shapes" (the names and data types your app uses in prefab contexts) or periodically send full example contexts | "periodicExample" |
| defaultLevel               | Level to be used as the min-verbosity for a `loggerPath` if no value is configured in Prefab                                          | "warn"            |
| enableSSE                  | Whether or not we should listen for live changes from Prefab                                                                          | true              |
| enablePolling              | Whether or not we should poll for changes from Prefab                                                                                 | false             |
