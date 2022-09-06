---
title: How Server SDKs Work
sidebar_label: Server SDKs
sidebar_position: 1
---

## SDK Architecture

The Prefab server side SDK are all built with the 3 goals in mind: 
1. Very fast lookups that do not require any remote calls. 
2. Being highly resilient in the case of outtages
3. Near instant updates when changes are made

The architecture to do this looks like this:

![image](/img/docs/server-sdks/server-sdks.png)

Your code will instantiate a singleton of a PrefabClient. This client starts will fetch the latest configuration, trying 
multiple sources in case of errors. Once it gets a connection it will unlock and be available for your code. 

The client will also start a streaming connection to the APIs to pull down new changes. 

Additionally, the SDK will poll for updates as a resiliency measure.

Note that the evaluation is always happening in process in your application. 
Feature flags are stored in process so are lightning fast (no API calls when you access them).

[See Client SDKs to compare](/docs/explanations/client-sdks.md)

## Implementation

When your feature flag client boots, it creates a local thread safe hashmap which will hold the config. 
The general purpose Prefab config system will then push & pull changes down to your clients.
The expected latency is < 100 ms.

Feature flags are built on top of the Prefab config store so all reliability notes are applicable for Feature Flags as well.
