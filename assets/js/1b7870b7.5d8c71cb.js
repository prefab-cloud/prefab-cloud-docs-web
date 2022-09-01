"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[852],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),i=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return l.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return a?l.createElement(b,o(o({ref:t},c),{},{components:a})):l.createElement(b,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var i=2;i<n;i++)o[i]=a[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),r=a(6010);const n="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7462),r=a(7294),n=a(6010),o=a(2389),u=a(7392),s=a(7094),i=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a;const{lazy:o,block:d,defaultValue:m,values:b,groupId:f,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:g.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),h=(0,u.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==w&&!y.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:T}=(0,s.U)(),[N,x]=(0,r.useState)(w),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=f){const e=k[f];null!=e&&e!==N&&y.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,a=j.indexOf(t),l=y[a].value;l!==N&&(O(t),x(l),null!=f&&T(f,String(l)))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var l;const t=j.indexOf(e.currentTarget)+1;a=null!=(l=j[t])?l:j[0];break}case"ArrowLeft":{var r;const t=j.indexOf(e.currentTarget)-1;a=null!=(r=j[t])?r:j[j.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":d},v)},y.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:Z,onFocus:E,onClick:E},o,{className:(0,n.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,l.Z)({key:String(t)},e))}},7126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var l=a(7462),r=(a(7294),a(3905)),n=a(5488),o=a(5162);const u={title:"Gradual Rollout",sidebar_label:"Gradual Rollout"},s=void 0,i={unversionedId:"how-tos/gradual-rollout",id:"how-tos/gradual-rollout",title:"Gradual Rollout",description:"This is how you feature flag",source:"@site/docs/how-tos/gradual-rollout.md",sourceDirName:"how-tos",slug:"/how-tos/gradual-rollout",permalink:"/prefab-cloud-docs-web/docs/how-tos/gradual-rollout",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-tos/gradual-rollout.md",tags:[],version:"current",frontMatter:{title:"Gradual Rollout",sidebar_label:"Gradual Rollout"},sidebar:"tutorialSidebar",previous:{title:"Experimentation",permalink:"/prefab-cloud-docs-web/docs/how-tos/experimentation"},next:{title:"Server Knobs & Kill Switches",permalink:"/prefab-cloud-docs-web/docs/how-tos/server-knobs"}},c={},p=[{value:"This is how you feature flag",id:"this-is-how-you-feature-flag",level:2}],d=(m="BrowserWindow",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const b={toc:p};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"this-is-how-you-feature-flag"},"This is how you feature flag"),(0,r.kt)(n.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function helloWorld() {\n  console.log('Hello, world!');\n}\n"))),(0,r.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def hello_world():\n  print("Hello, world!")\n'))),(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n')))),(0,r.kt)(n.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function helloWorld() {\n  console.log('Hello, world!');\n}\n"))),(0,r.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def hello_world():\n  print("Hello, world!")\n'))),(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n')))),(0,r.kt)("p",null,"And you will get the following:"),(0,r.kt)(d,{mdxType:"BrowserWindow"},(0,r.kt)(n.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function helloWorld() {\n  console.log('Hello, world!');\n}\n"))),(0,r.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'def hello_world():\n  print("Hello, world!")\n'))),(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n'))))))}f.isMDXComponent=!0}}]);