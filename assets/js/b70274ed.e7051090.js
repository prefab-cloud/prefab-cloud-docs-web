"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[654],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||r;return t?a.createElement(b,l(l({ref:n},c),{},{components:t})):a.createElement(b,l({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),i=t(6010);const r="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(7462),i=t(7294),r=t(6010),l=t(2389),o=t(7392),s=t(7094),u=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t;const{lazy:l,block:d,defaultValue:f,values:b,groupId:m,className:g}=e,v=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,o.l)(h,((e,n)=>e.value===n.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===f?f:null!=(n=null!=f?f:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:v[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:O,setTabGroupChoices:w}=(0,s.U)(),[N,P]=(0,i.useState)(k),I=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=O[m];null!=e&&e!==N&&h.some((n=>n.value===e))&&P(e)}const _=e=>{const n=e.currentTarget,t=I.indexOf(n),a=h[t].value;a!==N&&(T(n),P(a),null!=m&&w(m,String(a)))},C=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=I.indexOf(e.currentTarget)+1;t=null!=(a=I[n])?a:I[0];break}case"ArrowLeft":{var i;const n=I.indexOf(e.currentTarget)-1;t=null!=(i=I[n])?i:I[I.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},g)},h.map((e=>{let{value:n,label:t,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>I.push(e),onKeyDown:C,onFocus:_,onClick:_},l,{className:(0,r.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),l?(0,i.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function f(e){const n=(0,l.Z)();return i.createElement(d,(0,a.Z)({key:String(n)},e))}},8180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=t(7462),i=(t(7294),t(3905)),r=t(5488),l=t(5162);const o={title:"Bootstrapping",sidebar_label:"Bootstrapping",sidebar_position:3},s=void 0,u={unversionedId:"explanations/bootstrapping",id:"explanations/bootstrapping",title:"Bootstrapping",description:"A Config.yaml file",source:"@site/docs/explanations/bootstrapping.md",sourceDirName:"explanations",slug:"/explanations/bootstrapping",permalink:"/docs/explanations/bootstrapping",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/explanations/bootstrapping.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Bootstrapping",sidebar_label:"Bootstrapping",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Resiliency",permalink:"/docs/explanations/resiliency"},next:{title:"Defaults",permalink:"/docs/explanations/defaults"}},c={},p=[{value:"A Config.yaml file",id:"a-configyaml-file",level:2},{value:"Config Load Order",id:"config-load-order",level:2},{value:"Reconfiguring Config File Locations",id:"reconfiguring-config-file-locations",level:3},{value:"SDK Startup",id:"sdk-startup",level:2},{value:"Dependency Injection Pattern",id:"dependency-injection-pattern",level:3},{value:"Singletons And Initializers",id:"singletons-and-initializers",level:3},{value:"On Initialization Failure",id:"on-initialization-failure",level:2}],d={toc:p};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"a-configyaml-file"},"A Config.yaml file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prefab.default.config.yaml\nlog_level.prefab: info\n\nhttp.timeout: 30\nlog_level.app.controllers.my_controller: info\nfeatureflag.experiment33: false\n\njava.api.url: "staging-api.example.com"\n\ntest:\n  java.api.url: "localmockserver:8080"  # Prefab.new(Prefab::Options.new(default_env: \'test\')\n')),(0,i.kt)("h2",{id:"config-load-order"},"Config Load Order"),(0,i.kt)("p",null,"On startup, config clients load config in the following order, with each level taking precedence over the previous:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Classpath Config Files matching ",(0,i.kt)("inlineCode",{parentName:"li"},".prefab*config.yaml")," in alphanumeric order."),(0,i.kt)("li",{parentName:"ol"},"Most current values from PrefabCloud APIs & CDNs as described in ",(0,i.kt)("a",{parentName:"li",href:"/docs/explanations/resiliency"},"resiliency")),(0,i.kt)("li",{parentName:"ol"},"Local Override Files matching ",(0,i.kt)("inlineCode",{parentName:"li"},".prefab*config.yaml")),(0,i.kt)("li",{parentName:"ol"},"Emergency Override URL if configured in SDK initialization")),(0,i.kt)("h3",{id:"reconfiguring-config-file-locations"},"Reconfiguring Config File Locations"),(0,i.kt)("p",null,"The classpath config file location can be changed with the env var ",(0,i.kt)("inlineCode",{parentName:"p"},"PREFAB_CONFIG_CLASSPATH_DIR")),(0,i.kt)("p",null,"The local override config file location can be changed with env var ",(0,i.kt)("inlineCode",{parentName:"p"},"PREFAB_CONFIG_OVERRIDE_DIR")),(0,i.kt)("h2",{id:"sdk-startup"},"SDK Startup"),(0,i.kt)("p",null,"Your application begins to boot it will likely want to get configurations values from Prefab to do this, we need to make sure that it\nhas downloaded a current set of configuration. "),(0,i.kt)("h3",{id:"dependency-injection-pattern"},"Dependency Injection Pattern"),(0,i.kt)("p",null,"For languages where Dependency Injection is natural, initializing Prefab as a singleton and injecting it is the preferred approach. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Singleton\n@Provides\npublic Prefab getClient(){\n    return new Prefab(PrefabOptions.Builder().build());\n}\n")),(0,i.kt)("h3",{id:"singletons-and-initializers"},"Singletons And Initializers"),(0,i.kt)("p",null,"In other languages, we should initialize prefab as early as possible in our application lifecycle. Methods called on the Prefab object will use\na singleton."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"$prefab = Prefab.new # kicks off initialization\n$prefab.get('my.key') # uses a singleton\n")),(0,i.kt)("h2",{id:"on-initialization-failure"},"On Initialization Failure"),(0,i.kt)("p",null,"As we said in ",(0,i.kt)("a",{parentName:"p",href:"/docs/explanations/resiliency"},"resiliency")," Prefab goes to great lengths to ensure that you can get live data, but we need to specify behavior if\nyour application cannot connect. The internal configuration store begins in a locked state. It unlocks once it has live data. This gives us three choices\nif we are unable to get live data. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We can raise an error. This is the default."),(0,i.kt)("li",{parentName:"ol"},"We can stay locked and keep trying. "),(0,i.kt)("li",{parentName:"ol"},"We can unlock and continue with default values read from our classpath files. This may be the right setting for your Test & CI environments.")),(0,i.kt)(r.Z,{groupId:"lang",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"options = Prefab::Options.new(\n  on_init_failure: Prefab::Options::ON_INITIALIZATION_FAILURE::RAISE,\n  initialization_timeout_sec: 30\n)\n$prefab = Prefab.initialize(options)\n"))),(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Singleton\n@Provides\npublic Prefab getClient(){\n    PrefabOptions options=new PrefabOptions.Builder();\n    options.setOnInitFailue(PrefabOptions.OnInitFailue.RAISE); // | UNLOCK_AND_CONTINUE | LOCK_AND_KEEP_TRYING\n    options.setInitializationTimeout(Duration.ofSeconds(30));\n    return new Prefab(options.build());\n}\n")))))}f.isMDXComponent=!0}}]);