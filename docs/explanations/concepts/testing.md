---
title: Testing & DataFiles
sidebar_label: Testing & DataFiles
sidebar_position: 5
---

:::tip
Our SDKs and Clients have library and language-specific testing advice. For specific details, refer to the docs for the SDK or client you're using.
:::

Testing is a first-class citizen in Prefab. We've designed Prefab in a way that makes it easy to test your code that uses Prefab.

### Best Practices For Testing

The best practice for testing is to create a test environment and use a datafile for the bulk of your configuration. A datafile is a JSON snapshot of your configuration which allows the Prefab client to boot up in a consistent state without talking to the Prefab server.

You can then use mocking to override specific values as needed, when you are testing the behavior of a specific feature flag or config.

## Mocking

### Backend SDKs

The primary way to test Prefab is by mocking out calls to Prefab. Here are some examples:

<Tabs groupId="lang">

<TabItem value="java" label="Java">

```java
@Test
void testPrefab(){
  ConfigClient mockConfigClient = mock(ConfigClient.class);
  when(mockConfigClient.liveString("sample.string")).thenReturn(FixedValue.of("test value"));
  when(mockConfigClient.liveLong("sample.long")).thenReturn(FixedValue.of(123L));

  MyClass myClass = new MyClass(mock(ConfigClient.class));

  // test business logic

}
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
class Job < Array
  def batches
    slice_size = Prefab.get('job.batch.size')
    each_slice(slice_size)
  end
end

RSpec.describe Job do
  describe '#batches' do
    it 'returns batches of jobs' do
      jobs = Job.new([1, 2, 3, 4, 5])
      expect(jobs.batches.map(&:size)).to eq([3, 2])
      allow(Prefab).to receive(:get).with('job.batch.size').and_return(2)
      expect(jobs.batches.map(&:size)).to eq([2, 2, 1])
    end
  end
end
```

</TabItem>
</Tabs>

### Frontend Libraries

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

[Read the full JavaScript testing docs.](/docs/sdks/javascript#testing)

</TabItem>

<TabItem value="react" label="React">

Don't use the `PrefabProvider`. Instead, use the `PrefabTestProvider` and pass in a config object.

```jsx
<PrefabTestProvider config={config}>
  <MyComponent />
</PrefabTestProvider>,
```

[Read the full React testing docs.](/docs/sdks/react#testing)

</TabItem>
</Tabs>

## Testing with DataFiles

Mocking out all of the Prefab calls can be tedious, so we've added a feature called DataFiles to Prefab.

Having your tests/CI reach out to Prefab to get the latest configuration is a viable approach, but for consistency & reproducibility many of us prefer to have full control over the configuration used to run tests.

Prefab supports this approach by allowing you to specify a datafile. When specifying a datafile via `PREFAB_DATAFILE` or the `datafile` option, Prefab will use the datafile for all configuration instead of reaching out to the server and will run in `local-only` mode.

The datafile is a JSON representation of all your configuration for an environment. It is human readable, but we recommend using the Prefab CLI to generate it and not editing it by hand.

To get started with a datafile:

1. Create an Environment in the Prefab UI called "Test"
2. Generate a datafile for that environment using the Prefab CLI

```bash
prefab download --environment test
# writes prefab.test.108.config.json
```

3. Add the datafile to git `git add prefab.test.108.config.json`.
4. Set `PREFAB_DATAFILE=prefab.test.108.config.json` in your CI environment.

:::tip
Datafiles can also be useful in Docker builds or other environments where you want to avoid reaching out to Prefab. A very common pattern is to use this for `assets:precompile` in a Ruby on Rails application. That often looks like:

`RUN RAILS_ENV=production PREFAB_DATAFILE=prefab.test.108.config.json bundle exec rake assets:precompile
`

If you don't want the test data there, you could also create another environment called 'docker-build' with any other configuration you want and use the CLI to download that as well.
:::

### Keeping The Datafile Up To Date

The CLI download will take a snapshot of the configuration at a given moment, but it won't keep it up to date. As you add configuration or feature flags that you need to test, you'll need to update the datafile by re-running the CLI command and committing the new datafile.
