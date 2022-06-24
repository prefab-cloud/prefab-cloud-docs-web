---
title: Defaults
sidebar_label: Defaults
sidebar_position: 3
---

## The Question Of Defaults

Let's look at a basic example:
```ruby
Prefab.get_int("my-int")
```

If we've created a value for the key of `my-int`, the behavior here is obvious. But what should happen if you request a key that 
doesn't exist?

Broadly, we've got two options. We can:
1. Return nil
2. Throw an error

Neither of those sound great, so an alternative path is to make our users specify a default value inline every time they ask for a results. For example:
```ruby
Prefab.get_int("my-int", 30)
```

This works, but can lead to messy redundancy if we are accessing the same configuration from many locations. 

Prefab's preferred approach is to use a defaults file to share these default values. 

```yaml
#.prefab.default.config.yaml
my-int: 30
```
With our default file on the classpath, we can now simply write:
```ruby
Prefab.get_int("my-int")
```
and be sure that if the key isn't available we will still have a value.

## Setting OnNoDefault Behavior

In order to encourage defaults to be set for all configuration values, if a default is not found, Prefab defaults to throwing a
`NoDefaultValue` error, even if there is a live value. The benefits of this are twofold. First, your code is very unlikely to make 
it to production in a state where there may be undefined behavior. The second benefit is that you now have an easy to read file 
with all of your configuration keys in one place.

If this behavior isn't what you want, you can change this and have Prefab happily return nils by setting `onNoDefault` in your initializer.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ruby" label="Ruby">

```ruby
options = Prefab::Options.new(
  onNoDefault: Prefab::Options::OnNoDefault::RETURN_NIL,
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
    options.setOnNoDefault(PrefabOptions.OnNoDefault.RETURN_NIL);
    return new Prefab(options.build());
}
```
</TabItem>
</Tabs>

## Deleting Values
The Prefab clients will sometimes return nil even in the default mode. This situation occurs if you have deleted the keys in the Prefab UI. 
A deleted key value is sent down to the clients as a tombstone and this tombstone takes precendence over default values as indicated in the 
[config load order](bootstrapping.md) doc.
