---
title: Get Started on The Client
sidebar_label: Get Started Client
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Add the Package

Use your favorite package manager to install `@prefab-cloud/prefab-cloud-js` [npm](https://www.npmjs.com/package/@prefab-cloud/prefab-cloud-js) | [github](https://github.com/prefab-cloud/prefab-cloud-js)

`npm install @prefab-cloud/prefab-cloud-js` or `yarn add @prefab-cloud/prefab-cloud-js`

TypeScript types are included with the package.

If you're using React, consider using our [React Client](/docs/react) instead.

## Initialize client

Initialize prefab with your api key and an `Identity` for the current user/visitor:

```javascript
import prefab, { Identity } from '@prefab-cloud/prefab-cloud-js'

const options = { apiKey: 'YOUR_CLIENT_API_KEY', 
  identity: new Identity('user-1234', { "customer-group": "beta" }) };
await prefab.init(options);


if (prefab.isEnabled('features.example-flag') {
  // ... this code will evaluate  because our identity is in the beta group
}
```
