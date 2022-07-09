---
title: Resiliency
sidebar_label: Resiliency
sidebar_position: 2
---

## What if Prefab.cloud goes down?

Uptime is incredibly important to us at Prefab.Cloud but configuration is critical infrastructure so it's important to have a belt & suspenders approach. 
A couple sets of suspenders actualy.

### 1. Clients run on LocalStorage
LocalPrefab.Cloud clients store all config locally so they are robust to network blips or outages. 

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
3. If that fails, the SDKs  will hit [GoogleCloudStorage](https://cloud.google.com/storage). Your configuration is pushed here as you make updates and Google claims 99.999999999% of object durability here. Again, we front this with a Fast.ly CDN. This cache is soft purged when you make configuration updates. 
4. Finally, in the case of Fast.ly outage, we switch again try the to a secondary CDN ([Cloudflare](https://www.cloudflare.com/)) fronting the same GCS. This cache has a 10 min TTL.

That's a lot of redundancy. 

### 3. Emergency Override Updates
The 4 separate load strategies and many layers give us every level of confidence that the SDKs will be able to boot and pull the latest config without issue even if Prefab were to have a major outage.

If Prefab  were to suffer a major outage however, you would be left without a way to make any new updates to configuration until the outage was resolved. 
With this in mind, we've developed an emergency update solution.

On SDK initialization you can specify a URL of your own from which the SDKs should pull. This URL can your own S3 or GCS storage location. 
You can place a config bootstrap file in this bucket and it will have the highest precedence in the SDKs. 

This allows you to make emergency override updates without relying on any Prefab architecture at all.


Let's continue the discussion of these bootstrapping files in [bootstrapping](bootstrapping.md)
