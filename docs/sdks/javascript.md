---
title: JavaScript
sidebar_position: 15
---

## Getting Started With the JavaScript Client

Use your favorite package manager to install `@prefab-cloud/prefab-cloud-js` [npm](https://www.npmjs.com/package/@prefab-cloud/prefab-cloud-js) | [github](https://github.com/prefab-cloud/prefab-cloud-js)

<Tabs groupId="lang">
<TabItem value="npm" label="npm">

```bash
npm install @prefab-cloud/prefab-cloud-js
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn add @prefab-cloud/prefab-cloud-js
```

</TabItem>
</Tabs>

TypeScript types are included with the package.

:::tip

If you're using React, consider using our [React Client] instead.

:::

## Initialize client

Initialize prefab with your api key and a [`Context` ](/docs/explanations/concepts/context) for the current user/visitor/device/request:

```javascript
import { prefab, Context } from "@prefab-cloud/prefab-cloud-js";

const options = {
  apiKey: "1234",
  context: new Context({
    user: { email: "test@example.com" },
    device: { mobile: true },
  }),
};

await prefab.init(options);

`prefab.init` will request the calculated config and feature flags for the provided context as a single HTTPS request.

You aren't required to `await` the `init` -- it is a promise, so you can use `.then`, `.finally`, `.catch`, etc. instead if you prefer.

:::tip

While `prefab` is loading, `isEnabled` will return `false`, `get` will return `undefined`, and `shouldLog` will use your `defaultLevel`.

:::
```

## Context

`Context` accepts an object with keys that are context names and key value pairs with attributes describing the context. You can use this to e.g. [segment] your users.

## Usage

Now you can use `prefab`'s config and feature flag evaluation, e.g.

```javascript
if (prefab.isEnabled('cool-feature') {
  // ... this code only evaluates if `cool-feature` is enabled for the current context
}

setTimeout(ping, prefab.get('ping-delay'));
```

## `poll()`

After `prefab.init()`, you can start polling. Polling uses the context you defined in `init` by default. You can update the context for future polling by setting it on the `prefab` object.

```javascript
// some time after init
prefab.poll({frequencyInMs: 300000})

// we're now polling with the context used from `init`

// later, perhaps after a visitor logs in and now you have the context of their current user
prefab.context = new Context({...prefab.context, user: { email: user.email, key: user.trackingId })

// future polling will use the new context
```

## Dynamic Logging

`shouldLog` allows you to implement dynamic logging. It takes the following properties:

| property       | type   | example               | case-sensitive |
| -------------- | ------ | --------------------- | -------------- |
| `loggerName`   | string | my.corp.widgets.modal | Yes            |
| `desiredLevel` | string | INFO                  | No             |
| `defaultLevel` | string | ERROR                 | No             |

If you've configured a level value for `loggerName` (or a parent in the dot-notation hierarchy like "my.corp.widgets") then that value will be used for comparison against the `desiredLevel`. If no configured level is found in the hierarchy for `loggerName` then the provided `defaultLevel` will be compared against `desiredLevel`.

If `desiredLevel` is greater than or equal to the comparison severity, then `shouldLog` returns true. If the `desiredLevel` is less than the comparison severity, then `shouldLog` will return false.

Example usage:

```javascript
const desiredLevel = "info";
const defaultLevel = "error";
const loggerName = "my.corp.widgets.modal";

if (shouldLog({ loggerName, desiredLevel, defaultLevel })) {
  console.info("...");
}
```

If no log level value is configured in Prefab for "my.corp.widgets.modal" or higher in the hierarchy, then the `console.info` will not happen. If the value is configured and is INFO or more verbose, the `console.info` will happen.

## Testing

In your test suite, you should skip `prefab.init` altogether and instead use `prefab.setConfig` to set up your test state.

```javascript
it("shows the turbo button when the feature is enabled", () => {
  prefab.setConfig({
    turbo: true,
    defaultMediaCount: 3,
  });

  const rendered = new MyComponent().render();

  expect(rendered).toMatch(/Enable Turbo/);
  expect(rendered).toMatch(/Media Count: 3/);
});
```

[segment]: /docs/explanations/features/rules-and-segmentation
[React Client]: /docs/sdks/react

## Reference

### `prefab` Properties

| property      | example                             | purpose                                                                                      |
| ------------- | ----------------------------------- | -------------------------------------------------------------------------------------------- |
| `isEnabled`   | `prefab.isEnabled("new-logo")`      | returns a boolean (default `false`) if a feature is enabled based on the current context     |
| `get`         | `prefab.get('retry-count')`         | returns the value of a flag or config evaluated in the current context                       |
| `loaded`      | `if (prefab.loaded) { ... }`        | a boolean indicating whether prefab content has loaded                                       |
| `shouldLog`   | `if (prefab.shouldLog(...)) {`      | returns a boolean indicating whether the proposed log level is valid for the current context |
| `poll`        | `prefab.poll({frequencyInMs})`      | starts polling every `frequencyInMs` ms.                                                     |
| `stopPolling` | `prefab.stopPolling()`              | stops the polling process                                                                    |
| `context`     | `prefab.context = new Context(...)` | get or set the current context (after `init()`)                                              |