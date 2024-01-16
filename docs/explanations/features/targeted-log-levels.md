---
title: Targeted Log Levels
sidebar_label: Targeted Log Levels
sidebar_position: 1
---

SDK clients provide wrappers for loggers to enable dynamic and targeted log levels.

## Dynamic log levels

Changing log levels in an application is typically painful and involves editing files and redeploying.

Prefab allows you to change your log level at any time at any place in your stack. You can set levels anywhere in your application's tree (down to the function-level).

![dynamic levels](/img/docs/explanations/dynamic-levels.png)

## Targeting

Dynamic log levels gain super powers when combined with our [rules engine](rules-and-segmentation). By adding [context](/docs/explanations/concepts/context) about the current user/request/device/etc. you can get exactly the verbosity you want to track down tricky bugs without blowing through your log retention bill.

![targeted log rules](/img/docs/explanations/targeted-log-rules.png)

![targeted log level](/img/docs/explanations/targeted-log-level.png)
