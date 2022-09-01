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

Note that the variant determined by percentage rollouts is "sticky" to the provided lookup key and won't change unless the lookup key changes or the percentage values change.

## Available Rules

| Name          | Function                 | Example usage                                                              |
|---------------|--------------------------|----------------------------------------------------------------------------|
| `Always True` | Always matches | An `Always True` rule that serves `true` means a feature is always enabled.<BR />&nbsp;<BR />`Always True` serving `false` 50% of the time and `true` 50% of the time works like a coin flip. |
| `Lookup Key In` | Use `Lookup Key In` to target specific users.<BR/>&nbsp;<BR/>Matches when the lookup key for the user/visitor is in specified comma-separated list | `Lookup Key In` with `Criteria Values` of `user-1234,user-5678` will match when the lookup key is `user-1234` or `user-5678` but not for other lookup keys. |
| `Lookup Key Not In` | Use `Lookup Key Not In` to exclude specific users.<BR/>&nbsp;<BR/>Matches when the lookup key for the user/visitor is not in specified comma-separated list | `Lookup Key Not In` with `Criteria Values` of `user-1234,user-5678` will match any lookup key except `user-1234` or `user-5678`. |
| `In Segment` | Segments are reusable sets of rules. `In Segment` matches if any of the segment's rules match. | If you've built a segment for "beta users", you can choose "beta users" for your `Criteria Values` and the "beta users" ruleset will determine which variant is shown. |
| `Not In Segment` | Segments are reusable sets of rules. `Not In Segment` matches if none of the segment's rules match. |  If you've built a segment for "freebie users", you can choose "freebie users" for your `Criteria Values` and `Not In Segment` will match non-freebie users. |
| `Property Is One Of` | Use `Property Is One Of` to target users with specific attributes. | If you set `Criteria Property` to `subscription` and `Criteria Values` to `pro,advanced` then it will match users with a `pro` or `advanced` subscription. |
| `Property Is Not One Of` | Use `Property Is Not One Of` to target users who do not match a specific attribute. | If you set `Criteria Property` to `subscription` and `Criteria Values` to `pro,advanced` then it will match users who have neither a `pro` nor an `advanced` subscription. |
| `Property Ends With One Of` | Use `Property Ends With One Of` to target users with an attribute that ends with a value. | If you set `Criteria Property` to `email` and `Criteria Values` to `@example.com` then it will match users who have an `email` ending with `@example.com` |
| `Property Does Not End With One Of` | Use `Property Does Not End With One Of` to target users with an attribute that does not end with a value. | If you set `Criteria Property` to `email` and `Criteria Values` to `@gmail.com,@yahoo.com` then it will match users who have an `email` that does not end with `@gmail.com` or `@yahoo.com`. |
