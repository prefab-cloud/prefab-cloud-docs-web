"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[5164],{7288:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(4848),o=t(8453);const s={title:"React"},i=void 0,a={id:"sdks/react",title:"React",description:"If you're using React Native, check out the React Native SDK.",source:"@site/docs/sdks/react.md",sourceDirName:"sdks",slug:"/sdks/react",permalink:"/docs/sdks/react",draft:!1,unlisted:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/sdks/react.md",tags:[],version:"current",frontMatter:{title:"React"},sidebar:"tutorialSidebar",previous:{title:"React Native",permalink:"/docs/sdks/react-native"},next:{title:"Ruby",permalink:"/docs/sdks/ruby"}},l={},d=[{value:"Install the latest version",id:"install-the-latest-version",level:2},{value:"Initialize the Client",id:"initialize-the-client",level:2},{value:"Feature Flags",id:"feature-flags",level:2},{value:"Using Context",id:"using-context",level:2},{value:"Dynamic Config",id:"dynamic-config",level:2},{value:"Dealing with Loading States",id:"dealing-with-loading-states",level:2},{value:"At the top level of your application or page component",id:"at-the-top-level-of-your-application-or-page-component",level:3},{value:"In individual components",id:"in-individual-components",level:3},{value:"Do nothing",id:"do-nothing",level:3},{value:"Tracking Experiment Exposures",id:"tracking-experiment-exposures",level:2},{value:"Telemetry",id:"telemetry",level:2},{value:"Testing",id:"testing",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>usePrefab</code> properties",id:"useprefab-properties",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{TabItem:t,Tabs:s}=n;return t||u("TabItem",!0),s||u("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If you're using React Native, check out the ",(0,r.jsx)(n.a,{href:"/docs/sdks/react-native",children:"React Native SDK"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"install-the-latest-version",children:"Install the latest version"}),"\n",(0,r.jsxs)(n.p,{children:["Use your favorite package manager to install ",(0,r.jsx)(n.code,{children:"@prefab-cloud/prefab-cloud-react"})," ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@prefab-cloud/prefab-cloud-react",children:"npm"})," | ",(0,r.jsx)(n.a,{href:"https://github.com/prefab-cloud/prefab-cloud-react",children:"github"})]}),"\n",(0,r.jsxs)(s,{groupId:"lang",children:[(0,r.jsx)(t,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @prefab-cloud/prefab-cloud-react\n"})})}),(0,r.jsx)(t,{value:"yarn",label:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @prefab-cloud/prefab-cloud-react\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"TypeScript types are included with the package."}),"\n",(0,r.jsx)(n.h2,{id:"initialize-the-client",children:"Initialize the Client"}),"\n",(0,r.jsxs)(n.p,{children:["This client includes a ",(0,r.jsx)(n.code,{children:"<PrefabProvider>"})," and ",(0,r.jsx)(n.code,{children:"usePrefab"})," hook."]}),"\n",(0,r.jsxs)(n.p,{children:["First, wrap your component tree in the ",(0,r.jsx)(n.code,{children:"PrefabProvider"}),", e.g."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import { PrefabProvider } from "@prefab-cloud/prefab-cloud-react";\n\nconst WrappedApp = () => {\n  const onError = (reason) => {\n    console.error(reason);\n  };\n\n  return (\n    <PrefabProvider apiKey={"YOUR_CLIENT_API_KEY"} onError={onError}>\n      <MyApp />\n    </PrefabProvider>\n  );\n};\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you wish for the user's browser to poll for updates to flags, you can pass a ",(0,r.jsx)(n.code,{children:"pollInterval"})," (in milliseconds) to the ",(0,r.jsx)(n.code,{children:"PrefabProvider"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"feature-flags",children:"Feature Flags"}),"\n",(0,r.jsxs)(n.p,{children:["Now use the ",(0,r.jsx)(n.code,{children:"usePrefab"})," hook to fetch flags. ",(0,r.jsx)(n.code,{children:"isEnabled"})," is a convenience method for boolean flags."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import { usePrefab } from "@prefab-cloud/prefab-cloud-react";\n\nconst Logo = () => {\n  const { isEnabled } = usePrefab();\n\n  if (isEnabled("new-logo")) {\n    return <img src={newLogo} className="App-logo" alt="logo" />;\n  }\n\n  return <img src={logo} className="App-logo" alt="logo" />;\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can also use ",(0,r.jsx)(n.code,{children:"get"})," to access flags with other data types."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'const { get } = usePrefab();\n\nconst flagVlaue = get("my-string-flag");\n'})}),"\n",(0,r.jsx)(n.h2,{id:"using-context",children:"Using Context"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"contextAttributes"})," lets you provide ",(0,r.jsx)(n.a,{href:"/docs/explanations/concepts/context",children:"context"})," that you can use to ",(0,r.jsx)(n.a,{href:"/docs/explanations/features/rules-and-segmentation",children:"segment"})," your users. Usually you will want to define context once when you setup ",(0,r.jsx)(n.code,{children:"PrefabProvider"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import { PrefabProvider } from "@prefab-cloud/prefab-cloud-react";\n\nconst WrappedApp = () => {\n  // highlight-start\n  const contextAttributes = {\n    user: { key: "abcdef", email: "jeffrey@example.com" },\n    subscription: { key: "adv-sub", plan: "advanced" },\n  };\n  // highlight-end\n\n  const onError = (reason) => {\n    console.error(reason);\n  };\n\n  return (\n    <PrefabProvider\n      apiKey={"YOUR_CLIENT_API_KEY"}\n      // highlight-next-line\n      contextAttributes={contextAttributes}\n      onError={onError}\n    >\n      <App />\n    </PrefabProvider>\n  );\n};\n'})}),"\n",(0,r.jsx)(n.h2,{id:"dynamic-config",children:"Dynamic Config"}),"\n",(0,r.jsxs)(n.p,{children:["Config values are accessed the same way as feature flag values. You can use ",(0,r.jsx)(n.code,{children:"isEnabled"})," as a convenience for boolean values, and ",(0,r.jsx)(n.code,{children:"get"})," works for all data types."]}),"\n",(0,r.jsx)(n.p,{children:'By default configs are not sent to frontend SDKs. You must enable access for each individual config. You can do this by checking the "Send to frontend SDKs" checkbox when creating or editing a config.'}),"\n",(0,r.jsx)(n.h2,{id:"dealing-with-loading-states",children:"Dealing with Loading States"}),"\n",(0,r.jsxs)(n.p,{children:["The Prefab client needs to load your feature flags from the ",(0,r.jsx)(n.a,{href:"/docs/explanations/concepts/frontend-sdks",children:"Prefab CDN"})," before they are available. This means there will be a brief period when the client is in a loading state. If you call the ",(0,r.jsx)(n.code,{children:"usePrefab"})," hook during loading, you will see the following behavior."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'const { get, isEnabled, loading } = usePrefab();\n\nconsole.log(loading); // true\nconsole.log(get("my-string-flag)); // undefined for all flags\nconsole.log(isEnabled("my-boolean-flag")); // false for all flags\n'})}),"\n",(0,r.jsx)(n.p,{children:"Here are some suggestions for how to handle the loading state."}),"\n",(0,r.jsx)(n.h3,{id:"at-the-top-level-of-your-application-or-page-component",children:"At the top level of your application or page component"}),"\n",(0,r.jsxs)(n.p,{children:["For a single page application, you likely already display a spinner or skeleton component while fetching data from your own backend. In this case, we recommend checking whether Prefab is loaded in the logic for displaying this state. That way you can ensure that Prefab is always loaded before the rest of your component tree renders, and you will not need to check for ",(0,r.jsx)(n.code,{children:"loading"})," when evaluating individual flags."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const MyPageComponent (myData, myDataIsLoading) => {\n  // highlight-start\n  const { loading: prefabIsLoading } = usePrefab();\n\n  if (myDataIsLoading || prefabIsLoading) {\n    // highlight-end\n    return <MySpinnerComponent />\n  }\n\n  return (\n    // actual page content\n  )\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"However, if you have SEO concerns, such as when using a tool like Docusaurus, you may want to consider one of the following options instead."}),"\n",(0,r.jsx)(n.h3,{id:"in-individual-components",children:"In individual components"}),"\n",(0,r.jsxs)(n.p,{children:["You can get a ",(0,r.jsx)(n.code,{children:"loading"})," value back each time you call the ",(0,r.jsx)(n.code,{children:"usePrefab"})," hook and use it to render a spinner or other loading state only for the part of the page that is affected by your flag. This can be a good choice if you are swapping between two different UI treatments and don't want your users to see the page flicker from one to the other after the initial render."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'const MyComponent () => {\n  const {get, loading} = usePrefab();\n\n  if (loading) {\n    return <MySpinnerComponent />\n  }\n\n  switch (get("my-feature-flag")) {\n    case "new-ui":\n      return (<div>Render the new UI...</div>);\n    case "old-ui":\n    default:\n      return (<div>Render the old UI...</div>);\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"do-nothing",children:"Do nothing"}),"\n",(0,r.jsxs)(n.p,{children:["If your feature flag is choosing between rendering something and rendering nothing, it may be acceptable to have that content pop-in once Prefab finishes loading. This works because ",(0,r.jsx)(n.code,{children:"isEnabled"})," will always return false until the Prefab client is loaded."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'const MyComponent () => {\n  // highlight-next-line\n  const {isEnabled} = usePrefab();\n\n  return (\n    <div>\n      // highlight-start\n      {isEnabled("my-feature-flag") && (\n        <div>\n          // Flag content...\n        </div>\n      )}\n      // highlight-end\n      <div>\n        // Other content...\n      </div>\n    </div>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"tracking-experiment-exposures",children:"Tracking Experiment Exposures"}),"\n",(0,r.jsxs)(n.p,{children:["If you're using ",(0,r.jsx)(n.a,{href:"/docs/how-tos/experiment",children:"Prefab for A/B testing"}),", you can supply code for tracking experiment exposures to your data warehouse or analytics tool of choice."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'<PrefabProvider\n  apiKey={"YOUR_CLIENT_API_KEY"}\n  contextAttributes={contextAttributes}\n  onError={onError}\n  // highlight-start\n  afterEvaluationCallback={(key, value) => {\n    // call your analytics tool here...in this example we are sending data to posthog\n    window.posthog?.capture("Feature Flag Evaluation", {\n      key,\n      value,\n    });\n  }}\n  // highlight-end\n>\n  <App />\n</PrefabProvider>\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"afterEvaluationCallback"})," will be called each time you evaluate a feature flag using ",(0,r.jsx)(n.code,{children:"get"})," or ",(0,r.jsx)(n.code,{children:"isEnabled"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"telemetry",children:"Telemetry"}),"\n",(0,r.jsxs)(n.p,{children:["By default, Prefab will collect summary counts of config and feature flag evaluations to help you understand how your configs and flags are being used in the real world. You can opt out of this behavior by passing ",(0,r.jsx)(n.code,{children:"collectEvaluationSummaries={false}"})," when initializing ",(0,r.jsx)(n.code,{children:"PrefabProvider"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Prefab also stores the context that you pass in. The context keys are used to power autocomplete in the rule editor, and the individual values power the Contexts page for troubleshooting targeting rules and individual flag overrides. If you want to change what Prefab stores, you can pass a different value for ",(0,r.jsx)(n.code,{children:"collectContextMode"}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:[(0,r.jsx)(n.code,{children:"collectContextMode"})," value"]}),(0,r.jsx)(n.th,{children:"Behavior"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"PERIODIC_EXAMPLE"})}),(0,r.jsx)(n.td,{children:"Stores context values and context keys. This is the default."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SHAPE_ONLY"})}),(0,r.jsx)(n.td,{children:"Stores context keys only."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"NONE"})}),(0,r.jsx)(n.td,{children:"Stores nothing. Context will only be used for rule evaluation."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,r.jsxs)(n.p,{children:["Wrap the component under test in a ",(0,r.jsx)(n.code,{children:"PrefabTestProvider"})," and provide a config object to set up your test state."]}),"\n",(0,r.jsx)(n.p,{children:"e.g. if you wanted to test the following trivial component"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'function MyComponent() {\n  const { get, isEnabled, loading } = usePrefab();\n  const greeting = get("greeting") || "Greetings";\n\n  if (loading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1 role="alert">{greeting}</h1>\n      {isEnabled("secretFeature") && (\n        <button type="submit" title="secret-feature">\n          Secret feature\n        </button>\n      )}\n    </div>\n  );\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You could do the following in ",(0,r.jsx)(n.a,{href:"https://jestjs.io/",children:"jest"}),"/",(0,r.jsx)(n.a,{href:"https://testing-library.com/docs/react-testing-library/intro/",children:"rtl"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import { PrefabTestProvider } from "./index";\n\nconst renderInTestProvider = (config: { [key: string]: any }) => {\n  render(\n    <PrefabTestProvider config={config}>\n      <MyComponent />\n    </PrefabTestProvider>\n  );\n};\n\nit("shows a custom greeting", async () => {\n  renderInTestProvider({ greeting: "Hello" });\n\n  const alert = screen.queryByRole("alert");\n  expect(alert).toHaveTextContent("Hello");\n});\n\nit("shows the secret feature when it is enabled", async () => {\n  renderInTestProvider({ secretFeature: true });\n\n  const secretFeature = screen.queryByTitle("secret-feature");\n  expect(secretFeature).toBeInTheDocument();\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.h3,{id:"useprefab-properties",children:[(0,r.jsx)(n.code,{children:"usePrefab"})," properties"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const { isEnabled, get, loading, contextAttributes } = usePrefab();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Here's an explanation of each property"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"property"}),(0,r.jsx)(n.th,{children:"example"}),(0,r.jsx)(n.th,{children:"purpose"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"isEnabled"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'isEnabled("new-logo")'})}),(0,r.jsxs)(n.td,{children:["returns a boolean (default ",(0,r.jsx)(n.code,{children:"false"}),") if a feature is enabled based on the current context"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"get"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"get('retry-count')"})}),(0,r.jsx)(n.td,{children:"returns the value of a flag or config"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"contextAttributes"})}),(0,r.jsx)(n.td,{children:"(see above)"}),(0,r.jsx)(n.td,{children:"this is the context attributes object you passed when setting up the provider"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"loading"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"if (loading) { ... }"})}),(0,r.jsx)(n.td,{children:"a boolean indicating whether prefab content is being loaded"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"prefab"})}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsxs)(n.td,{children:["the underlying ",(0,r.jsx)(n.a,{href:"/docs/sdks/javascript",children:"JavaScript"})," prefab instance"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"keys"})}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"an array of all the flag and config names in the current configuration"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["While ",(0,r.jsx)(n.code,{children:"loading"})," is true, ",(0,r.jsx)(n.code,{children:"isEnabled"})," will return ",(0,r.jsx)(n.code,{children:"false"})," and ",(0,r.jsx)(n.code,{children:"get"})," will return ",(0,r.jsx)(n.code,{children:"undefined"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);