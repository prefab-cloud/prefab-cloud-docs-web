---
title: Bootstrapping
sidebar_label: Bootstrapping
sidebar_position: 3
---

## A Config.yaml file

```yaml
http.timeout: 30
log_level.app.controllers.my_controller: info
featureflag.experiment33: false
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
Prefab.initialize # kicks off initialization
Prefab.get_int('my.key') # uses a singleton
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

<Tabs>
<TabItem value="ruby" label="Ruby">

```ruby
options = Prefab::Options.new(
  onInitFailure: Prefab::Options::OnInitFailure::Raise,
  initializationTimeout: 30
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


Goal: as normal and no pfab rl

Step 1: connect to our Prefab project

Development: .envrc   1-1234-development
Staging: we use pfab


Step 2: Disable Prefab in certain env
Plane: Add PREFAB_DATASOURCES: LOCAL_ONLY to Figaro or envrc
Test: PREFAB_DATASOURCES: LOCAL_ONLY  in Figaro
AssetCompile: PREFAB_DATASOURCES: LOCAL_ONLY in dockerfile


pfab application.yaml
development: NOTHING - nobody else uses pfab.  

staging:
 PREFAB_API_KEY: staging-SDK - everybody will have a way to set env var in staging/prod


Step 3: We want per env values.
If connecting to server. Easy! use prefab.  
But we want it even in LOCAL_ONLY.  

Solution: env specific sections to config files


Step 4: Defaults for feature flags



# LoadOrder
1. defaults
1. env defaults
1. api
1. overrides
1. overrides env defaults

```yaml
#.prefab.defaults.config.yaml
prefab.internal.grpc.url: grpc.staging-prefab.cloud
envs:
- test:
  prefab.internal.grpc.url: localhost:5050
```

```yaml
#.prefab.overrides.config.yaml
prefab.internal.grpc.url: 0.0.0.0:8084  #i'm a java dev and want my local
prefab.internal.use.https: false
envs:
  - test:
  - prefab.internal.grpc.url: localhost:5050 #but i need to re-override for test
```

```ruby
#application.rb
# $prefab = Prefab.init(defaults: [".prefab.defaults.config.yaml"])
# $prefab = Prefab.init(env_defaults: [".prefab.#{Rail.env}.config.yaml"])

$prefab = Prefab.init(Prefab::Options.new(defaults_env: Rails.env)
))
```

#production.rb
```ruby
$prefab.get("")
````

# prefab client.rb
```ruby
class PrefabClient
  def initalize
    if api_key.nil? && !local_mode
      raise
    end
  end
end



#don't like this anymore
class ConfigClient
  def initialize
    @config_loader = ConfigLoader.new
    
    if @config_loader.calc_config["prefab.local_mode"].present?
     
    end
    local_mode = false
    local_mode = true if options[:local_mode]
    local_mode = true if @config_loader.calc_config["prefab.local_mode"]
    if options[:api_key].blank?
     puts "blank API key, running local only"
     local_mode = true
    end
    
    if local_mode
     project_id = 
    else
     project_id =
    end
  end
end
```

```ruby
#grpc_client.rb
prefab_internal_api_key = $prefab.get("prefab.internal.api.key")
```

```docker
RUN RAILS_ENV=production ASSET_PRECOMPILE=true rails asset:precompile
```
