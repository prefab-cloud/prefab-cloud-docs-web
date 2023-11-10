---
title: Namespaces
sidebar_label: Namespaces
sidebar_position: 4
---

## Targeting Dynamic Configuration With Namespaces

Namespaces is just a useful way to use context to allow you to share config amongst many services while still allowing you to override when necessary.

For instance, let's assume that all our code shares an HTTP library. We can configure the HTTP library to get its retry count & timeout duration from our config store.
We'll set `http.connection.retries` and `http.connection.timeout`.

Each of our applications will declare their `application.key`. For instance our authorization service may have the following config:

```ruby
  around_action do |_, block|
    Prefab.with_context(prefab_context, &block)
  end

  def prefab_context
    ctx = {
      application: {
        key: "authorization-service",
        type: "web"
      },
    }
  end  
 ```

All of our apps should add the appropriate service name in their `application.key`.

:::tip
It's likely that you have a good namespace already defined as a tag on your pod. Something like `(ENV['DEPLOYED_NAME'] || "").gsub("-",".")` may be just what you're looking for.
:::

Our client code can now look for `http.connection.timeout` but we can override it for specific applications. 

Let's imagine that the UserService starts to go down because too many requests are timing out to our billing service. We can replicate a circuit breaker pattern here by quickly reducing the `http.connection.timeout` when `application.key` is `user-service` to solve the issue without pushing code or restarting. 

In that example, we'd actually be changing all outgoing HTTP timeouts from the user service, which is probably more than we'd like. To be more precise, we can add additional just-in-time (JIT) context to the timeout lookups to allow us even more fine grained control.

```ruby
def call_billing_service
  conn = Faraday.new do |conn|
    conn.options.timeout = Prefab.get("http.connection.timeout", { http: { endpoint: "billing" } })
  end
  response = conn.get("https://billing-service.example.comcom")
end  
```

With this JIT context, we can now target the `http.connection.timeout` for only calls from the user service to the billing service, by targeting both `app.key` and `http.endpoint`.
