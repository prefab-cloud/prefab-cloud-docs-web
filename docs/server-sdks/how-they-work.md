---
title: How Server SDKs Work
sidebar_label: How they work
---

![image](/img/docs/server-sdks/server-sdks.png)

Note that the evaluation is always happening in process in your application. Feature flags are stored in process so are lightning fast (no API calls when you access them).

[See Client SDKs to compare](/docs/client-sdks/how-they-work)

## Implementation

When your feature flag client boots, it creates a local hashmap which will hold the config. 
The general purpose Prefab config system will then push & pull changes down to your clients.
The expected latency is < 100 ms.

Feature flags are built on top of the Prefab config store so all reliability notes are applicable for Feature Flags as well.

## Load Order

## Resiliency


## Emergency Overrides
