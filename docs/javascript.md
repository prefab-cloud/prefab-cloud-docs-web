---
title: JavaScript Client
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

## Getting Started With the JavaScript Client

Use your favorite package manager to install `@prefab-cloud/prefab-cloud-js` [npm](https://www.npmjs.com/package/@prefab-cloud/prefab-cloud-js) | [github](https://github.com/prefab-cloud/prefab-cloud-js)

`npm install @prefab-cloud/prefab-cloud-js` or `yarn add @prefab-cloud/prefab-cloud-js`

TypeScript types are included with the package.

If you're using React, consider using our [React Client] instead.

## Initialize client

Initialize prefab with your api key and an `Identity` for the current user/visitor:

```javascript
import prefab, { Identity } from '@prefab-cloud/prefab-cloud-js'

const options = { apiKey: 'YOUR_CLIENT_API_KEY', identity: new Identity('user-1234', { device: 'desktop' }) };
await prefab.init(options);
```

`Identity` accepts a lookup key unique to the current visitor/user and attributes that you can use to [segment] your users.

`prefab.init` will request the calculated config and feature flags for the provided `Identity` as a single HTTPS request.

## Usage

Now you can use `prefab`'s config and feature flag evaluation, e.g.


```javascript
if (prefab.isEnabled('cool-feature') {
  // ... this code only evaluates if `cool-feature` is enabled for the current Identity
}

setTimeout(ping, prefab.get('ping-delay'));
```

### `prefab` Properties

| property    | example                        | purpose                                                                                            |
|-------------|--------------------------------|----------------------------------------------------------------------------------------------------|
| `isEnabled` | `prefab.isEnabled("new-logo")` | returns a boolean (default `false`) if a feature is enabled based on the currently identified user |
| `get`       | `prefab.get('retry-count')`    | returns the value of a flag or config evaluated in the context of the currently identified user    |
| `loaded`    | `if (prefab.loaded) { ... }`   | a boolean indicating whether prefab content has loaded                                             |

## Testing

In your test suite, you should skip `prefab.init` altogether and instead use `prefab.setConfig` to set up your test state.

```javascript
it('shows the turbo button when the feature is enabled', () => {
  prefab.setConfig({
    turbo: true,
    defaultMediaCount: 3,
  });

  const rendered = new MyComponent().render();

  expect(rendered).toMatch(/Enable Turbo/);
  expect(rendered).toMatch(/Media Count: 3/);
});
```

[segment]: /docs/explanations/rules-and-segmentation
[React Client]: /docs/react
