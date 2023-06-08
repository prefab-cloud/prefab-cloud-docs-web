"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[20],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,f=c["".concat(u,".").concat(d)]||c[d]||g[d]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const i={title:"Java",sidebar_label:"Java",sidebar_position:1},r=void 0,o={unversionedId:"java-sdk/java",id:"java-sdk/java",title:"Java",description:"Github | Maven Repository",source:"@site/docs/java-sdk/java.md",sourceDirName:"java-sdk",slug:"/java-sdk/java",permalink:"/docs/java-sdk/java",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/java-sdk/java.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Java",sidebar_label:"Java",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Java SDK",permalink:"/docs/category/java-sdk"},next:{title:"Logging",permalink:"/docs/java-sdk/java-logging"}},u={},s=[{value:"Getting Started With the Java SDK",id:"getting-started-with-the-java-sdk",level:2},{value:"Install the latest version",id:"install-the-latest-version",level:2},{value:"Initialize the client",id:"initialize-the-client",level:2},{value:"Options",id:"options",level:3},{value:"Get FeatureFlag",id:"get-featureflag",level:2},{value:"Get Config",id:"get-config",level:2},{value:"Provide Context",id:"provide-context",level:2},{value:"Example Applications",id:"example-applications",level:2},{value:"Micronaut Up and Running Walkthrough Video",id:"micronaut-up-and-running-walkthrough-video",level:3},{value:"Typical Usage",id:"typical-usage",level:2},{value:"Live Values",id:"live-values",level:2},{value:"Get a live value",id:"get-a-live-value",level:3},{value:"Testing",id:"testing",level:2}],p={toc:s},c="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/prefab-cloud-java"},"Github")," | ",(0,l.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/cloud.prefab/prefab-cloud-java"},"Maven Repository")),(0,l.kt)("h2",{id:"getting-started-with-the-java-sdk"},"Getting Started With the Java SDK"),(0,l.kt)("h2",{id:"install-the-latest-version"},"Install the latest version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>cloud.prefab</groupId>\n    <artifactId>client</artifactId>\n    <version>0.3.9</version>\n</dependency>\n")),(0,l.kt)("h2",{id:"initialize-the-client"},"Initialize the client"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"final PrefabCloudClient prefabCloudClient = new PrefabCloudClient(new Options());\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Options options = new Options()\n  .setNamespace("billing-service.jobs.dunning-job")\n  .setConfigOverrideDir(System.getProperty("user.home"))\n  .setApikey(System.getenv("PREFAB_API_KEY"))\n  .setPrefabDatasource(Options.Datasources.ALL) // Option: Datasources.LOCAL_ONLY\n  .setOnInitializationFailure(Options.OnInitializationFailure.) // Option Options.OnInitializationFailure.UNLOCK\n  .setInitializationTimeoutSec(10);\n')),(0,l.kt)("h2",{id:"get-featureflag"},"Get FeatureFlag"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'FeatureFlagClient featureFlagClient = prefabCloudClient.featureFlagClient();\n\nfeatureFlagClient.featureIsOn(\n    "features.example-flag",\n    PrefabContext.newBuilder("customer")\n      .put("group", "beta")\n      .build()\n  )\n')),(0,l.kt)("h2",{id:"get-config"},"Get Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final Optional<Prefab.ConfigValue> configValue = prefabCloudClient.configClient().get("the.key");\nif(configValue.isPresent()){\n  System.out.println(configValue.get().getString());\n}\n')),(0,l.kt)("h2",{id:"provide-context"},"Provide Context"),(0,l.kt)("p",null,"To finely-target configuration rule evaluation, we accept contextual information both inline when making a get request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'prefabCloudClient.configClient().get("the.key", PrefabContext.newBuilder("user")\n                                                    .put("name", "james")\n                                                    .put("tier", "gold")\n                                                    .put("customerMonths", 12)\n                                                    .build()\n                                                 )\n')),(0,l.kt)("p",null,"and globally or request-scoped with the ContextStore which will affect all logging, featureflag and config lookups."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\nprefabCloudClient.configClient().getContextStore().addContext(PrefabContext.newBuilder("User")\n                        .put("name", user.getName())\n                        .build());\n')),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"../explanations/context"},"contexts")," for more information"),(0,l.kt)("h2",{id:"example-applications"},"Example Applications"),(0,l.kt)("p",null,"We have runnable example apps walking through installation, configuration and usage for these containers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/prefab-cloud/example-dropwizard-app/"},"DropWizard")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/prefab-cloud/example-micronaut-app/"},"Micronaut"))),(0,l.kt)("h3",{id:"micronaut-up-and-running-walkthrough-video"},"Micronaut Up and Running Walkthrough Video"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=pesH3CoiKTs"},(0,l.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/pesH3CoiKTs/0.jpg",alt:"YouTube"}))),(0,l.kt)("p",null,"An example of usage in Spring Boot is on the way. Let us know about any others you'd like to see"),(0,l.kt)("h2",{id:"typical-usage"},"Typical Usage"),(0,l.kt)("p",null,"We recommend using the PrefabCloudClient as a singleton in your application. This is the most common way to use the SDK."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Micronaut Factory\n@Factory\npublic class PrefabFactory {\n\n  @Singleton\n  public PrefabCloudClient prefabCloudClient() {\n    PrefabCloudClient.Options builder = new PrefabCloudClient.Options();\n    return new PrefabCloudClient(builder);\n  }\n\n  @Singleton\n  public FeatureFlagClient featureFlagClient(\n    PrefabCloudClient prefabCloudClient\n  ) {\n    return prefabCloudClient.featureFlagClient();\n  }\n\n  @Singleton\n  public ConfigClient configClient(PrefabCloudClient prefabCloudClient) {\n    return prefabCloudClient.configClient();\n  }\n}\n\n\npublic class MyClass {\n  @Inject\n  private ConfigClient configClient;\n  \n  public String test(String key){\n    Optional<Prefab.ConfigValue> val = configClient.get(key);\n    return "Live value of %s is %s".formatted(key, val.orElse("no value found"));\n  }\n}\n\n')),(0,l.kt)("h2",{id:"live-values"},"Live Values"),(0,l.kt)("p",null,"Live values are a convenient and clear way to use configuration throughout your system. Inject a prefab client and get live values for the configuration keys you need."),(0,l.kt)("p",null,"In code, ",(0,l.kt)("inlineCode",{parentName:"p"},".get()")," will return the value. These values will update automatically when the configuration is updated in Prefab Cloud."),(0,l.kt)("h3",{id:"get-a-live-value"},"Get a live value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prefab.config.default.yaml\nsample:\n  long: 123\n  string: "hello"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.function.Supplier;\n\nclass MyClass {\n\n  private Supplier<String> sampleString;\n  private Supplier<Long> sampleLong;\n  \n  @Inject\n  public MyClass(ConfigClient configClient) {\n    this.sampleString = configClient.liveString("sample.string");\n    this.sampleLong = configClient.liveLong("sample.long");\n  }\n  \n  public String test(){\n    return "I got %s and %d from Prefab Cloud.".formatted(sampleString.get(), sampleLong.get());\n  }\n}\n')),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("p",null,"Prefab suggests testing with generous usage of Mockito. We also provide a useful ",(0,l.kt)("inlineCode",{parentName:"p"},"FixedValue")," for testing Live Values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'  @Test\n  void testPrefab(){\n    ConfigClient mockConfigClient = mock(ConfigClient.class);\n    when(mockConfigClient.liveString("sample.string")).thenReturn(FixedValue.of("test value"));\n    when(mockConfigClient.liveLong("sample.long")).thenReturn(FixedValue.of(123L));\n\n    MyClass myClass = new MyClass(mock(ConfigClient.class));\n\n    // test business logic\n\n  }\n')))}g.isMDXComponent=!0}}]);