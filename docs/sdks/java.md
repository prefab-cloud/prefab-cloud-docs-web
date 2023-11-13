---
title: Java
sidebar_label: Java
sidebar_position: 12
---

## Install the latest version

[Github](https://github.com/prefab-cloud/prefab-cloud-java) | [Maven Repository](https://mvnrepository.com/artifact/cloud.prefab/prefab-cloud-java)

```xml
<dependency>
    <groupId>cloud.prefab</groupId>
    <artifactId>client</artifactId>
    <version>0.3.13</version>
</dependency>
```

<details>
<summary>

#### Dependency-Reduced Version

</summary>

There's an optional uber-jar with shaded and relocated guava and failsafe dependencies

```xml
<dependency>
    <groupId>cloud.prefab</groupId>
    <artifactId>client</artifactId>
    <version>0.3.13</version>
    <classifier>uberjar</classifier>
</dependency>
```

</details>

## Initialize the client

### Basic Usage

```java
final PrefabCloudClient prefabCloudClient = new PrefabCloudClient(new Options());
```

### Typical Usage

We recommend using the `PrefabCloudClient` as a singleton in your application. This is the most common way to use the SDK.

```java
// Micronaut Factory
@Factory
public class PrefabFactory {

  @Singleton
  public PrefabCloudClient prefabCloudClient() {
    PrefabCloudClient.Options builder = new PrefabCloudClient.Options();
    return new PrefabCloudClient(builder);
  }

  @Singleton
  public FeatureFlagClient featureFlagClient(PrefabCloudClient prefabCloudClient) {
    return prefabCloudClient.featureFlagClient();
  }

  @Singleton
  public ConfigClient configClient(PrefabCloudClient prefabCloudClient) {
    return prefabCloudClient.configClient();
  }
}
```

## Feature Flags

For boolean flags, you can use the `featureIsOn` convenience method:

```java
public class MyClass {
  // assumes you have setup a singleton
  @Inject
  private FeatureFlagClient featureFlagClient;

  public String test(String key){
    boolean val = featureFlagClient.featureIsOn(key);
    return "Feature flag value of %s is %s".formatted(key, val);
  }
}
```

Feature flags don't have to return just true or false. You can get other data types using `get`:

```java
public class MyClass {
  // assumes you have setup a singleton
  @Inject
  private FeatureFlagClient featureFlagClient;

  public String test(String key){
    // highlight-next-line
    Optional<Prefab.ConfigValue> val = featureFlagClient.get(key);
    return "Feature flag value of %s is %s".formatted(key, val.orElse("no value found"));
  }
}
```

## Context

To finely-target configuration rule evaluation, we accept contextual information globally or request-scoped with the ContextStore which will affect all logging, featureflag and config lookups.

```java
prefabCloudClient.configClient().getContextStore().addContext(
                      PrefabContext.newBuilder("User")
                        .put("name", user.getName())
                        .put("key", user.getKey())
                        .build());
```

When global context is set, log levels and feature flags will evaluate in that context. Here are details on setting global context:

<Tabs groupId="lang">
<TabItem value="micronaut" label="Micronaut">

Add a [filter](https://github.com/prefab-cloud/example-micronaut-app/blob/configure-prefab-context/src/main/java/com/example/prefab/PrefabContextFilter.java) to add a prefab context based on the currently "logged in" user.

```java
@Filter(Filter.MATCH_ALL_PATTERN)
public class PrefabContextFilter implements HttpFilter {

    private final ConfigClient configClient;

    @Inject
    PrefabContextFilter(ConfigClient configClient) {
        this.configClient = configClient;
    }

    @Override
    public Publisher<? extends HttpResponse<?>> doFilter(HttpRequest<?> request, FilterChain chain) {

        request.getUserPrincipal(Authentication.class).ifPresent(authentication ->
                {
                    User user = (User) authentication.getAttributes().get(ExampleAuthenticationProvider.USER_ATTR);
                    configClient.getContextStore()
                            .addContext(
                              PrefabContext.newBuilder("user")
                                .put("id", user.id())
                                .put("country", user.country())
                                .put("email", user.email())
                                .build()
                            );
                }
        );
        return chain.proceed(request);
    }

    @Override
    public int getOrder() {
        return ServerFilterPhase.SECURITY.after() + 1;
        // run after the DefaultLoginFilter
    }
}
```

Prefab Context uses ThreadLocals by default. In event-based frameworks like micronaut, that won't work so configure the Prefab Context store to use `ServerRequestContextStore` instead.

```java
options.setContextStore(new ServerRequestContextStore());
```

Learn more with the [Prefab + Micronaut example app](https://github.com/prefab-cloud/example-micronaut-app)

</TabItem>

<TabItem value="dropwizard" label="Dropwizard">

Use a `ContainerRequestFilter` to set the context for your request when the request begins

```java
public class PrefabContextAddingRequestFilter implements ContainerRequestFilter {
    private static final Logger LOGGER = LoggerFactory.getLogger(PrefabContextAddingRequestFilter.class);
    private final ConfigClient configClient;

    @Inject
    public PrefabContextAddingRequestFilter(ConfigClient configClient) {
        this.configClient = configClient;
    }

    @Override
    public void filter(ContainerRequestContext containerRequestContext) throws IOException {
        final SecurityContext securityContext =
                containerRequestContext.getSecurityContext();
        if (securityContext != null) {
            Principal principal = securityContext.getUserPrincipal();
            if (principal instanceof User) {
                User user = (User) principal;
                LOGGER.info("will add pf context for {}", user);
                configClient.getContextStore().addContext(
                      PrefabContext.newBuilder("User")
                        .put("name", user.getName())
                        .build());
            }
        }
    }
}
```

Then we'll add another `ContainerResponseFilter` to clear the context from the ThreadLocal when the request finishes.

```java
public class PrefabContexClearingResponseFilter implements ContainerResponseFilter {
    private static final Logger LOGGER = LoggerFactory.getLogger(PrefabContexClearingResponseFilter.class);
    private final ConfigClient configClient;

    @Inject
    PrefabContexClearingResponseFilter(ConfigClient configClient) {
        this.configClient = configClient;
    }

    @Override
    public void filter(ContainerRequestContext containerRequestContext, ContainerResponseContext containerResponseContext) throws IOException {
        configClient.getContextStore().clearContexts();
        LOGGER.info("Cleared context");
    }
}
```

Learn more with the [Prefab + Dropwizard example app](https://github.com/prefab-cloud/example-dropwizard-app)

</TabItem>
</Tabs>

<details>
<summary>

#### Just-in-time Context

</summary>

You can also provide context information inline when making a get request. If you provide just-in-time context to your FF or config evaluations, it will be merged with the global context.

```java
featureFlagClient.featureIsOn(
    "features.example-flag",
    PrefabContext.newBuilder("customer")
      .put("group", "beta")
      .build()
  )

prefabCloudClient.configClient().get("the.key",
                PrefabContext.newBuilder("user")
                  .put("name", "james")
                  .put("tier", "gold")
                  .put("customerMonths", 12)
                  .build()
              )
```

</details>

See [contexts](/docs/explanations/concepts/context) for more information

## Dynamic Config

```java
final Optional<Prefab.ConfigValue> configValue = prefabCloudClient.configClient().get("the.key");
if(configValue.isPresent()){
  System.out.println(configValue.get().getString());
}
```

### Live Values

Live values are a convenient and clear way to use configuration throughout your system. Inject a prefab client and get live values for the configuration keys you need.

In code, `.get()` will return the value. These values will update automatically when the configuration is updated in Prefab Cloud.

```java
import java.util.function.Supplier;

class MyClass {

  private Supplier<String> sampleString;
  private Supplier<Long> sampleLong;

  @Inject
  public MyClass(ConfigClient configClient) {
    this.sampleString = configClient.liveString("sample.string");
    this.sampleLong = configClient.liveLong("sample.long");
  }

  public String test(){
    return "I got %s and %d from Prefab Cloud.".formatted(sampleString.get(), sampleLong.get());
  }
}
```

## Dynamic Logging with the Java SDK

Setting up a dynamic logger with Prefab is easy.

We need to give our `ConfigClient` a LoggingListener when we create it. This listener will be called whenever the config changes,
it will detect LogLevel changes, find the appropriate logger based on the config key, and map the LogLevel to the appropriate Logger specific level.

Prefab comes with support for most common logging platforms

Java Util Logging is [supported](https://github.com/prefab-cloud/prefab-cloud-java/blob/main/src/main/java/cloud/prefab/client/config/logging/JavaUtilLoggingConfigListener.java) within the client.

Other Logging Platforms are provided in separate maven dependencies:

- [LogbackConfigListener](https://github.com/prefab-cloud/prefab-cloud-java/tree/main/logback-listener)
- [Log4j1ConfigListener](https://github.com/prefab-cloud/prefab-cloud-java/tree/main/log4j-one-listener)
- [Log4j2ConfigListener](https://github.com/prefab-cloud/prefab-cloud-java/tree/main/log4j-two-listener)

### Set Up Dynamic Logging With LogBack

To set up dynamic logging with LogBack, we need to install the `PrefabMDCTurboFilter` as seen in the configClient() method below.

You may want to make sure your bean initializes on `@Context` so it is available immediately.

```java
// this is a Micronaut example
@Factory
public class PrefabFactory {

  @Singleton
  public PrefabCloudClient prefabCloudClient() {
    final Options options = new Options();
    return new PrefabCloudClient(options);
  }

  @Singleton
  public FeatureFlagClient featureFlagClient(PrefabCloudClient prefabCloudClient) {
    return prefabCloudClient.featureFlagClient();
  }

  // in Micronaut @Context is equivalent to eager-singleton
  @Context
  public ConfigClient configClient(PrefabCloudClient prefabCloudClient) {
    ConfigClient client = prefabCloudClient.getClient();
    PrefabMDCTurboFilter.install(client);
    return client;
  }
  // highlight-end
}
```

Now we can set our log levels dynamically in the UI and they will update immediately.

![example screenshot](/img/docs/explanations/dynamic-levels.png)

### Targeted Log Levels

You can use [Targeting](/docs/explanations/features/targeted-log-levels) to change your log levels based on the current user/request/device [context](/docs/explanations/concepts/context) using our [rules](/docs/explanations/features/rules-and-segmentation) engine.

## Telemetry

By default, Prefab uploads telemetry that enables a number of useful features. You can alter or disable this behavior using the following options:

| Name                       | Description                                                                                                                           | Default          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| collectEvaluationSummaries | Send counts of config/flag evaluation results back to Prefab to view in web app                                                       | true             |
| collectLoggerCounts        | Send counts of logger usage back to Prefab to power log-levels configuration screen                                                   | true             |
| contextUploadMode          | Upload either context "shapes" (the names and data types your app uses in prefab contexts) or periodically send full example contexts | PERIODIC_EXAMPLE |

If you want to change any of these options, you can pass an `options` object when initializing the Prefab client.

```java
Options options = new Options()
  .setCollectEvaluationSummaries(true)
  .setCollectLoggerCounts(true)
  .setContextUploadMode(Options.CollectContextMode.PERIODIC_EXAMPLE);
```

## Testing

Prefab suggests testing with generous usage of Mockito. We also provide a useful `FixedValue` for testing Live Values.

```java
@Test
void testPrefab(){
  ConfigClient mockConfigClient = mock(ConfigClient.class);
  when(mockConfigClient.liveString("sample.string")).thenReturn(FixedValue.of("test value"));
  when(mockConfigClient.liveLong("sample.long")).thenReturn(FixedValue.of(123L));

  MyClass myClass = new MyClass(mock(ConfigClient.class));

  // test business logic

}
```

## Reference

### Options

```java
Options options = new Options()
  .setNamespace("billing-service.jobs.dunning-job")
  .setConfigOverrideDir(System.getProperty("user.home"))
  .setApikey(System.getenv("PREFAB_API_KEY"))
  .setPrefabDatasource(Options.Datasources.ALL) // Option: Datasources.LOCAL_ONLY
  .setOnInitializationFailure(Options.OnInitializationFailure.RAISE) // Option Options.OnInitializationFailure.UNLOCK
  .setInitializationTimeoutSec(10);
```

#### Option Definitions

| Name                       | Description                                                                                                                           | Default          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| collectEvaluationSummaries | Send counts of config/flag evaluation results back to Prefab to view in web app                                                       | true             |
| collectLoggerCounts        | Send counts of logger usage back to Prefab to power log-levels configuration screen                                                   | true             |
| contextUploadMode          | Upload either context "shapes" (the names and data types your app uses in prefab contexts) or periodically send full example contexts | PERIODIC_EXAMPLE |
| onInitializationFailure    | Choose to crash or continue with local data only if unable to fetch config data from prefab at startup                                | RAISE (crash)    |
| prefabDatasources          | Use either only-local data or local + API data                                                                                        | ALL              |
