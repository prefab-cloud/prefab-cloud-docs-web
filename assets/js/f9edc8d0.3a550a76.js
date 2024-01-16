"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[7125],{3905:(e,t,A)=>{A.d(t,{Zo:()=>i,kt:()=>u});var n=A(7294);function r(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function l(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function a(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?l(Object(A),!0).forEach((function(t){r(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):l(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function o(e,t){if(null==e)return{};var A,n,r=function(e,t){if(null==e)return{};var A,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)A=l[n],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)A=l[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),A=t;return e&&(A="function"==typeof e?e(t):a(a({},t),e)),A},i=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var A=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=d(A),c=r,u=s["".concat(p,".").concat(c)]||s[c]||g[c]||l;return A?n.createElement(u,a(a({ref:t},i),{},{components:A})):n.createElement(u,a({ref:t},i))}));function u(e,t){var A=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=A.length,a=new Array(l);a[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,a[1]=o;for(var d=2;d<l;d++)a[d]=A[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,A)}c.displayName="MDXCreateElement"},2409:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=A(7462),r=(A(7294),A(3905));const l={title:"Targeted Log Levels",sidebar_label:"Targeted Log Levels",sidebar_position:1},a=void 0,o={unversionedId:"explanations/features/targeted-log-levels",id:"explanations/features/targeted-log-levels",title:"Targeted Log Levels",description:"SDK clients provide wrappers for loggers to enable dynamic and targeted log levels.",source:"@site/docs/explanations/features/targeted-log-levels.md",sourceDirName:"explanations/features",slug:"/explanations/features/targeted-log-levels",permalink:"/docs/explanations/features/targeted-log-levels",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/explanations/features/targeted-log-levels.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Targeted Log Levels",sidebar_label:"Targeted Log Levels",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/docs/category/features"},next:{title:"Secret Management",permalink:"/docs/explanations/features/secret-management"}},p={},d=[{value:"Dynamic log levels",id:"dynamic-log-levels",level:2},{value:"Targeting",id:"targeting",level:2}],i={toc:d},s="wrapper";function g(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,n.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SDK clients provide wrappers for loggers to enable dynamic and targeted log levels."),(0,r.kt)("h2",{id:"dynamic-log-levels"},"Dynamic log levels"),(0,r.kt)("p",null,"Changing log levels in an application is typically painful and involves editing files and redeploying."),(0,r.kt)("p",null,"Prefab allows you to change your log level at any time at any place in your stack. You can set levels anywhere in your application's tree (down to the function-level)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dynamic levels",src:A(8926).Z,width:"500",height:"323"})),(0,r.kt)("h2",{id:"targeting"},"Targeting"),(0,r.kt)("p",null,"Dynamic log levels gain super powers when combined with our ",(0,r.kt)("a",{parentName:"p",href:"rules-and-segmentation"},"rules engine"),". By adding ",(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/context"},"context")," about the current user/request/device/etc. you can get exactly the verbosity you want to track down tricky bugs without blowing through your log retention bill."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"targeted log rules",src:A(4405).Z,width:"1146",height:"453"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"targeted log level",src:A(2716).Z,width:"611",height:"247"})))}g.isMDXComponent=!0},8926:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/dynamic-levels-04b0487f5e9c0a0f4eba8dbc0334dc33.png"},2716:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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"},4405:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/targeted-log-rules-fbe675d6dbfbbc3e70ae65b4eed26a49.png"}}]);