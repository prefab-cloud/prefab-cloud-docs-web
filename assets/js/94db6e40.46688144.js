"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),f=r,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),u=n(1980),s=n(7392),p=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=m({queryString:n,groupId:a}),[c,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=u??c;return f({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var h=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==o&&(c(t),u(a))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:d},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},3182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(4866),n(5162);const l={title:"JavaScript Client"},i=void 0,o={unversionedId:"javascript",id:"javascript",title:"JavaScript Client",description:"Getting Started With the JavaScript Client",source:"@site/docs/javascript.md",sourceDirName:".",slug:"/javascript",permalink:"/docs/javascript",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/javascript.md",tags:[],version:"current",frontMatter:{title:"JavaScript Client"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/python-sdk/python"},next:{title:"React Client",permalink:"/docs/react"}},u={},s=[{value:"Getting Started With the JavaScript Client",id:"getting-started-with-the-javascript-client",level:2},{value:"Initialize client",id:"initialize-client",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>prefab</code> Properties",id:"prefab-properties",level:3},{value:"Testing",id:"testing",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getting-started-with-the-javascript-client"},"Getting Started With the JavaScript Client"),(0,r.kt)("p",null,"Use your favorite package manager to install ",(0,r.kt)("inlineCode",{parentName:"p"},"@prefab-cloud/prefab-cloud-js")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@prefab-cloud/prefab-cloud-js"},"npm")," | ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/prefab-cloud-js"},"github")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install @prefab-cloud/prefab-cloud-js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add @prefab-cloud/prefab-cloud-js")),(0,r.kt)("p",null,"TypeScript types are included with the package."),(0,r.kt)("p",null,"If you're using React, consider using our ",(0,r.kt)("a",{parentName:"p",href:"/docs/react"},"React Client")," instead."),(0,r.kt)("h2",{id:"initialize-client"},"Initialize client"),(0,r.kt)("p",null,"Initialize prefab with your api key and a ",(0,r.kt)("a",{parentName:"p",href:"./explanations/context"},(0,r.kt)("inlineCode",{parentName:"a"},"Context")," ")," for the current user/visitor/device/request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { prefab, Context } from '@prefab-cloud/prefab-cloud-js'\n\nconst options = {\n  apiKey: '1234',\n  context: new Context({user: { email: 'test@example.com' }, device: { mobile: true } })\n};\n\nawait prefab.init(options);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context")," accepts an object with keys that are context names and key value pairs with attributes describing the context. You can use this to e.g. ",(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/rules-and-segmentation"},"segment")," your users."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"prefab.init")," will request the calculated config and feature flags for the provided context as a single HTTPS request."),(0,r.kt)("p",null,"You aren't required to ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," -- it is a promise, so you can use ",(0,r.kt)("inlineCode",{parentName:"p"},".then"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".finally"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".catch"),", etc. instead if you prefer."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"While ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab")," is loading, ",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),".")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Now you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab"),"'s config and feature flag evaluation, e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (prefab.isEnabled('cool-feature') {\n  // ... this code only evaluates if `cool-feature` is enabled for the current context\n}\n\nsetTimeout(ping, prefab.get('ping-delay'));\n")),(0,r.kt)("h3",{id:"prefab-properties"},(0,r.kt)("inlineCode",{parentName:"h3"},"prefab")," Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"example"),(0,r.kt)("th",{parentName:"tr",align:null},"purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'prefab.isEnabled("new-logo")')),(0,r.kt)("td",{parentName:"tr",align:null},"returns a boolean (default ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),") if a feature is enabled based on the current context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"get")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prefab.get('retry-count')")),(0,r.kt)("td",{parentName:"tr",align:null},"returns the value of a flag or config evaluated in the current context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loaded")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"if (prefab.loaded) { ... }")),(0,r.kt)("td",{parentName:"tr",align:null},"a boolean indicating whether prefab content has loaded")))),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"In your test suite, you should skip ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab.init")," altogether and instead use ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab.setConfig")," to set up your test state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"it('shows the turbo button when the feature is enabled', () => {\n  prefab.setConfig({\n    turbo: true,\n    defaultMediaCount: 3,\n  });\n\n  const rendered = new MyComponent().render();\n\n  expect(rendered).toMatch(/Enable Turbo/);\n  expect(rendered).toMatch(/Media Count: 3/);\n});\n")))}d.isMDXComponent=!0}}]);