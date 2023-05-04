"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=a.createContext({}),c=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(g.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,f=s["".concat(g,".").concat(d)]||s[d]||u[d]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"Logging",sidebar_label:"Logging",sidebar_position:2},o=void 0,l={unversionedId:"java-sdk/java-logging",id:"java-sdk/java-logging",title:"Logging",description:"Dynamic Logging with the Java SDK",source:"@site/docs/java-sdk/java-logging.md",sourceDirName:"java-sdk",slug:"/java-sdk/java-logging",permalink:"/docs/java-sdk/java-logging",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/java-sdk/java-logging.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Logging",sidebar_label:"Logging",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Java SDK",permalink:"/docs/java-sdk/java"},next:{title:"Elixir SDK",permalink:"/docs/category/elixir-sdk"}},g={},c=[{value:"Dynamic Logging with the Java SDK",id:"dynamic-logging-with-the-java-sdk",level:2},{value:"Set Up Dynamic Logging With LogBack",id:"set-up-dynamic-logging-with-logback",level:2},{value:"Profit",id:"profit",level:2},{value:"Targeted Log Levels",id:"targeted-log-levels",level:2}],p={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dynamic-logging-with-the-java-sdk"},"Dynamic Logging with the Java SDK"),(0,i.kt)("p",null,"Setting up a dynamic logger with Prefab is easy. "),(0,i.kt)("p",null,"We need to give our ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigClient")," a LoggingListener when we create it. This listener will be called whenever the config changes,\nit will detect LogLevel changes, find the appropriate logger based on the config key, and map the LogLevel to the appropriate Logger specific level."),(0,i.kt)("p",null,"Prefab comes with support for most common logging platforms"),(0,i.kt)("p",null,"Java Util Logging is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/prefab-cloud-java/blob/main/src/main/java/cloud/prefab/client/config/logging/JavaUtilLoggingConfigListener.java"},"supported")," within the client."),(0,i.kt)("p",null,"Other Logging Platforms are provided in separate maven dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prefab-cloud/prefab-cloud-java/tree/main/logback-listener"},"LogbackConfigListener")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prefab-cloud/prefab-cloud-java/tree/main/log4j-one-listener"},"Log4j1ConfigListener")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prefab-cloud/prefab-cloud-java/tree/main/log4j-two-listener"},"Log4j2ConfigListener"))),(0,i.kt)("h2",{id:"set-up-dynamic-logging-with-logback"},"Set Up Dynamic Logging With LogBack"),(0,i.kt)("p",null,"To set up dynamic logging with LogBack, we need to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"PrefabMDCTurboFilter")," as seen in the configClient() method below."),(0,i.kt)("p",null,"You may want to make sure your bean initializes on ",(0,i.kt)("inlineCode",{parentName:"p"},"@Context")," so it is available immediately."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// this is a Micronaut example \n@Factory\npublic class PrefabFactory {\n  \n  @Singleton\n  public PrefabCloudClient prefabCloudClient() {\n    final Options options = new Options();\n    return new PrefabCloudClient(options);\n  }\n\n  @Singleton\n  public FeatureFlagClient featureFlagClient(PrefabCloudClient prefabCloudClient) {\n    return prefabCloudClient.featureFlagClient();\n  }\n\n  // in Micronaut @Context is basically eager-singleton\n  @Context\n  public ConfigClient configClient(PrefabCloudClient prefabCloudClient) {\n    ConfigClient client = prefabCloudClient.getClient();\n    PrefabMDCTurboFilter.install(client);\n    return client;\n  }\n}\n")),(0,i.kt)("h2",{id:"profit"},"Profit"),(0,i.kt)("p",null,"Now we can set our log levels dynamically in the UI and they will update immediately."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"example screenshot",src:n(8926).Z,width:"500",height:"323"})),(0,i.kt)("h2",{id:"targeted-log-levels"},"Targeted Log Levels"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"../explanations/targeted-log-levels"},"Targeting")," to change your log levels based on the current user/request/device ",(0,i.kt)("a",{parentName:"p",href:"../explanations/context"},"context")," using our ",(0,i.kt)("a",{parentName:"p",href:"/docs/explanations/rules-and-segmentation"},"rules")," engine."))}u.isMDXComponent=!0},8926:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dynamic-levels-04b0487f5e9c0a0f4eba8dbc0334dc33.png"}}]);