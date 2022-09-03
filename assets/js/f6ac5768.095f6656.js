"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[871],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"SDK Reliability",sidebar_label:"SDK Reliability",sidebar_position:2},i=void 0,s={unversionedId:"explanations/resiliency",id:"explanations/resiliency",title:"SDK Reliability",description:"What if Prefab.cloud goes down?",source:"@site/docs/explanations/resiliency.md",sourceDirName:"explanations",slug:"/explanations/resiliency",permalink:"/docs/explanations/resiliency",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/explanations/resiliency.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"SDK Reliability",sidebar_label:"SDK Reliability",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prefab Config Core",permalink:"/docs/explanations/core"},next:{title:"Bootstrapping",permalink:"/docs/explanations/bootstrapping"}},l={},c=[{value:"What if Prefab.cloud goes down?",id:"what-if-prefabcloud-goes-down",level:2},{value:"1. Server SDK Clients run on local copies of data",id:"1-server-sdk-clients-run-on-local-copies-of-data",level:3},{value:"2. Starting New Clients",id:"2-starting-new-clients",level:3},{value:"Belts &amp; Suspenders &amp; More Suspenders",id:"belts--suspenders--more-suspenders",level:4}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-if-prefabcloud-goes-down"},"What if Prefab.cloud goes down?"),(0,o.kt)("p",null,"Uptime is incredibly important to us at Prefab.Cloud but configuration is critical infrastructure so it's important to have a belt & suspenders approach.\nA couple sets of suspenders actually."),(0,o.kt)("h3",{id:"1-server-sdk-clients-run-on-local-copies-of-data"},"1. Server SDK Clients run on local copies of data"),(0,o.kt)("p",null,"LocalPrefab.Cloud clients store all config locally so they are robust to network blips or outages. "),(0,o.kt)("p",null,"If a connection is lost for any reason, your services continue to work as is because they keep config locally,\nbut they will not be able to receive new configuration. (We'll get to suspenders for this in #)"),(0,o.kt)("h3",{id:"2-starting-new-clients"},"2. Starting New Clients"),(0,o.kt)("p",null,"Your services don't run indefinitely however. New pods or servers will spin up and they need to pull down configuration as they boot."),(0,o.kt)("p",null,'Enter the beauty of immutable distributed logs. They are "embarrassingly cacheable". One single blob of bytes can describe your entire configuration\nand we can aggressively cache this in CDNs. As long as your services can still connect to Fast.ly or Cloudflare you services can get the latest configuration.'),(0,o.kt)("h4",{id:"belts--suspenders--more-suspenders"},"Belts & Suspenders & More Suspenders"),(0,o.kt)("p",null,"Here's how the load order works:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, the SDKs make a request to the Prefab HTTP APIs, cached by ",(0,o.kt)("a",{parentName:"li",href:"https://Fast.ly"},"Fast.ly"),". This cache is soft purged when you make configuration updates."),(0,o.kt)("li",{parentName:"ol"},"If this fails, the SDKs will make a request to the Prefab GRPC APIs, which are running on the same Prefab infrastructure, but are a separate service. "),(0,o.kt)("li",{parentName:"ol"},"If this fails, the SDKs will make a request to the Prefab JSON APIs. This would help in the event of a Fast.ly outage.")),(0,o.kt)("p",null,"That's a lot of redundancy and we've got more coming soon."),(0,o.kt)("p",null,"Let's continue the discussion of these bootstrapping files in ",(0,o.kt)("a",{parentName:"p",href:"/docs/explanations/bootstrapping"},"bootstrapping")))}p.isMDXComponent=!0}}]);