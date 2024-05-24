---
title: JavaScript
---

:::tip

If you're using React, consider using our [React Client] instead.

:::

## Install the latest version

Use your favorite package manager to install `@prefab-cloud/prefab-cloud-js` [npm](https://www.npmjs.com/package/@prefab-cloud/prefab-cloud-js) | [github](https://github.com/prefab-cloud/prefab-cloud-js)

<Tabs groupId="lang">
<TabItem value="npm" label="npm">

```bash
npm install @prefab-cloud/prefab-cloud-js
```

TypeScript types are included with the package.

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn add @prefab-cloud/prefab-cloud-js
```

TypeScript types are included with the package.

</TabItem>
<TabItem value="script" label="<script> tag">

We recommend using [jsDelivr][jsDelivr] for a minified/bundled version.

See the <a href="#context">context</a> section for more information on how to initialize with the `<script>` tag.

</TabItem>
</Tabs>

## Initialize the client

Initialize `prefab` with your api key:

<Tabs groupId="lang">
<TabItem value="import" label="import">

```javascript
import { prefab } from "@prefab-cloud/prefab-cloud-js";

const options = {
  apiKey: "YOUR_CLIENT_API_KEY",
};

await prefab.init(options);
```

`prefab.init` will request the calculated feature flags for the provided context as a single HTTPS request. If you need to check for updates to feature flag values, you can [learn more about polling](#poll) below.

You aren't required to `await` the `init` -- it is a promise, so you can use `.then`, `.finally`, `.catch`, etc. instead if you prefer.

</TabItem>

<TabItem value="script" label="<script> tag">

```javascript
// `prefab` is available globally on the window object
const options = {
  apiKey: "YOUR_CLIENT_API_KEY",
};

prefab.init(options).then(() => {
  console.log(options);
  console.log("test-flag is " + prefab.isEnabled("test-flag"));
});
```

</TabItem>
</Tabs>

:::tip

While `prefab` is loading, `isEnabled` will return `false`, `get` will return `undefined`, and `shouldLog` will use your `defaultLevel`.

:::

## Feature Flags

Now you can use `prefab`'s feature flag evaluation, e.g.

```javascript
if (prefab.isEnabled('cool-feature') {
  // ... this code only evaluates if `cool-feature` is enabled for the current context
}
```

You can also use `get` to access the value of non-boolean flags

```javascript
const stringValue = prefab.get("my-string-flag");
```

## Context

`Context` accepts an object with keys that are context names and key value pairs with attributes describing the context. You can use this to write targeting rules, e.g. [segment] your users.

<Tabs groupId="lang">
<TabItem value="import" label="import">

```javascript
// highlight-next-line
import { prefab, Context } from "@prefab-cloud/prefab-cloud-js";

const options = {
  apiKey: "YOUR_CLIENT_API_KEY",
  // highlight-start
  context: new Context({
    user: { key: "abcdef", email: "test@example.com" },
    device: { key: "hijklm", mobile: true },
  }),
  // highlight-end
};

await prefab.init(options);
```

</TabItem>

<TabItem value="script" label="<script> tag">

```javascript
// `prefab` is available globally on the window object
// `Context` is available globally as `window.prefabNamespace.Context`
const options = {
  apiKey: "YOUR_CLIENT_API_KEY",
  // highlight-start
  context: new prefabNamespace.Context({
    user: {
      email: "test@example.com",
    },
    device: { mobile: true },
  }),
  // highlight-end
};

prefab.init(options).then(() => {
  console.log(options);
  console.log("test-flag is " + prefab.isEnabled("test-flag"));

  console.log("ex1-copywrite " + prefab.get("ex1-copywrite"));
  $(".copywrite").text(prefab.get("ex1-copywrite"));
});
```

</TabItem>
</Tabs>

## `poll()`

After `prefab.init()`, you can start polling. Polling uses the context you defined in `init` by default. You can update the context for future polling by setting it on the `prefab` object.

```javascript
// some time after init
prefab.poll({ frequencyInMs: 300000 });

// we're now polling with the context used from `init`

// later, perhaps after a visitor logs in and now you have the context of
// their current user
prefab.updateContext({
  ...prefab.context,
  user: { email: user.email, key: user.trackingId },
});

// updateContext will immediately load the newest from Prefab based on the
// new context. Future polling will use the new context as well.
```

## Dynamic Config

Config values are accessed the same way as feature flag values. You can use `isEnabled` as a convenience for boolean values, and `get` works for all data types.

By default configs are not sent to client SDKs. You must enable access for each individual config. You can do this by checking the "Send to client SDKs" checkbox when creating or editing a config.

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

## Telemetry

If you would like Prefab to collect summary counts of feature flag evaluations, you can pass `collectEvaluationSummaries: true` in the options to `prefab.init`.

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

| property        | example                            | purpose                                                                                      |
| --------------- | ---------------------------------- | -------------------------------------------------------------------------------------------- |
| `isEnabled`     | `prefab.isEnabled("new-logo")`     | returns a boolean (default `false`) if a feature is enabled based on the current context     |
| `get`           | `prefab.get('retry-count')`        | returns the value of a flag or config evaluated in the current context                       |
| `loaded`        | `if (prefab.loaded) { ... }`       | a boolean indicating whether prefab content has loaded                                       |
| `shouldLog`     | `if (prefab.shouldLog(...)) {`     | returns a boolean indicating whether the proposed log level is valid for the current context |
| `poll`          | `prefab.poll({frequencyInMs})`     | starts polling every `frequencyInMs` ms.                                                     |
| `stopPolling`   | `prefab.stopPolling()`             | stops the polling process                                                                    |
| `context`       | `prefab.context`                   | get the current context (after `init()`).                                                    |
| `updateContext` | `prefab.updateContext(newContext)` | update the context and refetch. Pass `false` as a second argument to skip refetching         |

[jsDelivr]: https://www.jsdelivr.com/package/npm/@prefab-cloud/prefab-cloud-js
