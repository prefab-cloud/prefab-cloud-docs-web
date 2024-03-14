"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[2972],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),f=r,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1535:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={title:"Get Started",sidebar_label:"Get Started",sidebar_position:1},l="Tutorial Intro",i={unversionedId:"tutorials/get-started",id:"tutorials/get-started",title:"Get Started",description:"Let's discover Prefab in less than 5 minutes.",source:"@site/docs/tutorials/get-started.md",sourceDirName:"tutorials",slug:"/tutorials/get-started",permalink:"/docs/tutorials/get-started",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/tutorials/get-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Get Started",sidebar_label:"Get Started",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/category/tutorials"},next:{title:"Your First Config and Flag",permalink:"/docs/tutorials/first-config-and-flag"}},s={},u=[{value:"Dashboard",id:"dashboard",level:2},{value:"Environments",id:"environments",level:2},{value:"API Keys",id:"api-keys",level:2},{value:"Adding a Feature Flag",id:"adding-a-feature-flag",level:2},{value:"Configuring our Feature Flag",id:"configuring-our-feature-flag",level:2},{value:"Use in Code",id:"use-in-code",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("Tabs"),c=p("TabItem"),f={toc:u},m="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,r.kt)("p",null,"Let's discover ",(0,r.kt)("strong",{parentName:"p"},"Prefab in less than 5 minutes"),"."),(0,r.kt)("p",null,"Getting setup with prefab cloud should take you 5 minutes, but only if we start right now ;)"),(0,r.kt)("h2",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,"After signing up, you'll see an onboarding dashboard. We've created your first workspace for you."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(2639).Z,width:"1996",height:"1402"})),(0,r.kt)("p",null,"Most organizations will only want a single workspace. "),(0,r.kt)("h2",{id:"environments"},"Environments"),(0,r.kt)("p",null,"Click on environments to view environments. We've added ",(0,r.kt)("inlineCode",{parentName:"p"},"Development"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Staging")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Production")," for you."),(0,r.kt)("h2",{id:"api-keys"},"API Keys"),(0,r.kt)("p",null,"Our clients will need to connect to the Prefab APIs. To do that they'll need API Keys. Prefab has 2 different types of API Keys."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SDK API")," keys are used for the server side APIs. These keys will have access to all information for their respective environment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Client API")," keys are used in mobile applications or websites. These keys will allow the clients to evaluate feature flags for a single user, but will not expose the raw flag data.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Only use Client API Keys in code that gets shipped to end users,")),(0,r.kt)("p",null,"Let's create an SDK Key for now."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(1288).Z,width:"833",height:"339"})),(0,r.kt)("p",null,"OK! We're all set, copy this API Key down we'll use it in the next step. We only show you the API key once and only store a\nsecure hash on our end. Don't worry if you lose it, you can easily create as many as you like, which makes key rotation a snap."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(6482).Z,width:"1448",height:"376"})),(0,r.kt)("h2",{id:"adding-a-feature-flag"},"Adding a Feature Flag"),(0,r.kt)("p",null,'Now that we have an API key, we\'re ready to go. Select Flags from the navigation and then choose "Add Flag".'),(0,r.kt)("p",null,"Let's name our flag ",(0,r.kt)("inlineCode",{parentName:"p"},"features.example-flag")," and use the default type (",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),")."),(0,r.kt)("p",null,"Prefab suggests that you name things all in lowercase, with ",(0,r.kt)("inlineCode",{parentName:"p"},".")," as a logical separator and ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," between words."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(3792).Z,width:"1880",height:"310"})),(0,r.kt)("p",null,"Click Save and now we can take a look at our new feature flag. There are 4 elements to call your attention to."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(9405).Z,width:"1888",height:"1456"})),(0,r.kt)("p",null,"There are 5 areas to note:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Variants")," The app has automatically created two boolean variants for us. Feature flags can return strings or numbers as well, but booleans are most common."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Rules")," Each environment gets a tab for its own rules."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Save")," Once we save the default value rule, we can publish our flag. Publishing makes the flag available to our clients.\n",(0,r.kt)("img",{alt:"image",src:a(8284).Z,width:"870",height:"144"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Code Samples")," snippets live here, making it easy to copy out the correct code into your application."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Evaluations")," once we start running the client, we'll be able to see evaluation charts here.")),(0,r.kt)("h2",{id:"configuring-our-feature-flag"},"Configuring our Feature Flag"),(0,r.kt)("p",null,"Time for some fun. Let's set up a feature flag that will show us a bit of the power of Prefab.\nFor this example, let's say that we have a new thing we're ready to ship. We want to get ship to everyone in our Beta group.\nAdditionally, since the beta group might not reflect our whole user base, so we also want to rollout to 5% of all traffic."),(0,r.kt)("p",null,'For the rollout, click the false dropdown and pick "Rollout". Now enter ',(0,r.kt)("inlineCode",{parentName:"p"},"95")," as your percent for ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,'Now click "Add Rule" to add our customer group rule. Select ',(0,r.kt)("inlineCode",{parentName:"p"},"true")," then enter ",(0,r.kt)("inlineCode",{parentName:"p"},"user.group")," for the when, ",(0,r.kt)("inlineCode",{parentName:"p"},"is one of")," for the operator and ",(0,r.kt)("inlineCode",{parentName:"p"},"beta")," for the values field."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(3611).Z,width:"1870",height:"1368"})),(0,r.kt)("p",null,"Save and publish."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The order of the rules matters. Rules are evaluated from top to bottom and the value of the first matching rule is used."),(0,r.kt)("p",{parentName:"admonition"},"You can drag the rules to re-order them but the default rule sticks to the bottom.")),(0,r.kt)("h2",{id:"use-in-code"},"Use in Code"),(0,r.kt)("p",null,"To use the flag, all we need to do is initialize a client with the SDK key we created and"),(0,r.kt)(d,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(c,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'Prefab.init(api_key: "SDK-KEY, or set ENV var PREFAB_API_KEY")\n# Users in the beta group will always return true\n\ncontext = { user: { key: rand(1000)}}\n# 5% of other users will return true\nputs Prefab.enabled?("features.example-flag", context)\n\n# 100% of users in the beta group will return true\ncontext[:user][:group] = "beta"\nputs Prefab.enabled?("features.example-flag", context)\n'))),(0,r.kt)(c,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PrefabCloudClient client = new PrefabCloudClient(new PrefabCloudClient.Options()\n  .setApikey("SDK-KEY, or set ENV var PREFAB_API_KEY"));\nFeatureFlagClient featureFlagClient = client.featureFlagClient();\n\n// true for 5 % of the users\nfeatureFlagClient.featureIsOn(\n      "features.example-flag",\n      PrefabContext.newBuilder("user")\n        .put("key", Math.random())\n        .build()\n    )\n\n// true because of the beta group rule\nfeatureFlagClient.featureIsOn(\n      "features.example-flag",\n      PrefabContext.newBuilder("user")\n        .put("group", "beta")\n        .build()\n    )\n'))),(0,r.kt)(c,{value:"node",label:"Node",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Prefab } from "@prefab-cloud/prefab-cloud-node";\n\nconst prefab = new Prefab({\n    apiKey: "SDK-KEY, or set ENV var PREFAB_API_KEY"\n});\nawait prefab.init();\n\n// true for 5% of the users\nconst context = new Map([\n    [\n        "user",\n        new Map([\n            ["key", Math.random()],\n        ]),\n    ]\n]);\nprefab.isFeatureEnabled(\'features.example-flag\', context, false)\n\n// 100% of users in the beta group will return true\nconst context = new Map([\n    [\n        "user",\n        new Map([\n            ["key", Math.random()],\n            ["group", "beta"],\n        ]),\n    ]\n]);\nprefab.isFeatureEnabled(\'features.example-flag\', context, false)\n\n'))),(0,r.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'prefab = Client(Options(api_key="SDK-KEY, or set ENV var PREFAB_API_KEY"))\n\ncontext = { "user": { "key": random.randrange(1000)}}\n# 5% of other users will return true\nprint(prefab.enabled(\'features.example-flag\', context))\n\n# 100% of users in the beta group will return true\ncontext["user"]["group"] = "beta"\nprint(prefab.enabled(\'features.example-flag\', context))\n'))),(0,r.kt)(c,{value:"elixir",label:"Elixir",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},'options = Prefab.Options.new(api_key: "SDK-KEY, or set ENV var PREFAB_API_KEY")\nclient = Prefab.Client.new(options)\n\n# true for 5% of the users\nPrefab.Client.enabled?(client, "features.example-flag", lookup_key: "123")\n\n# true because of the beta group rule\nPrefab.Client.enabled?(\n  client,\n  "features.example-flag",\n  lookup_key: "456",\n  attributes: %{"customer-group" => "beta"}\n)\n')))),(0,r.kt)("p",null,"And that's it! A nice feature flag with a complex rule and a partial rollout in 5 minutes."),(0,r.kt)("p",null,'For this example, we used "Just in Time" context, passing the context block into the ',(0,r.kt)("inlineCode",{parentName:"p"},"enabled?")," methods. In general, you'll set the context once at the beginning of the request and then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled?")," method without the context block. Read more about context ",(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/context"},"here"),"."))}g.isMDXComponent=!0},1288:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-project-api-key-06d0a10d91df9dbeec8fe9cadf97e048.png"},6482:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-key-created-8754bb76b3eec78e1d37a9219bd29e55.png"},2639:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard-dd22a831348f2a14ff4aae5f9f054d0e.png"},3792:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-feature-add-flag-2282ec1159365d00d90b66d50f847239.jpg"},3611:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-feature-edit-form-d2abed978f4a54504fa5ac3024e4c4a2.jpg"},8284:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-feature-flag-publish-dd6e010e4d4142ac5def7531e11b0ec3.jpg"},9405:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-feature-flag-variants-8c1449ed54290707bb5b9972483fdee5.jpg"}}]);