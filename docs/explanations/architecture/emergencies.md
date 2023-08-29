---
title: Emergencies
sidebar_label: Emergencies
sidebar_position: 4
---

## Emergencies

Prefab is designed to be extremely [resilient](/docs/explanations/architecture/resiliency). The client will try to pull live values from:

1. A Fastly CDN backed by the API
2. The Prefab API
3. Prefab Streaming APIs

This strategy ensures the utmost reliability for your clients being able to pull live values, even in the case of a
major outage of the Prefab APIs.

But wait, there's more.

In the terrible occurrence that the Prefab APIs are down for an extended period of time, your services should be able to bootstrap themselves and load from the CDN, but you would be unable to modify configuration.

In the event that one or all of these services become unavailable, the Prefab SDKs store a local copy of all data pulled from the remote endpoints, so it can continue to serve the last available live data, but would not be able to fetch or push new data until the APIs are restored.
