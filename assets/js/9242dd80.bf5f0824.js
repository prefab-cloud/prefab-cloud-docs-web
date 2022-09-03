"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),y=r,h=d["".concat(s,".").concat(y)]||d[y]||c[y]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={title:"Prefab Config Core",sidebar_label:"Prefab Config Core",sidebar_position:1},o=void 0,i={unversionedId:"explanations/core",id:"explanations/core",title:"Prefab Config Core",description:"Core Functionality",source:"@site/docs/explanations/core.md",sourceDirName:"explanations",slug:"/explanations/core",permalink:"/docs/explanations/core",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/explanations/core.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Prefab Config Core",sidebar_label:"Prefab Config Core",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Explanations",permalink:"/docs/category/explanations"},next:{title:"Resiliency",permalink:"/docs/explanations/resiliency"}},s={},u=[{value:"Core Functionality",id:"core-functionality",level:2},{value:"StreamingUpdate",id:"streamingupdate",level:3},{value:"Full Payload",id:"full-payload",level:3},{value:"Updating a value",id:"updating-a-value",level:3},{value:"StreamingUpdate",id:"streamingupdate-1",level:3},{value:"Full Payload",id:"full-payload-1",level:3},{value:"What would you do with the Fastest DB in the World?",id:"what-would-you-do-with-the-fastest-db-in-the-world",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"core-functionality"},"Core Functionality"),(0,r.kt)("p",null,"The core element of Prefab Config & FeatureFlags is a local key value store, powered by a distributed log.\nWhat's that mean? Let's have an example. "),(0,r.kt)("p",null,"Here's a simplified version of the Prefab Config log. We have a single key with a basic integer value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 100,\n    "key": "key1",\n    "value": 1\n  }\n]\n')),(0,r.kt)("p",null,"Our server clients can make an API call and store this in a concurrency safe local hash so that we can call ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab.getInt('key1')")," in our clients.\nTada! It's a local key value store. "),(0,r.kt)("p",null,"Now, what happens if we add another key/value? Well, we have two constituents to think about. First we have our existing clients.\nThey already know about the first key, so we can just send them a partial update. "),(0,r.kt)("p",null,"Prefab SDK clients use either ",(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/"},"GRPC")," or ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events"},"SSE"),"\nto send this partial update."),(0,r.kt)("h3",{id:"streamingupdate"},"StreamingUpdate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 102,\n    "key": "key2",\n    "value": "string"\n  }\n]\n')),(0,r.kt)("p",null,"Our second constituent are things like new server instances booting up, it needs to know everything, so it can request the entire payload."),(0,r.kt)("h3",{id:"full-payload"},"Full Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[  \n  {\n  "id": 100,\n  "key": "key1",\n  "value": 1\n  },\n  {\n    "id": 102,\n    "key": "key2",\n    "value": "string"\n  }\n]\n')),(0,r.kt)("h3",{id:"updating-a-value"},"Updating a value"),(0,r.kt)("p",null,"Let's walk through changing the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"key1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),". Our entry in the log will look just like the first entry, but we will have an updated ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," that\nis larger than the original value."),(0,r.kt)("h3",{id:"streamingupdate-1"},"StreamingUpdate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 103,\n    "key": "key1",\n    "value": 2\n  }\n]\n')),(0,r.kt)("p",null,"When a new server instance boots up, it needs to know everything, so it can request the entire payload."),(0,r.kt)("h3",{id:"full-payload-1"},"Full Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[  \n  {\n  "id": 100,\n  "key": "key1",\n  "value": 1\n  },\n  {\n    "id": 102,\n    "key": "key2",\n    "value": "string"\n  },\n  {\n    "id": 103,\n    "key": "key1",\n    "value": 2\n  }\n]\n')),(0,r.kt)("p",null,"The full payload can have either the full history of configuration or just the latest values, it doesn't really matter. The clients will only use the\nlatest ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," that they see for each key."),(0,r.kt)("h2",{id:"what-would-you-do-with-the-fastest-db-in-the-world"},"What would you do with the Fastest DB in the World?"),(0,r.kt)("p",null,"Prefab's config system can look a lot like a key/value store, with one big big difference.\nMuch like something like Consul, the KV store is actually distributed to every client. Which means no API calls when you want a value \u2014 everything is in-memory."),(0,r.kt)("p",null,"Because it's so blazing fast, it really changes what you can do with it. It's totally appropriate to query it many times on every request.\nYou would never query the database 40 different times while processing a request just to get your app configuration, but when it is essentially\nfree it means you're now able to make almost every element of your application dynamically configurable."),(0,r.kt)("p",null,"Let's carry on in ",(0,r.kt)("a",{parentName:"p",href:"resiliency"},"resiliency")," because if we're really going to run our application on top of something like this\nit has absolutely got to work."))}c.isMDXComponent=!0}}]);