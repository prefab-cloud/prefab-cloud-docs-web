"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[4196],{1241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(4848),l=t(8453);const i={title:"Go"},s=void 0,o={id:"sdks/go",title:"Go",description:"Install the latest version",source:"@site/docs/sdks/go.md",sourceDirName:"sdks",slug:"/sdks/go",permalink:"/docs/sdks/go",draft:!1,unlisted:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/sdks/go.md",tags:[],version:"current",frontMatter:{title:"Go"},sidebar:"tutorialSidebar",previous:{title:"Elixir",permalink:"/docs/sdks/elixir"},next:{title:"Java",permalink:"/docs/sdks/java"}},r={},c=[{value:"Install the latest version",id:"install-the-latest-version",level:2},{value:"Initialize Client",id:"initialize-client",level:2},{value:"Feature Flags",id:"feature-flags",level:2},{value:"Context",id:"context",level:2},{value:"Global Context",id:"global-context",level:3},{value:"Bound Context",id:"bound-context",level:3},{value:"Just-in-time Context",id:"just-in-time-context",level:3},{value:"Dynamic Config",id:"dynamic-config",level:2},{value:"Default Values for Configs",id:"default-values-for-configs",level:4},{value:"Testing",id:"testing",level:2},{value:"Notable pending features",id:"notable-pending-features",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"install-the-latest-version",children:"Install the latest version"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"go get github.com/prefab-cloud/prefab-cloud-go@latest\n"})}),"\n",(0,a.jsx)(n.h2,{id:"initialize-client",children:"Initialize Client"}),"\n",(0,a.jsxs)(n.p,{children:["Add ",(0,a.jsx)(n.code,{children:'prefab "github.com/prefab-cloud/prefab-cloud-go/pkg"'})," to your imports."]}),"\n",(0,a.jsx)(n.p,{children:"Then, initialize the client with your API key:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"client, err := prefab.NewClient(prefab.WithAPIKey(apiKey))\n"})}),"\n",(0,a.jsx)(n.h2,{id:"feature-flags",children:"Feature Flags"}),"\n",(0,a.jsxs)(n.p,{children:["For boolean flags, you can use the ",(0,a.jsx)(n.code,{children:"FeatureIsOn"})," function:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'enabled, ok := client.FeatureIsOn("my.feature.name", prefab.ContextSet{})\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Flags that don't exist yet are considered off, so you can happily add ",(0,a.jsx)(n.code,{children:"FeatureIsOn"})," checks to your code before the flag is created."]}),"\n",(0,a.jsxs)(t,{className:"alert--info",children:[(0,a.jsx)("summary",{children:(0,a.jsx)(n.p,{children:"Feature flags don't have to return just true or false."})}),(0,a.jsxs)(n.p,{children:["You can get other data types using ",(0,a.jsx)(n.code,{children:"Get*"})," functions:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'value, ok, err := client.GetStringValue("my.string.feature.name", prefab.ContextSet{})\nvalue, ok, err := client.GetJSONValue("my.json.feature.name", prefab.ContextSet{})\n'})})]}),"\n",(0,a.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,a.jsxs)(n.p,{children:["Feature flags become more powerful when we give the flag evaluation rules more information to work with. We do this by providing ",(0,a.jsx)(n.a,{href:"/docs/explanations/concepts/context",children:"context"})," of the current user (and/or team, request, etc.)"]}),"\n",(0,a.jsx)(n.h3,{id:"global-context",children:"Global Context"}),"\n",(0,a.jsx)(n.p,{children:"When initializing the client, you can set a global context that will be used for all evaluations."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'globalContext := prefab.NewContextSet().\n    WithNamedContextValues("host", map[string]interface{}{\n        "name": os.Getenv("HOSTNAME"),\n        "region":   os.Getenv("REGION"),\n        "cpu":      runtime.NumCPU(),\n    })\n\n\nclient, err := prefab.NewClient(\n    prefab.WithAPIKey(apiKey),\n    prefab.WithGlobalContext(globalContext),\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Global context is the least specific context and will be overridden by more specific context passed in at the time of evaluation."}),"\n",(0,a.jsx)(n.h3,{id:"bound-context",children:"Bound Context"}),"\n",(0,a.jsxs)(n.p,{children:["To make the best use of Prefab in a web setting, we recommend setting ",(0,a.jsx)(n.a,{href:"/docs/explanations/concepts/context",children:"context"})," per-request. Setting this context for the life-cycle of the request means the Prefab logger can be aware of your user/etc. for feature flags and ",(0,a.jsx)(n.a,{href:"/docs/explanations/features/targeted-log-levels",children:"targeted log levels"})," and you won't have to explicitly pass context into your ",(0,a.jsx)(n.code,{children:".FeatureIsOn"})," and ",(0,a.jsx)(n.code,{children:".Get*"})," calls."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'requestContext := prefab.NewContextSet().\n    WithNamedContextValues("user", map[string]interface{}{\n        "name":  currentUser.GetName(),\n        "email": currentUser.GetEmail(),\n    })\n\nboundClient := client.WithContext(requestContext)\nenabled, ok := boundClient.FeatureIsOn("my.feature.name", prefab.ContextSet{})\n'})}),"\n",(0,a.jsx)(n.h3,{id:"just-in-time-context",children:"Just-in-time Context"}),"\n",(0,a.jsx)(n.p,{children:"You can also pass context when evaluating individual flags or config values."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ruby",children:'enabled, ok := boundClient.FeatureIsOn("my.feature.name", prefab.NewContextSet().\n    WithNamedContextValues("team", map[string]interface{}{\n        "name":  currentTeam.GetName(),\n        "email": currentTeam.GetEmail(),\n    }))\n'})}),"\n",(0,a.jsx)(n.h2,{id:"dynamic-config",children:"Dynamic Config"}),"\n",(0,a.jsxs)(n.p,{children:["Config values are available via the ",(0,a.jsx)(n.code,{children:"Get*"})," functions:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'value, ok, err := client.GetJSONValue("slack.bot.config", prefab.ContextSet{})\n\nvalue, ok, err := client.GetStringValue("some.string.config", prefab.ContextSet{})\n\nvalue, ok, err := client.GetFloatValue("some.float.config", prefab.ContextSet{})\n'})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)(n.h4,{id:"default-values-for-configs",children:"Default Values for Configs"})}),(0,a.jsxs)(n.p,{children:["Here we ask for the value of a config named ",(0,a.jsx)(n.code,{children:"max-jobs-per-second"}),", and we specify ",(0,a.jsx)(n.code,{children:"10"})," as a default value if no value is available."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ruby",children:'value, wasFound := client.GetIntValueWithDefault("max-jobs-per-second", 10, prefab.ContextSet{})\n'})}),(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.code,{children:"max-jobs-per-second"})," is available, ",(0,a.jsx)(n.code,{children:"wasFound"})," will be ",(0,a.jsx)(n.code,{children:"true"})," and ",(0,a.jsx)(n.code,{children:"value"})," will be the value of the config. If ",(0,a.jsx)(n.code,{children:"max-jobs-per-second"})," is not available, ",(0,a.jsx)(n.code,{children:"wasFound"})," will be ",(0,a.jsx)(n.code,{children:"false"})," and ",(0,a.jsx)(n.code,{children:"value"})," will be ",(0,a.jsx)(n.code,{children:"10"}),"."]})]}),"\n",(0,a.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,a.jsxs)(n.p,{children:["You can use a datafile for consistency, reproducibility, and offline testing. See ",(0,a.jsx)(n.a,{href:"/docs/explanations/concepts/testing#testing-with-datafiles",children:"Testing with DataFiles"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"If you need to test multiple scenarios that depend on a single config or feature key, you can change set up a client with in-memory configs:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'configs := map[string]interface{}{\n\t"string.key": "value",\n\t"int.key":    int64(42),\n\t"bool.key":   true,\n\t"float.key":  3.14,\n\t"slice.key":  []string{"a", "b", "c"},\n\t"json.key": map[string]interface{}{\n\t\t"nested": "value",\n\t},\n}\n\nclient, err := prefab.NewClient(prefab.WithConfigs(configs))\n'})}),"\n",(0,a.jsx)(n.h2,{id:"notable-pending-features",children:"Notable pending features"}),"\n",(0,a.jsx)(n.p,{children:"The following notable features are still in-progress for the Go client:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Telemetry"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../tools/editor-tools",children:"Editor Tools"})," support"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(6540);const l={},i=a.createContext(l);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);