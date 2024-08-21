"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[7141],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),y=n,f=p["".concat(o,".").concat(y)]||p[y]||u[y]||i;return a?r.createElement(f,s(s({ref:t},d),{},{components:a})):r.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=y;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},3643:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={title:"JavaScript SSR, CSR, Hybrid, and Statically Generated Sites",sidebar_label:"JavaScript SSR & Hybrid Apps",sidebar_position:6},s=void 0,l={unversionedId:"explanations/concepts/SSR-and-hybrid-apps",id:"explanations/concepts/SSR-and-hybrid-apps",title:"JavaScript SSR, CSR, Hybrid, and Statically Generated Sites",description:"Prefab \ud83e\udef6 JavaScript: SSR, CSR, Hybrid, and Statically Generated Sites",source:"@site/docs/explanations/concepts/SSR-and-hybrid-apps.md",sourceDirName:"explanations/concepts",slug:"/explanations/concepts/SSR-and-hybrid-apps",permalink:"/docs/explanations/concepts/SSR-and-hybrid-apps",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/explanations/concepts/SSR-and-hybrid-apps.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"JavaScript SSR, CSR, Hybrid, and Statically Generated Sites",sidebar_label:"JavaScript SSR & Hybrid Apps",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Testing & DataFiles",permalink:"/docs/explanations/concepts/testing"},next:{title:"Default Files",permalink:"/docs/explanations/concepts/defaults"}},o={},c=[{value:"Prefab \ud83e\udef6 JavaScript: SSR, CSR, Hybrid, and Statically Generated Sites",id:"prefab--javascript-ssr-csr-hybrid-and-statically-generated-sites",level:2},{value:"The relevant clients",id:"the-relevant-clients",level:2},{value:"SSR",id:"ssr",level:2},{value:"CSR",id:"csr",level:2},{value:"Hybrid apps",id:"hybrid-apps",level:2},{value:"Statically Generated Sites",id:"statically-generated-sites",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prefab--javascript-ssr-csr-hybrid-and-statically-generated-sites"},"Prefab \ud83e\udef6 JavaScript: SSR, CSR, Hybrid, and Statically Generated Sites"),(0,n.kt)("p",null,"Prefab is designed to work in a variety of environments, from server-side rendering (SSR) to client-side rendering (CSR) to hybrid apps that use both."),(0,n.kt)("h2",{id:"the-relevant-clients"},"The relevant clients"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../sdks/node"},"Node")," client: This runs on your server and provides in-memory evaluation of config and feature flags. You can provide it with user-specific context for those evaluations in your request handlers. It gets streaming updates over SSE from Prefab. ",(0,n.kt)("a",{parentName:"li",href:"./backend-sdks"},"Learn more about backend SDKs"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../sdks/javascript"},"JavaScript")," (or ",(0,n.kt)("a",{parentName:"li",href:"../../sdks/react"},"React"),") client: This runs in the browser and makes a single HTTP request to Prefab with the current user's context to get the evaluated feature flags (and any config you've specified as \"Send to frontend SDKs\"). Once it has the flags, it can evaluate them in memory. ",(0,n.kt)("a",{parentName:"li",href:"./frontend-sdks"},"Learn more about frontend SDKs"),".")),(0,n.kt)("h2",{id:"ssr"},"SSR"),(0,n.kt)("p",null,"If you're doing pure server-side rendering, you only need the Node client."),(0,n.kt)("h2",{id:"csr"},"CSR"),(0,n.kt)("p",null,"If you're doing pure client-side rendering, you only need the JavaScript (or React) client."),(0,n.kt)("h2",{id:"hybrid-apps"},"Hybrid apps"),(0,n.kt)("p",null,"Hybrid apps (those using SSR and CSR) will probably want ",(0,n.kt)("em",{parentName:"p"},"both")," the Node and JavaScript (or React) clients."),(0,n.kt)("p",null,"The Node client can handle in-request evaluations, and the JavaScript (or React) client can handle client-side evaluations to determine what to render."),(0,n.kt)("h2",{id:"statically-generated-sites"},"Statically Generated Sites"),(0,n.kt)("p",null,"Statically generated sites can use the Node client to evaluate flags at build time. If your statically generated site has client-side rendering, you'll also want the JavaScript (or React) client."))}u.isMDXComponent=!0}}]);