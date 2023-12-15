---
title: Default YAML Files (Deprecated)
sidebar_label: Default Files
sidebar_position: 6
---

## Default System

:::info
We're replacing the default system with a new pattern that we believe is a much simpler,
while providing even more flexibility, power and resiliency.

The core use case of defaults was to provide settings for offline development in testing and CI.
This is better solved with our [datafiles](./testing).

If you believe you need this old system, please reach out to us to discuss.
:::

Prefab has a powerful system of environment defaults that allows you to get started quickly. Let's look.

The first file is `.prefab.default.config.yaml`. Prefab will always look for and load a file with this name.

```yaml
# .prefab.default.config.yaml
log-level:
  _: info
  myapp.controllers:
    _: debug
    chatty_controller: warn
  google.apis.core.http_command: info

api-usage: { "feature_flag": "true", value: true }

redis.url: "redis://localhost:6379"

google:
  gcp:
    _: my-staging-project # share the staging project in development
    big-query:
      dataset-name: development-dataset # but use a development dataset
```

There are a number of things to note in this example.

### Nesting

In order to reduce redundant keys, Prefab default files support nesting. In the example above you would access the GCP
dataset name with the key `google.gcp.big-query.dataset-name`.

The `_` key is special and lets us specify a value with a key that has nested attributes. The GCP project `my-staging-project`
in this example is accessible by the key `google.gcp`.

### Feature Flags

A handy shorthand for feature flags is available to set a default value.

## Prefab Environments

You can optionally add a list of environments to load additional default files. Let's see how to load the files `.prefab.staging.config.yaml`
and `.prefab.cloud.config.yaml` in that order.

<Tabs groupId="lang">
<TabItem value="ruby" label="Ruby">

```ruby
options = Prefab::Options.new(prefab_envs: Rails.env)
options = Prefab::Options.new(prefab_envs: ["staging", "cloud"])
```

</TabItem>
<TabItem value="java" label="Java">

```java
Options options = new Options()
  .setPrefabEnvs(List.of("staging", "cloud"))
```

</TabItem>
<TabItem value="shell" label="Shell">

```bash
PREFAB_ENVS=staging,cloud myapp
```

</TabItem>
</Tabs>

To continue our example from above. Let's look at how we might continue the logging and google configuration.

In staging, we no longer want the debug level of logging on our controllers. Let's turn that off.
We do want to change the big query dataset as well.

```yaml
# .prefab.staging.config.yaml
log-level:
  myapp.controllers:
    _: info # we will inherit levels from the default file unless overridden

redis.url: "redis://1.2.3.4:6379"

google:
  gcp:
    big-query:
      dataset-name: staging-dataset
```

In production, let's change all logging to warn and set both the google configurations to production values.

```yaml
# .prefab.production.config.yaml
log-level:
  _: warn
  myapp.controllers:
    _: warn

redis.url: "redis://7.8.9.10:6379"

google:
  gcp:
    _: my-production-project # use the production project
    big-query:
      dataset-name: production-dataset
```

:::tip
It's fine to use Prefab for configuration even if you don't think it will ever change.
Having it in Prefab means that you always retain the ability to update it on the fly.
:::

## Deleting Values

The Prefab clients will sometimes return nil even in the default mode. This situation occurs if you have deleted the keys in the Prefab UI.
A deleted key value is sent down to the clients as a tombstone and this tombstone takes precedence over default values as indicated in the
[config load order](/docs/explanations/architecture/bootstrapping.md) doc.
