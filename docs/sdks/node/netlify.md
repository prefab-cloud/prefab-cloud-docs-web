---
title: Netlify
---

## Choosing an Approach

The first step is to choose between a client-side style or server-side style approach. We've written a blog post that goes into detail about [choosing how to use Prefab with Netlify](https://prefab.cloud/blog/feature-flags-for-netlify-functions/).

### Feature Flags in Netlify: The Browser-Like Approach

A practical solution is to treat Netlify functions similar to a browser. Prefab's [Javascript client](https://docs.prefab.cloud/docs/sdks/javascript), for instance, caches flag evaluations per user in a CDN. Here's a sample code snippet for this approach:

```javascript
import { prefab, Context } from "@prefab-cloud/prefab-cloud-js";

export default async (req, context) => {
  const clientOptions = {
    apiKey: process.env.PREFAB_API_KEY,
    context: new Context({ user: { key: 1234 } }),
  };

  await prefab.init(clientOptions);
  if (prefab.get("my-flag")) {
    // Your code here
  }
  return new Response("ok");
};
```

In our testing from a Netlify function we see results around a 50ms latency initially and around then 10ms for each subsequent request for the same context. That may be too slow for some applications, but it's a good starting point and very easy to set up.

The nice thing about this solution is that you're going to get instant updates when you change a flag. The next request will have up to date data.

### The Server-Side Alternative

Alternatively, you can implement a server-side strategy using the Prefab [NodeJS](https://docs.prefab.cloud/docs/sdks/node) client.
The key will be configuring our client to disable background updates and background telemetry, then performing an update on our own timeline.

Here's a sample code snippet for this approach:

```javascript
import { Prefab } from "@prefab-cloud/prefab-cloud-node";

var prefab = new Prefab({
  apiKey: process.env.PREFAB_API_KEY,
  enableSSE: false, // we don't want any background process in our function
  enablePolling: false, // we'll handle updates ourselves
  collectLoggerCounts: false, // turn off background telemetry
  contextUploadMode: "none", // turn off background telemetry
  collectEvaluationSummaries: false, // turn off background telemetry
});

// initialize once on cold start
await prefab.init();

export default async (req, context) => {
  const { userId } = context.params;
  const prefabContext = { user: { key: context.userId } };

  return prefab.inContext(prefabContext, (prefab) => {
    if (prefab.get("my-flag")) {
      // Your code here
    }

    // ever 60 seconds, check for updates in-process
    updateIfStalerThan(60 * 1000);
    return new Response("ok");
  });
};

export const config = { path: "/users/:userId" };
```

With this approach, most of our requests will be fast, but we'll have a periodic update that will take a bit longer. This is about 50ms in my testing from a Netlify function. We're entirely in control of the frequency here, so it's a judgment call on how real-time you want your feature flag updates. You could even disable the updates altogether if tail latency is of utmost concern and you didn't mind redeploying to update your flags.

## Dynamic Logging

### The Code We Want To Debug

Here's a really basic skeleton of a Netlify function. It's a simple function that takes a user id from the url and returns some data from the database. Let's pretend it's misbehaving and we need to debug it.

We've added two `console.log` statements, but this probably isn't shippable as is because, at high throughput, we're going to print out way too much logging.

```javascript
export default async (req, context) => {
  const { userId } = context.params;

  var sql = "SELECT * FROM table WHERE user_id = $1";
  console.log(`running the following SQL ${sql}`, { userId: userId });

  db.run(sql, [userId], function (err, rows) {
    console.log("query returned", { rows: rows });
    return new Response("200 Okey-dokey");
  });
};

export const config = {
  path: "/users/:userId",
};
```

### Swap Logging to Prefab

Rather than use a console.log, we will create a Prefab logger with the name `netlify.functions.hello` and the default level of `warn` so we don't get too much output.

We can replace our `console.log` with some `logger.debug` and `logger.info`, and now it's safe to deploy. They won't emit logs until we turn them on.

```javascript
const logger = prefab.logger("netlify.functions.hello", "warn");

// simple info logging
logger.info(`getting results for ${userId}`);

var sql = "SELECT * FROM table WHERE user_id = $1";

// more detailed debug logging
logger.debug(`running the following SQL ${sql} for ${userId}`);
db.run(sql, [userId], function (err, rows) {
  logger.debug("query returned", { rows: rows });
  return new Response("200 Okey-dokey");
});
```

This logging will _not_ show up in your Netlify logs yet, because the logger is `warn` but the logging here is `info` and `debug`. That means it's safe to go ahead and deploy.

### Listen for Changes

Since we turned off the background polling, we'll want to update prefab in line. We can do this by calling the `updateIfStalerThan` with our desired polling frequency. This is a quick check to a CDN, taking around 40ms (once every minute).

```javascript
prefab.updateIfStalerThan(60 * 1000); // check for new updates every minute
```

We can now toggle logging in the Prefab UI!

### Adding Per User Targeting

Now we'll go deeper and add per user targeting. This will let us laser focus in on a particular problem.

To add per user targeting, we need to tell Prefab who the current user is. We do this by setting some [context](https://docs.prefab.cloud/docs/explanations/concepts/context) for Prefab so it can evaluate the rules. We should also move the logger creation inside this context so that the logger has this context available to it.

```javascript
// take the context from our url /users/123 and give it to prefab as context
const { userId } = context.params;
const prefabContext = { user: { key: userId } };

// wrap our code in this context
prefab.inContext(prefabContext, (prefab) => {
  // logger goes inside the context block
  const logger = prefab.logger("netlify.functions.hello", "warn");

  logger.info(`getting results for ${userId}`);

  var sql = "SELECT * FROM table WHERE user_id = $1";

  logger.debug(`running the following SQL ${sql} for ${userId}`);
  db.run(sql, [userId], function (err, rows) {
    logger.debug("query returned", { rows: rows });
    return new Response("200 Okey-dokey");
  });
});
```
