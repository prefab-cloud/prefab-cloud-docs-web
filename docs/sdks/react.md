---
title: React
---

:::note
If you're using React Native, check out the [React Native SDK](/docs/sdks/react-native).
:::

## Install the latest version

Use your favorite package manager to install `@prefab-cloud/prefab-cloud-react` [npm](https://www.npmjs.com/package/@prefab-cloud/prefab-cloud-react) | [github](https://github.com/prefab-cloud/prefab-cloud-react)

<Tabs groupId="lang">
<TabItem value="npm" label="npm">

```bash
npm install @prefab-cloud/prefab-cloud-react
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn add @prefab-cloud/prefab-cloud-react
```

</TabItem>
</Tabs>

TypeScript types are included with the package.

## Initialize the Client

This client includes a `<PrefabProvider>` and `usePrefab` hook.

First, wrap your component tree in the `PrefabProvider`, e.g.

```jsx
import { PrefabProvider } from "@prefab-cloud/prefab-cloud-react";

const WrappedApp = () => {
  const onError = (reason) => {
    console.error(reason);
  };

  return (
    <PrefabProvider apiKey={"YOUR_CLIENT_API_KEY"} onError={onError}>
      <MyApp />
    </PrefabProvider>
  );
};
```

:::tip
If you wish for the user's browser to poll for updates to flags, you can pass a `pollInterval` (in milliseconds) to the `PrefabProvider`.
:::

## Feature Flags

Now use the `usePrefab` hook to fetch flags. `isEnabled` is a convenience method for boolean flags.

```jsx
import { usePrefab } from "@prefab-cloud/prefab-cloud-react";

const Logo = () => {
  const { isEnabled } = usePrefab();

  if (isEnabled("new-logo")) {
    return <img src={newLogo} className="App-logo" alt="logo" />;
  }

  return <img src={logo} className="App-logo" alt="logo" />;
};
```

You can also use `get` to access flags with other data types.

```jsx
const { get } = usePrefab();

const flagVlaue = get("my-string-flag");
```

## Using Context

`contextAttributes` lets you provide [context](/docs/explanations/concepts/context) that you can use to [segment] your users. Usually you will want to define context once when you setup `PrefabProvider`.

```jsx
import { PrefabProvider } from "@prefab-cloud/prefab-cloud-react";

const WrappedApp = () => {
  // highlight-start
  const contextAttributes = {
    user: { key: "abcdef", email: "jeffrey@example.com" },
    subscription: { key: "adv-sub", plan: "advanced" },
  };
  // highlight-end

  const onError = (reason) => {
    console.error(reason);
  };

  return (
    <PrefabProvider
      apiKey={"YOUR_CLIENT_API_KEY"}
      // highlight-next-line
      contextAttributes={contextAttributes}
      onError={onError}
    >
      <App />
    </PrefabProvider>
  );
};
```

## Dynamic Config

Config values are accessed the same way as feature flag values. You can use `isEnabled` as a convenience for boolean values, and `get` works for all data types.

By default configs are not sent to frontend SDKs. You must enable access for each individual config. You can do this by checking the "Send to frontend SDKs" checkbox when creating or editing a config.

## Dealing with Loading States

The Prefab client needs to load your feature flags from the [Prefab CDN](/docs/explanations/concepts/frontend-sdks) before they are available. This means there will be a brief period when the client is in a loading state. If you call the `usePrefab` hook during loading, you will see the following behavior.

```jsx
const { get, isEnabled, loading } = usePrefab();

console.log(loading); // true
console.log(get("my-string-flag)); // undefined for all flags
console.log(isEnabled("my-boolean-flag")); // false for all flags
```

Here are some suggestions for how to handle the loading state.

### At the top level of your application or page component

For a single page application, you likely already display a spinner or skeleton component while fetching data from your own backend. In this case, we recommend checking whether Prefab is loaded in the logic for displaying this state. That way you can ensure that Prefab is always loaded before the rest of your component tree renders, and you will not need to check for `loading` when evaluating individual flags.

```jsx
const MyPageComponent (myData, myDataIsLoading) => {
  // highlight-start
  const { loading: prefabIsLoading } = usePrefab();

  if (myDataIsLoading || prefabIsLoading) {
    // highlight-end
    return <MySpinnerComponent />
  }

  return (
    // actual page content
  )
}
```

However, if you have SEO concerns, such as when using a tool like Docusaurus, you may want to consider one of the following options instead.

### In individual components

You can get a `loading` value back each time you call the `usePrefab` hook and use it to render a spinner or other loading state only for the part of the page that is affected by your flag. This can be a good choice if you are swapping between two different UI treatments and don't want your users to see the page flicker from one to the other after the initial render.

```jsx
const MyComponent () => {
  const {get, loading} = usePrefab();

  if (loading) {
    return <MySpinnerComponent />
  }

  switch (get("my-feature-flag")) {
    case "new-ui":
      return (<div>Render the new UI...</div>);
    case "old-ui":
    default:
      return (<div>Render the old UI...</div>);
  }
}
```

### Do nothing

If your feature flag is choosing between rendering something and rendering nothing, it may be acceptable to have that content pop-in once Prefab finishes loading. This works because `isEnabled` will always return false until the Prefab client is loaded.

```jsx
const MyComponent () => {
  // highlight-next-line
  const {isEnabled} = usePrefab();

  return (
    <div>
      // highlight-start
      {isEnabled("my-feature-flag") && (
        <div>
          // Flag content...
        </div>
      )}
      // highlight-end
      <div>
        // Other content...
      </div>
    </div>
  );
}
```

## Tracking Experiment Exposures

If you're using [Prefab for A/B testing](/docs/how-tos/experiment.md), you can supply code for tracking experiment exposures to your data warehouse or analytics tool of choice.

```jsx
<PrefabProvider
  apiKey={"YOUR_CLIENT_API_KEY"}
  contextAttributes={contextAttributes}
  onError={onError}
  // highlight-start
  afterEvaluationCallback={(key, value) => {
    // call your analytics tool here...in this example we are sending data to posthog
    window.posthog?.capture("Feature Flag Evaluation", {
      key,
      value,
    });
  }}
  // highlight-end
>
  <App />
</PrefabProvider>
```

`afterEvaluationCallback` will be called each time you evaluate a feature flag using `get` or `isEnabled`.

## Telemetry

By default, Prefab will collect summary counts of config and feature flag evaluations to help you understand how your configs and flags are being used in the real world. You can opt out of this behavior by passing `collectEvaluationSummaries={false}` when initializing `PrefabProvider`.

Prefab also stores the context that you pass in. The context keys are used to power autocomplete in the rule editor, and the individual values power the Contexts page for troubleshooting targeting rules and individual flag overrides. If you want to change what Prefab stores, you can pass a different value for `collectContextMode`.

| `collectContextMode` value | Behavior                                                       |
| -------------------------- | -------------------------------------------------------------- |
| `PERIODIC_EXAMPLE`         | Stores context values and context keys. This is the default.   |
| `SHAPE_ONLY`               | Stores context keys only.                                      |
| `NONE`                     | Stores nothing. Context will only be used for rule evaluation. |

## Testing

Wrap the component under test in a `PrefabTestProvider` and provide a config object to set up your test state.

e.g. if you wanted to test the following trivial component

```jsx
function MyComponent() {
  const { get, isEnabled, loading } = usePrefab();
  const greeting = get("greeting") || "Greetings";

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 role="alert">{greeting}</h1>
      {isEnabled("secretFeature") && (
        <button type="submit" title="secret-feature">
          Secret feature
        </button>
      )}
    </div>
  );
}
```

You could do the following in [jest]/[rtl]

```jsx
import { PrefabTestProvider } from "./index";

const renderInTestProvider = (config: { [key: string]: any }) => {
  render(
    <PrefabTestProvider config={config}>
      <MyComponent />
    </PrefabTestProvider>
  );
};

it("shows a custom greeting", async () => {
  renderInTestProvider({ greeting: "Hello" });

  const alert = screen.queryByRole("alert");
  expect(alert).toHaveTextContent("Hello");
});

it("shows the secret feature when it is enabled", async () => {
  renderInTestProvider({ secretFeature: true });

  const secretFeature = screen.queryByTitle("secret-feature");
  expect(secretFeature).toBeInTheDocument();
});
```

[jest]: https://jestjs.io/
[rtl]: https://testing-library.com/docs/react-testing-library/intro/
[segment]: /docs/explanations/features/rules-and-segmentation

## Reference

### `usePrefab` properties

```jsx
const { isEnabled, get, loading, contextAttributes } = usePrefab();
```

Here's an explanation of each property

| property            | example                 | purpose                                                                                  |
| ------------------- | ----------------------- | ---------------------------------------------------------------------------------------- |
| `isEnabled`         | `isEnabled("new-logo")` | returns a boolean (default `false`) if a feature is enabled based on the current context |
| `get`               | `get('retry-count')`    | returns the value of a flag or config                                                    |
| `contextAttributes` | (see above)             | this is the context attributes object you passed when setting up the provider            |
| `loading`           | `if (loading) { ... }`  | a boolean indicating whether prefab content is being loaded                              |
| `prefab`            | N/A                     | the underlying [JavaScript](./javascript.md) prefab instance                             |
| `keys`              | N/A                     | an array of all the flag and config names in the current configuration                   |

:::tip

While `loading` is true, `isEnabled` will return `false` and `get` will return `undefined`.

:::
