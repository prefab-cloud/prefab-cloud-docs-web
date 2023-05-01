"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),f=l,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(3117),l=n(7294),r=n(6010),i=n(2466),o=n(6775),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,o]=(0,l.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const l=null!=(t=a.find((e=>e.default)))?t:a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[s,u]=g({queryString:n,groupId:a}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=null!=s?s:p;return f({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);o(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var b=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},f=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const t=c.indexOf(e.currentTarget)+1;n=null!=(a=c[t])?a:c[0];break}case"ArrowLeft":{var l;const t=c.indexOf(e.currentTarget)-1;n=null!=(l=c[t])?l:c[c.length-1];break}}null==(t=n)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},i,{className:(0,r.Z)("tabs__item",h.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=m(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},l.createElement(k,(0,a.Z)({},e,t)),l.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return l.createElement(y,(0,a.Z)({key:String(t)},e))}},5761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(3117),l=(n(7294),n(3905));n(4866),n(5162);const r={title:"Elixir",sidebar_position:1},i=void 0,o={unversionedId:"elixir-sdk/elixir",id:"elixir-sdk/elixir",title:"Elixir",description:"Getting Started with the Elixir SDK",source:"@site/docs/elixir-sdk/elixir.md",sourceDirName:"elixir-sdk",slug:"/elixir-sdk/elixir",permalink:"/docs/elixir-sdk/elixir",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/elixir-sdk/elixir.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Elixir",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Elixir SDK",permalink:"/docs/category/elixir-sdk"},next:{title:"Python SDK",permalink:"/docs/category/python-sdk"}},s={},u=[{value:"Getting Started with the Elixir SDK",id:"getting-started-with-the-elixir-sdk",level:2},{value:"Configure Options",id:"configure-options",level:2},{value:"Available options",id:"available-options",level:3},{value:"Initialize Client",id:"initialize-client",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Defaults",id:"defaults",level:3},{value:"Getting Started",id:"getting-started",level:3},{value:"Feature Flags",id:"feature-flags",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Logging",id:"logging",level:2},{value:"Targeted Log Levels",id:"targeted-log-levels",level:3},{value:"Log levels",id:"log-levels",level:3},{value:"Local Overrides",id:"local-overrides",level:2},{value:"Emergencies",id:"emergencies",level:2},{value:"Using Prefab For Rollouts",id:"using-prefab-for-rollouts",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Testing",id:"testing",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"getting-started-with-the-elixir-sdk"},"Getting Started with the Elixir SDK"),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"prefab")," to your mix dependencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'# mix.exs\ndefp deps do\n  [\n    ...\n    {:prefab, "~> 0.1.0"},\n    ...\n  ]\nend\n')),(0,l.kt)("h2",{id:"configure-options"},"Configure Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'options = Prefab.Options.new(\n  api_key: "SDK-your-api-key",\n  prefab_api_url: "https://api.prefab.cloud",\n  prefab_grpc_url: "grpc.prefab.cloud:443"\n)\n')),(0,l.kt)("p",null,"To avoid passing your API key in directly in code, we recommend setting up your\n",(0,l.kt)("inlineCode",{parentName:"p"},"config/*.exs")," files to read that value from ENV"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'# config/*.exs\nconfig :prefab,\n  api_key: System.get_env("PREFAB_API_KEY"),\n  api_url: System.get_env("PREFAB_API_URL", "https://api.staging-prefab.cloud"),\n  grpc_url: System.get_env("PREFAB_GRPC_URL", "grpc.staging-prefab.cloud:443")\n')),(0,l.kt)("h3",{id:"available-options"},"Available options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"api_key")," - your prefab.cloud SDK API key"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prefab_api_url")," - the API endpoint your API key has been created for (i.e. ",(0,l.kt)("inlineCode",{parentName:"li"},"https://api.prefab.cloud"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prefab_grpc_url")," - the gRPC endpoint (including port) you wish to connect to (i.e. ",(0,l.kt)("inlineCode",{parentName:"li"},"grpc.prefab.cloud:443"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"namespace")," - an optional namespace to define your client's scope when looking up config"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prefab_datasources")," - one of ",(0,l.kt)("inlineCode",{parentName:"li"},":all")," (default) or ",(0,l.kt)("inlineCode",{parentName:"li"},":local_only"),", determines whether to fetch data from remote\nsources or use only local data"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prefab_config_classpath_dir")," - the directory from which to load locally defined configuration. This data\nwill be overwritten by data pulled from remote sources"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prefab_config_override_dir")," - the directory from which to load local override data. Any data found will be\nloaded overtop of data pulled from remote sources"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prefab_envs")," - one or more environment names from which to load local configuration and overrides.\nSee ",(0,l.kt)("a",{parentName:"li",href:"#module-local-config-and-overrides"},"Local config and overrides")," below for additional information.")),(0,l.kt)("h2",{id:"initialize-client"},"Initialize Client"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"client = Prefab.Client.new(options)\n")),(0,l.kt)("p",null,"Unless your options are configured to run using only local data, the client will attempt to connect to\nthe various remote data sources and begin syncing data to a local store."),(0,l.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,l.kt)("h3",{id:"defaults"},"Defaults"),(0,l.kt)("p",null,"It is a best practice to specify a default value for all configuration. This\nreduces the likelihood of exceptions due to nil values."),(0,l.kt)("p",null,"Here we ask for the value of a config named max-jobs-per-second, and we specify\n",(0,l.kt)("inlineCode",{parentName:"p"},"10")," as a default value if no value is available."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Prefab.Client.get(client, "max-jobs-per-second", default: 10) # => 10\n')),(0,l.kt)("p",null,"If no default is provided, the return value will be ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Prefab.Client.get(client, "max-jobs-per-second") # => nil\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you would prefer your application raise an error if no value is found\nwhen no default is provided, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"get!")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'# raises a Prefab.Errors.MissingDefaultError\nPrefab.Client.get!(client, "max-jobs-per-second")\n'))),(0,l.kt)("p",null,"You can specify defaults for your application by creating a file\n",(0,l.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")),(0,l.kt)("p",null,"Add the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# .prefab.default.config.yaml\nlog-level.prefab: info\nmy-first-int-config: 30\nmy-first-feature-flag: false\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/defaults"},"Learn more about defaults"),"."),(0,l.kt)("h3",{id:"getting-started"},"Getting Started"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'config_key = "my-first-int-config"\nIO.puts("#{config_key}: #{Prefab.Client.get(client, config_key)}")\n\nff_key = "my-first-feature-flag"\nIO.puts("#{ff_key}: #{Prefab.Client.enabled?(client, ff_key)}")\n')),(0,l.kt)("p",null,"Should output the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"my-first-int-config: 30\nmy-first-feature-flag: false\n")),(0,l.kt)("p",null,"Now create a config named ",(0,l.kt)("inlineCode",{parentName:"p"},"my-first-int-config")," in the Prefab UI. Set a default\nvalue to 50 and sync your change to the API."),(0,l.kt)("p",null,"Add a feature flag named ",(0,l.kt)("inlineCode",{parentName:"p"},"my-first-feature-flag")," in the Prefab UI. Add boolean\nvariants of ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),". Set the inactive variant to false, make the flag\nactive and add a rule of type ",(0,l.kt)("inlineCode",{parentName:"p"},"ALWAYS_TRUE")," with the variant to serve as ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),".\nRemember to sync your change to the API."),(0,l.kt)("p",null,"Run the code above again and you should see:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"my-first-int-config is: 50\nmy-first-feature-flag is: true\n")),(0,l.kt)("p",null,"Congrats! You're ready to rock!"),(0,l.kt)("h2",{id:"feature-flags"},"Feature Flags"),(0,l.kt)("p",null,"Feature flags become more powerful when we give the flag evaluation ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/rules-and-segmentation"},"rules")," more information to work with."),(0,l.kt)("p",null,"We do this by providing a lookup key and identity attributes."),(0,l.kt)("p",null,"The lookup key serves two purposes. First, it will be the unique key that helps us\ntarget a specific user using ",(0,l.kt)("inlineCode",{parentName:"p"},"Lookup Key In")," when evaluating a flag."),(0,l.kt)("p",null,"Second, this key is used to make sure that percent rollout evaluations are\nconsistently applied."),(0,l.kt)("p",null,"Attributes come into play when using the ",(0,l.kt)("inlineCode",{parentName:"p"},"Property Is One Of")," and similar rule\ncriteria."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'lookup_key = "user-1234"\nidentity_attributes = [\n                        team_id: 432,\n                        user_id: 123,\n                        subscription_level: \'pro\',\n                        email: "alice@example.com"\n                      ]\nresult = Prefab.Client.enabled?(\n  client,\n  "my-first-feature-flag",\n  lookup_key: lookup_key,\n  attributes: identity_attributes\n)\n\nIO.puts("my-first-feature-flag is: #{result} for #{lookup_key}")\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"How you choose the ",(0,l.kt)("inlineCode",{parentName:"p"},"tracking_id")," for your user is up to you, but we have some suggestions and we would generally\ndiscourage\n",(0,l.kt)("inlineCode",{parentName:"p"},"user.id")," unless you are positive you don't have anonymous users. See the section on ",(0,l.kt)("a",{parentName:"p",href:"../how-tos/tracking-ids"},"Tracking IDs")," for our suggestion.")),(0,l.kt)("p",null,"Feature flags don't have to return just true or false. You can get other data types using ",(0,l.kt)("inlineCode",{parentName:"p"},"get"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Prefab.Client.get(client, "ff-with-string", default_string_value)\nPrefab.Client.get(client, "ff-with-int", default_int_value)\n')),(0,l.kt)("h2",{id:"namespaces"},"Namespaces"),(0,l.kt)("p",null,"Namespaces allow you to share config between many applications while still allowing you to override when necessary."),(0,l.kt)("p",null,"For instance, let's assume that all our code shares an HTTP library. We can configure the HTTP library to get its retry\ncount & timeout duration from our config store. We'll set ",(0,l.kt)("inlineCode",{parentName:"p"},"http.connection.retries")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"http.connection.timeout")," in the\ndefault namespace."),(0,l.kt)("p",null,"All of our apps should initialize their config store in a namespace. For instance our User service can initialize\nwith:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'options = Prefab.Options.new(\n  namespace: "services.user_service.web"\n)\n')),(0,l.kt)("p",null,'Prefab config will find the "closest" matching config when the UserService goes to look for a value of\nhttp.connection.timeout.'),(0,l.kt)("p",null,"If our service namespace is ",(0,l.kt)("inlineCode",{parentName:"p"},"services.user-service.web")," it will match overrides in namespaces ",(0,l.kt)("inlineCode",{parentName:"p"},"services"),"\n, ",(0,l.kt)("inlineCode",{parentName:"p"},"services.user_service"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"services.user_service.web"),", but not ",(0,l.kt)("inlineCode",{parentName:"p"},"services.user_service.cron")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"services.user_service.web.tools"),"."),(0,l.kt)("p",null,"Let's imagine that the ",(0,l.kt)("inlineCode",{parentName:"p"},"UserService")," starts to go down because too many requests are timing out to a 3rd party service. We\ncan quickly reduce the ",(0,l.kt)("inlineCode",{parentName:"p"},"http.connection.timeout")," for our ",(0,l.kt)("inlineCode",{parentName:"p"},"services.user_service")," namespace and solve the issue without\npushing code or restarting."),(0,l.kt)("h2",{id:"logging"},"Logging"),(0,l.kt)("p",null,"Prefab's Elixir Client comes with a powerful upgrade to the default Elixir ",(0,l.kt)("inlineCode",{parentName:"p"},"Logger")," to provide dynamic log levels."),(0,l.kt)("p",null,"To use it, use the logging functions included in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Prefab.Client")," public API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"Prefab.Client.debug(client, message)\nPrefab.Client.info(client, message)\nPrefab.Client.warning(client, message)\nPrefab.Client.error(client, message)\nPrefab.Client.critical(client, message)\n")),(0,l.kt)("p",null,"You can now control logging at any level of your stack. For convenience, we'll set these as local defaults in ",(0,l.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")," (",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/defaults"},"learn more"),") but you can set and tweak these on-the-fly in the Prefab web app."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# .prefab.default.config.yaml\nlog-level.app_web.controllers.my_controller: info\nlog-level.app_web.controllers.my_controller.index: warning\nlog-level.app_web.controllers.my_controller.show: debug\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'defmodule AppWeb.MyController do\n  ...\n  def index(conn) do\n    Prefab.Client.warning(conn.prefab_client, "shown")\n    Prefab.Client.info(conn.prefab_client, "disabled")\n    Prefab.Client.debug(conn.prefab_client, "disabled")\n  end\n\n  def show(conn, _) do\n    Prefab.Client.warning(conn.prefab_client, "shown")\n    Prefab.Client.info(conn.prefab_client, "shown")\n    Prefab.Client.debug(conn.prefab_client, "shown")\n  end\n\n  def edit(conn, _) do\n    Prefab.Client.warning(conn.prefab_client, "shown")\n    Prefab.Client.info(conn.prefab_client, "shown")\n    Prefab.Client.debug(conn.prefab_client, "disabled")\n  end\nend\n')),(0,l.kt)("h3",{id:"targeted-log-levels"},"Targeted Log Levels"),(0,l.kt)("p",null,"You can use ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/targeted-log-levels"},"Targeting")," to change your log levels based on the current user/request/device context using our ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/rules-and-segmentation"},"rules")," engine."),(0,l.kt)("h3",{id:"log-levels"},"Log levels"),(0,l.kt)("p",null,"To be as language agnostic as possible, ",(0,l.kt)("inlineCode",{parentName:"p"},"Prefab")," provides a standardized\nsubset of log levels that can be mapped to language-specific log levels.\nThe language-agnostic levels are the levels that should be set in the Prefab\nUI or in your local overrides. The list below shows the mappings from Prefab\nlog levels to Elixir log levels"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"Prefab => Elixir\n--------------------\ndebug  => :debug\ninfo   => :info\nwarn   => :warning\nerror  => :error\nfatal  => :critical\n")),(0,l.kt)("h2",{id:"local-overrides"},"Local Overrides"),(0,l.kt)("p",null,"It can be very useful to modify your defaults locally without changing the defaults file or values in the API. To do\nthis, add a file in your home directory or classpath called ",(0,l.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prefab.default.config.yaml\nmycorp.auth.api.url: "auth.staging.mycorp.com"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'#~/.prefab.default.config.yaml\nmycorp.auth.api.url: "localhost:9090"\n')),(0,l.kt)("p",null,"Prefab will first load the defaults, then merge the remote API values over the top, and finally it will apply the overrides file on\ntop of those values."),(0,l.kt)("h2",{id:"emergencies"},"Emergencies"),(0,l.kt)("p",null,"Prefab is designed to be extremely ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/resiliency"},"resilient"),". The client will try to pull live values from:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"A Fastly CDN backed by the API"),(0,l.kt)("li",{parentName:"ol"},"A Cloudflare CDN backed by an S3 bucket"),(0,l.kt)("li",{parentName:"ol"},"The Prefab API"),(0,l.kt)("li",{parentName:"ol"},"Prefab Streaming APIs")),(0,l.kt)("p",null,"This strategy ensures the utmost reliability for your clients being able to pull live values, even in the case of a\nmajor outage of the Prefab APIs."),(0,l.kt)("p",null,"But wait, there's more."),(0,l.kt)("p",null,"In the terrible occurrence that the Prefab APIs are down for an extended period of time, your services should be able to\nbootstrap themselves and load from the CDN, but you would be unable to modify configuration."),(0,l.kt)("p",null,"In the event that one or all of these services become unavailable, the Elixir SDK stores a local copy of all data pulled\nfrom the remote endpoints, so it can continue to serve the last available live data, but would not be able to fetch or\npush new data until the APIs are restored."),(0,l.kt)("h2",{id:"using-prefab-for-rollouts"},"Using Prefab For Rollouts"),(0,l.kt)("p",null,"So you've built a new pipeline and are hoping to slowly dial up how much traffic uses it. You've got two great ways to\ndo that with Prefab."),(0,l.kt)("p",null,"One approach is to simply use dynamic config. We can use a floating point number to specify the percent of traffic we\nwant to rollout to and then evaluate that against a random number to determine whether to run the new code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'if :rand.uniform() < @config.get_float("percent-to-rollout") do\n  do_new_pipeline\nend\n')),(0,l.kt)("p",null,"This approach works fine, but each evaluation of ",(0,l.kt)("inlineCode",{parentName:"p"},":rand.uniform()")," will get you a different result. Sometimes this is what you\nwant, but if you'd like the rollout to keep server, requests, users in the new pipeline you may want to use a feature\nflag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},'Prefab.Client.enabled?(client, "new-feature", lookup_key: any_consistent_id)\n')),(0,l.kt)("h2",{id:"debugging"},"Debugging"),(0,l.kt)("p",null,"You can control the Prefab client's log level by changing the configuration value of ",(0,l.kt)("inlineCode",{parentName:"p"},"log-level.prefab"),". In the rare\ncase that you are trying to debug issues that occur before this config file has been read, set env var"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"PREFAB_LOG_CLIENT_BOOTSTRAP_LOG_LEVEL = debug\n")),(0,l.kt)("p",null,"By default this level is set to ",(0,l.kt)("inlineCode",{parentName:"p"},":warning")),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("p",null,"Specify ",(0,l.kt)("inlineCode",{parentName:"p"},"LOCAL_ONLY")," and use your ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/bootstrapping"},"config.yaml file"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-elixir"},"options = Prefab.Options.new(data_sources: :local_only)\n\nclient = Prefab.Client.new(options)\n")))}d.isMDXComponent=!0}}]);