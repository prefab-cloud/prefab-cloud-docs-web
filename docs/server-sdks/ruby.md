---
title: Ruby
sidebar_label: Ruby
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Getting Started With the Ruby SDK

```ruby
# gem install prefab-cloud-ruby
client = Prefab::Client.new # reads PREFAB_API_KEY env var
# or
client = Prefab::Client.new(api_key: "<%= api_key %>")
```

```ruby
client = Prefab::Client.new
@feature_flags = client.feature_flag_client
flag_name = "MyFeature"
puts "#{flag_name} is #{@feature_flags.feature_is_on? flag_name}"
```

Now create a flag named MyFeature in the UI. Drag the slider to 100% and run the program again and run your program again.
