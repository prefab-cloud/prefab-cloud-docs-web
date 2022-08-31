---
title: Bootstrapping
sidebar_label: Bootstrapping
sidebar_position: 3
---

## A Config.yaml file

```yaml
# .prefab.default.config.yaml
log_level.prefab: info

http.timeout: 30
log_level.app.controllers.my_controller: info
featureflag.experiment33: false

java.api.url: "staging-api.example.com"

test:
  java.api.url: "localmockserver:8080"  # Prefab.new(Prefab::Options.new(default_env: 'test')
```


## Config Load Order
On startup, config clients load config in the following order, with each level taking precedence over the previous:

1. Classpath Config Files matching `.prefab*config.yaml` in alphanumeric order.
2. Most current values from PrefabCloud APIs & CDNs as described in [resiliency](resiliency.md)
4. Local Override Files matching `.prefab*config.yaml`
5. Emergency Override URL if configured in SDK initialization

### Reconfiguring Config File Locations
The classpath config file location can be changed with the env var `PREFAB_CONFIG_CLASSPATH_DIR`

The local override config file location can be changed with env var `PREFAB_CONFIG_OVERRIDE_DIR`


## SDK Startup

Your application begins to boot it will likely want to get configurations values from Prefab to do this, we need to make sure that it 
has downloaded a current set of configuration. 


### Dependency Injection Pattern

For languages where Dependency Injection is natural, initializing Prefab as a singleton and injecting it is the preferred approach. 

```java
@Singleton
@Provides
public Prefab getClient(){
    return new Prefab(PrefabOptions.Builder().build());
}
```

### Singletons And Initializers

In other languages, we should initialize prefab as early as possible in our application lifecycle. Methods called on the Prefab object will use
a singleton.
```ruby
$prefab = Prefab.new # kicks off initialization
$prefab.get('my.key') # uses a singleton
```


## On Initialization Failure

As we said in [resiliency](resiliency.md) Prefab goes to great lengths to ensure that you can get live data, but we need to specify behavior if
your application cannot connect. The internal configuration store begins in a locked state. It unlocks once it has live data. This gives us three choices
if we are unable to get live data. 

1. We can raise an error. This is the default.
2. We can stay locked and keep trying. 
3. We can unlock and continue with default values read from our classpath files. This may be the right setting for your Test & CI environments.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="lang">
<TabItem value="ruby" label="Ruby">

```ruby
options = Prefab::Options.new(
  on_init_failure: Prefab::Options::ON_INITIALIZATION_FAILURE::RAISE,
  initialization_timeout_sec: 30
)
$prefab = Prefab.initialize(options)
```

</TabItem>
<TabItem value="java" label="Java">

```java
@Singleton
@Provides
public Prefab getClient(){
    PrefabOptions options=new PrefabOptions.Builder();
    options.setOnInitFailue(PrefabOptions.OnInitFailue.RAISE); // | UNLOCK_AND_CONTINUE | LOCK_AND_KEEP_TRYING
    options.setInitializationTimeout(Duration.ofSeconds(30));
    return new Prefab(options.build());
}
```

</TabItem>
</Tabs>

