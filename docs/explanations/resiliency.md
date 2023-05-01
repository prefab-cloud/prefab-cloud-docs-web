---
title: Reliability
sidebar_label: Reliability
sidebar_position: 3
---

## What if Prefab.cloud goes down?

Uptime is incredibly important to us at Prefab but configuration is critical infrastructure so it's important to have a belt & suspenders approach.
A couple sets of suspenders actually.

### 1. Server SDK Clients run on local copies of data

Local Prefab clients store all config locally so they are robust to network blips or outages.

If a connection is lost for any reason, your services continue to work as is because they keep config locally,
but they will not be able to receive new configuration. (We'll get to suspenders for this in #)

### 2. Starting New Clients

Your services don't run indefinitely however. New pods or servers will spin up and they need to pull down configuration as they boot.

Enter the beauty of immutable distributed logs. They are "embarrassingly cacheable". One single blob of bytes can describe your entire configuration
and we can aggressively cache this in CDNs. As long as your services can still connect to Fast.ly or Cloudflare you services can get the latest configuration.

#### Belts & Suspenders & More Suspenders

Here's how the load order works:

1. First, the SDKs make a request to the Prefab HTTP APIs, cached by [Fast.ly](https://Fast.ly). This cache is soft purged when you make configuration updates.
2. If this fails, the SDKs will make a request to the Prefab GRPC APIs, which are running on the same Prefab infrastructure, but are a separate service.
3. If this fails, the SDKs will make a request to the Prefab JSON APIs. This would help in the event of a Fast.ly outage.

That's a lot of redundancy and we've got more coming soon.

There's more discussion of these bootstrapping files in [bootstrapping](bootstrapping.md).
