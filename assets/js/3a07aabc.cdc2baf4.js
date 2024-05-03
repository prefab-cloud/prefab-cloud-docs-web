"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[3846],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),g=r,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||l;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const l={title:"Node"},o=void 0,i={unversionedId:"sdks/node/node",id:"sdks/node/node",title:"Node",description:"Install the Latest Version",source:"@site/docs/sdks/node/node.md",sourceDirName:"sdks/node",slug:"/sdks/node/",permalink:"/docs/sdks/node/",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/sdks/node/node.md",tags:[],version:"current",frontMatter:{title:"Node"},sidebar:"tutorialSidebar",previous:{title:"JavaScript",permalink:"/docs/sdks/javascript"},next:{title:"Netlify",permalink:"/docs/sdks/node/netlify"}},p={},s=[{value:"Install the Latest Version",id:"install-the-latest-version",level:2},{value:"Initialize a Client",id:"initialize-a-client",level:2},{value:"Feature Flags and Dynamic Config",id:"feature-flags-and-dynamic-config",level:2},{value:"Context",id:"context",level:2},{value:"Dynamic Logging",id:"dynamic-logging",level:2},{value:"Reference",id:"reference",level:2},{value:"Option Definitions",id:"option-definitions",level:3}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},d=u("Tabs"),c=u("TabItem"),g={toc:s},m="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"install-the-latest-version"},"Install the Latest Version"),(0,r.kt)(d,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(c,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @prefab-cloud/prefab-cloud-node\n"))),(0,r.kt)(c,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @prefab-cloud/prefab-cloud-node\n")))),(0,r.kt)("h2",{id:"initialize-a-client"},"Initialize a Client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { Prefab } from "@prefab-cloud/prefab-cloud-node";\n\nif (!process.env.PREFAB_API_KEY) {\n  throw new Error("PREFAB_API_KEY is not set");\n}\n\nconst prefab = new Prefab({\n  apiKey: process.env.PREFAB_API_KEY,\n  enableSSE: true,\n  defaultLogLevel: "warn",\n});\n\nawait prefab.init();\n')),(0,r.kt)("h2",{id:"feature-flags-and-dynamic-config"},"Feature Flags and Dynamic Config"),(0,r.kt)("p",null,"After the init completes you can use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefab.isFeatureEnabled('some.feature.name')")," returns true or false"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefab.get('some.config.name')")," returns a raw value")),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"Prefab supports ",(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/context"},"context")," for intelligent rule-based evaluation of ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isFeatureEnabled")," based on the current request/device/user/etc."),(0,r.kt)("p",null,"Given"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const context = {\n  user: { key: "some-unique-identifier", country: "US" },\n  subscription: { key: "pro-sub", plan: "pro" },\n};\n')),(0,r.kt)("p",null,"You can pass this in to each call"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefab.get('some.config.name', context, defaultValue)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefab.isFeatureEnabled('some.feature.name', context, false)"))),(0,r.kt)("p",null,"Or you can set the context in a block (perhaps surrounding evaluation of a web request)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'prefab.inContext(context, (pf) => {\n  const optionalJustInTimeContext = { ... }\n\n  console.log(pf.get("some.config.name", optionalJustInTimeContext, defaultValue))\n  console.log(pf.isEnabled("some.config.name", optionalJustInTimeContext, false))\n})\n')),(0,r.kt)("h2",{id:"dynamic-logging"},"Dynamic Logging"),(0,r.kt)("p",null,"The node ecosystem has a vast landscape of logging libraries. Rather than making an opinionated choice about which logger you should use, Prefab provides both a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," wrapper and a way to integrate with your existing logger."),(0,r.kt)(d,{groupId:"logging",mdxType:"Tabs"},(0,r.kt)(c,{value:"console.log",label:"console.log/STDOUT is my thing",mdxType:"TabItem"},(0,r.kt)("p",null,"If you're logging to STDOUT (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log"),") we provide ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab.logger")," for convenience."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Provide a meaningful logger name and default level\nconst logger = prefab.logger("express.example.app.users-path", "warn");\n\n// simple info logging\nlogger.info(`getting results for ${userId}`);\n')),(0,r.kt)("p",null,"You can provide the context to the logger as well (for evaluating dynamic log level rules)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'logger.info(\n  "express.example.app.users-path",\n  "doing something complicated...",\n  { user: { key: userId } },\n);\n')),(0,r.kt)("p",null,"Or, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"inContext")," block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const prefabContext = { user: { key: userId } };\n\n// ... later in your code\nprefab.inContext(prefabContext, (prefab) => {\n  const logger = prefab.logger("express.example.app.users-path", "warn");\n\n  logger.info(`doing something complicated...`);\n});\n'))),(0,r.kt)(c,{value:"I have a preferred logger",label:"I have a preferred logger",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"prefab.shouldLog({loggerName, desiredLevel, defaultLevel, contexts})")," returns true or false"),(0,r.kt)("p",null,"You can use this to wrap your existing logging calls. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const defaultLevel = "warn";\n\nmyLogger.info = (loggerName, msg, context) => {\n  if (\n    prefab.shouldLog({\n      loggerName,\n      defaultLevel,\n      desiredLevel: "info",\n      contexts: context,\n    })\n  ) {\n    // Now you call the underlying method on your preferred logger\n    myPreferredLoggerLibrary.info(msg);\n  }\n};\n\n// repeat for debug, warn, error, etc.\n')),(0,r.kt)("p",null,"Example invocation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'myLogger.info(\n  "express.example.app.users-path",\n  "doing something complicated...",\n  { user: { key: userId } },\n);\n')),(0,r.kt)("p",null,"Or, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"inContext")," block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const prefabContext = { user: { key: userId } };\n\n// ... later in your code\nprefab.inContext(prefabContext, (prefab) => {\n  myLogger.info(\n    "express.example.app.users-path",\n    "doing something complicated",\n  );\n});\n')))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"option-definitions"},"Option Definitions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collectEvaluationSummaries"),(0,r.kt)("td",{parentName:"tr",align:null},"Send counts of config/flag evaluation results back to Prefab to view in web app"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collectLoggerCounts"),(0,r.kt)("td",{parentName:"tr",align:null},"Send counts of logger usage back to Prefab to power log-levels configuration screen"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contextUploadMode"),(0,r.kt)("td",{parentName:"tr",align:null},'Upload either context "shapes" (the names and data types your app uses in prefab contexts) or periodically send full example contexts'),(0,r.kt)("td",{parentName:"tr",align:null},'"periodicExample"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultLevel"),(0,r.kt)("td",{parentName:"tr",align:null},"Level to be used as the min-verbosity for a ",(0,r.kt)("inlineCode",{parentName:"td"},"loggerPath")," if no value is configured in Prefab"),(0,r.kt)("td",{parentName:"tr",align:null},'"warn"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enableSSE"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not we should listen for live changes from Prefab"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enablePolling"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not we should poll for changes from Prefab"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))))}f.isMDXComponent=!0}}]);