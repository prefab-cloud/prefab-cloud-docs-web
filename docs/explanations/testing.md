---
title: Testing
sidebar_label: Testing
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Testing

To test Prefab.Cloud we recommend liberal use of your mocking library of choice.



<Tabs>
<TabItem value="ruby" label="Ruby">

```ruby
def setup

end

def test_feature
  
end
```

</TabItem>
<TabItem value="java" label="Java">

```java
@Before
public setup(){
  
}
@Test
public testFeature(){
  
    }
```

</TabItem>
</Tabs>



### No connections to server

Many developers would like their tests to be able to run without connection to the internet.





<Tabs>
<TabItem value="ruby" label="Ruby">

```ruby
options = Prefab::Options.new(
  data_sources: LOCAL_ONLY
)

Prefab::Client.initialize(options)
```

</TabItem>
<TabItem value="java" label="Java">

```java
PrefabOptions options = new PrefabOptions.Builder();
options.setDatasources(LOCAL_ONLY); //default is ALL
Prefab.initialize(options.build());
```

</TabItem>
</Tabs>

