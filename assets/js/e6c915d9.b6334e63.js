"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[727],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var g=a.createContext({}),c=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(g.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),f=i,d=s["".concat(g,".").concat(f)]||s[f]||u[f]||r;return t?a.createElement(d,o(o({ref:n},p),{},{components:t})):a.createElement(d,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=s;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5417:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const r={title:"Logging",sidebar_label:"Logging",sidebar_position:2},o=void 0,l={unversionedId:"java-sdk/java-logging",id:"java-sdk/java-logging",title:"Logging",description:"Dynamic Logging with the Java SDK",source:"@site/docs/java-sdk/java-logging.md",sourceDirName:"java-sdk",slug:"/java-sdk/java-logging",permalink:"/docs/java-sdk/java-logging",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/java-sdk/java-logging.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Logging",sidebar_label:"Logging",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Java SDK",permalink:"/docs/java-sdk/java"},next:{title:"JavaScript Client",permalink:"/docs/javascript"}},g={},c=[{value:"Dynamic Logging with the Java SDK",id:"dynamic-logging-with-the-java-sdk",level:2},{value:"Set Up Dynamic Logging With LogBack",id:"set-up-dynamic-logging-with-logback",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dynamic-logging-with-the-java-sdk"},"Dynamic Logging with the Java SDK"),(0,i.kt)("p",null,"Setting up a dynamic logger with Prefab is easy. "),(0,i.kt)("p",null,"We need to tell give our ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigClient")," a LoggingListener. "),(0,i.kt)("p",null,"Prefab comes with support out of the box for most common logging platforms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prefab-cloud/prefab-cloud-java/blob/main/src/main/java/cloud/prefab/client/config/logging/LogbackConfigListener.java"},"LogbackConfigListener")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prefab-cloud/prefab-cloud-java/blob/main/src/main/java/cloud/prefab/client/config/logging/Log4j1ConfigListener.java"},"Log4j1ConfigListener")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prefab-cloud/prefab-cloud-java/blob/main/src/main/java/cloud/prefab/client/config/logging/Log4j2ConfigListener.java"},"Log4j2ConfigListener")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prefab-cloud/prefab-cloud-java/blob/main/src/main/java/cloud/prefab/client/config/logging/JavaUtilLoggingConfigListener.java"},"JavaUtilLoggingConfigListener"))),(0,i.kt)("h2",{id:"set-up-dynamic-logging-with-logback"},"Set Up Dynamic Logging With LogBack"),(0,i.kt)("p",null,"To set up dynamic logging with LogBack, we need to just add the ",(0,i.kt)("inlineCode",{parentName:"p"},"LogbackConfigListener")," to our ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigClient"),"."),(0,i.kt)("p",null,"You may want to make sure your bean initializes on ",(0,i.kt)("inlineCode",{parentName:"p"},"@Context")," so it is available immediately."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Factory\npublic class PrefabFactory {\n  \n  @Singleton\n  public PrefabCloudClient prefabCloudClient() {\n    final Options options = new Options();\n    return new PrefabCloudClient(options);\n  }\n\n  @Singleton\n  public FeatureFlagClient featureFlagClient(PrefabCloudClient prefabCloudClient) {\n    return prefabCloudClient.featureFlagClient();\n  }\n\n  @Context\n  public ConfigClient configClient(PrefabCloudClient prefabCloudClient) {\n    return new ConfigClient(prefabCloudClient, LogbackConfigListener.getInstance());\n  }\n}\n")))}u.isMDXComponent=!0}}]);