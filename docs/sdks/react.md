---
title: React
sidebar_position: 14
---

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

## Feature Flags

Now use the `usePrefab` hook to fetch flags. `isEnabled` is a convenience method for boolean flags.

```jsx
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

:::info

React is a Client SDK and does not receive Config. [Learn more about Client SDKs](/docs/explanations/concepts/client-sdks)

:::

## Tracking Experiment Exposures

If you're using Prefab for A/B testing, you can supply code for tracking experiment exposures to your data warehouse or analytics tool of choice.

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

:::tip

While `loading` is true, `isEnabled` will return `false` and `get` will return `undefined`.

:::
