"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Testing",sidebar_label:"Testing",sidebar_position:5},o=void 0,s={unversionedId:"explanations/concepts/testing",id:"explanations/concepts/testing",title:"Testing",description:"Testing",source:"@site/docs/explanations/concepts/testing.md",sourceDirName:"explanations/concepts",slug:"/explanations/concepts/testing",permalink:"/docs/explanations/concepts/testing",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/explanations/concepts/testing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Testing",sidebar_label:"Testing",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Namespaces",permalink:"/docs/explanations/concepts/namespaces"},next:{title:"Default Files",permalink:"/docs/explanations/concepts/defaults"}},l={},p=[{value:"Testing",id:"testing",level:2},{value:"Server-side SDKs",id:"server-side-sdks",level:3},{value:"Client-side Libraries",id:"client-side-libraries",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("Tabs"),u=c("TabItem"),f={toc:p},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Our SDKs and Clients have library and language-specific testing advice. We recommend you checkout the docs for the SDK or client you're using."),(0,r.kt)("p",null,"To keep your tests speedy and consistent, we recommend avoiding connections to our server and to instead prefer relying on local data for test setup.\nSpecifying your Prefab env as 'test' and putting data in ",(0,r.kt)("inlineCode",{parentName:"p"},".prefab.test.config.yaml")," is covered in ",(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/defaults"},"Default Files"),"."),(0,r.kt)("h3",{id:"server-side-sdks"},"Server-side SDKs"),(0,r.kt)("p",null,"Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"LOCAL_ONLY")," and use your ",(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/architecture/bootstrapping"},"config.yaml file"),"."),(0,r.kt)(d,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(u,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"options = Prefab::Options.new(data_sources: LOCAL_ONLY)\n\nPrefab.init(options)\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sdks/ruby#testing"},"Read the full Ruby testing docs."))),(0,r.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Options options = new Options()\n  .setPrefabDatasource(Options.Datasources.LOCAL_ONLY)\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sdks/java#testing"},"Read the full Java testing docs."))),(0,r.kt)(u,{value:"elixir",label:"Elixir",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},"options = Prefab.Options.new(prefab_datasources: :local_only)\n\nclient = Prefab.Client.new(options)\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sdks/elixir#testing"},"Read the full Elixir testing docs.")))),(0,r.kt)("h3",{id:"client-side-libraries"},"Client-side Libraries"),(0,r.kt)("p",null,"Rather than talking to the server, use ",(0,r.kt)("inlineCode",{parentName:"p"},"setConfig")," or use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," manually with your test setup."),(0,r.kt)(d,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(u,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("p",null,"Don't call ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab.init"),". Instead, use ",(0,r.kt)("inlineCode",{parentName:"p"},"setConfig")," to set up your scenario."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"prefab.setConfig({\n  turbo: true,\n  defaultMediaCount: 3,\n});\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sdks/javascript#testing"},"Read the full JavaScript testing docs."))),(0,r.kt)(u,{value:"react",label:"React",mdxType:"TabItem"},(0,r.kt)("p",null,"Don't use the ",(0,r.kt)("inlineCode",{parentName:"p"},"PrefabProvider"),". Instead, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"PrefabTestProvider")," and pass in a config object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<PrefabTestProvider config={config}>\n  <MyComponent />\n</PrefabTestProvider>,\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sdks/react#testing"},"Read the full React testing docs.")))))}b.isMDXComponent=!0}}]);