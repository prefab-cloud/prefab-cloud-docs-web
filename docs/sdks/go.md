---
title: Go
---

## Install the latest version

```bash
go get github.com/prefab-cloud/prefab-cloud-go@latest
```

## Initialize Client

First, add `prefab "github.com/prefab-cloud/prefab-cloud-go/pkg"` to your imports.

Then, initialize the client with your API key:

```go
client, err := prefab.NewClient(prefab.WithAPIKey(apiKey))
```

## Feature Flags

For boolean flags, you can use the `FeatureIsOn` function:

```go
enabled, ok := client.FeatureIsOn("my.feature.name", prefab.ContextSet{})
```

Flags that don't exist yet are considered off, so you can happily add `FeatureIsOn` checks to your code before the flag is created.

<details className="alert--info">
<summary>
Feature flags don't have to return just true or false.
</summary>

You can get other data types using `Get*` functions:

```go
value, ok, err := client.GetStringValue("my.string.feature.name", prefab.ContextSet{})
value, ok, err := client.GetJSONValue("my.json.feature.name", prefab.ContextSet{})
```

</details>

## Context

Feature flags become more powerful when we give the flag evaluation rules more information to work with. We do this by providing [context](/docs/explanations/concepts/context) of the current user (and/or team, request, etc.)

### Global Context

When initializing the client, you can set a global context that will be used for all evaluations.

```go
globalContext := prefab.NewContextSet().
    WithNamedContextValues("host", map[string]interface{}{
        "name": os.Getenv("HOSTNAME"),
        "region":   os.Getenv("REGION"),
        "cpu":      runtime.NumCPU(),
    })


client, err := prefab.NewClient(
    prefab.WithAPIKey(apiKey),
    prefab.WithGlobalContext(globalContext),
)
```

Global context is the least specific context and will be overridden by more specific context passed in at the time of evaluation.

### Bound Context

To make the best use of Prefab in a web setting, we recommend setting [context](/docs/explanations/concepts/context) per-request. Setting this context for the life-cycle of the request means the Prefab logger can be aware of your user/etc. for feature flags and [targeted log levels](/docs/explanations/features/targeted-log-levels) and you won't have to explicitly pass context into your `.FeatureIsOn` and `.Get*` calls.

```go
requestContext := prefab.NewContextSet().
    WithNamedContextValues("user", map[string]interface{}{
        "name":  currentUser.GetName(),
        "email": currentUser.GetEmail(),
    })

boundClient := client.WithContext(requestContext)
enabled, ok := boundClient.FeatureIsOn("my.feature.name", prefab.ContextSet{})
```

### Just-in-time Context

You can also pass context when evaluating individual flags or config values.

```ruby
enabled, ok := boundClient.FeatureIsOn("my.feature.name", prefab.NewContextSet().
    WithNamedContextValues("team", map[string]interface{}{
        "name":  currentTeam.GetName(),
        "email": currentTeam.GetEmail(),
    }))
```

## Dynamic Config

Config values are available via the `Get*` functions:

```go
value, ok, err := client.GetJSONValue("slack.bot.config", prefab.ContextSet{})

value, ok, err := client.GetStringValue("some.string.config", prefab.ContextSet{})

value, ok, err := client.GetFloatValue("some.float.config", prefab.ContextSet{})
```

<details>
<summary>

#### Default Values for Configs

</summary>

Here we ask for the value of a config named `max-jobs-per-second`, and we specify `10` as a default value if no value is available.

```ruby
value, wasFound := client.GetIntValueWithDefault("max-jobs-per-second", 10, prefab.ContextSet{})
```

If `max-jobs-per-second` is available, `wasFound` will be `true` and `value` will be the value of the config. If `max-jobs-per-second` is not available, `wasFound` will be `false` and `value` will be `10`.

</details>

## Testing

For testing, your best approach is to set up a client with in-memory configs:

```go
configs := map[string]interface{}{
	"string.key": "value",
	"int.key":    int64(42),
	"bool.key":   true,
	"float.key":  3.14,
	"slice.key":  []string{"a", "b", "c"},
	"json.key": map[string]interface{}{
		"nested": "value",
	},
}

client, err := prefab.NewClient(prefab.WithConfigs(configs))
```

## Notable pending features

The following notable features are still in-progress for the Go client:

- Telemetry
- Loading from a JSON dump data source (e.g. downloaded via [the CLI](../tools/cli#download))
- [Editor Tools](../tools/editor-tools) support
