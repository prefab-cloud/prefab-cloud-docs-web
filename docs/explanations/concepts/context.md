---
title: Context
sidebar_label: Context
sidebar_position: 3
---

Contexts let you provide Prefab with knowledge about the current

- request
- device
- user
- server
- etc.

Contexts allow you to set this knowledge to be used when evaluating feature flags and [targeted log levels](./targeted-log-levels) without having to pass your context data deeply around your app.

In a web app, the life-cycle of contexts are the life-cycle of the request. You set context at the beginning of the request and then it is cleared out when the request finishes.

For feature flags, context usage is optional but a useful ergonomic -- you can always pass in your context just-in-time to your FF evaluations.

For usage examples, see your relevant SDK client documentation.

## Global context

To avoid deeply passing around awareness of the current user, request, etc., Prefab allows you to set Context globally. The mechanisms for doing so will vary by language and framework.

When global context is set, log levels and feature flags will evaluate in that context. If you provide just-in-time context to your FF evaluations, it will be merged with the global context. More on merging below.

<Tabs groupId="lang">
<TabItem value="ruby" label="Ruby">

We can use a block to specify the context for the duration of the block.

```ruby
context = { device: { mobile: mobile? } }

$prefab.with_context(context) do
  # ...
end
```

</TabItem>
<TabItem value="ror" label="Ruby on Rails">

We can use an `around_action` to set our context for the life-cycle of the request.

```ruby

class ApplicationController < ActionController::Base
  around_action :set_prefab_context

  def set_prefab_context
    $prefab.with_context(context) do
      yield
    end
  end

  def context
    {
      device: {
        mobile: mobile?
      }
      user: current_user&.to_context
      # ...
    }
  end
end

```

Learn more with the [Prefab + Rails example app](https://github.com/prefab-cloud/example-rails-app)

</TabItem>

<TabItem value="micronaut" label="Micronaut">

In your Prefab options, set your Prefab Context store to be your ServerRequestContextStore.

```java
options.setContextStore(new ServerRequestContextStore());
```

Next we add a [filter](https://github.com/prefab-cloud/example-micronaut-app/blob/configure-prefab-context/src/main/java/com/example/prefab/PrefabContextFilter.java) to add a prefab context based on the currently "logged in" user.

```java
configClient.getContextStore()
      .addContext(PrefabContext.newBuilder("user")
          .put("id", user.id())
          .put("country", user.country())
          .put("email", user.email())
          .build()
      );
```

Learn more with the [Prefab + Micronaut example app](https://github.com/prefab-cloud/example-micronaut-app)

</TabItem>

<TabItem value="dropwizard" label="Dropwizard">

Use a `ContainerRequestFilter` to set the context for your request when the request begins

```java
public class PrefabContextAddingRequestFilter implements ContainerRequestFilter {
    private static final Logger LOGGER = LoggerFactory.getLogger(PrefabContextAddingRequestFilter.class);
    private final ConfigClient configClient;

    @Inject
    public PrefabContextAddingRequestFilter(ConfigClient configClient) {
        this.configClient = configClient;
    }

    @Override
    public void filter(ContainerRequestContext containerRequestContext) throws IOException {
        final SecurityContext securityContext =
                containerRequestContext.getSecurityContext();
        if (securityContext != null) {
            Principal principal = securityContext.getUserPrincipal();
            if (principal instanceof User) {
                User user = (User) principal;
                LOGGER.info("will add pf context for {}", user);
                configClient.getContextStore().addContext(PrefabContext.newBuilder("User")
                        .put("name", user.getName())
                        .build());
            }
        }
    }
}
```

Then we'll add another `ContainerResponseFilter` to clear the context when the request finishes.

```java
public class PrefabContexClearingResponseFilter implements ContainerResponseFilter {
    private static final Logger LOGGER = LoggerFactory.getLogger(PrefabContexClearingResponseFilter.class);
    private final ConfigClient configClient;

    @Inject
    PrefabContexClearingResponseFilter(ConfigClient configClient) {
        this.configClient = configClient;
    }

    @Override
    public void filter(ContainerRequestContext containerRequestContext, ContainerResponseContext containerResponseContext) throws IOException {
        configClient.getContextStore().clearContexts();
        LOGGER.info("Cleared context");
    }
}
```

Learn more with the [Prefab + Dropwizard example app](https://github.com/prefab-cloud/example-dropwizard-app)

</TabItem>
</Tabs>

## Dot notation

When referencing fields from context, we use dot notation.

Given the context

```ruby
{
  user: {
    email: "test@example.com",
    tracking_id: user.tracking_id,
  },

  device: {
    mobile: true,
  },
}
```

You can reference mobile as `device.mobile` and tracking_id as `user.tracking_id` in the property field in the UI.

![dot notation in UI](/img/docs/explanations/dot-notation.png)

## Adding to and merging contexts

Contexts have keys. When you provide a key that conflicts with an existing context key, your new context values will clobber any previous values under that key.

Let's use this example as our initial context. It has two keys: "request" and "subscription"

```
{
  request: {
    mobile: true,
    country: "US"
  },
  subscription: {
    allow_overages: false,
    plan: "Pro"
  }
}
```

If we set the "request" context to `{ id: "f1e6461a" }` then we lose the `mobile` and `country` attributes of our "request" context. Our current context is now

```
{
  request: {
    id: "f1e6461a"
  },
  subscription: {
    allow_overages: false,
    plan: "Pro"
  }
}
```

If we provide JIT context to a flag then the JIT keys clobber the current context keys only for the duration of the evaluation

```ruby
jit_context = {
  subscription: { allow_overages: true },
  user: { admin: true }
}

$prefab.enabled?("my.flag.name", jit_context)
```

That `enabled?` check uses this context

```
{
  request: { id: "f1e6461a" },
  subscription: { allow_overages: true },
  user: { admin: true }
}
```

But then the current context after that evaluation is still

```
{
  request: {
    id: "f1e6461a"
  },
  subscription: {
    allow_overages: false,
    plan: "Pro"
  }
}
```

You can, of course, do your own merging before re-setting the context key.
