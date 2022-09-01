"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[592],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3633:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"How Server SDKs Work",sidebar_label:"Server SDKs",sidebar_position:6},s=void 0,i={unversionedId:"explanations/server-sdks",id:"explanations/server-sdks",title:"How Server SDKs Work",description:"image",source:"@site/docs/explanations/server-sdks.md",sourceDirName:"explanations",slug:"/explanations/server-sdks",permalink:"/docs/explanations/server-sdks",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/explanations/server-sdks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"How Server SDKs Work",sidebar_label:"Server SDKs",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/docs/explanations/testing"},next:{title:"Client SDKs",permalink:"/docs/explanations/client-sdks"}},l={},c=[{value:"Implementation",id:"implementation",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:r(249).Z,width:"1832",height:"638"})),(0,a.kt)("p",null,"Note that the evaluation is always happening in process in your application. Feature flags are stored in process so are lightning fast (no API calls when you access them)."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/explanations/client-sdks"},"See Client SDKs to compare")),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"When your feature flag client boots, it creates a local hashmap which will hold the config.\nThe general purpose Prefab config system will then push & pull changes down to your clients.\nThe expected latency is < 100 ms."),(0,a.kt)("p",null,"Feature flags are built on top of the Prefab config store so all reliability notes are applicable for Feature Flags as well."))}u.isMDXComponent=!0},249:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server-sdks-5d2b885865e7b42fda712dab7516dcef.png"}}]);