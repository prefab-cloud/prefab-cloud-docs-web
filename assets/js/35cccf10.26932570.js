"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[972],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),f=n,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),i=a(6550),u=a(1980),s=a(7392),c=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=m({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),g=(()=>{const e=u??d;return f({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var g=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==i&&(d(t),u(r))},f=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:p},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},1535:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={title:"Get Started",sidebar_label:"Get Started",sidebar_position:1},u="Tutorial Intro",s={unversionedId:"tutorials/get-started",id:"tutorials/get-started",title:"Get Started",description:"Let's discover Prefab in less than 5 minutes.",source:"@site/docs/tutorials/get-started.md",sourceDirName:"tutorials",slug:"/tutorials/get-started",permalink:"/docs/tutorials/get-started",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/tutorials/get-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Get Started",sidebar_label:"Get Started",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/category/tutorials"},next:{title:"Get Started Client",permalink:"/docs/tutorials/get-started-client"}},c={},d=[{value:"Dashboard",id:"dashboard",level:2},{value:"Project Environments",id:"project-environments",level:2},{value:"API Keys",id:"api-keys",level:2},{value:"Adding a Feature Flag",id:"adding-a-feature-flag",level:2},{value:"Configuring our Feature Flag",id:"configuring-our-feature-flag",level:2},{value:"Use in Code",id:"use-in-code",level:2}],p={toc:d},f="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(f,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,n.kt)("p",null,"Let's discover ",(0,n.kt)("strong",{parentName:"p"},"Prefab in less than 5 minutes"),"."),(0,n.kt)("p",null,"Getting setup with prefab cloud should take you 5 minutes, but only if we start right now ;)"),(0,n.kt)("h2",{id:"dashboard"},"Dashboard"),(0,n.kt)("p",null,"After signing up, you'll see an onboarding dashboard. We've created your first project for you."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(2639).Z,width:"1996",height:"1402"})),(0,n.kt)("p",null,"Most organizations will only want a single project."),(0,n.kt)("h2",{id:"project-environments"},"Project Environments"),(0,n.kt)("p",null,"Click on your project name to add environments."),(0,n.kt)("p",null,"You probably want something like:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Development"),(0,n.kt)("li",{parentName:"ul"},"Staging"),(0,n.kt)("li",{parentName:"ul"},"Production")),(0,n.kt)("p",null,"There's no limit on the number of environments you can have. We've already created the Development environment for you."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(3584).Z,width:"1488",height:"412"})),(0,n.kt)("h2",{id:"api-keys"},"API Keys"),(0,n.kt)("p",null,"Our clients will need to connect to the Prefab APIs. To do that they'll need API Keys. Prefab has 2 different types of API Keys."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SDK API")," keys are used for the server side APIs. These keys will have access to all information for their respective environment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Client API")," keys are used in mobile applications or websites. These keys will allow the clients to evaluate feature flags for a single user, but will not expose the raw flag data.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Only use Client API Keys in code that gets shipped to end users, ")),(0,n.kt)("p",null,"Let's create an SDK Key for now."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(1288).Z,width:"833",height:"339"})),(0,n.kt)("p",null,"OK! We're all set, copy this API Key down we'll use it in the next step. We only show you the API key once and only store a\nsecure hash on our end. Don't worry if you lose it, you can easily create as many as you like, which makes key rotation a snap."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(6482).Z,width:"1448",height:"376"})),(0,n.kt)("h2",{id:"adding-a-feature-flag"},"Adding a Feature Flag"),(0,n.kt)("p",null,'Now that we have an API key, we\'re ready to go. Select Flags from the navigation and then choose "Add Flag".'),(0,n.kt)("p",null,"Let's name our flag ",(0,n.kt)("inlineCode",{parentName:"p"},"features.example-flag")," and use the default type (",(0,n.kt)("inlineCode",{parentName:"p"},"bool"),")."),(0,n.kt)("p",null,"Prefab suggests that you name things all in lowercase, with ",(0,n.kt)("inlineCode",{parentName:"p"},".")," as a logical separator and ",(0,n.kt)("inlineCode",{parentName:"p"},"-")," between words."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(1124).Z,width:"1946",height:"210"})),(0,n.kt)("p",null,"Click Save and now we can take a look at our new feature flag. There are 4 elements to call your attention to."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(9744).Z,width:"1946",height:"1402"})),(0,n.kt)("p",null,"There are 4 areas to note:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The app has automatically created two boolean variants for us. Feature flags can return strings or numbers as well, but booleans are most common."),(0,n.kt)("li",{parentName:"ol"},"The Publish Changes button is disabled because we haven't confirmed the default value for our environment. Once we save the default value rule, we can publish our flag."),(0,n.kt)("li",{parentName:"ol"},"Each environment gets a tab for its own rules."),(0,n.kt)("li",{parentName:"ol"},"Code snippets live here, making it easy to copy out the correct code into your application.")),(0,n.kt)("h2",{id:"configuring-our-feature-flag"},"Configuring our Feature Flag"),(0,n.kt)("p",null,"Time for some fun. Let's set up a feature flag that will show us a bit of the power of Prefab.\nFor this example, let's say that we have a new thing we're ready to ship. We want to get ship to everyone in our Beta group.\nAdditionally, since the beta group might not reflect our whole user base, so we also want to rollout to 5% of all traffic."),(0,n.kt)("p",null,'For the rollout, click the false dropdown and pick "Rollout". Now enter ',(0,n.kt)("inlineCode",{parentName:"p"},"95")," as your percent for ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"5")," for ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("p",null,'Now click "Add Rule" to add our customer group rule. Select "true" and "Property is one of". Enter "customer-group" for the "Property" field and "beta" for the values field.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(7055).Z,width:"2750",height:"1026"})),(0,n.kt)("p",null,"Save both rules and publish."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The order of the rules matters. Rules are evaluated from top to bottom and the value of the first matching rule is used."),(0,n.kt)("p",{parentName:"admonition"},"You can drag the rules to re-order them but the default rule sticks to the bottom.")),(0,n.kt)("h2",{id:"use-in-code"},"Use in Code"),(0,n.kt)("p",null,"To use the flag, all we need to do is initialize a client with the SDK key we created and"),(0,n.kt)(l.Z,{groupId:"lang",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'$prefab = Prefab::Client.new(api_key: "SDK-KEY, or set ENV var PREFAB_API_KEY")\n# Users in the beta group will always return true\nputs $prefab.enabled?("features.example-flag", { user: { "customer-group": "beta" } })\n# 5% of other users will return true\nputs $prefab.enabled?("features.example-flag", {})\n'))),(0,n.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'PrefabCloudClient client = new PrefabCloudClient(new PrefabCloudClient.Options()\n  .setApikey("SDK-KEY, or set ENV var PREFAB_API_KEY"));\nFeatureFlagClient featureFlagClient = client.featureFlagClient();\n\n// true for 5 % of the users\nfeatureFlagClient.featureIsOn(\n      "features.example-flag",\n      PrefabContext.newBuilder("user")\n        .put("trackingId", user.getTrackingId())\n        .build()\n    )\n\n// true because of the beta group rule\nfeatureFlagClient.featureIsOn(\n      "features.example-flag",\n      PrefabContext.newBuilder("customer")\n        .put("group", "beta")\n        .build()\n    )\n'))),(0,n.kt)(o.Z,{value:"elixir",label:"Elixir",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-elixir"},'options = Prefab.Options.new(api_key: "SDK-KEY, or set ENV var PREFAB_API_KEY")\nclient = Prefab.Client.new(options)\n\n# true for 5% of the users\nPrefab.Client.enabled?(client, "features.example-flag", lookup_key: "123")\n\n# true because of the beta group rule\nPrefab.Client.enabled?(\n  client,\n  "features.example-flag",\n  lookup_key: "456",\n  attributes: %{"customer-group" => "beta"}\n)\n')))),(0,n.kt)("p",null,"And that's it! A nice feature flag with a complex rule and a partial rollout in 5 minutes."),(0,n.kt)("p",null,"Read on in ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorials/get-started-client"},"Getting Started on The Client Side")," to learn how to use this same flag from the web."))}m.isMDXComponent=!0},1124:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/add-flag-7746d7b7ce74258df1165fed6ba2741f.png"},1288:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/add-project-api-key-06d0a10d91df9dbeec8fe9cadf97e048.png"},3584:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/add-project-env-87519bf63ce370528c798c02a02feb7c.png"},6482:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/api-key-created-8754bb76b3eec78e1d37a9219bd29e55.png"},2639:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dashboard-dd22a831348f2a14ff4aae5f9f054d0e.png"},7055:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ff-edit-form-a2a988ec399b476e5581c98d948b92c3.png"},9744:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/new-feature-flag-variants-74566909849651d80928b4149745ec82.png"}}]);