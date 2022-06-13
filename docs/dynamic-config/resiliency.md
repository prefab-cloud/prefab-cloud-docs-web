---
title: Resiliency
sidebar_label: Resiliency
sidebar_position: 4
---



What if Prefab.cloud goes down?
Uptime is incredibly important to us at Prefab.Cloud but configuration is critical infrastructure so it's important to have a belt & suspenders approach.

Prefab.Cloud clients store all config locally so they are robust to network blips or outtages. If Prefab.Cloud is unavailable all clients will continue to work as is because they keep config locally, but they will not be able to receive new configuration.

If Prefab.Cloud is unavailable new clients will be able to start as long as they can read from Amazon S3. Business & Enterprise plans store an updated copy of your config is always available in S3 so clients can bootstrap off this highly available source.

Startup
On startup, config clients load config in the following order:

Classpath Config Files matching .prefab*config.yaml
PrefabCloud API. If unavailable & included plan, snapshots from S3
PrefabCloud API Streaming updates if included in plan
Local Override Files matching .prefab*config.yaml


Reconfiguring Config File Locations
The classpath config file location can be changed with PREFAB_CONFIG_CLASSPATH_DIR

The local override config file location can be changed with PREFAB_CONFIG_OVERRIDE_DIR

Instant Updates
With instant updates, config updates will typically arrive in < 10ms. In some very rare failure scenarios it's possible that a broadcast of configuration updates will not reach your clients. To make sure that clients don't miss that update forever, there is a secondary suspenders that will pull from the API/S3 every 60 seconds.
