---
title: Testing
sidebar_label: Testing
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Testing

Our SDKs and Clients have library and language-specific testing advice. We recommend you checkout the docs for the SDK or client you're using.

To keep your tests speedy and consistent, we recommend avoiding connections to our server and to instead prefer relying on local data for test setup.
Specifying a PrefabEnv of 'test' and putting data in `.prefab.test.config.yaml` is covered in [Default Files](defaults.md).

### Server-side SDKs

Specify `LOCAL_ONLY` and use your [config.yaml file](/docs/explanations/bootstrapping).

<Tabs groupId="lang">
<TabItem value="ruby" label="Ruby">

```ruby
options = Prefab::Options.new(data_sources: LOCAL_ONLY)

client = Prefab::Client.initialize(options)
```

[Read the full Ruby testing docs.](/docs/ruby-sdk/ruby#testing)

</TabItem>
<TabItem value="java" label="Java">

```java
Options options = new Options()
  .setPrefabDatasource(Options.Datasources.LOCAL_ONLY)
```
[Read the full Java testing docs.](/docs/java#testing)

</TabItem>
</Tabs>

### Client-side Libraries

Rather than talking to the server, use `setConfig` or use a `Provider` manually with your test setup.

<Tabs groupId="lang">
<TabItem value="javascript" label="JavaScript">

Don't call `prefab.init`. Instead, use `setConfig` to set up your scenario.

```javascript
prefab.setConfig({
  turbo: true,
  defaultMediaCount: 3,
});
```
[Read the full JavaScript testing docs.](/docs/javascript#testing)

</TabItem>

<TabItem value="react" label="React">

Don't use the `PrefabProvider`. Instead, use the `PrefabTestProvider` and pass in a config object.

```jsx
<PrefabTestProvider config={config}>
  <MyComponent />
</PrefabTestProvider>,
```

[Read the full React testing docs.](/docs/react#testing)

</TabItem>
</Tabs>
