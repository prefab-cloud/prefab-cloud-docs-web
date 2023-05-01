"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[78],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(3117),r=(n(7294),n(3905));const i={title:"Rules and Segmentation",sidebar_label:"Rules and Segmentation",sidebar_position:3},o=void 0,l={unversionedId:"explanations/rules-and-segmentation",id:"explanations/rules-and-segmentation",title:"Rules and Segmentation",description:"Prefab provides powerful rules that can you can compose to target exactly the users you're interested in.",source:"@site/docs/explanations/rules-and-segmentation.md",sourceDirName:"explanations",slug:"/explanations/rules-and-segmentation",permalink:"/docs/explanations/rules-and-segmentation",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/explanations/rules-and-segmentation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Rules and Segmentation",sidebar_label:"Rules and Segmentation",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Reliability",permalink:"/docs/explanations/resiliency"},next:{title:"Targeted Log Levels",permalink:"/docs/explanations/targeted-log-levels"}},d={},s=[{value:"Available Rules",id:"available-rules",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Prefab provides powerful rules that can you can compose to target exactly the users you're interested in."),(0,r.kt)("p",null,"Segments are reusable sets of rules that you can use across multiple feature flags."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Rules are evaluated in order. You can drag and drop rules to rearrange them. The first matching rule determines which variant is served.")),(0,r.kt)("p",null,"When a rule matches, you can either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Return a specific variant (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"yellow"),")"),(0,r.kt)("li",{parentName:"ul"},"Return a variant based on a percentage (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," 10% of the time and ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," 90% of the time)")),(0,r.kt)("p",null,'Note that the variant determined by percentage rollouts is "sticky" to the provided lookup key and won\'t change unless the key changes or the percentage values change.'),(0,r.kt)("h2",{id:"available-rules"},"Available Rules"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Example usage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Property Is One Of")),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"Property Is One Of")," to target users with specific attributes."),(0,r.kt)("td",{parentName:"tr",align:null},"If you set ",(0,r.kt)("inlineCode",{parentName:"td"},"Criteria Property")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"subscription")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Criteria Values")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"pro,advanced")," then it will match users with a ",(0,r.kt)("inlineCode",{parentName:"td"},"pro")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"advanced")," subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Property Is Not One Of")),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"Property Is Not One Of")," to target users who do not match a specific attribute."),(0,r.kt)("td",{parentName:"tr",align:null},"If you set ",(0,r.kt)("inlineCode",{parentName:"td"},"Criteria Property")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"subscription")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Criteria Values")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"pro,advanced")," then it will match users who have neither a ",(0,r.kt)("inlineCode",{parentName:"td"},"pro")," nor an ",(0,r.kt)("inlineCode",{parentName:"td"},"advanced")," subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Property Ends With One Of")),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"Property Ends With One Of")," to target users with an attribute that ends with a value."),(0,r.kt)("td",{parentName:"tr",align:null},"If you set ",(0,r.kt)("inlineCode",{parentName:"td"},"Criteria Property")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"email")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Criteria Values")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"@example.com")," then it will match users who have an ",(0,r.kt)("inlineCode",{parentName:"td"},"email")," ending with ",(0,r.kt)("inlineCode",{parentName:"td"},"@example.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Property Does Not End With One Of")),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"Property Does Not End With One Of")," to target users with an attribute that does not end with a value."),(0,r.kt)("td",{parentName:"tr",align:null},"If you set ",(0,r.kt)("inlineCode",{parentName:"td"},"Criteria Property")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"email")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Criteria Values")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"@gmail.com,@yahoo.com")," then it will match users who have an ",(0,r.kt)("inlineCode",{parentName:"td"},"email")," that does not end with ",(0,r.kt)("inlineCode",{parentName:"td"},"@gmail.com")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"@yahoo.com"),".")))))}m.isMDXComponent=!0}}]);