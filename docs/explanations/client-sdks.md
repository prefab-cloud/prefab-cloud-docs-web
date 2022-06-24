---
title: How Client SDKs Work
sidebar_label: Client SDKs
sidebar_position: 7
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## How Client SDK

![image](/img/docs/client-sdks/client-sdks.png)

Note that evaluation happens server side. 

This helps prevent potentially sensitive data from leaking out of your system.


[See server SDKs to compare](/docs/explanations/server-sdks.md)

## Client Side Reliability

Each user that needs flags evaluated is a different request to Prefab. So what happens if prefab goes down? 

All active users will be unaffected, because they will have cached values in the CDN.

After a configurable timeout, all new users will receive default values.
