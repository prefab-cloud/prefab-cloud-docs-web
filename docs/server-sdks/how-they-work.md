---
title: How Server SDKs Work
sidebar_label: How they work
---

## Implementation
Feature flags are stored in process so are lightning fast (no API calls when you access them).

When your feature flag client boots, it creates a local hashmap which will hold the config. The general purpose Prefab config system will then push & pull changes down to your clients. The expected latency is 1 minute for Free and SideProject tiers. Instant updates are available for other plans with expected latency < 10 ms.

Feature flags are built on top of the Prefab config store so all reliability notes are applicable for Feature Flags as well, which will vary by service tier.

## Load Order

## Resiliency


## Emergency Overrides
