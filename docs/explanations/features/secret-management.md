---
title: Secret Management
sidebar_label: Secret Management
sidebar_position: 2
---

Prefab has zero-knowledge support for [sharing your secrets](https://prefab.cloud/features/secret-management/) between developers and between your different applications. We use a simple & straightforward cryptography story is as straightforward as it secrets can be. This simplifies sharing secrets for local development and sharing secrets between multiple applications or languages because you only need a single secret.

## How Does It Work

1. You create a `secret key` with the CLI. This is a series of random bytes that you keep secret.
2. This `secret key` needs to be available on developer machines to encrypt and in deployed environments to decrypt, you do this via your existing process for sharing environment variables.
3. You use our [CLI](/docs/tools/cli) to encrypt the string you want to keep secret. 
4. Prefab will share the encrypted contents with your applications.
5. Your applications will decrypt the contents with the `secret key`.


## Walkthrough

Prefab secret management uses standard Prefab dynamic configuration to store and share your secrets between your applications.

In particular, it uses two special types of configuration attributes: `decryptWith` and `provided`. Let's see how these work together.

### Step 1: Create an Encryption Key

Prefab allows you to declare that a configuration value will be provided by an environment variable. Prefab will store a config that is kind of an empty vessel2039. It is a pointer that says "find my value from this ENV VAR".

We want Prefab to have zero knowledge of your encryption key, so we'll use these provided values so you don't have to tell us the encryption key.

#### Create the empty vessel

```bash
prefab create prefab.secrets.encryption.key --env-var=PREFAB_SECRET_KEY_DEFAULT --type string --confidential
```

This creates:
1. A config called `prefab.secrets.encryption.key`
2. That will resolve to `PREFAB_SECRET_KEY_DEFAULT`
3. That won't report/print the value because it's `--confidential`

#### Put something in the vessel locally

We'll generate a secure series of random bytes to be our encryption key.
```bash
> prefab generate-new-hex-key
17f65155e45a42777d89091e40cddc5541ac4851c44134f86db7a408a7fea5a8
```

Now we put this into our environment using something like a `.env.local` file.
```bash
#.env.local
PREFAB_SECRET_KEY_DEFAULT=17f65155e45a42777d89091e40cddc5541ac4851c44134f86db7a408a7fea5a8
```

If we run our application now and call `Prefab.get("prefab.secrets.encryption.key")` we'll get `17f65155e45a42777d89091e40cddc5541ac4851c44134f86db7a408a7fea5a8`.


## Step 2: Encrypt Something

#### Encrypt a value

```bash
prefab create my.api.key --type string --value="sample api key" --secret
```

This will:
1. Assume that we are using the value of `prefab.secrets.encryption.key` to encrypt.
2. Pull the key from our environment.
3. Use that key to encrypt `sample api key`
4. Push and encrypted blob to Prefab under the key `my.api.key`


Here's a pictoral representation of what we've done so far

```mermaid
graph
  subgraph Configs
    subgraph my.api.key
      s[Value=ENCRYPTED<br/>decryptWith=prefab.secrets.encryption.key]
    end
    subgraph pk[prefab.secrets.encryption.key]
      e[ProvidedBy=PREFAB_SECRET_KEY_DEFAULT]
    end
    subgraph normal[Example Non-secret Config String]
      n[Value=TheValue]
    end
  end
  subgraph .env.local
    ev[PREFAB_SECRET_KEY_DEFAULT=ABCDE12345]
  end
  ev-->e
  pk-->s
```

## Step 3: Using the Secret

Locally, we're all set. We can use the language appropriate form of `Prefab.get("my.api.key")` and the library will decrypt our secret. 

To use the secret in another environment, you just need to get `PREFAB_SECRET_KEY_DEFAULT=17f65155e45a42777d89091e40cddc5541ac4851c44134f86db7a408a7fea5a8`
set in that environment.

## Separate Keys For Different Environments

So far, we've shared the same secret for development and staging, but it's very likely you'll want a different key for your production secrets. This is no problem. The nature of `provided` means that our `prefab.secrets.encryption.key` can resolve to different ENV vars in different environments.

#### Generate a second secret
```bash
> prefab generate-new-hex-key
17f65155e45a42777d89091e40cddc5541ac4851c44134f86db7a408a7fea5a8
```

#### Put that secret into a separate env var

Why use a second env var? Well, you aren't required to. You could share the same name for the env var in all your environments. 

The trick is that this can make using the CLI locally more challenging. Locally, the CLI will need to be able to encrypt for both the default and production environments. We find it is easier to have them use different names so they don't collide locally. Here's what that looks like

```bash
#.env.local
PREFAB_SECRET_KEY_DEFAULT=17f65155e45a42777d89091e40cddc5541ac4851c44134f86db7a408a7fea5a8
PREFAB_SECRET_KEY_PRODUCTION=994899132443777d89091e40cddc5541abdeff123830488a7fea173b3b1b2b38
```

#### Update the prefab.secrets.encryption.key to look for the other ENV var in production
```bash
$ prefab change-default --confidential
? Which item would you like to change the default for? prefab.secrets.encryption.key
? Which environment would you like to change the default for? Production
Default value: PREFAB_SECRET_KEY_PRODUCTION
Confirm: change the default for prefab.secrets.encryption.key in Production to `PREFAB_SECRET_KEY_PRODUCTION`? yes/no: yes
✔ Successfully changed default to `PREFAB_SECRET_KEY_PRODUCTION` (confidential)
```

This is now the mapping of environment to ENV Var. 

```mermaid
graph
  subgraph YourOrg
    subgraph PREFAB_SECRET_KEY_DEFAULT
      Development
      Test
      Staging
    end
    subgraph PREFAB_SECRET_KEY_PRODUCTION
      Production
    end
   
  end
```

#### Set a Secret in Production

```bash
$ prefab change-default
? Which item would you like to change the default for? my.api.key
? Which environment would you like to change the default for? Production
Default value: sk_live_123
Confirm: change the default for my.new.string in Production to `sk_live_123`? yes/no: yes
✔ Successfully changed default to `sk_live_123`
```

Note: You can use as many encryption keys as you want. You could have 1 per env or multiple per env to have smaller trust circles.



## Full Example Diagram

```mermaid
graph
  subgraph Configs
    subgraph StripeAPIKey
      subgraph DevS[Development/Staging]
        s[Value=ENCRYPTED_WITH_ABC...<br/>decryptWith=prefab.secrets.encryption.key]
      end
      subgraph ProdS[Production]
        s2[Value=ENCRYPTED_WITH_ZWX...<br/>decryptWith=prefab.secrets.encryption.key]
      end
    end
    subgraph pk[prefab.secrets.encryption.key]
      subgraph Dev[Development/Staging]
        e[ProvidedBy=PREFAB_SECRET_KEY_DEFAULT]
      end
      subgraph Production
        p[ProvidedBy=PREFAB_SECRET_KEY_PRODUCTION]
      end
    end
  end
  subgraph Development
      subgraph .env.local
        ev[PREFAB_SECRET_KEY_DEFAULT=ABCDE12345]
      end
  end
  subgraph Staging
      sv[PREFAB_SECRET_KEY_DEFAULT=ABCDE12345]
  end
  subgraph ProductionEnv[Production]
    pv[PREFAB_SECRET_KEY_PRODUCTION=ZWXY9876]
  end
  ev-->e
  pv-->p
  sv-->e
  pk-->s
  p-->s2
```


## How should I get the actual Secret keys passed around.

In order to share the `PREFAB_SECRET_KEY_DEFAULT` with developers, you can use a password manager such as 1Password or you can use one of the secure 1-time password sharing website like [1ty.me](https://1ty.me/) [onetimesecret](https://onetimesecret.com/) or [password.link](https://password.link/).

This will be the only secret you ever need to share amongst your developers going forward. 


## How do secrets work in  CI?

Because Prefab secret management uses the regular dynamic configuration, you'll use the same techniques to run in continuous integration environments which may be offline. The full guide is available in [Testing](/docs/explanations/concepts/testing). The only thing you'll need to remember is to make `PREFAB_SECRET_KEY_DEFAULT` available to processes in CI. 

