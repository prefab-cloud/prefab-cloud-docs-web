"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),i=n(6010),o=n(2389),s=n(7392),l=n(7094),c=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n;const{lazy:o,block:m,defaultValue:d,values:b,groupId:f,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,l.U)(),[O,T]=(0,r.useState)(k),C=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=f){const e=w[f];null!=e&&e!==O&&h.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=C.indexOf(t),a=h[n].value;a!==O&&(P(t),T(a),null!=f&&N(f,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},g)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>C.push(e),onKeyDown:x,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},1589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),o=n(5162);const s={title:"Namespaces",sidebar_label:"Namespaces",sidebar_position:4},l=void 0,c={unversionedId:"explanations/namespaces",id:"explanations/namespaces",title:"Namespaces",description:"Targetting Dynamic Configuration With Namespaces",source:"@site/docs/explanations/namespaces.md",sourceDirName:"explanations",slug:"/explanations/namespaces",permalink:"/docs/explanations/namespaces",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/explanations/namespaces.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Namespaces",sidebar_label:"Namespaces",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Rules and Segmentation",permalink:"/docs/explanations/rules-and-segmentation"},next:{title:"Testing",permalink:"/docs/explanations/testing"}},p={},u=[{value:"Targetting Dynamic Configuration With Namespaces",id:"targetting-dynamic-configuration-with-namespaces",level:2}],m={toc:u};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"targetting-dynamic-configuration-with-namespaces"},"Targetting Dynamic Configuration With Namespaces"),(0,r.kt)("p",null,"Namespaces allow you to share config amongst many applications while still allowing you to override when necessary."),(0,r.kt)("p",null,"For instance, let's assume that all our code shares an HTTP library. We can configure the HTTP library to get its retry count & timeout duration from our config store.\nWe'll set ",(0,r.kt)("inlineCode",{parentName:"p"},"http.connection.retries")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"http.connection.timeout")," in the default namespace."),(0,r.kt)("p",null,"All of our apps should initialize their config store in a namespace. For instance our User Service may have clients in the namespaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'Prefab::Options.new(namespace: "userservice.web.app")')," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'Prefab::Options.new(namespace: "userservice.daemon.sidekiq")')," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'Prefab::Options.new(namespace: "userservice.cron.sync-to-billing")')," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'Prefab::Options.new(namespace: "userservice.cron.cleanup-job")')," ")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It's likely that you have a good namespace already defined as a tag on your pod. Something like ",(0,r.kt)("inlineCode",{parentName:"p"},'namespace = (ENV[\'DEPLOYED_NAME\'] || "").gsub("-",".")')," may be just what you're looking for."))),(0,r.kt)("p",null,'Prefab config will find the "closest" matching config when the UserService goes to look for a value of ',(0,r.kt)("inlineCode",{parentName:"p"},"http.connection.timeout"),"."),(0,r.kt)("p",null,"Let's imagine that the UserService starts to go down because too many requests are timing out to a our billing service. We can quickly reduce the ",(0,r.kt)("inlineCode",{parentName:"p"},"http.connection.timeout")," for our ",(0,r.kt)("inlineCode",{parentName:"p"},"userservice.cron.sync-to-billing")," namespace and solve the issue without pushing code or restarting."),(0,r.kt)("p",null,"With the following values\n",(0,r.kt)("img",{alt:"namespaces for http-retries",src:n(3853).Z,width:"701",height:"306"})),(0,r.kt)(i.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'# staging\nclient = Prefab::Client.new(Prefab::Options.new())\nclient.get("http.connection.retries") # returns 1\n\n# staging\nclient = Prefab::Client.new(Prefab::Options.new(namespace: "userservice.cron.sync-to-billing"))\nclient.get("http.connection.retries") # returns 1\n\n# production\nclient = Prefab::Client.new(Prefab::Options.new(namespace: "userservice.web.web"))\nclient.get("http.connection.retries") # returns 3\n\n# production\nclient = Prefab::Client.new(Prefab::Options.new(namespace: "userservice.cron.sync-to-billing"))\nclient.get("http.connection.retries") # returns 0\n\n'))),(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import prefab, { Identity } from '@prefab-cloud/prefab-cloud-js'\n\nconst options = { apiKey: 'YOUR_CLIENT_API_KEY', namespace: \"userservice.web.web\", identity: new Identity('user-1234', { device: 'desktop' }) };\nawait prefab.init(options);\n\nprefab.get(\"http.connection.retries\"); //returns 3 in production\n\n// Changing namespaces requires you to `init` again.\noptions.namespace = 'userservice.cron.sync-to-billing';\nawait prefab.init(options);\n\nprefab.get(\"http.connection.retries\");  //returns 0 in production\n")))))}d.isMDXComponent=!0},3853:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/namespace-retries-4674a435599296c5dd0cc66cf751953f.png"}}]);