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

## Dot notation

When referencing fields from context, we use dot notation.

Given the context

```ruby
{
  user: {
    email: "test@example.com",
    tracking_id: user.tracking_id,
  }

  device: {
    mobile: true,
  },
}
```

You can reference mobile as `device.mobile` and tracking_id as `user.tracking_id` in the property field in the UI.

![dot notation in UI](/img/docs/explanations/dot-notation.png)
