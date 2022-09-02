"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Resiliency",sidebar_label:"Resiliency",sidebar_position:2},i=void 0,s={unversionedId:"explanations/resiliency",id:"explanations/resiliency",title:"Resiliency",description:"What if Prefab.cloud goes down?",source:"@site/docs/explanations/resiliency.md",sourceDirName:"explanations",slug:"/explanations/resiliency",permalink:"/prefab-cloud-docs-web/docs/explanations/resiliency",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/explanations/resiliency.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Resiliency",sidebar_label:"Resiliency",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prefab Config Core",permalink:"/prefab-cloud-docs-web/docs/explanations/core"},next:{title:"Bootstrapping",permalink:"/prefab-cloud-docs-web/docs/explanations/bootstrapping"}},l={},c=[{value:"What if Prefab.cloud goes down?",id:"what-if-prefabcloud-goes-down",level:2},{value:"1. Clients run on LocalStorage",id:"1-clients-run-on-localstorage",level:3},{value:"2. Starting New Clients",id:"2-starting-new-clients",level:3},{value:"Belts &amp; Suspenders &amp; More Suspenders",id:"belts--suspenders--more-suspenders",level:4},{value:"3. Emergency Override Updates",id:"3-emergency-override-updates",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-if-prefabcloud-goes-down"},"What if Prefab.cloud goes down?"),(0,o.kt)("p",null,"Uptime is incredibly important to us at Prefab.Cloud but configuration is critical infrastructure so it's important to have a belt & suspenders approach.\nA couple sets of suspenders actualy."),(0,o.kt)("h3",{id:"1-clients-run-on-localstorage"},"1. Clients run on LocalStorage"),(0,o.kt)("p",null,"LocalPrefab.Cloud clients store all config locally so they are robust to network blips or outages. "),(0,o.kt)("p",null,"If a connection is lost for any reason, your services continue to work as is because they keep config locally,\nbut they will not be able to receive new configuration. (We'll get to suspenders for this in #)"),(0,o.kt)("h3",{id:"2-starting-new-clients"},"2. Starting New Clients"),(0,o.kt)("p",null,"Your services don't run indefinitely however. New pods or servers will spin up and they need to pull down configuration as they boot."),(0,o.kt)("p",null,'Enter the beauty of immutable distributed logs. They are "embarrassingly cacheable". One single blob of bytes can describe your entire configuration\nand we can aggressively cache this in CDNs. As long as your services can still connect to Fast.ly or Cloudflare you services can get the latest configuration.'),(0,o.kt)("h4",{id:"belts--suspenders--more-suspenders"},"Belts & Suspenders & More Suspenders"),(0,o.kt)("p",null,"Here's how the load order works:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, the SDKs make a request to the Prefab HTTP APIs, cached by ",(0,o.kt)("a",{parentName:"li",href:"https://Fast.ly"},"Fast.ly"),". This cache is soft purged when you make configuration updates."),(0,o.kt)("li",{parentName:"ol"},"If this fails, the SDKs will make a request to the Prefab GRPC APIs, which are running on the same Prefab infrastructure, but are a separate service. "),(0,o.kt)("li",{parentName:"ol"},"If that fails, the SDKs  will hit ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage"},"GoogleCloudStorage"),". Your configuration is pushed here as you make updates and Google claims 99.999999999% of object durability here. Again, we front this with a Fast.ly CDN. This cache is soft purged when you make configuration updates. "),(0,o.kt)("li",{parentName:"ol"},"Finally, in the case of Fast.ly outage, we switch again try the to a secondary CDN (",(0,o.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/"},"Cloudflare"),") fronting the same GCS. This cache has a 10 min TTL.")),(0,o.kt)("p",null,"That's a lot of redundancy. "),(0,o.kt)("h3",{id:"3-emergency-override-updates"},"3. Emergency Override Updates"),(0,o.kt)("p",null,"The 4 separate load strategies and many layers give us every level of confidence that the SDKs will be able to boot and pull the latest config without issue even if Prefab were to have a major outage."),(0,o.kt)("p",null,"If Prefab  were to suffer a major outage however, you would be left without a way to make any new updates to configuration until the outage was resolved.\nWith this in mind, we've developed an emergency update solution."),(0,o.kt)("p",null,"On SDK initialization you can specify a URL of your own from which the SDKs should pull. This URL can your own S3 or GCS storage location.\nYou can place a config bootstrap file in this bucket and it will have the highest precedence in the SDKs. "),(0,o.kt)("p",null,"This allows you to make emergency override updates without relying on any Prefab architecture at all."),(0,o.kt)("p",null,"Let's continue the discussion of these bootstrapping files in ",(0,o.kt)("a",{parentName:"p",href:"/prefab-cloud-docs-web/docs/explanations/bootstrapping"},"bootstrapping")))}p.isMDXComponent=!0}}]);