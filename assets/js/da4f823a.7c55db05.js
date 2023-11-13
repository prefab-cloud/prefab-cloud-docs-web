"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[27],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,f=c["".concat(s,".").concat(d)]||c[d]||g[d]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const i={title:"Java",sidebar_label:"Java",sidebar_position:12},r=void 0,o={unversionedId:"sdks/java",id:"sdks/java",title:"Java",description:"Install the latest version",source:"@site/docs/sdks/java.md",sourceDirName:"sdks",slug:"/sdks/java",permalink:"/docs/sdks/java",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/sdks/java.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Java",sidebar_label:"Java",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/sdks/ruby"},next:{title:"Node",permalink:"/docs/sdks/node"}},s={},u=[{value:"Install the latest version",id:"install-the-latest-version",level:2},{value:"Dependency-Reduced Version",id:"dependency-reduced-version",level:4},{value:"Initialize the client",id:"initialize-the-client",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Typical Usage",id:"typical-usage",level:3},{value:"Feature Flags",id:"feature-flags",level:2},{value:"Context",id:"context",level:2},{value:"Just-in-time Context",id:"just-in-time-context",level:4},{value:"Dynamic Config",id:"dynamic-config",level:2},{value:"Live Values",id:"live-values",level:3},{value:"Dynamic Logging with the Java SDK",id:"dynamic-logging-with-the-java-sdk",level:2},{value:"Set Up Dynamic Logging With LogBack",id:"set-up-dynamic-logging-with-logback",level:3},{value:"Targeted Log Levels",id:"targeted-log-levels",level:3},{value:"Telemetry",id:"telemetry",level:2},{value:"Testing",id:"testing",level:2},{value:"Reference",id:"reference",level:2},{value:"Options",id:"options",level:3},{value:"Option Definitions",id:"option-definitions",level:4}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},c=p("Tabs"),g=p("TabItem"),d={toc:u},f="wrapper";function m(e){let{components:t,...i}=e;return(0,l.kt)(f,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"install-the-latest-version"},"Install the latest version"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/prefab-cloud-java"},"Github")," | ",(0,l.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/cloud.prefab/prefab-cloud-java"},"Maven Repository")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>cloud.prefab</groupId>\n    <artifactId>client</artifactId>\n    <version>0.3.13</version>\n</dependency>\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h4",{id:"dependency-reduced-version"},"Dependency-Reduced Version")),(0,l.kt)("p",null,"There's an optional uber-jar with shaded and relocated guava and failsafe dependencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>cloud.prefab</groupId>\n    <artifactId>client</artifactId>\n    <version>0.3.13</version>\n    <classifier>uberjar</classifier>\n</dependency>\n"))),(0,l.kt)("h2",{id:"initialize-the-client"},"Initialize the client"),(0,l.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final PrefabCloudClient prefabCloudClient = new PrefabCloudClient(new Options());\n")),(0,l.kt)("h3",{id:"typical-usage"},"Typical Usage"),(0,l.kt)("p",null,"We recommend using the ",(0,l.kt)("inlineCode",{parentName:"p"},"PrefabCloudClient")," as a singleton in your application. This is the most common way to use the SDK."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Micronaut Factory\n@Factory\npublic class PrefabFactory {\n\n  @Singleton\n  public PrefabCloudClient prefabCloudClient() {\n    PrefabCloudClient.Options builder = new PrefabCloudClient.Options();\n    return new PrefabCloudClient(builder);\n  }\n\n  @Singleton\n  public FeatureFlagClient featureFlagClient(PrefabCloudClient prefabCloudClient) {\n    return prefabCloudClient.featureFlagClient();\n  }\n\n  @Singleton\n  public ConfigClient configClient(PrefabCloudClient prefabCloudClient) {\n    return prefabCloudClient.configClient();\n  }\n}\n")),(0,l.kt)("h2",{id:"feature-flags"},"Feature Flags"),(0,l.kt)("p",null,"For boolean flags, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"featureIsOn")," convenience method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class MyClass {\n  // assumes you have setup a singleton\n  @Inject\n  private FeatureFlagClient featureFlagClient;\n\n  public String test(String key){\n    boolean val = featureFlagClient.featureIsOn(key);\n    return "Feature flag value of %s is %s".formatted(key, val);\n  }\n}\n')),(0,l.kt)("p",null,"Feature flags don't have to return just true or false. You can get other data types using ",(0,l.kt)("inlineCode",{parentName:"p"},"get"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class MyClass {\n  // assumes you have setup a singleton\n  @Inject\n  private FeatureFlagClient featureFlagClient;\n\n  public String test(String key){\n    // highlight-next-line\n    Optional<Prefab.ConfigValue> val = featureFlagClient.get(key);\n    return "Feature flag value of %s is %s".formatted(key, val.orElse("no value found"));\n  }\n}\n')),(0,l.kt)("h2",{id:"context"},"Context"),(0,l.kt)("p",null,"To finely-target configuration rule evaluation, we accept contextual information globally or request-scoped with the ContextStore which will affect all logging, featureflag and config lookups."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'prefabCloudClient.configClient().getContextStore().addContext(\n                      PrefabContext.newBuilder("User")\n                        .put("name", user.getName())\n                        .put("key", user.getKey())\n                        .build());\n')),(0,l.kt)("p",null,"When global context is set, log levels and feature flags will evaluate in that context. Here are details on setting global context:"),(0,l.kt)(c,{groupId:"lang",mdxType:"Tabs"},(0,l.kt)(g,{value:"micronaut",label:"Micronaut",mdxType:"TabItem"},(0,l.kt)("p",null,"Add a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/example-micronaut-app/blob/configure-prefab-context/src/main/java/com/example/prefab/PrefabContextFilter.java"},"filter"),' to add a prefab context based on the currently "logged in" user.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Filter(Filter.MATCH_ALL_PATTERN)\npublic class PrefabContextFilter implements HttpFilter {\n\n    private final ConfigClient configClient;\n\n    @Inject\n    PrefabContextFilter(ConfigClient configClient) {\n        this.configClient = configClient;\n    }\n\n    @Override\n    public Publisher<? extends HttpResponse<?>> doFilter(HttpRequest<?> request, FilterChain chain) {\n\n        request.getUserPrincipal(Authentication.class).ifPresent(authentication ->\n                {\n                    User user = (User) authentication.getAttributes().get(ExampleAuthenticationProvider.USER_ATTR);\n                    configClient.getContextStore()\n                            .addContext(\n                              PrefabContext.newBuilder("user")\n                                .put("id", user.id())\n                                .put("country", user.country())\n                                .put("email", user.email())\n                                .build()\n                            );\n                }\n        );\n        return chain.proceed(request);\n    }\n\n    @Override\n    public int getOrder() {\n        return ServerFilterPhase.SECURITY.after() + 1;\n        // run after the DefaultLoginFilter\n    }\n}\n')),(0,l.kt)("p",null,"Prefab Context uses ThreadLocals by default. In event-based frameworks like micronaut, that won't work so configure the Prefab Context store to use ",(0,l.kt)("inlineCode",{parentName:"p"},"ServerRequestContextStore")," instead."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"options.setContextStore(new ServerRequestContextStore());\n")),(0,l.kt)("p",null,"Learn more with the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/example-micronaut-app"},"Prefab + Micronaut example app"))),(0,l.kt)(g,{value:"dropwizard",label:"Dropwizard",mdxType:"TabItem"},(0,l.kt)("p",null,"Use a ",(0,l.kt)("inlineCode",{parentName:"p"},"ContainerRequestFilter")," to set the context for your request when the request begins"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class PrefabContextAddingRequestFilter implements ContainerRequestFilter {\n    private static final Logger LOGGER = LoggerFactory.getLogger(PrefabContextAddingRequestFilter.class);\n    private final ConfigClient configClient;\n\n    @Inject\n    public PrefabContextAddingRequestFilter(ConfigClient configClient) {\n        this.configClient = configClient;\n    }\n\n    @Override\n    public void filter(ContainerRequestContext containerRequestContext) throws IOException {\n        final SecurityContext securityContext =\n                containerRequestContext.getSecurityContext();\n        if (securityContext != null) {\n            Principal principal = securityContext.getUserPrincipal();\n            if (principal instanceof User) {\n                User user = (User) principal;\n                LOGGER.info("will add pf context for {}", user);\n                configClient.getContextStore().addContext(\n                      PrefabContext.newBuilder("User")\n                        .put("name", user.getName())\n                        .build());\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,"Then we'll add another ",(0,l.kt)("inlineCode",{parentName:"p"},"ContainerResponseFilter")," to clear the context from the ThreadLocal when the request finishes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class PrefabContexClearingResponseFilter implements ContainerResponseFilter {\n    private static final Logger LOGGER = LoggerFactory.getLogger(PrefabContexClearingResponseFilter.class);\n    private final ConfigClient configClient;\n\n    @Inject\n    PrefabContexClearingResponseFilter(ConfigClient configClient) {\n        this.configClient = configClient;\n    }\n\n    @Override\n    public void filter(ContainerRequestContext containerRequestContext, ContainerResponseContext containerResponseContext) throws IOException {\n        configClient.getContextStore().clearContexts();\n        LOGGER.info("Cleared context");\n    }\n}\n')),(0,l.kt)("p",null,"Learn more with the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/example-dropwizard-app"},"Prefab + Dropwizard example app")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h4",{id:"just-in-time-context"},"Just-in-time Context")),(0,l.kt)("p",null,"You can also provide context information inline when making a get request. If you provide just-in-time context to your FF or config evaluations, it will be merged with the global context."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'featureFlagClient.featureIsOn(\n    "features.example-flag",\n    PrefabContext.newBuilder("customer")\n      .put("group", "beta")\n      .build()\n  )\n\nprefabCloudClient.configClient().get("the.key",\n                PrefabContext.newBuilder("user")\n                  .put("name", "james")\n                  .put("tier", "gold")\n                  .put("customerMonths", 12)\n                  .build()\n              )\n'))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/context"},"contexts")," for more information"),(0,l.kt)("h2",{id:"dynamic-config"},"Dynamic Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final Optional<Prefab.ConfigValue> configValue = prefabCloudClient.configClient().get("the.key");\nif(configValue.isPresent()){\n  System.out.println(configValue.get().getString());\n}\n')),(0,l.kt)("h3",{id:"live-values"},"Live Values"),(0,l.kt)("p",null,"Live values are a convenient and clear way to use configuration throughout your system. Inject a prefab client and get live values for the configuration keys you need."),(0,l.kt)("p",null,"In code, ",(0,l.kt)("inlineCode",{parentName:"p"},".get()")," will return the value. These values will update automatically when the configuration is updated in Prefab Cloud."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.function.Supplier;\n\nclass MyClass {\n\n  private Supplier<String> sampleString;\n  private Supplier<Long> sampleLong;\n\n  @Inject\n  public MyClass(ConfigClient configClient) {\n    this.sampleString = configClient.liveString("sample.string");\n    this.sampleLong = configClient.liveLong("sample.long");\n  }\n\n  public String test(){\n    return "I got %s and %d from Prefab Cloud.".formatted(sampleString.get(), sampleLong.get());\n  }\n}\n')),(0,l.kt)("h2",{id:"dynamic-logging-with-the-java-sdk"},"Dynamic Logging with the Java SDK"),(0,l.kt)("p",null,"Setting up a dynamic logger with Prefab is easy."),(0,l.kt)("p",null,"We need to give our ",(0,l.kt)("inlineCode",{parentName:"p"},"ConfigClient")," a LoggingListener when we create it. This listener will be called whenever the config changes,\nit will detect LogLevel changes, find the appropriate logger based on the config key, and map the LogLevel to the appropriate Logger specific level."),(0,l.kt)("p",null,"Prefab comes with support for most common logging platforms"),(0,l.kt)("p",null,"Java Util Logging is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/prefab-cloud-java/blob/main/src/main/java/cloud/prefab/client/config/logging/JavaUtilLoggingConfigListener.java"},"supported")," within the client."),(0,l.kt)("p",null,"Other Logging Platforms are provided in separate maven dependencies:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/prefab-cloud/prefab-cloud-java/tree/main/logback-listener"},"LogbackConfigListener")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/prefab-cloud/prefab-cloud-java/tree/main/log4j-one-listener"},"Log4j1ConfigListener")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/prefab-cloud/prefab-cloud-java/tree/main/log4j-two-listener"},"Log4j2ConfigListener"))),(0,l.kt)("h3",{id:"set-up-dynamic-logging-with-logback"},"Set Up Dynamic Logging With LogBack"),(0,l.kt)("p",null,"To set up dynamic logging with LogBack, we need to install the ",(0,l.kt)("inlineCode",{parentName:"p"},"PrefabMDCTurboFilter")," as seen in the configClient() method below."),(0,l.kt)("p",null,"You may want to make sure your bean initializes on ",(0,l.kt)("inlineCode",{parentName:"p"},"@Context")," so it is available immediately."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// this is a Micronaut example\n@Factory\npublic class PrefabFactory {\n\n  @Singleton\n  public PrefabCloudClient prefabCloudClient() {\n    final Options options = new Options();\n    return new PrefabCloudClient(options);\n  }\n\n  @Singleton\n  public FeatureFlagClient featureFlagClient(PrefabCloudClient prefabCloudClient) {\n    return prefabCloudClient.featureFlagClient();\n  }\n\n  // in Micronaut @Context is equivalent to eager-singleton\n  @Context\n  public ConfigClient configClient(PrefabCloudClient prefabCloudClient) {\n    ConfigClient client = prefabCloudClient.getClient();\n    PrefabMDCTurboFilter.install(client);\n    return client;\n  }\n  // highlight-end\n}\n")),(0,l.kt)("p",null,"Now we can set our log levels dynamically in the UI and they will update immediately."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"example screenshot",src:n(8926).Z,width:"500",height:"323"})),(0,l.kt)("h3",{id:"targeted-log-levels"},"Targeted Log Levels"),(0,l.kt)("p",null,"You can use ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/features/targeted-log-levels"},"Targeting")," to change your log levels based on the current user/request/device ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/context"},"context")," using our ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/features/rules-and-segmentation"},"rules")," engine."),(0,l.kt)("h2",{id:"telemetry"},"Telemetry"),(0,l.kt)("p",null,"By default, Prefab uploads telemetry that enables a number of useful features. You can alter or disable this behavior using the following options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collectEvaluationSummaries"),(0,l.kt)("td",{parentName:"tr",align:null},"Send counts of config/flag evaluation results back to Prefab to view in web app"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collectLoggerCounts"),(0,l.kt)("td",{parentName:"tr",align:null},"Send counts of logger usage back to Prefab to power log-levels configuration screen"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contextUploadMode"),(0,l.kt)("td",{parentName:"tr",align:null},'Upload either context "shapes" (the names and data types your app uses in prefab contexts) or periodically send full example contexts'),(0,l.kt)("td",{parentName:"tr",align:null},"PERIODIC_EXAMPLE")))),(0,l.kt)("p",null,"If you want to change any of these options, you can pass an ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," object when initializing the Prefab client."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Options options = new Options()\n  .setCollectEvaluationSummaries(true)\n  .setCollectLoggerCounts(true)\n  .setContextUploadMode(Options.CollectContextMode.PERIODIC_EXAMPLE);\n")),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("p",null,"Prefab suggests testing with generous usage of Mockito. We also provide a useful ",(0,l.kt)("inlineCode",{parentName:"p"},"FixedValue")," for testing Live Values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Test\nvoid testPrefab(){\n  ConfigClient mockConfigClient = mock(ConfigClient.class);\n  when(mockConfigClient.liveString("sample.string")).thenReturn(FixedValue.of("test value"));\n  when(mockConfigClient.liveLong("sample.long")).thenReturn(FixedValue.of(123L));\n\n  MyClass myClass = new MyClass(mock(ConfigClient.class));\n\n  // test business logic\n\n}\n')),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Options options = new Options()\n  .setNamespace("billing-service.jobs.dunning-job")\n  .setConfigOverrideDir(System.getProperty("user.home"))\n  .setApikey(System.getenv("PREFAB_API_KEY"))\n  .setPrefabDatasource(Options.Datasources.ALL) // Option: Datasources.LOCAL_ONLY\n  .setOnInitializationFailure(Options.OnInitializationFailure.RAISE) // Option Options.OnInitializationFailure.UNLOCK\n  .setInitializationTimeoutSec(10);\n')),(0,l.kt)("h4",{id:"option-definitions"},"Option Definitions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collectEvaluationSummaries"),(0,l.kt)("td",{parentName:"tr",align:null},"Send counts of config/flag evaluation results back to Prefab to view in web app"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collectLoggerCounts"),(0,l.kt)("td",{parentName:"tr",align:null},"Send counts of logger usage back to Prefab to power log-levels configuration screen"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contextUploadMode"),(0,l.kt)("td",{parentName:"tr",align:null},'Upload either context "shapes" (the names and data types your app uses in prefab contexts) or periodically send full example contexts'),(0,l.kt)("td",{parentName:"tr",align:null},"PERIODIC_EXAMPLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onInitializationFailure"),(0,l.kt)("td",{parentName:"tr",align:null},"Choose to crash or continue with local data only if unable to fetch config data from prefab at startup"),(0,l.kt)("td",{parentName:"tr",align:null},"RAISE (crash)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefabDatasources"),(0,l.kt)("td",{parentName:"tr",align:null},"Use either only-local data or local + API data"),(0,l.kt)("td",{parentName:"tr",align:null},"ALL")))))}m.isMDXComponent=!0},8926:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dynamic-levels-04b0487f5e9c0a0f4eba8dbc0334dc33.png"}}]);