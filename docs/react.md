---
title: React Client
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

## Getting Started With the React Client

Use your favorite package manager to install `@prefab-cloud/prefab-cloud-react` [npm](https://www.npmjs.com/package/@prefab-cloud/prefab-cloud-react) | [github](https://github.com/prefab-cloud/prefab-cloud-react)

`npm install @prefab-cloud/prefab-cloud-react` or `yarn add @prefab-cloud/prefab-cloud-react`

TypeScript types are included with the package.

## Usage in your app

This client includes a `<PrefabProvider>` and `usePrefab` hook.

First, wrap your component tree in the `PrefabProvider`, e.g.

```jsx
import PrefabProvider from '@prefab-cloud/prefab-cloud-react';

const WrappedApp = () => {
  const contextAttributes = {
    user: { email: "jeffrey@example.com" },
    subscription: { plan: "advanced" } 
  };

  const onError = (reason) => {
    console.error(reason);
  }

  return (
    <PrefabProvider
      apiKey={'YOUR_CLIENT_API_KEY'}
      contextAttributes={contextAttributes}
      onError={onError}>
      <App />
    </PrefabProvider>
  );
}
```

- `contextAttributes` are attributes that you can use to [segment] your users.

Now use the `usePrefab` hook to fetch flags and config values

```jsx
const Logo = () => {
  const { isEnabled } = usePrefab();

  if (isEnabled("new-logo")) {
    return (
      <img src={newLogo} className="App-logo" alt="logo" />
    );
  }

  return (
    <img src={logo} className="App-logo" alt="logo" />
  );
};

```

### `usePrefab` properties


```jsx
const { isEnabled, get, loading, contextAttributes } = usePrefab();
```

Here's an explanation of each property

| property             | example                 | purpose                                                                                  |
|----------------------|-------------------------|------------------------------------------------------------------------------------------|
| `isEnabled`          | `isEnabled("new-logo")` | returns a boolean (default `false`) if a feature is enabled based on the current context |
| `get`                | `get('retry-count')`    | returns the value of a flag or config                                                    |
| `contextAttributes`  | (see above)             | this is the context attributes object you passed when setting up the provider            |

:::tip

While `loading` is true, `isEnabled` will return `false` and `get` will return `undefined`.

:::

## Testing

Wrap the component under test in a `PrefabTestProvider` and provide a config object to set up your test state.

e.g. if you wanted to test the following trivial component

```jsx
function MyComponent() {
  const { get, isEnabled, loading } = usePrefab();
  const greeting = get('greeting') || 'Greetings';

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 role="alert">{greeting}</h1>
      { isEnabled('secretFeature') && <button type="submit" title="secret-feature">Secret feature</button> }
    </div>
  );
}
```

You could do the following in [jest]/[rtl]

```jsx
import { PrefabTestProvider } from './index';

const renderInTestProvider = (config: {[key: string]: any}) => {
  render(
    <PrefabTestProvider config={config}>
      <MyComponent />
    </PrefabTestProvider>,
  );
};

it('shows a custom greeting', async () => {
  renderInTestProvider({ greeting: 'Hello' });

  const alert = screen.queryByRole('alert');
  expect(alert).toHaveTextContent('Hello');
});

it('shows the secret feature when it is enabled', async () => {
  renderInTestProvider({ secretFeature: true });

  const secretFeature = screen.queryByTitle('secret-feature');
  expect(secretFeature).toBeInTheDocument();
});
```

[jest]: https://jestjs.io/
[rtl]: https://testing-library.com/docs/react-testing-library/intro/
[segment]: /docs/explanations/rules-and-segmentation
