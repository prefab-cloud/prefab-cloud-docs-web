"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[641],{4385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(4848),r=n(8453);const s={title:"Get Started",sidebar_label:"Get Started",sidebar_position:1},o="Tutorial Intro",i={id:"tutorials/get-started",title:"Get Started",description:"Let's discover Prefab in less than 5 minutes.",source:"@site/docs/tutorials/get-started.md",sourceDirName:"tutorials",slug:"/tutorials/get-started",permalink:"/docs/tutorials/get-started",draft:!1,unlisted:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/tutorials/get-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Get Started",sidebar_label:"Get Started",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/category/tutorials"},next:{title:"Your First Config and Flag",permalink:"/docs/tutorials/first-config-and-flag"}},l={},d=[{value:"Dashboard",id:"dashboard",level:2},{value:"Environments",id:"environments",level:2},{value:"API Keys",id:"api-keys",level:2},{value:"Adding a Feature Flag",id:"adding-a-feature-flag",level:2},{value:"Configuring our Feature Flag",id:"configuring-our-feature-flag",level:2},{value:"Use in Code",id:"use-in-code",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{TabItem:s,Tabs:o}=t;return s||h("TabItem",!0),o||h("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"tutorial-intro",children:"Tutorial Intro"})}),"\n",(0,a.jsxs)(t.p,{children:["Let's discover ",(0,a.jsx)(t.strong,{children:"Prefab in less than 5 minutes"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Getting setup with prefab cloud should take you 5 minutes, but only if we start right now ;)"}),"\n",(0,a.jsx)(t.h2,{id:"dashboard",children:"Dashboard"}),"\n",(0,a.jsx)(t.p,{children:"After signing up, you'll see an onboarding dashboard. We've created your first workspace for you."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image",src:n(8520).A+"",width:"1996",height:"1402"})}),"\n",(0,a.jsx)(t.p,{children:"Most organizations will only want a single workspace."}),"\n",(0,a.jsx)(t.h2,{id:"environments",children:"Environments"}),"\n",(0,a.jsxs)(t.p,{children:["Click on environments to view environments. We've added ",(0,a.jsx)(t.code,{children:"Development"}),", ",(0,a.jsx)(t.code,{children:"Staging"})," and ",(0,a.jsx)(t.code,{children:"Production"})," for you."]}),"\n",(0,a.jsx)(t.h2,{id:"api-keys",children:"API Keys"}),"\n",(0,a.jsx)(t.p,{children:"Our clients will need to connect to the Prefab APIs. To do that they'll need API Keys. Prefab has 2 different types of API Keys."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Backend API"})," keys are used for the server side APIs. These keys will have access to all information for their respective environment."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Frontend API"})," keys are used in mobile applications or websites. These keys will allow the clients to evaluate feature flags for a single user, but will not expose the raw flag data."]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"Only use Frontend API Keys in code that gets shipped to end users,"})}),"\n",(0,a.jsx)(t.p,{children:"Let's create a Backend Key for now."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image",src:n(6704).A+"",width:"833",height:"339"})}),"\n",(0,a.jsx)(t.p,{children:"OK! We're all set, copy this API Key down we'll use it in the next step. We only show you the API key once and only store a\nsecure hash on our end. Don't worry if you lose it, you can easily create as many as you like, which makes key rotation a snap."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image",src:n(9765).A+"",width:"1448",height:"376"})}),"\n",(0,a.jsx)(t.h2,{id:"adding-a-feature-flag",children:"Adding a Feature Flag"}),"\n",(0,a.jsx)(t.p,{children:'Now that we have an API key, we\'re ready to go. Select Flags from the navigation and then choose "Add Flag".'}),"\n",(0,a.jsxs)(t.p,{children:["Let's name our flag ",(0,a.jsx)(t.code,{children:"features.example-flag"})," and use the default type (",(0,a.jsx)(t.code,{children:"bool"}),")."]}),"\n",(0,a.jsxs)(t.p,{children:["Prefab suggests that you name things all in lowercase, with ",(0,a.jsx)(t.code,{children:"."})," as a logical separator and ",(0,a.jsx)(t.code,{children:"-"})," between words."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image",src:n(1242).A+"",width:"1880",height:"310"})}),"\n",(0,a.jsx)(t.p,{children:"Click Save and now we can take a look at our new feature flag. There are 4 elements to call your attention to."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image",src:n(9565).A+"",width:"1888",height:"1456"})}),"\n",(0,a.jsx)(t.p,{children:"There are 5 areas to note:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Variants"})," The app has automatically created two boolean variants for us. Feature flags can return strings or numbers as well, but booleans are most common."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Rules"})," Each environment gets a tab for its own rules."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Save"})," Once we save the default value rule, we can publish our flag. Publishing makes the flag available to our clients.\n",(0,a.jsx)(t.img,{alt:"image",src:n(2234).A+"",width:"870",height:"144"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Code Samples"})," snippets live here, making it easy to copy out the correct code into your application."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Evaluations"})," once we start running the client, we'll be able to see evaluation charts here."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"configuring-our-feature-flag",children:"Configuring our Feature Flag"}),"\n",(0,a.jsx)(t.p,{children:"Time for some fun. Let's set up a feature flag that will show us a bit of the power of Prefab.\nFor this example, let's say that we have a new thing we're ready to ship. We want to get ship to everyone in our Beta group.\nAdditionally, since the beta group might not reflect our whole user base, so we also want to rollout to 5% of all traffic."}),"\n",(0,a.jsxs)(t.p,{children:['For the rollout, click the false dropdown and pick "Rollout". Now enter ',(0,a.jsx)(t.code,{children:"95"})," as your percent for ",(0,a.jsx)(t.code,{children:"false"})," and ",(0,a.jsx)(t.code,{children:"5"})," for ",(0,a.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:['Now click "Add Rule" to add our customer group rule. Select ',(0,a.jsx)(t.code,{children:"true"})," then enter ",(0,a.jsx)(t.code,{children:"user.group"})," for the when, ",(0,a.jsx)(t.code,{children:"is one of"})," for the operator and ",(0,a.jsx)(t.code,{children:"beta"})," for the values field."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"image",src:n(6271).A+"",width:"1870",height:"1368"})}),"\n",(0,a.jsx)(t.p,{children:"Save and publish."}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsx)(t.p,{children:"The order of the rules matters. Rules are evaluated from top to bottom and the value of the first matching rule is used."}),(0,a.jsx)(t.p,{children:"You can drag the rules to re-order them but the default rule sticks to the bottom."})]}),"\n",(0,a.jsx)(t.h2,{id:"use-in-code",children:"Use in Code"}),"\n",(0,a.jsx)(t.p,{children:"To use the flag, all we need to do is initialize a client with the backend key we created and"}),"\n",(0,a.jsxs)(o,{groupId:"lang",children:[(0,a.jsx)(s,{value:"ruby",label:"Ruby",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ruby",children:'Prefab.init(api_key: "SDK-KEY, or set ENV var PREFAB_API_KEY")\n# Users in the beta group will always return true\n\ncontext = { user: { key: rand(1000)}}\n# 5% of other users will return true\nputs Prefab.enabled?("features.example-flag", context)\n\n# 100% of users in the beta group will return true\ncontext[:user][:group] = "beta"\nputs Prefab.enabled?("features.example-flag", context)\n'})})}),(0,a.jsx)(s,{value:"java",label:"Java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'PrefabCloudClient client = new PrefabCloudClient(new PrefabCloudClient.Options()\n  .setApikey("SDK-KEY, or set ENV var PREFAB_API_KEY"));\nFeatureFlagClient featureFlagClient = client.featureFlagClient();\n\n// true for 5 % of the users\nfeatureFlagClient.featureIsOn(\n      "features.example-flag",\n      PrefabContext.newBuilder("user")\n        .put("key", Math.random())\n        .build()\n    )\n\n// true because of the beta group rule\nfeatureFlagClient.featureIsOn(\n      "features.example-flag",\n      PrefabContext.newBuilder("user")\n        .put("group", "beta")\n        .build()\n    )\n'})})}),(0,a.jsx)(s,{value:"node",label:"Node",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'import { Prefab } from "@prefab-cloud/prefab-cloud-node";\n\nconst prefab = new Prefab({\n  apiKey: "SDK-KEY, or set ENV var PREFAB_API_KEY",\n});\nawait prefab.init();\n\n// true for 5% of the users\nconst context = new Map([["user", new Map([["key", Math.random()]])]]);\nprefab.isFeatureEnabled("features.example-flag", context, false);\n\n// 100% of users in the beta group will return true\nconst context = new Map([\n  [\n    "user",\n    new Map([\n      ["key", Math.random()],\n      ["group", "beta"],\n    ]),\n  ],\n]);\nprefab.isFeatureEnabled("features.example-flag", context, false);\n'})})}),(0,a.jsx)(s,{value:"python",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'prefab = Client(Options(api_key="SDK-KEY, or set ENV var PREFAB_API_KEY"))\n\ncontext = { "user": { "key": random.randrange(1000)}}\n# 5% of other users will return true\nprint(prefab.enabled(\'features.example-flag\', context))\n\n# 100% of users in the beta group will return true\ncontext["user"]["group"] = "beta"\nprint(prefab.enabled(\'features.example-flag\', context))\n'})})}),(0,a.jsx)(s,{value:"elixir",label:"Elixir",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-elixir",children:'options = Prefab.Options.new(api_key: "SDK-KEY, or set ENV var PREFAB_API_KEY")\nclient = Prefab.Client.new(options)\n\n# true for 5% of the users\nPrefab.Client.enabled?(client, "features.example-flag", lookup_key: "123")\n\n# true because of the beta group rule\nPrefab.Client.enabled?(\n  client,\n  "features.example-flag",\n  lookup_key: "456",\n  attributes: %{"customer-group" => "beta"}\n)\n'})})})]}),"\n",(0,a.jsx)(t.p,{children:"And that's it! A nice feature flag with a complex rule and a partial rollout in 5 minutes."}),"\n",(0,a.jsxs)(t.p,{children:['For this example, we used "Just in Time" context, passing the context block into the ',(0,a.jsx)(t.code,{children:"enabled?"})," methods. In general, you'll set the context once at the beginning of the request and then use the ",(0,a.jsx)(t.code,{children:"enabled?"})," method without the context block. Read more about context ",(0,a.jsx)(t.a,{href:"/docs/explanations/concepts/context",children:"here"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},6704:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/add-project-api-key-06d0a10d91df9dbeec8fe9cadf97e048.png"},9765:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/api-key-created-8754bb76b3eec78e1d37a9219bd29e55.png"},8520:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/dashboard-dd22a831348f2a14ff4aae5f9f054d0e.png"},1242:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/new-feature-add-flag-66b51eb1b1e3f258093309c8ffd1c6b1.jpg"},6271:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/new-feature-edit-form-11f8917bab3667d735d691855df1fe3b.jpg"},2234:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/new-feature-flag-publish-856b0ccb92875c7872780f993702a281.jpg"},9565:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/new-feature-flag-variants-2bc771db853f1a5a3bf1f486ea36b6e3.jpg"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);