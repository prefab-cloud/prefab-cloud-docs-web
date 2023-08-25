---
title: Bootstrapping
sidebar_label: Bootstrapping
sidebar_position: 3
---

## Config Load Order

On startup, config clients load config in the following order, with each level taking precedence over the previous:

1. Default [Config File](/docs/explanations/defaults) `.prefab.default.config.yaml` on the classpath
2. [Prefab Env](/docs/explanations/defaults#prefab-environments) config files such as `.prefab.staging.config.yaml`, `.prefab.test.config.yaml` or `.prefab.k8s.config.yaml`
3. Most current values from PrefabCloud APIs & CDNs as described in [how the server SDK works](server-sdks.md)
4. Local Override File `.prefab.default.config.yaml` in the override directory (defaults to $HOME)
5. Local Override Prefab Env Files `.prefab.test.config.yaml` in the override directory (defaults to $HOME)

### Reconfiguring Config File Locations

The classpath config file location can be changed with the env var `PREFAB_CONFIG_CLASSPATH_DIR`

The local override config file location can be changed with env var `PREFAB_CONFIG_OVERRIDE_DIR`

## Override Files & Load Order

All API values will take precedence over the values that come from your default files.

For local development, in can be helpful to have your own settings that are not checked into source control. This is the time for an
override file. Name your file `.prefab.default.config.yaml` and put it in your home directory. These values will have a higher precedence
than values from the API.

:::note
Using an Override file in a deployed environment is an anti-pattern. You should be able to achieve what you need to do
with some combination of [Prefab Envs](/docs/explanations/defaults#prefab-environments) and [namespaces](namespaces.md).
:::

## Helpful Logging

Understanding which config your app is using can take some getting used to. To help Prefab has quite a lot of logging.
You can turn it all on with `log-level.cloud.prefab: debug` in your `.prefab.default.config.yaml`.

Here you can see the: key, value, type, match and source for each config value.
The source tells us whether we are using a value from a config file or an API value.
The match tells us whether there is a value defined for the environment or namespace we are using.

```bash
DEBUG 2022-09-06 09:23:53 -0400: prefab:  Initialize ConfigClient
INFO  2022-09-06 09:23:53 -0400: prefab:  Load ./.prefab.default.config.yaml
INFO  2022-09-06 09:23:53 -0400: prefab:  Load /Users/user/.prefab.default.config.yaml
DEBUG 2022-09-06 09:23:53 -0400: prefab:  Initialize ConfigClient: AcquiredWriteLock
INFO  2022-09-06 09:23:55 -0400: prefab:  Found new checkpoint with highwater id 16621306673926944 from remote_cdn_api in project X environment: Y and namespace: 'myapp.web'
INFO  2022-09-06 09:23:55 -0400: prefab:  Unlocked Config via remote_cdn_api
INFO  2022-09-06 09:23:55 -0400: prefab:
accounting.api-uage.error-on-unknown-project       | false                               | FalseCl | Match: default                 | Source: ./.prefab.default.config.yaml
features.api-usage                                 | <Prefab::FeatureFlag: active: true, | Prefab: | Match: env:Y                   | Source: remote_cdn_api
google.gcp.big-query.dataset_name                  | development_dataset                 | String  | Match: default                 | Source: ./.prefab.default.config.yaml
google.gcp.project-id                              | gcp-prod                            | String  | Match: default                 | Source: ./.prefab.default.config.yaml
log-level                                          | debug                               | String  | Match: default                 | Source: /Users/user/.prefab.default.config.yaml
log-level.app                                      | info                                | String  | Match: default                 | Source: remote_cdn_api
log-level.app.controllers.documentation_controller | debug                               | String  | Match: default                 | Source: /Users/user/.prefab.default.config.yaml
log-level.google.apis.core.http_command            | info                                | String  | Match: default                 | Source: ./.prefab.default.config.yaml
log-level.cloud.prefab                             | debug                               | String  | Match: default                 | Source: ./.prefab.default.config.yaml
redis.url                                          | redis://localhost:6379              | String  | Match: env:Y                   | Source: remote_cdn_api
```

## On Initialization Failure

Prefab goes to [great lengths](resiliency.md) to ensure that you can get live data, but we need to specify behavior if
your application cannot connect. The internal configuration store begins in a locked state. It unlocks once it has live data.
Prefab gives you two choice if we are unable to get live data.

1. We can raise an error. This is the default.
2. We can unlock and continue with default values.

Here is how to set Prefab to unlock and continue:

<Tabs groupId="lang">
<TabItem value="ruby" label="Ruby">

```ruby
options = Prefab::Options.new(
  on_init_failure: Prefab::Options::ON_INITIALIZATION_FAILURE::RETURN,
  initialization_timeout_sec: 20
)
$prefab = Prefab.initialize(options)
```

</TabItem>
<TabItem value="java" label="Java">

```java
@Singleton
public Prefab getClient(){
  PrefabCloudClient prefabCloudClient = new PrefabCloudClient(
    new Options()
      .setInitializationTimeoutSec(20)
      .setOnInitializationFailure(Options.OnInitializationFailure.UNLOCK)
  );
}
```

</TabItem>
</Tabs>
