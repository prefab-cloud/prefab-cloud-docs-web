---
title: Feature Opt-In
sidebar_label: Feature Opt-In
---

You've built a new feature and you're ready to ship it. How do you make sure it's ready for your users?

Test internally of course!

So first you get the VP of Sales to signup for a Prefab account and then...  Clearly that's not going to work. How can we **easily** let end users opt-in to a feature? 

There are a few parts to the problem: 

### 1. How do we know who to enable the feature for?

The way I like to do this is to have a magic URL parameter that is clear, copy-pasteable and obviously editable. 

Let's support `example.com/?features[v2-beta]=true`. If we Slack the VP of Sales a link with this in it, it should automatically put them in the beta group. If they want to get back out, they can just change the `true` to `false`.

<details className="">
<summary>Code</summary>

This code will parse anything that looks like `?features[___]=___` and store it as a "feature request". We don't want a magic URL that can force any feature flag we like, that would be too dangerous. By treating these as a "request" we retain the ultimate ability to decide if we want to honor the request or not in the feature flag UI, which is where it should be.

```javascript
// get any existing existing "featureRequests" from local storage
var featureReqs = localStorage.getItem("featureRequests") ? JSON.parse(localStorage.getItem("featureRequests")) : {};

// pass in url params eg ?features[v2-beta]=false
var urlParams = new URLSearchParams(window.location.search);
urlParams.forEach((value, key) => {
    if (key.startsWith('feature')) {
        var featureName = key.split('[')[1].split(']')[0]; // Extract 'v2-beta' from 'feature[v2-beta]'
        featureReqs[featureName] = value;
    }
});
```
</details>

### 2. Persist this information

For today, let's imagine a React app and we'll use the browser's local storage. We'll store a JSON object with the feature names as keys and the values as booleans.

<details className="">
<summary>Code</summary>

```javascript
// store
if (Object.keys(featureReqs).length !== 0) {
    localStorage.setItem('featureRequests', JSON.stringify(featureReqs));
}
```
</details>

### 3. Send this Context to Prefab for evaluation

Now we'll just send the feature requests along with the user's tracking id to Prefab like we would any other [context](/docs/explanations/concepts/context). We'll use the `featureRequests` key to create a rule that will enable the feature for this user.

<details className="">
<summary>Code</summary>

```javascript
const options = {
    apiKey: "CLIENT_API_KEY",
    context: new Context({
        user: { key: user.tracking_id },
        featureRequests: featureReqs // we can now create a rule IF featureRequests.v2-beta = true
    })
};

prefab.init(options).then(() => {

    if(prefab.isEnabled("v2-beta-flag")){
        $("#v2-beta").show();
    }
}
```
</details>

### 4. Configure our flag to respect this preference

Now we can create a rule that will enable the feature for anyone who has `featureRequests.v2-beta = true`.

![UI matching our context key](/img/docs/how-tos/optin-ff.jpg)

By being explicit about it in the UI, we've ensured that this capability only exists for flags where we'd like this to be true. 

The nice thing about this approach is that we shouldn't need to touch this code again. The next time we want to allow internal users to use a feature flag, we can just agree on the url param `?features[v3-redesign]=variant-a`, add the rule in the UI and we're good to go. 

## Putting it all together

Here's all of the code together. 

```javascript
const Context = window.prefabNamespace.Context;
const prefab = window.prefabNamespace.prefab;


// get any existing existing "featureRequests" from local storage
var featureReqs = localStorage.getItem("featureRequests") ? JSON.parse(localStorage.getItem("featureRequests")) : {}

// pass in url params eg ?features[v2-beta]=false
var urlParams = new URLSearchParams(window.location.search);
urlParams.forEach((value, key) => {
    if (key.startsWith('feature')) {
        var featureName = key.split('[')[1].split(']')[0]; // Extract 'v2-beta' from 'feature[v2-beta]'
        featureReqs[featureName] = value;
    }
});
// store
if (Object.keys(featureReqs).length !== 0) {
    localStorage.setItem('featureRequests', JSON.stringify(featureReqs));
}

const options = {
    apiKey: "CLIENT_API_KEY",
    context: new Context({
    user:
    {
        key: window.prefab_tracking_id,
    },
        featureRequests: featureReqs // we can now create a rule IF featureRequests.v2-beta = true
    })
};

prefab.init(options).then(() => {

    if(prefab.isEnabled("v2-beta-flag")){
        $("#v2-beta").show();
    }
};
```

## Note
This approach is a good solution for front end flags in JS or React. The same approach will also work for backend SDKs, swapping out local storage for a database or cache.

This approach will need to be modified if you are sharing flags across multiple applications or front end and backend. In that case, you'll need to find a way to give the same featureRequest context to all of your applications. This could be done as a column on the user table or as a cookie.
