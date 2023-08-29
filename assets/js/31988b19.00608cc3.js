"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"React",sidebar_position:14},i=void 0,l={unversionedId:"sdks/react",id:"sdks/react",title:"React",description:"Getting Started With the React Client",source:"@site/docs/sdks/react.md",sourceDirName:"sdks",slug:"/sdks/react",permalink:"/docs/sdks/react",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/sdks/react.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"React",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Node",permalink:"/docs/sdks/node"},next:{title:"JavaScript",permalink:"/docs/sdks/javascript"}},p={},s=[{value:"Getting Started With the React Client",id:"getting-started-with-the-react-client",level:2},{value:"Setup",id:"setup",level:2},{value:"Using Context",id:"using-context",level:2},{value:"Feature Flags and Dynamic Config",id:"feature-flags-and-dynamic-config",level:2},{value:"Testing",id:"testing",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>usePrefab</code> properties",id:"useprefab-properties",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=c("Tabs"),u=c("TabItem"),m={toc:s},f="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"getting-started-with-the-react-client"},"Getting Started With the React Client"),(0,a.kt)("p",null,"Use your favorite package manager to install ",(0,a.kt)("inlineCode",{parentName:"p"},"@prefab-cloud/prefab-cloud-react")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@prefab-cloud/prefab-cloud-react"},"npm")," | ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/prefab-cloud-react"},"github")),(0,a.kt)(d,{groupId:"lang",mdxType:"Tabs"},(0,a.kt)(u,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @prefab-cloud/prefab-cloud-react\n"))),(0,a.kt)(u,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @prefab-cloud/prefab-cloud-react\n")))),(0,a.kt)("p",null,"TypeScript types are included with the package."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"This client includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"<PrefabProvider>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"usePrefab")," hook."),(0,a.kt)("p",null,"First, wrap your component tree in the ",(0,a.kt)("inlineCode",{parentName:"p"},"PrefabProvider"),", e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { PrefabProvider } from "@prefab-cloud/prefab-cloud-react";\n\nconst WrappedApp = () => {\n  const onError = (reason) => {\n    console.error(reason);\n  };\n\n  return (\n    <PrefabProvider apiKey={"YOUR_CLIENT_API_KEY"} onError={onError}>\n      <MyApp />\n    </PrefabProvider>\n  );\n};\n')),(0,a.kt)("h2",{id:"using-context"},"Using Context"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"contextAttributes")," lets you provide ",(0,a.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/context"},"context")," that you can use to ",(0,a.kt)("a",{parentName:"p",href:"/docs/explanations/features/rules-and-segmentation"},"segment")," your users. Usually you will want to define context once when you setup ",(0,a.kt)("inlineCode",{parentName:"p"},"PrefabProvider"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { PrefabProvider } from "@prefab-cloud/prefab-cloud-react";\n\nconst WrappedApp = () => {\n  // highlight-start\n  const contextAttributes = {\n    user: { email: "jeffrey@example.com" },\n    subscription: { plan: "advanced" },\n  };\n  // highlight-end\n\n  const onError = (reason) => {\n    console.error(reason);\n  };\n\n  return (\n    <PrefabProvider\n      apiKey={"YOUR_CLIENT_API_KEY"}\n      // highlight-next-line\n      contextAttributes={contextAttributes}\n      onError={onError}\n    >\n      <App />\n    </PrefabProvider>\n  );\n};\n')),(0,a.kt)("h2",{id:"feature-flags-and-dynamic-config"},"Feature Flags and Dynamic Config"),(0,a.kt)("p",null,"Now use the ",(0,a.kt)("inlineCode",{parentName:"p"},"usePrefab")," hook to fetch flags"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const Logo = () => {\n  const { isEnabled } = usePrefab();\n\n  if (isEnabled("new-logo")) {\n    return <img src={newLogo} className="App-logo" alt="logo" />;\n  }\n\n  return <img src={logo} className="App-logo" alt="logo" />;\n};\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"React is a Client SDK and does not receive Config")),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Wrap the component under test in a ",(0,a.kt)("inlineCode",{parentName:"p"},"PrefabTestProvider")," and provide a config object to set up your test state."),(0,a.kt)("p",null,"e.g. if you wanted to test the following trivial component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function MyComponent() {\n  const { get, isEnabled, loading } = usePrefab();\n  const greeting = get("greeting") || "Greetings";\n\n  if (loading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1 role="alert">{greeting}</h1>\n      {isEnabled("secretFeature") && (\n        <button type="submit" title="secret-feature">\n          Secret feature\n        </button>\n      )}\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"You could do the following in ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"jest"),"/",(0,a.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro/"},"rtl")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { PrefabTestProvider } from "./index";\n\nconst renderInTestProvider = (config: { [key: string]: any }) => {\n  render(\n    <PrefabTestProvider config={config}>\n      <MyComponent />\n    </PrefabTestProvider>\n  );\n};\n\nit("shows a custom greeting", async () => {\n  renderInTestProvider({ greeting: "Hello" });\n\n  const alert = screen.queryByRole("alert");\n  expect(alert).toHaveTextContent("Hello");\n});\n\nit("shows the secret feature when it is enabled", async () => {\n  renderInTestProvider({ secretFeature: true });\n\n  const secretFeature = screen.queryByTitle("secret-feature");\n  expect(secretFeature).toBeInTheDocument();\n});\n')),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("h3",{id:"useprefab-properties"},(0,a.kt)("inlineCode",{parentName:"h3"},"usePrefab")," properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const { isEnabled, get, loading, contextAttributes } = usePrefab();\n")),(0,a.kt)("p",null,"Here's an explanation of each property"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"property"),(0,a.kt)("th",{parentName:"tr",align:null},"example"),(0,a.kt)("th",{parentName:"tr",align:null},"purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"isEnabled")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'isEnabled("new-logo")')),(0,a.kt)("td",{parentName:"tr",align:null},"returns a boolean (default ",(0,a.kt)("inlineCode",{parentName:"td"},"false"),") if a feature is enabled based on the current context")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"get")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"get('retry-count')")),(0,a.kt)("td",{parentName:"tr",align:null},"returns the value of a flag or config")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"contextAttributes")),(0,a.kt)("td",{parentName:"tr",align:null},"(see above)"),(0,a.kt)("td",{parentName:"tr",align:null},"this is the context attributes object you passed when setting up the provider")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"While ",(0,a.kt)("inlineCode",{parentName:"p"},"loading")," is true, ",(0,a.kt)("inlineCode",{parentName:"p"},"isEnabled")," will return ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," will return ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),".")))}g.isMDXComponent=!0}}]);