"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[8919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,g=d["".concat(s,".").concat(f)]||d[f]||c[f]||r;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"Default YAML Files (Deprecated)",sidebar_label:"Default Files",sidebar_position:6},l=void 0,i={unversionedId:"explanations/concepts/defaults",id:"explanations/concepts/defaults",title:"Default YAML Files (Deprecated)",description:"Default System",source:"@site/docs/explanations/concepts/defaults.md",sourceDirName:"explanations/concepts",slug:"/explanations/concepts/defaults",permalink:"/docs/explanations/concepts/defaults",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/explanations/concepts/defaults.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Default YAML Files (Deprecated)",sidebar_label:"Default Files",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Testing & DataFiles",permalink:"/docs/explanations/concepts/testing"},next:{title:"Architecture",permalink:"/docs/category/architecture"}},s={},p=[{value:"Default System",id:"default-system",level:2},{value:"Nesting",id:"nesting",level:3},{value:"Feature Flags",id:"feature-flags",level:3},{value:"Prefab Environments",id:"prefab-environments",level:2},{value:"Deleting Values",id:"deleting-values",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=u("Tabs"),c=u("TabItem"),f={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"default-system"},"Default System"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We're replacing the default system with a new pattern that we believe is a much simpler,\nwhile providing even more flexibility, power and resiliency."),(0,o.kt)("p",{parentName:"admonition"},"The core use case of defaults was to provide settings for offline development in testing and CI.\nThis is better solved with our ",(0,o.kt)("a",{parentName:"p",href:"./testing"},"datafiles"),"."),(0,o.kt)("p",{parentName:"admonition"},"If you believe you need this old system, please reach out to us to discuss.")),(0,o.kt)("p",null,"Prefab has a powerful system of environment defaults that allows you to get started quickly. Let's look."),(0,o.kt)("p",null,"The first file is ",(0,o.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml"),". Prefab will always look for and load a file with this name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prefab.default.config.yaml\nlog-level:\n  _: info\n  myapp.controllers:\n    _: debug\n    chatty_controller: warn\n  google.apis.core.http_command: info\n\napi-usage: { "feature_flag": "true", value: true }\n\nredis.url: "redis://localhost:6379"\n\ngoogle:\n  gcp:\n    _: my-staging-project # share the staging project in development\n    big-query:\n      dataset-name: development-dataset # but use a development dataset\n')),(0,o.kt)("p",null,"There are a number of things to note in this example."),(0,o.kt)("h3",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"In order to reduce redundant keys, Prefab default files support nesting. In the example above you would access the GCP\ndataset name with the key ",(0,o.kt)("inlineCode",{parentName:"p"},"google.gcp.big-query.dataset-name"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," key is special and lets us specify a value with a key that has nested attributes. The GCP project ",(0,o.kt)("inlineCode",{parentName:"p"},"my-staging-project"),"\nin this example is accessible by the key ",(0,o.kt)("inlineCode",{parentName:"p"},"google.gcp"),"."),(0,o.kt)("h3",{id:"feature-flags"},"Feature Flags"),(0,o.kt)("p",null,"A handy shorthand for feature flags is available to set a default value."),(0,o.kt)("h2",{id:"prefab-environments"},"Prefab Environments"),(0,o.kt)("p",null,"You can optionally add a list of environments to load additional default files. Let's see how to load the files ",(0,o.kt)("inlineCode",{parentName:"p"},".prefab.staging.config.yaml"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},".prefab.cloud.config.yaml")," in that order."),(0,o.kt)(d,{groupId:"lang",mdxType:"Tabs"},(0,o.kt)(c,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'options = Prefab::Options.new(prefab_envs: Rails.env)\noptions = Prefab::Options.new(prefab_envs: ["staging", "cloud"])\n'))),(0,o.kt)(c,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Options options = new Options()\n  .setPrefabEnvs(List.of("staging", "cloud"))\n'))),(0,o.kt)(c,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"PREFAB_ENVS=staging,cloud myapp\n")))),(0,o.kt)("p",null,"To continue our example from above. Let's look at how we might continue the logging and google configuration."),(0,o.kt)("p",null,"In staging, we no longer want the debug level of logging on our controllers. Let's turn that off.\nWe do want to change the big query dataset as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prefab.staging.config.yaml\nlog-level:\n  myapp.controllers:\n    _: info # we will inherit levels from the default file unless overridden\n\nredis.url: "redis://1.2.3.4:6379"\n\ngoogle:\n  gcp:\n    big-query:\n      dataset-name: staging-dataset\n')),(0,o.kt)("p",null,"In production, let's change all logging to warn and set both the google configurations to production values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prefab.production.config.yaml\nlog-level:\n  _: warn\n  myapp.controllers:\n    _: warn\n\nredis.url: "redis://7.8.9.10:6379"\n\ngoogle:\n  gcp:\n    _: my-production-project # use the production project\n    big-query:\n      dataset-name: production-dataset\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It's fine to use Prefab for configuration even if you don't think it will ever change.\nHaving it in Prefab means that you always retain the ability to update it on the fly.")),(0,o.kt)("h2",{id:"deleting-values"},"Deleting Values"),(0,o.kt)("p",null,"The Prefab clients will sometimes return nil even in the default mode. This situation occurs if you have deleted the keys in the Prefab UI.\nA deleted key value is sent down to the clients as a tombstone and this tombstone takes precedence over default values as indicated in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/explanations/architecture/bootstrapping"},"config load order")," doc."))}m.isMDXComponent=!0}}]);