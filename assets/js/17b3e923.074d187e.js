"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,f=c["".concat(s,".").concat(g)]||c[g]||u[g]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"React Native"},i=void 0,l={unversionedId:"sdks/react-native",id:"sdks/react-native",title:"React Native",description:"Note: right now, this is a thin wrapper around the React Client. Let us know what features you'd like to see.",source:"@site/docs/sdks/react-native.md",sourceDirName:"sdks",slug:"/sdks/react-native",permalink:"/docs/sdks/react-native",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/sdks/react-native.md",tags:[],version:"current",frontMatter:{title:"React Native"},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/sdks/python"},next:{title:"React",permalink:"/docs/sdks/react"}},s={},p=[{value:"Install the latest version",id:"install-the-latest-version",level:2},{value:"Initialize the Client",id:"initialize-the-client",level:2},{value:"Feature Flags",id:"feature-flags",level:2},{value:"Using Context",id:"using-context",level:2},{value:"Dynamic Config",id:"dynamic-config",level:2},{value:"Dealing with Loading States",id:"dealing-with-loading-states",level:2},{value:"At the top level of your application or page component",id:"at-the-top-level-of-your-application-or-page-component",level:3},{value:"In individual components",id:"in-individual-components",level:3},{value:"Do nothing",id:"do-nothing",level:3},{value:"Tracking Experiment Exposures",id:"tracking-experiment-exposures",level:2},{value:"Testing",id:"testing",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>usePrefab</code> properties",id:"useprefab-properties",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=d("Tabs"),u=d("TabItem"),g={toc:p},f="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Note: right now, this is a thin wrapper around the ",(0,r.kt)("a",{parentName:"p",href:"/docs/sdks/react"},"React Client"),". Let us know what features you'd like to see."),(0,r.kt)("h2",{id:"install-the-latest-version"},"Install the latest version"),(0,r.kt)("p",null,"Use your favorite package manager to install ",(0,r.kt)("inlineCode",{parentName:"p"},"@prefab-cloud/prefab-cloud-react-native")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@prefab-cloud/prefab-cloud-react-native"},"npm")," | ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/prefab-cloud-react-native"},"github")),(0,r.kt)(c,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(u,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @prefab-cloud/prefab-cloud-react-native\n"))),(0,r.kt)(u,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @prefab-cloud/prefab-cloud-react-native\n")))),(0,r.kt)("p",null,"TypeScript types are included with the package."),(0,r.kt)("h2",{id:"initialize-the-client"},"Initialize the Client"),(0,r.kt)("p",null,"This client includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"<PrefabProvider>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"usePrefab")," hook."),(0,r.kt)("p",null,"First, wrap your component tree in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PrefabProvider"),", e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { PrefabProvider } from "@prefab-cloud/prefab-cloud-react-native";\n\nconst WrappedApp = () => {\n  const onError = (reason) => {\n    console.error(reason);\n  };\n\n  return (\n    <PrefabProvider apiKey={"YOUR_CLIENT_API_KEY"} onError={onError}>\n      <MyApp />\n    </PrefabProvider>\n  );\n};\n')),(0,r.kt)("h2",{id:"feature-flags"},"Feature Flags"),(0,r.kt)("p",null,"Now use the ",(0,r.kt)("inlineCode",{parentName:"p"},"usePrefab")," hook to fetch flags. ",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled")," is a convenience method for boolean flags."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { usePrefab } from "@prefab-cloud/prefab-cloud-react-native";\n\nconst Logo = () => {\n  const { isEnabled } = usePrefab();\n\n  if (isEnabled("new-logo")) {\n    return <img src={newLogo} className="App-logo" alt="logo" />;\n  }\n\n  return <img src={logo} className="App-logo" alt="logo" />;\n};\n')),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," to access flags with other data types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const { get } = usePrefab();\n\nconst flagVlaue = get("my-string-flag");\n')),(0,r.kt)("h2",{id:"using-context"},"Using Context"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"contextAttributes")," lets you provide ",(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/context"},"context")," that you can use to ",(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/features/rules-and-segmentation"},"segment")," your users. Usually you will want to define context once when you setup ",(0,r.kt)("inlineCode",{parentName:"p"},"PrefabProvider"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { PrefabProvider } from "@prefab-cloud/prefab-cloud-react-native";\n\nconst WrappedApp = () => {\n  // highlight-start\n  const contextAttributes = {\n    user: { key: "abcdef", email: "jeffrey@example.com" },\n    subscription: { key: "adv-sub", plan: "advanced" },\n  };\n  // highlight-end\n\n  const onError = (reason) => {\n    console.error(reason);\n  };\n\n  return (\n    <PrefabProvider\n      apiKey={"YOUR_CLIENT_API_KEY"}\n      // highlight-next-line\n      contextAttributes={contextAttributes}\n      onError={onError}\n    >\n      <App />\n    </PrefabProvider>\n  );\n};\n')),(0,r.kt)("h2",{id:"dynamic-config"},"Dynamic Config"),(0,r.kt)("p",null,"Config values are accessed the same way as feature flag values. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled")," as a convenience for boolean values, and ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," works for all data types."),(0,r.kt)("p",null,'By default configs are not sent to client SDKs. You must enable access for each individual config. You can do this by checking the "Send to client SDKs" checkbox when creating or editing a config.'),(0,r.kt)("h2",{id:"dealing-with-loading-states"},"Dealing with Loading States"),(0,r.kt)("p",null,"The Prefab client needs to load your feature flags from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/client-sdks"},"Prefab CDN")," before they are available. This means there will be a brief period when the client is in a loading state. If you call the ",(0,r.kt)("inlineCode",{parentName:"p"},"usePrefab")," hook during loading, you will see the following behavior."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const { get, isEnabled, loading } = usePrefab();\n\nconsole.log(loading); // true\nconsole.log(get("my-string-flag)); // undefined for all flags\nconsole.log(isEnabled("my-boolean-flag")); // false for all flags\n')),(0,r.kt)("p",null,"Here are some suggestions for how to handle the loading state."),(0,r.kt)("h3",{id:"at-the-top-level-of-your-application-or-page-component"},"At the top level of your application or page component"),(0,r.kt)("p",null,"For a single page application, you likely already display a spinner or skeleton component while fetching data from your own backend. In this case, we recommend checking whether Prefab is loaded in the logic for displaying this state. That way you can ensure that Prefab is always loaded before the rest of your component tree renders, and you will not need to check for ",(0,r.kt)("inlineCode",{parentName:"p"},"loading")," when evaluating individual flags."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const MyPageComponent (myData, myDataIsLoading) => {\n  // highlight-start\n  const { loading: prefabIsLoading } = usePrefab();\n\n  if (myDataIsLoading || prefabIsLoading) {\n    // highlight-end\n    return <MySpinnerComponent />\n  }\n\n  return (\n    // actual page content\n  )\n}\n")),(0,r.kt)("p",null,"However, if you have SEO concerns, such as when using a tool like Docusaurus, you may want to consider one of the following options instead."),(0,r.kt)("h3",{id:"in-individual-components"},"In individual components"),(0,r.kt)("p",null,"You can get a ",(0,r.kt)("inlineCode",{parentName:"p"},"loading")," value back each time you call the ",(0,r.kt)("inlineCode",{parentName:"p"},"usePrefab")," hook and use it to render a spinner or other loading state only for the part of the page that is affected by your flag. This can be a good choice if you are swapping between two different UI treatments and don't want your users to see the page flicker from one to the other after the initial render."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const MyComponent () => {\n  const {get, loading} = usePrefab();\n\n  if (loading) {\n    return <MySpinnerComponent />\n  }\n\n  switch (get("my-feature-flag")) {\n    case "new-ui":\n      return (<div>Render the new UI...</div>);\n    case "old-ui":\n    default:\n      return (<div>Render the old UI...</div>);\n  }\n}\n')),(0,r.kt)("h3",{id:"do-nothing"},"Do nothing"),(0,r.kt)("p",null,"If your feature flag is choosing between rendering something and rendering nothing, it may be acceptable to have that content pop-in once Prefab finishes loading. This works because ",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled")," will always return false until the Prefab client is loaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const MyComponent () => {\n  // highlight-next-line\n  const {isEnabled} = usePrefab();\n\n  return (\n    <div>\n      // highlight-start\n      {isEnabled("my-feature-flag") && (\n        <div>\n          // Flag content...\n        </div>\n      )}\n      // highlight-end\n      <div>\n        // Other content...\n      </div>\n    </div>\n  );\n}\n')),(0,r.kt)("h2",{id:"tracking-experiment-exposures"},"Tracking Experiment Exposures"),(0,r.kt)("p",null,"If you're using Prefab for A/B testing, you can supply code for tracking experiment exposures to your data warehouse or analytics tool of choice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<PrefabProvider\n  apiKey={"YOUR_CLIENT_API_KEY"}\n  contextAttributes={contextAttributes}\n  onError={onError}\n  // highlight-start\n  afterEvaluationCallback={(key, value) => {\n    // call your analytics tool here...in this example we are sending data to posthog\n    window.posthog?.capture("Feature Flag Evaluation", {\n      key,\n      value,\n    });\n  }}\n  // highlight-end\n>\n  <App />\n</PrefabProvider>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"afterEvaluationCallback")," will be called each time you evaluate a feature flag using ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled"),"."),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Wrap the component under test in a ",(0,r.kt)("inlineCode",{parentName:"p"},"PrefabTestProvider")," and provide a config object to set up your test state."),(0,r.kt)("p",null,"e.g. if you wanted to test the following trivial component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'function MyComponent() {\n  const { get, isEnabled, loading } = usePrefab();\n  const greeting = get("greeting") || "Greetings";\n\n  if (loading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1 role="alert">{greeting}</h1>\n      {isEnabled("secretFeature") && (\n        <button type="submit" title="secret-feature">\n          Secret feature\n        </button>\n      )}\n    </div>\n  );\n}\n')),(0,r.kt)("p",null,"You could do the following in ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"jest"),"/",(0,r.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro/"},"rtl")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { PrefabTestProvider } from "./index";\n\nconst renderInTestProvider = (config: { [key: string]: any }) => {\n  render(\n    <PrefabTestProvider config={config}>\n      <MyComponent />\n    </PrefabTestProvider>\n  );\n};\n\nit("shows a custom greeting", async () => {\n  renderInTestProvider({ greeting: "Hello" });\n\n  const alert = screen.queryByRole("alert");\n  expect(alert).toHaveTextContent("Hello");\n});\n\nit("shows the secret feature when it is enabled", async () => {\n  renderInTestProvider({ secretFeature: true });\n\n  const secretFeature = screen.queryByTitle("secret-feature");\n  expect(secretFeature).toBeInTheDocument();\n});\n')),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"useprefab-properties"},(0,r.kt)("inlineCode",{parentName:"h3"},"usePrefab")," properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const { isEnabled, get, loading, contextAttributes } = usePrefab();\n")),(0,r.kt)("p",null,"Here's an explanation of each property"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"example"),(0,r.kt)("th",{parentName:"tr",align:null},"purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'isEnabled("new-logo")')),(0,r.kt)("td",{parentName:"tr",align:null},"returns a boolean (default ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),") if a feature is enabled based on the current context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"get")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"get('retry-count')")),(0,r.kt)("td",{parentName:"tr",align:null},"returns the value of a flag or config")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contextAttributes")),(0,r.kt)("td",{parentName:"tr",align:null},"(see above)"),(0,r.kt)("td",{parentName:"tr",align:null},"this is the context attributes object you passed when setting up the provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loading")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"if (loading) { ... }")),(0,r.kt)("td",{parentName:"tr",align:null},"a boolean indicating whether prefab content is being loaded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prefab")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"the underlying ",(0,r.kt)("a",{parentName:"td",href:"/docs/sdks/javascript"},"JavaScript")," prefab instance")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"While ",(0,r.kt)("inlineCode",{parentName:"p"},"loading")," is true, ",(0,r.kt)("inlineCode",{parentName:"p"},"isEnabled")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),".")))}m.isMDXComponent=!0}}]);