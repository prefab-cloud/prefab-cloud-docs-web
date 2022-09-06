"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[247],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||l;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(7462),n=a(7294),l=a(6010),o=a(2389),s=a(7392),i=a(7094),u=a(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a;const{lazy:o,block:d,defaultValue:h,values:m,groupId:f,className:g}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:k.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),v=(0,s.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===h?h:null!=(t=null!=h?h:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,i.U)(),[C,T]=(0,n.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=f){const e=w[f];null!=e&&e!==C&&y.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,a=x.indexOf(t),r=y[a].value;r!==C&&(O(t),T(r),null!=f&&N(f,String(r)))},P=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=x.indexOf(e.currentTarget)+1;a=null!=(r=x[t])?r:x[0];break}case"ArrowLeft":{var n;const t=x.indexOf(e.currentTarget)-1;a=null!=(n=x[t])?n:x[x.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},y.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>x.push(e),onKeyDown:P,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),o?(0,n.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,o.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},7268:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),l=a(5488),o=a(5162);const s={title:"Beta Releases",sidebar_label:"Beta Releases"},i=void 0,u={unversionedId:"how-tos/beta-releases",id:"how-tos/beta-releases",title:"Beta Releases",description:"Beta Releases allow you to mitigate risk of bugs by slowly rolling out a feature to your audience.",source:"@site/docs/how-tos/beta-releases.md",sourceDirName:"how-tos",slug:"/how-tos/beta-releases",permalink:"/docs/how-tos/beta-releases",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-tos/beta-releases.md",tags:[],version:"current",frontMatter:{title:"Beta Releases",sidebar_label:"Beta Releases"},sidebar:"tutorialSidebar",previous:{title:"How Tos",permalink:"/docs/category/how-tos"},next:{title:"Ruby SDK",permalink:"/docs/category/ruby-sdk"}},p={},c=[{value:"Example rollout",id:"example-rollout",level:2},{value:"Feature flag code",id:"feature-flag-code",level:2},{value:"Rules",id:"rules",level:2},{value:"The people who worked on the feature",id:"the-people-who-worked-on-the-feature",level:3},{value:"Your entire org",id:"your-entire-org",level:3},{value:"A growing percentage of users",id:"a-growing-percentage-of-users",level:3},{value:"Exceptions",id:"exceptions",level:2},{value:"Example Screenshot",id:"example-screenshot",level:2}],d={toc:c};function h(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Beta Releases allow you to mitigate risk of bugs by slowly rolling out a feature to your audience."),(0,n.kt)("p",null,"Using feature flags and Prefab's ",(0,n.kt)("a",{parentName:"p",href:"/docs/explanations/rules-and-segmentation"},"Rules and Segmentation")," you can enable a feature for precisely who you want, when you want."),(0,n.kt)("p",null,"Let's walk through a common example beta release rollout."),(0,n.kt)("h2",{id:"example-rollout"},"Example rollout"),(0,n.kt)("p",null,"A common progression for rollout is"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The people who worked on the feature: developers, designers, QA, PMs, etc."),(0,n.kt)("li",{parentName:"ol"},"Your entire org"),(0,n.kt)("li",{parentName:"ol"},"A growing percentage of users")),(0,n.kt)("p",null,"This progression allows the people who are closest to the feature to dogfood it first. Once they've fixed any rough edges they find, the rest of the org can test and uncover issues. Next you can slowly ramp up the percentage of other users the feature is available to."),(0,n.kt)("h2",{id:"feature-flag-code"},"Feature flag code"),(0,n.kt)("p",null,"You'll only need to set up the feature flag check once in your code and then you can modify the rules in the Prefab.Cloud app."),(0,n.kt)("p",null,"A feature flag check will always return false until it is fully enabled or a rule returns true. This means you can ship your code at any time before a feature flag is created on Prefab.Cloud and trust people are going down the ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," code path."),(0,n.kt)(l.Z,{groupId:"lang",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},'  if $prefab.enabled?("my-feature-name", current_user.lookup_key, { email: current_user.email })\n    # serve the new feature\n  else\n    # serve the old version of the page\n  end\n'))),(0,n.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"")))),(0,n.kt)("h2",{id:"rules"},"Rules"),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Rules are evaluated in order. You can drag and drop rules to rearrange them. The first matching rule determines which variant is served. ",(0,n.kt)("a",{parentName:"p",href:"/docs/explanations/rules-and-segmentation"},"Read more"),"."))),(0,n.kt)("p",null,'To model the example rollout above in Prefab.Cloud, we\'ll create a "Simple Flag".'),(0,n.kt)("p",null,"We'll modify the default ",(0,n.kt)("inlineCode",{parentName:"p"},"Always True")," rule to return ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," so we can safely enable our flag while still returning ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," for everyone for now."),(0,n.kt)("p",null,"Toggle the flag to active. Sync the changes to the API."),(0,n.kt)("h3",{id:"the-people-who-worked-on-the-feature"},"The people who worked on the feature"),(0,n.kt)("p",null,"Use a ",(0,n.kt)("inlineCode",{parentName:"p"},"Lookup Key In")," rule to target specific users and return the ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," variant if the user matches. Lookup keys are delimited by commas, so you might target ",(0,n.kt)("inlineCode",{parentName:"p"},"developer-1234,designer-29,developer-456")," etc. When it matches, we'll serve variant ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"lookup key screenshot",src:a(6150).Z,width:"2160",height:"536"})),(0,n.kt)("p",null,'Click "Create Rule" and then move this rule up above our ',(0,n.kt)("inlineCode",{parentName:"p"},"Always True")," rule and sync changes to the API."),(0,n.kt)("p",null,"Once time has passed and we're ready to open this up further, we'll add our next rule."),(0,n.kt)("h3",{id:"your-entire-org"},"Your entire org"),(0,n.kt)("p",null,"Use a ",(0,n.kt)("inlineCode",{parentName:"p"},"Property Ends With One Of")," rule to target the ",(0,n.kt)("inlineCode",{parentName:"p"},"email")," property and set the criteria values to ",(0,n.kt)("inlineCode",{parentName:"p"},"@YOUR_DOMAIN.com"),". When it matches, we'll serve variant ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("p",null,'Click "Create Rule" and then move this rule up above our ',(0,n.kt)("inlineCode",{parentName:"p"},"Always True")," rule and sync changes to the API."),(0,n.kt)("p",null,"Time passes while the org tests the feature. Once we're confident that we're ready for customers to see this, we add our final rule."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"your org",src:a(6150).Z,width:"2160",height:"536"})),(0,n.kt)("h3",{id:"a-growing-percentage-of-users"},"A growing percentage of users"),(0,n.kt)("p",null,"We'll modify our ",(0,n.kt)("inlineCode",{parentName:"p"},"Always True")," rule to do a ",(0,n.kt)("inlineCode",{parentName:"p"},"Percentage rollout"),". We'll start small -- maybe ",(0,n.kt)("inlineCode",{parentName:"p"},"5%")," for the ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," variant and ",(0,n.kt)("inlineCode",{parentName:"p"},"95%")," for the false variant."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"percentage screenshot",src:a(3215).Z,width:"2160",height:"696"})),(0,n.kt)("p",null,"Sync your changes."),(0,n.kt)("p",null,"This is the fun part where you talk to customer support and watch your error tracker."),(0,n.kt)("p",null,"What if things are broken? You can edit the ",(0,n.kt)("inlineCode",{parentName:"p"},"Always True")," rule to serve the ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," variant to ",(0,n.kt)("inlineCode",{parentName:"p"},"0%")," of people while you fix bugs. Now your customers are using the old code path again immediately."),(0,n.kt)("p",null,"Once you've dealt with any issues, you can slowly ramp the ",(0,n.kt)("inlineCode",{parentName:"p"},"5%")," up to ",(0,n.kt)("inlineCode",{parentName:"p"},"100%"),", syncing to the API and watching for issues each time."),(0,n.kt)("h2",{id:"exceptions"},"Exceptions"),(0,n.kt)("p",null,"What if you want to roll this feature out slowly but you need to make sure that your biggest customer doesn't see it until you have successfully rolled it out to everyone else first?"),(0,n.kt)("p",null,'No problem. Using what we learned with our "Your entire org" rule, we can create a rule that always returns ',(0,n.kt)("inlineCode",{parentName:"p"},"false")," for this customer."),(0,n.kt)("p",null,"Use a ",(0,n.kt)("inlineCode",{parentName:"p"},"Property Ends With One Of")," rule to target the ",(0,n.kt)("inlineCode",{parentName:"p"},"email")," property and set the criteria values to ",(0,n.kt)("inlineCode",{parentName:"p"},"@CUSTOMER_DOMAIN.com"),". When it matches, we'll serve variant ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"exception",src:a(9064).Z,width:"2160",height:"668"})),(0,n.kt)("p",null,'Click "Create Rule" and then move this rule up above our ',(0,n.kt)("inlineCode",{parentName:"p"},"Always True")," rule and sync changes to the API."),(0,n.kt)("p",null,"Because rule evaluation happens in order, when we see that the user matches ",(0,n.kt)("inlineCode",{parentName:"p"},"@CUSTOMER_DOMAIN.com")," we'll return ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," for the flag check and they won't see the new feature."),(0,n.kt)("p",null,"Once you've ramped the percentage up to ",(0,n.kt)("inlineCode",{parentName:"p"},"100%")," for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Always True")," rule and you're ready for this customer to see the feature, you can delete this exception rule."),(0,n.kt)("h2",{id:"example-screenshot"},"Example Screenshot"),(0,n.kt)("p",null,"Here's all the rules above and the exception as seen in the UI"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"example screenshot",src:a(3033).Z,width:"2326",height:"768"})))}h.isMDXComponent=!0},3033:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/all-rules-f7772f1a6c7ded166b421dd8617eb85f.jpg"},9064:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/exception-2eaf8db305aeecd9d81a7d79a7a95860.jpg"},6150:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/lookup-key-in-a6d7f2518119fd91c5cfabac2267f1f9.jpg"},3215:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/percentage-rollout-ecfc00b99e8f3bcda861a8fc2d400888.jpg"}}]);