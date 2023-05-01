---
title: Rules and Segmentation
sidebar_label: Rules and Segmentation
sidebar_position: 3
---

Prefab provides powerful rules that can you can compose to target exactly the users you're interested in.

Segments are reusable sets of rules that you can use across multiple feature flags.

:::tip
Rules are evaluated in order. You can drag and drop rules to rearrange them. The first matching rule determines which variant is served.
:::

When a rule matches, you can either:

- Return a specific variant (e.g. `true`, `false`, or `yellow`)
- Return a variant based on a percentage (e.g. `true` 10% of the time and `false` 90% of the time)

Note that the variant determined by percentage rollouts is "sticky" to the provided lookup key and won't change unless the key changes or the percentage values change.

## Available Rules

| Name          | Function                 | Example usage                                                              |
|---------------|--------------------------|----------------------------------------------------------------------------|
| `Property Is One Of` | Use `Property Is One Of` to target users with specific attributes. | If you set `Criteria Property` to `subscription` and `Criteria Values` to `pro,advanced` then it will match users with a `pro` or `advanced` subscription. |
| `Property Is Not One Of` | Use `Property Is Not One Of` to target users who do not match a specific attribute. | If you set `Criteria Property` to `subscription` and `Criteria Values` to `pro,advanced` then it will match users who have neither a `pro` nor an `advanced` subscription. |
| `Property Ends With One Of` | Use `Property Ends With One Of` to target users with an attribute that ends with a value. | If you set `Criteria Property` to `email` and `Criteria Values` to `@example.com` then it will match users who have an `email` ending with `@example.com` |
| `Property Does Not End With One Of` | Use `Property Does Not End With One Of` to target users with an attribute that does not end with a value. | If you set `Criteria Property` to `email` and `Criteria Values` to `@gmail.com,@yahoo.com` then it will match users who have an `email` that does not end with `@gmail.com` or `@yahoo.com`. |
