"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),p=n(1980),u=n(7392),s=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[p,u]=f({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=p??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var k=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:p,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==o&&(d(t),p(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},3182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));n(4866),n(5162);const l={title:"JavaScript Client"},i=void 0,o={unversionedId:"javascript",id:"javascript",title:"JavaScript Client",description:"Getting Started With the JavaScript Client",source:"@site/docs/javascript.md",sourceDirName:".",slug:"/javascript",permalink:"/docs/javascript",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/javascript.md",tags:[],version:"current",frontMatter:{title:"JavaScript Client"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/python-sdk/python"},next:{title:"React Client",permalink:"/docs/react"}},p={},u=[{value:"Getting Started With the JavaScript Client",id:"getting-started-with-the-javascript-client",level:2},{value:"Initialize client",id:"initialize-client",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>prefab</code> Properties",id:"prefab-properties",level:3},{value:"<code>shouldLog()</code>",id:"shouldlog",level:2},{value:"<code>poll()</code>",id:"poll",level:2},{value:"Testing",id:"testing",level:2}],s={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getting-started-with-the-javascript-client"},"Getting Started With the JavaScript Client"),(0,r.kt)("p",null,"Use your favorite package manager to install ",(0,r.kt)("inlineCode",{parentName:"p"},"@prefab-cloud/prefab-cloud-js")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@prefab-cloud/prefab-cloud-js"},"npm")," | ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/prefab-cloud-js"},"github")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install @prefab-cloud/prefab-cloud-js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add @prefab-cloud/prefab-cloud-js")),(0,r.kt)("p",null,"TypeScript types are included with the package."),(0,r.kt)("p",null,"If you're using React, consider using our ",(0,r.kt)("a",{parentName:"p",href:"/docs/react"},"React Client")," instead."),(0,r.kt)("h2",{id:"initialize-client"},"Initialize client"),(0,r.kt)("p",null,"Initialize prefab with your api key and a ",(0,r.kt)("a",{parentName:"p",href:"./explanations/context"},(0,r.kt)("inlineCode",{parentName:"a"},"Context")," ")," for the current user/visitor/device/request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { prefab, Context } from '@prefab-cloud/prefab-cloud-js'\n\nconst options = {\n  apiKey: '1234',\n  context: new Context({user: { email: 'test@example.com' }, device: { mobile: true } })\n};\n\nawait prefab.init(options);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Context")," accepts an object with keys that are context names and key value pairs with attributes describing the context. You can use this to e.g. ",(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/rules-and-segmentation"},"segment")," your users."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"prefab.init")," will request the calculated config and feature flags for the provided context as a single HTTPS request."),(0,r.kt)("p",null,"You aren't required to ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," -- it is a promise, so you can use ",(0,r.kt)("inlineCode",{parentName:"p"},".then"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".finally"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".catch"),", etc. instead if you prefer."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"While ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab")," is loading, ",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldLog")," will use your ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultLevel"),".")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Now you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab"),"'s config and feature flag evaluation, e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (prefab.isEnabled('cool-feature') {\n  // ... this code only evaluates if `cool-feature` is enabled for the current context\n}\n\nsetTimeout(ping, prefab.get('ping-delay'));\n")),(0,r.kt)("h3",{id:"prefab-properties"},(0,r.kt)("inlineCode",{parentName:"h3"},"prefab")," Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"example"),(0,r.kt)("th",{parentName:"tr",align:null},"purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'prefab.isEnabled("new-logo")')),(0,r.kt)("td",{parentName:"tr",align:null},"returns a boolean (default ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),") if a feature is enabled based on the current context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"get")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prefab.get('retry-count')")),(0,r.kt)("td",{parentName:"tr",align:null},"returns the value of a flag or config evaluated in the current context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loaded")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"if (prefab.loaded) { ... }")),(0,r.kt)("td",{parentName:"tr",align:null},"a boolean indicating whether prefab content has loaded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shouldLog")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"if (prefab.shouldLog(...)) {")),(0,r.kt)("td",{parentName:"tr",align:null},"returns a boolean indicating whether the proposed log level is valid for the current context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"poll")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prefab.poll({frequencyInMs})")),(0,r.kt)("td",{parentName:"tr",align:null},"starts polling every ",(0,r.kt)("inlineCode",{parentName:"td"},"frequencyInMs")," ms.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stopPolling")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prefab.stopPolling()")),(0,r.kt)("td",{parentName:"tr",align:null},"stops the polling process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prefab.context = new Context(...)")),(0,r.kt)("td",{parentName:"tr",align:null},"get or set the current context (after ",(0,r.kt)("inlineCode",{parentName:"td"},"init()"),")")))),(0,r.kt)("h2",{id:"shouldlog"},(0,r.kt)("inlineCode",{parentName:"h2"},"shouldLog()")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shouldLog")," allows you to implement dynamic logging. It takes the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"example"),(0,r.kt)("th",{parentName:"tr",align:null},"case-sensitive"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loggerName")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"my.corp.widgets.modal"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"desiredLevel")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"INFO"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"defaultLevel")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"If you've configured a level value for ",(0,r.kt)("inlineCode",{parentName:"p"},"loggerName"),' (or a parent in the dot-notation hierarchy like "my.corp.widgets") then that value will be used for comparison against the ',(0,r.kt)("inlineCode",{parentName:"p"},"desiredLevel"),". If no configured level is found in the hierarchy for ",(0,r.kt)("inlineCode",{parentName:"p"},"loggerName")," then the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultLevel")," will be compared against ",(0,r.kt)("inlineCode",{parentName:"p"},"desiredLevel"),"."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"desiredLevel")," is greater than or equal to the comparison severity, then ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldLog")," returns true. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"desiredLevel")," is less than the comparison severity, then ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldLog")," will return false."),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const desiredLevel = "info";\nconst defaultLevel = "error";\nconst loggerName = "my.corp.widgets.modal";\n\nif (shouldLog({ loggerName, desiredLevel, defaultLevel })) {\n  console.info("...");\n}\n')),(0,r.kt)("p",null,'If no log level value is configured in Prefab for "my.corp.widgets.modal" or higher in the hierarchy, then the ',(0,r.kt)("inlineCode",{parentName:"p"},"console.info")," will not happen. If the value is configured and is INFO or more verbose, the ",(0,r.kt)("inlineCode",{parentName:"p"},"console.info")," will happen."),(0,r.kt)("h2",{id:"poll"},(0,r.kt)("inlineCode",{parentName:"h2"},"poll()")),(0,r.kt)("p",null,"After ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab.init()"),", you can start polling. Polling uses the context you defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," by default. You can update the context for future polling by setting it on the ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab")," object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// some time after init\nprefab.poll({frequencyInMs: 300000})\n\n// we're now polling with the context used from `init`\n\n// later, perhaps after a visitor logs in and now you have the context of their current user\nprefab.context = new Context({...prefab.context, user: { email: user.email, key: user.trackingId })\n\n// future polling will use the new context\n")),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"In your test suite, you should skip ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab.init")," altogether and instead use ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab.setConfig")," to set up your test state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"it('shows the turbo button when the feature is enabled', () => {\n  prefab.setConfig({\n    turbo: true,\n    defaultMediaCount: 3,\n  });\n\n  const rendered = new MyComponent().render();\n\n  expect(rendered).toMatch(/Enable Turbo/);\n  expect(rendered).toMatch(/Media Count: 3/);\n});\n")))}c.isMDXComponent=!0}}]);