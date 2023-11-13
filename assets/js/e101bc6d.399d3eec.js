"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||r;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"Bootstrapping",sidebar_label:"Bootstrapping",sidebar_position:4},i=void 0,l={unversionedId:"explanations/architecture/bootstrapping",id:"explanations/architecture/bootstrapping",title:"Bootstrapping",description:"Config Load Order",source:"@site/docs/explanations/architecture/bootstrapping.md",sourceDirName:"explanations/architecture",slug:"/explanations/architecture/bootstrapping",permalink:"/docs/explanations/architecture/bootstrapping",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/explanations/architecture/bootstrapping.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Bootstrapping",sidebar_label:"Bootstrapping",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Reliability",permalink:"/docs/explanations/architecture/resiliency"},next:{title:"How Tos",permalink:"/docs/category/how-tos"}},c={},p=[{value:"Config Load Order",id:"config-load-order",level:2},{value:"Reconfiguring Config File Locations",id:"reconfiguring-config-file-locations",level:3},{value:"Override Files &amp; Load Order",id:"override-files--load-order",level:2},{value:"Helpful Logging",id:"helpful-logging",level:2},{value:"On Initialization Failure",id:"on-initialization-failure",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=s("Tabs"),d=s("TabItem"),f={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"config-load-order"},"Config Load Order"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We're replacing the default system with a new pattern that we believe is a much simpler,\nwhile providing even more flexibility, power and resiliency."),(0,o.kt)("p",{parentName:"admonition"},"The core use case of defaults was to provide settings for offline development in testing and CI.\nThis is better solved with our datafiles."),(0,o.kt)("p",{parentName:"admonition"},"If you believe you need this old system, please reach out to us to discuss.")),(0,o.kt)("p",null,"On startup, config clients load config in the following order, with each level taking precedence over the previous:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Default ",(0,o.kt)("a",{parentName:"li",href:"/docs/explanations/concepts/defaults"},"Config File")," ",(0,o.kt)("inlineCode",{parentName:"li"},".prefab.default.config.yaml")," on the classpath"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/explanations/concepts/defaults#prefab-environments"},"Prefab Env")," config files such as ",(0,o.kt)("inlineCode",{parentName:"li"},".prefab.staging.config.yaml"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".prefab.test.config.yaml")," or ",(0,o.kt)("inlineCode",{parentName:"li"},".prefab.k8s.config.yaml")),(0,o.kt)("li",{parentName:"ol"},"Most current values from PrefabCloud APIs & CDNs as described in ",(0,o.kt)("a",{parentName:"li",href:"/docs/explanations/concepts/server-sdks"},"how the server SDK works")),(0,o.kt)("li",{parentName:"ol"},"Local Override File ",(0,o.kt)("inlineCode",{parentName:"li"},".prefab.default.config.yaml")," in the override directory (defaults to $HOME)"),(0,o.kt)("li",{parentName:"ol"},"Local Override Prefab Env Files ",(0,o.kt)("inlineCode",{parentName:"li"},".prefab.test.config.yaml")," in the override directory (defaults to $HOME)")),(0,o.kt)("h3",{id:"reconfiguring-config-file-locations"},"Reconfiguring Config File Locations"),(0,o.kt)("p",null,"The classpath config file location can be changed with the env var ",(0,o.kt)("inlineCode",{parentName:"p"},"PREFAB_CONFIG_CLASSPATH_DIR")),(0,o.kt)("p",null,"The local override config file location can be changed with env var ",(0,o.kt)("inlineCode",{parentName:"p"},"PREFAB_CONFIG_OVERRIDE_DIR")),(0,o.kt)("h2",{id:"override-files--load-order"},"Override Files & Load Order"),(0,o.kt)("p",null,"All API values will take precedence over the values that come from your default files."),(0,o.kt)("p",null,"For local development, in can be helpful to have your own settings that are not checked into source control. This is the time for an\noverride file. Name your file ",(0,o.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")," and put it in your home directory. These values will have a higher precedence\nthan values from the API."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Using an Override file in a deployed environment is an anti-pattern. You should be able to achieve what you need to do\nwith some combination of ",(0,o.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/defaults#prefab-environments"},"Prefab Envs")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/namespaces"},"namespaces"),".")),(0,o.kt)("h2",{id:"helpful-logging"},"Helpful Logging"),(0,o.kt)("p",null,"Understanding which config your app is using can take some getting used to. To help Prefab has quite a lot of logging.\nYou can turn it all on with ",(0,o.kt)("inlineCode",{parentName:"p"},"log-level.cloud.prefab: debug")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml"),"."),(0,o.kt)("p",null,"Here you can see the: key, value, type, match and source for each config value.\nThe source tells us whether we are using a value from a config file or an API value.\nThe match tells us whether there is a value defined for the environment or namespace we are using."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"DEBUG 2022-09-06 09:23:53 -0400: prefab:  Initialize ConfigClient\nINFO  2022-09-06 09:23:53 -0400: prefab:  Load ./.prefab.default.config.yaml\nINFO  2022-09-06 09:23:53 -0400: prefab:  Load /Users/user/.prefab.default.config.yaml\nDEBUG 2022-09-06 09:23:53 -0400: prefab:  Initialize ConfigClient: AcquiredWriteLock\nINFO  2022-09-06 09:23:55 -0400: prefab:  Found new checkpoint with highwater id 16621306673926944 from remote_cdn_api in project X environment: Y and namespace: 'myapp.web'\nINFO  2022-09-06 09:23:55 -0400: prefab:  Unlocked Config via remote_cdn_api\nINFO  2022-09-06 09:23:55 -0400: prefab:\naccounting.api-uage.error-on-unknown-project       | false                               | FalseCl | Match: default                 | Source: ./.prefab.default.config.yaml\nfeatures.api-usage                                 | <Prefab::FeatureFlag: active: true, | Prefab: | Match: env:Y                   | Source: remote_cdn_api\ngoogle.gcp.big-query.dataset_name                  | development_dataset                 | String  | Match: default                 | Source: ./.prefab.default.config.yaml\ngoogle.gcp.project-id                              | gcp-prod                            | String  | Match: default                 | Source: ./.prefab.default.config.yaml\nlog-level                                          | debug                               | String  | Match: default                 | Source: /Users/user/.prefab.default.config.yaml\nlog-level.app                                      | info                                | String  | Match: default                 | Source: remote_cdn_api\nlog-level.app.controllers.documentation_controller | debug                               | String  | Match: default                 | Source: /Users/user/.prefab.default.config.yaml\nlog-level.google.apis.core.http_command            | info                                | String  | Match: default                 | Source: ./.prefab.default.config.yaml\nlog-level.cloud.prefab                             | debug                               | String  | Match: default                 | Source: ./.prefab.default.config.yaml\nredis.url                                          | redis://localhost:6379              | String  | Match: env:Y                   | Source: remote_cdn_api\n")),(0,o.kt)("h2",{id:"on-initialization-failure"},"On Initialization Failure"),(0,o.kt)("p",null,"Prefab goes to ",(0,o.kt)("a",{parentName:"p",href:"/docs/explanations/architecture/resiliency"},"great lengths")," to ensure that you can get live data, but we need to specify behavior if\nyour application cannot connect. The internal configuration store begins in a locked state. It unlocks once it has live data.\nPrefab gives you two choice if we are unable to get live data."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We can raise an error. This is the default."),(0,o.kt)("li",{parentName:"ol"},"We can unlock and continue with default values.")),(0,o.kt)("p",null,"Here is how to set Prefab to unlock and continue:"),(0,o.kt)(u,{groupId:"lang",mdxType:"Tabs"},(0,o.kt)(d,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"options = Prefab::Options.new(\n  on_init_failure: Prefab::Options::ON_INITIALIZATION_FAILURE::RETURN,\n  initialization_timeout_sec: 20\n)\nPrefab.init(options)\n"))),(0,o.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Singleton\npublic Prefab getClient(){\n  PrefabCloudClient prefabCloudClient = new PrefabCloudClient(\n    new Options()\n      .setInitializationTimeoutSec(20)\n      .setOnInitializationFailure(Options.OnInitializationFailure.UNLOCK)\n  );\n}\n")))))}m.isMDXComponent=!0}}]);