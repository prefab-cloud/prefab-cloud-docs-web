---
title: CLI
sidebar_label: CLI
---

# CLI

The Prefab CLI provides powerful tools for creating, modifying, and getting information about your configuration and flags.

## Installation

On a system with Node version 18+, run

```
npm install -g @prefab-cloud/prefab
```

## Usage

See `prefab --help` for all the available commands. `prefab [COMMAND] --help` will give you detailed information about a given command.

`prefab` is designed for humans first, but all commands support a `--json` flag to output JSON instead.

### Providing your API Key

You must export `PREFAB_API_KEY` or provide your API key via the `--api-key=XYZ` flag.

<details><summary>Using the 1password cli for your API key</summary>

To use the [1password cli](https://developer.1password.com/docs/cli/get-started) for this, you can do the following (replace the `op://...` with the secret reference for your API key).

```
prefab --api-key=(op read "op://Private/Prefab API KEY/credential")
```

</details>

### change-default

`prefab change-default NAME` allows you to change the default value for an environment. Any rules defined for that environment will still apply; only the default is changed.

This can be particularly helpful for flipping a flag on or off for everyone.

Example:

`prefab change-default my.flag.name --value=true --environment=staging`

### create

`prefab create NAME` creates a new flag or config in Prefab. You can use this to create basic values, encrypted secrets, or values provided by ENV vars.

Example: `prefab create my.new.string --type string --value="hello world" --secret`

### download

`prefab download` will download a datafile for a given environment. [Datafiles](/docs/explanations/concepts/testing) are helpful for offline testing, CI, and running your own JS/React endpoint with the [`serve`](#serve) command.

Example:

`prefab download --environment=test`

### `get`

`prefab get NAME` will give you the value for a config in the environment tied to your API key.

Example: `prefab get aws.bucket`

#### Interpolating a value from Prefab

Since the CLI is a well-behaved citizen of the command line, you can use it to compose other commands.

Here's an example command to download a file from s3 using the [aws cli](https://aws.amazon.com/cli/). Prefab values are interpolated for the aws key and bucket name.

```
aws s3api get-object \
  --bucket $(prefab get aws.bucket) \
  --key $(prefab get aws.db.backup.filename) \
  db.tgz
```

As you'd expect, you can similarly use `prefab` in a pipeline with `xargs` and similar.

### info

`prefab info NAME` will show details about an item in Prefab. Example output:

```
prefab info aws.bucket

https://app.cloud/account/projects/XYZ/configs/aws.bucket

- Default: false
- Staging: true
- Production: [see rules] https://app.cloud/account/projects/XYZ/configs/aws.bucket?environment=588

Evaluations over the last 24 hours:

Production: 34,789
- 33% - false
- 67% - true

Staging: 17,138
- 100% - true

Development: 7
- 100% - false
```

### list

`prefab list` will show the names of items in your Prefab account. You can pass flags to filter this to only show items of a specific type (e.g. segments).

### override

`prefab override` lets you override the value for a config or feature flag for your prefab.cloud user. This is especially helpful for testing both sides of a feature flag.

Are you using a backend key for your server code and a frontend key for your UI? No problem; this override will apply to any environment using an API key created by your prefab.cloud user.

Example: `prefab override my.flag.name --value=true`

### serve

`prefab serve` will start a local server to serve up a local datafile that React and JS clients can talk to. See `prefab download` for more.

```
prefab serve prefab.test.588.config.json
Server is listening on 3099. Press ctrl-c to stop.
```

Example Dockerfile

```
FROM node:20
WORKDIR /app
RUN npm i -g @prefab-cloud/prefab
COPY prefab.Production.589.config.json /app
ENV PREFAB_LOCAL_ONLY=true
EXPOSE 9898
CMD prefab serve prefab.Production.589.config.json --port=9898
```
