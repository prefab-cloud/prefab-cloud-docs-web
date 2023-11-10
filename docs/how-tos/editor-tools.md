---
title: Editor Tools
sidebar_label: Editor Tools
---

## VSCode

You can install the extension by pressing cmd+shift+x to open the extensions sidebar. Search for Prefab and click install.

![image](/img/docs/how-tos/vscode-install.jpg)

You’ll need to enter a production API key. The extension will read your `.env` or `.envrc` file to find `PREFAB_API_KEY`. 

Alternatively, you can find settings for the extension by clicking on the gear on the Prefab extension and choosing “Extension Settings”


## Features

### Autocompletion
Just start typing and you'll see your flag and config keys autocomplete. Create simple boolean flags with one click if the flag doesn't exist yet.
![image](/img/docs/how-tos/lsp-autocomplete.gif)

### Hover
Hovering over a configuration or flag will show you the current values of the flag in all environments. If it has been deployed and had time to send back evaluation telemetry, you'll also see evaluation data for the flag.
![image](/img/docs/how-tos/lsp-puma-hover.jpg)

### Personal Overrides
Personal overrides allow you to override a feature flag for your local development environment. This is useful for testing a feature flag without changing the flag for other developers. To do this, make sure that you've generated your own `PREFAB_API_KEY` for development. API keys are tied to your account which lets Prefab set the override for you. Overrides are simple rule matches to a `prefab.user-id` context key that Prefab sets for you. This is visible in the Prefab UI.
![image](/img/docs/how-tos/lsp-personal.gif)
