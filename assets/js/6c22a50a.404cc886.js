"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[750],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,f=d["".concat(s,".").concat(b)]||d[b]||p[b]||l;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(7462),n=r(7294),l=r(6010),o=r(2389),i=r(7392),s=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r;const{lazy:o,block:d,defaultValue:b,values:f,groupId:m,className:v}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),g=(0,i.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===b?b:null!=(t=null!=b?b:null==(r=h.find((e=>e.props.default)))?void 0:r.props.value)?t:h[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:O}=(0,s.U)(),[E,j]=(0,n.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=w[m];null!=e&&e!==E&&y.some((t=>t.value===e))&&j(e)}const C=e=>{const t=e.currentTarget,r=N.indexOf(t),a=y[r].value;a!==E&&(T(t),j(a),null!=m&&O(m,String(a)))},_=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var a;const t=N.indexOf(e.currentTarget)+1;r=null!=(a=N[t])?a:N[0];break}case"ArrowLeft":{var n;const t=N.indexOf(e.currentTarget)-1;r=null!=(n=N[t])?n:N[N.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},y.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>N.push(e),onKeyDown:_,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),o?(0,n.cloneElement)(h.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function b(e){const t=(0,o.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},6756:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));r(5488),r(5162);const l={title:"Get Started on The Client",sidebar_label:"Get Started Client",sidebar_position:2},o=void 0,i={unversionedId:"tutorials/get-started-client",id:"tutorials/get-started-client",title:"Get Started on The Client",description:"Add the Package",source:"@site/docs/tutorials/get-started-client.md",sourceDirName:"tutorials",slug:"/tutorials/get-started-client",permalink:"/docs/tutorials/get-started-client",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/tutorials/get-started-client.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Get Started on The Client",sidebar_label:"Get Started Client",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get Started",permalink:"/docs/tutorials/get-started"},next:{title:"Explanations",permalink:"/docs/category/explanations"}},s={},u=[{value:"Add the Package",id:"add-the-package",level:2},{value:"Initialize client",id:"initialize-client",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"add-the-package"},"Add the Package"),(0,n.kt)("p",null,"Use your favorite package manager to install ",(0,n.kt)("inlineCode",{parentName:"p"},"@prefab-cloud/prefab-cloud-js")," ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@prefab-cloud/prefab-cloud-js"},"npm")," | ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/prefab-cloud-js"},"github")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"npm install @prefab-cloud/prefab-cloud-js")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn add @prefab-cloud/prefab-cloud-js")),(0,n.kt)("p",null,"TypeScript types are included with the package."),(0,n.kt)("p",null,"If you're using React, consider using our ",(0,n.kt)("a",{parentName:"p",href:"/docs/react"},"React Client")," instead."),(0,n.kt)("h2",{id:"initialize-client"},"Initialize client"),(0,n.kt)("p",null,"Initialize prefab with your api key and an ",(0,n.kt)("inlineCode",{parentName:"p"},"Identity")," for the current user/visitor:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import prefab, { Identity } from '@prefab-cloud/prefab-cloud-js'\n\nconst options = { apiKey: 'YOUR_CLIENT_API_KEY', \n  identity: new Identity('user-1234', { \"customer-group\": \"beta\" }) };\nawait prefab.init(options);\n\n\nif (prefab.isEnabled('features.example-flag') {\n  // ... this code will evaluate  because our identity is in the beta group\n}\n")))}p.isMDXComponent=!0}}]);