---
title: Defaults
sidebar_label: Defaults
sidebar_position: 3
---

## Setting Defaults

Let's look at a basic example:
```ruby
Prefab.get_int("my-int")
```

If we've created a value for the key of `my-int`, the behavior here is obvious. But what should happen if you request a key that 
doesn't exist?

Broadly, we've got two options. We can:
1. Return nil
2. Throw an error

An alternative path is to make our users specify a default value inline every time they ask for a results. For example:
```ruby
Prefab.get_int("my-int", 30)
```

This works, but can lead to messy redundancy if we are accessing the same configuration from many locations. 

Prefab's preferred approach is to use a defaults file to share these default values. 

```yaml
#.prefab.default.config.yaml
my-int: 30
```
```ruby
Prefab.get_int("my-int")
```


## Setting OnNoDefault Behavior

In order to encourage defaults to be set for all configuration values. If a default is not found, Prefab defaults to throwing a
`NoDefaultValue` error, even if there is a live value. 

You can change this behavior and have Prefab happily return nils with `onNoDefault`. 

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
