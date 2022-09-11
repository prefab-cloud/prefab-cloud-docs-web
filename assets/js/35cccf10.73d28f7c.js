"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[972],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,a;const{lazy:o,block:p,defaultValue:m,values:h,groupId:g,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,i.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[P,T]=(0,r.useState)(w),C=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=g){const e=y[g];null!=e&&e!==P&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=C.indexOf(t),n=b[a].value;n!==P&&(I(t),T(n),null!=g&&N(g,String(n)))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=C.indexOf(e.currentTarget)+1;a=null!=(n=C[t])?n:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;a=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>C.push(e),onKeyDown:Z,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":P===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(v.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function m(e){const t=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},1535:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={title:"Get Started",sidebar_label:"Get Started",sidebar_position:1},s="Tutorial Intro",u={unversionedId:"tutorials/get-started",id:"tutorials/get-started",title:"Get Started",description:"Let's discover Prefab.Cloud in less than 5 minutes.",source:"@site/docs/tutorials/get-started.md",sourceDirName:"tutorials",slug:"/tutorials/get-started",permalink:"/docs/tutorials/get-started",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/tutorials/get-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Get Started",sidebar_label:"Get Started",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/category/tutorials"},next:{title:"Get Started Client",permalink:"/docs/tutorials/get-started-client"}},d={},c=[{value:"Project Creation",id:"project-creation",level:2},{value:"Project Environments",id:"project-environments",level:2},{value:"API Keys",id:"api-keys",level:2},{value:"Adding a Feature Flag",id:"adding-a-feature-flag",level:2},{value:"Configuring our Feature Flag",id:"configuring-our-feature-flag",level:2},{value:"Add the Beta Rule",id:"add-the-beta-rule",level:2},{value:"Re-Order the Rules",id:"re-order-the-rules",level:2},{value:"Set a Percentage Rollout",id:"set-a-percentage-rollout",level:2},{value:"Review your changes",id:"review-your-changes",level:2},{value:"Use in Code",id:"use-in-code",level:2}],p={toc:c};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,r.kt)("p",null,"Let's discover ",(0,r.kt)("strong",{parentName:"p"},"Prefab.Cloud in less than 5 minutes"),"."),(0,r.kt)("p",null,"Getting setup with prefab cloud should take you 5 minutes, but only if we start right now ;)"),(0,r.kt)("h2",{id:"project-creation"},"Project Creation"),(0,r.kt)("p",null,"First you will need to create a Project in the Prefab UI. Most organizations will only want a single project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(1973).Z,width:"908",height:"320"})),(0,r.kt)("h2",{id:"project-environments"},"Project Environments"),(0,r.kt)("p",null,"After that you'll create your environments:"),(0,r.kt)("p",null,"You probably want something like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Development"),(0,r.kt)("li",{parentName:"ul"},"Staging"),(0,r.kt)("li",{parentName:"ul"},"Production")),(0,r.kt)("p",null,"There's no limit on the number of environments you can have. For now you can just create 'Development'"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(3584).Z,width:"823",height:"298"})),(0,r.kt)("p",null,"You'll see your first environment has been added."),(0,r.kt)("h2",{id:"api-keys"},"API Keys"),(0,r.kt)("p",null,"Our clients will need to connect to the Prefab APIs. To do that they'll need API Keys. Prefab has 2 different types of API Keys.\nSDK API Keys are used for the server side APIs. These keys will have access to all information for their respective environment.\nClient API Keys are used in mobile applications or websites. These keys will allow the clients to evaluate feature flags for a single user, but will not expose the raw flag data."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In code that gets shipped to end users, only use Client API Keys."))),(0,r.kt)("p",null,"Let's create an SDK Key for now."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(1288).Z,width:"833",height:"339"})),(0,r.kt)("p",null,"Ok! We're all set, copy this API Key down we'll use it in the next step. We only show you the API key once and only store a\nsecure hash on our end. Don't worry if you lose it, you can easily create as many as you like, which makes key rotation a snap."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(6482).Z,width:"1448",height:"376"})),(0,r.kt)("h2",{id:"adding-a-feature-flag"},"Adding a Feature Flag"),(0,r.kt)("p",null,'Now that we have an API key, we\'re ready to go. Select Flags from the navigation and then choose "Add Simple Flag".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(1124).Z,width:"1500",height:"518"})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can always use the advanced UI for a feature flag even if you start simple. They are the same thing under the covers"))),(0,r.kt)("p",null,"Let's name our flag ",(0,r.kt)("inlineCode",{parentName:"p"},"features.example-flag"),". "),(0,r.kt)("p",null,"Prefab suggests that you name things all in lowercase, with ",(0,r.kt)("inlineCode",{parentName:"p"},".")," as a logical separator and ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," between words."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(8798).Z,width:"1116",height:"782"})),(0,r.kt)("p",null,"Click create and now we can take a look at our new feature flag. There are 4 elements to call your attention to."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(9744).Z,width:"1222",height:"1062"})),(0,r.kt)("p",null,"There are 4 areas to note:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The 'Simple Flag' has automatically created two boolean variants for us. Feature flags can return strings or numbers as well, but booleans are most common."),(0,r.kt)("li",{parentName:"ol"},"Our status box says 'Sync to API' this tells us that we have pending changes that are not in the API. "),(0,r.kt)("li",{parentName:"ol"},"The environment we created is here. This is where we will turn the flag on. "),(0,r.kt)("li",{parentName:"ol"},"Code snippets live here, making it easy to copy out the correct code into your application.")),(0,r.kt)("h2",{id:"configuring-our-feature-flag"},"Configuring our Feature Flag"),(0,r.kt)("p",null,"Time for some fun. Let's set up a feature flag that will show us a bit of the power of Prefab.\nFor this example, let's say that we have a new thing we're ready to ship. We want to get ship to everyone in our Beta group.\nAdditionally, since the beta group might not reflect our whole user base, so we also want to rollout to 5% of all traffic. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(3888).Z,width:"1658",height:"1134"}),"\nThere are 3 areas to note:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Flags start off as inactive in all environments. That means that the rules are not evaluated."),(0,r.kt)("li",{parentName:"ol"},"When the flag is inactive, simply return this variant."),(0,r.kt)("li",{parentName:"ol"},"When a flag is active, go through the list of rules in order. If a rule matches, return the given variant or variant distribution.")),(0,r.kt)("p",null,"Let's add our Beta rule now."),(0,r.kt)("h2",{id:"add-the-beta-rule"},"Add the Beta Rule"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(7055).Z,width:"1654",height:"968"})),(0,r.kt)("h2",{id:"re-order-the-rules"},"Re-Order the Rules"),(0,r.kt)("p",null,'The order of the rules matters. If your first rule is "always true" we\'re not going to get to the Beta group evaluation.\nYou can drag the rules to re-order them.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(1833).Z,width:"1900",height:"382"})),(0,r.kt)("h2",{id:"set-a-percentage-rollout"},"Set a Percentage Rollout"),(0,r.kt)("p",null,'The order of the rules matters. If your first rule is "always true" we\'re not going to get to the Beta group evaluation.\nYou can drag the rules to re-order them.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(2229).Z,width:"682",height:"710"})),(0,r.kt)("h2",{id:"review-your-changes"},"Review your changes"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(3142).Z,width:"2328",height:"1712"})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For something like a beta group it's often useful to use a re-usable Segment. You can create a segment as a dynamic config."))),(0,r.kt)("h2",{id:"use-in-code"},"Use in Code"),(0,r.kt)("p",null,"To use the flag, all we need to do is initialize a client with the SDK key we created and "),(0,r.kt)(l.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'$prefab = Prefab::Client.new(api_key: "SDK-KEY, or set ENV var PREFAB_API_KEY")\nputs $prefab.enabled?("features.example-flag", "123") #true for 5% of the users\nputs $prefab.enabled?("features.example-flag", "456", { "customer-group": "beta" }) #true\n'))),(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PrefabCloudClient client = new PrefabCloudClient(new PrefabCloudClient.Options()\n  .setApikey("SDK-KEY, or set ENV var PREFAB_API_KEY"));\nFeatureFlagClient featureFlagClient = client.featureFlagClient();\n\n// true for 5 % of the users\nfeatureFlagClient\n  .featureIsOnFor("features.example-flag", "123");\n\n// true because of the beta group rule\nfeatureFlagClient\n  .featureIsOnFor("features.example-flag",\n  "123", \n  Map.of("customer-group", "beta")); \n')))),(0,r.kt)("p",null,"And that's it! A nice feature flag with a complex rule and a partial rollout in 5 minutes. "),(0,r.kt)("p",null,"Read on in ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/get-started-client"},"Getting Started on The Client Side")," to learn how to use this same flag from the web."))}m.isMDXComponent=!0},8798:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-flag-details-534b18f33050ba7afada3afbd8546953.png"},1124:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-flag-8d11ba01b4193c73e99a3ee21eed29d9.png"},1288:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-project-api-key-06d0a10d91df9dbeec8fe9cadf97e048.png"},3584:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-project-env-f825694bb404f05e93ef96d1452cc913.png"},6482:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-key-created-27c2e15016da7758297aac4e27e07098.png"},3888:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ff-active-b4f45ee70009f0c1e2c5d2765af83c81.png"},7055:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ff-edit-form-dd0018019cf7e4b42494c18073e071f4.png"},2229:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ff-pct-7fdcb1ac375f09d6b37bccf40dec95bf.png"},1833:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ff-reorder-260b48ecf19abd3513cd5699fc5660a6.png"},3142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ff-save-9f2ceb116efaef97f3618bc73ec794ca.png"},9744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-feature-flag-variants-29d5659c8c13128006692b3586fa344d.png"},1973:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-project-details-a3f207869ed65047e0a261dc4d316634.png"}}]);