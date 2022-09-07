"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:f,groupId:b,className:g}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[P,C]=(0,a.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=b){const e=N[b];null!=e&&e!==P&&h.some((t=>t.value===e))&&C(e)}const j=e=>{const t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==P&&(T(t),C(r),null!=b&&w(b,String(r)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=E.indexOf(e.currentTarget)+1;n=null!=(r=E[t])?r:E[0];break}case"ArrowLeft":{var a;const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>E.push(e),onKeyDown:O,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(k.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},3936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));n(5488),n(5162);const l={title:"React Client"},o=void 0,i={unversionedId:"react",id:"react",title:"React Client",description:"Getting Started With the React Client",source:"@site/docs/react.md",sourceDirName:".",slug:"/react",permalink:"/docs/react",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react.md",tags:[],version:"current",frontMatter:{title:"React Client"},sidebar:"tutorialSidebar",previous:{title:"JavaScript Client",permalink:"/docs/javascript"}},s={},u=[{value:"Getting Started With the React Client",id:"getting-started-with-the-react-client",level:2},{value:"Usage in your app",id:"usage-in-your-app",level:2},{value:"<code>usePrefab</code> properties",id:"useprefab-properties",level:3},{value:"Testing",id:"testing",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"getting-started-with-the-react-client"},"Getting Started With the React Client"),(0,a.kt)("p",null,"Use your favorite package manager to install ",(0,a.kt)("inlineCode",{parentName:"p"},"@prefab-cloud/prefab-cloud-react")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@prefab-cloud/prefab-cloud-react"},"npm")," | ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/prefab-cloud-react"},"github")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm install @prefab-cloud/prefab-cloud-react")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add @prefab-cloud/prefab-cloud-react")),(0,a.kt)("p",null,"TypeScript types are included with the package."),(0,a.kt)("h2",{id:"usage-in-your-app"},"Usage in your app"),(0,a.kt)("p",null,"This client includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"<PrefabProvider>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"usePrefab")," hook."),(0,a.kt)("p",null,"First, wrap your component tree in the ",(0,a.kt)("inlineCode",{parentName:"p"},"PrefabProvider"),", e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import PrefabProvider from \'@prefab-cloud/prefab-cloud-react\';\n\nconst WrappedApp = () => {\n  const lookupKey = "user-12345";\n  const identityAttributes = {email: "jeffrey@example.com", plan: "advanced"};\n\n  const onError = (reason) => {\n    console.error(reason);\n  }\n\n  return (\n    <PrefabProvider\n      apiKey={\'YOUR_CLIENT_API_KEY\'}\n      lookupKey={lookupKey}\n      identityAttributes={identityAttributes}\n      onError={onError}>\n      <App />\n    </PrefabProvider>\n  );\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lookupKey")," should be a unique key for the current visitor/user"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identityAttributes")," are attributes that you can use to ",(0,a.kt)("a",{parentName:"li",href:"/docs/explanations/rules-and-segmentation"},"segment")," your users")),(0,a.kt)("p",null,"Now use the ",(0,a.kt)("inlineCode",{parentName:"p"},"usePrefab")," hook to fetch flags and config values"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const Logo = () => {\n  const { isEnabled } = usePrefab();\n\n  if (isEnabled("new-logo")) {\n    return (\n      <img src={newLogo} className="App-logo" alt="logo" />\n    );\n  }\n\n  return (\n    <img src={logo} className="App-logo" alt="logo" />\n  );\n};\n\n')),(0,a.kt)("h3",{id:"useprefab-properties"},(0,a.kt)("inlineCode",{parentName:"h3"},"usePrefab")," properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const { isEnabled, get, loading, lookupKey, identityAttributes } = usePrefab();\n")),(0,a.kt)("p",null,"Here's an explanation of each property"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"property"),(0,a.kt)("th",{parentName:"tr",align:null},"example"),(0,a.kt)("th",{parentName:"tr",align:null},"purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"isEnabled")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'isEnabled("new-logo")')),(0,a.kt)("td",{parentName:"tr",align:null},"returns a boolean (default ",(0,a.kt)("inlineCode",{parentName:"td"},"false"),") if a feature is enabled based on the currently identified user")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"get")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"get('retry-count')")),(0,a.kt)("td",{parentName:"tr",align:null},"returns the value of a flag or config")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"loading")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"if (loading) { ... }")),(0,a.kt)("td",{parentName:"tr",align:null},"a boolean indicating whether prefab content is being loaded")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lookupKey")),(0,a.kt)("td",{parentName:"tr",align:null},"N/A"),(0,a.kt)("td",{parentName:"tr",align:null},"this is the key you passed when setting up the provider")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"identityAttributes")),(0,a.kt)("td",{parentName:"tr",align:null},"N/A"),(0,a.kt)("td",{parentName:"tr",align:null},"this is the identity attributes object you passed when setting up the provider")))),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Wrap the component under test in a ",(0,a.kt)("inlineCode",{parentName:"p"},"PrefabTestProvider")," and provide a config object to set up your test state."),(0,a.kt)("p",null,"e.g. if you wanted to test the following trivial component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function MyComponent() {\n  const { get, isEnabled, loading } = usePrefab();\n  const greeting = get('greeting') || 'Greetings';\n\n  if (loading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1 role=\"alert\">{greeting}</h1>\n      { isEnabled('secretFeature') && <button type=\"submit\" title=\"secret-feature\">Secret feature</button> }\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"You could do the following in ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"jest"),"/",(0,a.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro/"},"rtl")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { PrefabTestProvider } from './index';\n\nconst renderInTestProvider = (config: {[key: string]: any}) => {\n  render(\n    <PrefabTestProvider config={config}>\n      <MyComponent />\n    </PrefabTestProvider>,\n  );\n};\n\nit('shows a custom greeting', async () => {\n  renderInTestProvider({ greeting: 'Hello' });\n\n  const alert = screen.queryByRole('alert');\n  expect(alert).toHaveTextContent('Hello');\n});\n\nit('shows the secret feature when it is enabled', async () => {\n  renderInTestProvider({ secretFeature: true });\n\n  const secretFeature = screen.queryByTitle('secret-feature');\n  expect(secretFeature).toBeInTheDocument();\n});\n")))}c.isMDXComponent=!0}}]);