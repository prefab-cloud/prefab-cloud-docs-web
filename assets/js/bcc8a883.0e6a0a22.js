"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),f=l,g=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const o={title:"Default YAML Files",sidebar_label:"Default Files",sidebar_position:3},r=void 0,i={unversionedId:"explanations/defaults",id:"explanations/defaults",title:"Default YAML Files",description:"Default System",source:"@site/docs/explanations/defaults.md",sourceDirName:"explanations",slug:"/explanations/defaults",permalink:"/docs/explanations/defaults",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/explanations/defaults.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Default YAML Files",sidebar_label:"Default Files",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Bootstrapping",permalink:"/docs/explanations/bootstrapping"},next:{title:"Reliability",permalink:"/docs/explanations/resiliency"}},s={},p=[{value:"Default System",id:"default-system",level:2},{value:"Nesting",id:"nesting",level:3},{value:"Feature Flags",id:"feature-flags",level:3},{value:"Prefab Environments",id:"prefab-environments",level:2},{value:"Deleting Values",id:"deleting-values",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},d=u("Tabs"),c=u("TabItem"),f={toc:p};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"default-system"},"Default System"),(0,l.kt)("p",null,"Prefab has a powerful system of environment defaults that allows you to get started quickly. Let's look."),(0,l.kt)("p",null,"The first file is ",(0,l.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml"),". Prefab will always look for and load a file with this name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prefab.default.config.yaml\nlog-level:\n  _: info\n  myapp.controllers:\n    _: debug\n    chatty_controller: warn\n  google.apis.core.http_command: info\n\napi-usage: { "feature_flag": "true", value: true }\n\nredis.url: "redis://localhost:6379"\n\ngoogle:\n  gcp:\n    _: my-staging-project # share the staging project in development\n    big-query:\n      dataset-name: development-dataset # but use a development dataset\n')),(0,l.kt)("p",null,"There are a number of things to note in this example. "),(0,l.kt)("h3",{id:"nesting"},"Nesting"),(0,l.kt)("p",null,"In order to reduce redundant keys, Prefab default files support nesting. In the example above you would access the GCP\ndataset name with the key ",(0,l.kt)("inlineCode",{parentName:"p"},"google.gcp.big-query.dataset-name"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"_")," key is special and lets us specify a value with a key that has nested attributes. The GCP project ",(0,l.kt)("inlineCode",{parentName:"p"},"my-staging-project"),"\nin this example is accessible by the key ",(0,l.kt)("inlineCode",{parentName:"p"},"google.gcp"),"."),(0,l.kt)("h3",{id:"feature-flags"},"Feature Flags"),(0,l.kt)("p",null,"A handy shorthand for feature flags is available to set a default value."),(0,l.kt)("h2",{id:"prefab-environments"},"Prefab Environments"),(0,l.kt)("p",null,"You can optionally add a list of environments to load additional default files. Let's see how to load the files ",(0,l.kt)("inlineCode",{parentName:"p"},".prefab.staging.config.yaml"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},".prefab.cloud.config.yaml")," in that order. "),(0,l.kt)(d,{groupId:"lang",mdxType:"Tabs"},(0,l.kt)(c,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},'options = Prefab::Options.new(prefab_envs: Rails.env)\noptions = Prefab::Options.new(prefab_envs: ["staging", "cloud"])\n'))),(0,l.kt)(c,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Options options = new Options()\n  .setPrefabEnvs(List.of("staging", "cloud"))\n'))),(0,l.kt)(c,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"PREFAB_ENVS=staging,cloud myapp\n")))),(0,l.kt)("p",null,"To continue our example from above. Let's look at how we might continue the logging and google configuration."),(0,l.kt)("p",null,"In staging, we no longer want the debug level of logging on our controllers. Let's turn that off.\nWe do want to change the big query dataset as well."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prefab.staging.config.yaml\nlog-level:\n  myapp.controllers:\n    _: info # we will inherit levels from the default file unless overridden\n    \nredis.url: "redis://1.2.3.4:6379"\n\ngoogle:\n  gcp:\n    big-query:\n      dataset-name: staging-dataset\n')),(0,l.kt)("p",null,"In production, let's change all logging to warn and set both the google configurations to production values. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prefab.production.config.yaml\nlog-level:\n  _: warn\n  myapp.controllers:\n    _: warn\n\nredis.url: "redis://7.8.9.10:6379"\n\ngoogle:\n  gcp:\n    _: my-production-project # use the production project\n    big-query:\n      dataset-name: production-dataset\n')),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It's fine to use Prefab for configuration even if you don't think it will ever change.\nHaving it in Prefab means that you always retain the ability to update it on the fly."))),(0,l.kt)("h2",{id:"deleting-values"},"Deleting Values"),(0,l.kt)("p",null,"The Prefab clients will sometimes return nil even in the default mode. This situation occurs if you have deleted the keys in the Prefab UI.\nA deleted key value is sent down to the clients as a tombstone and this tombstone takes precedence over default values as indicated in the\n",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/bootstrapping"},"config load order")," doc."))}g.isMDXComponent=!0}}]);