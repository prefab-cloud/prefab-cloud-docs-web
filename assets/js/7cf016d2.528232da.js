"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),f=o,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||l;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const l={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l.tabItem,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(3117),o=n(7294),l=n(6010),r=n(2466),i=n(6775),s=n(1980),u=n(7392),p=n(12);function c(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=null!=t?t:c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[r,i]=(0,o.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const o=null!=(t=a.find((e=>e.default)))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:l}))),[s,u]=m({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=null!=s?s:c;return f({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var h=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(c(t),s(a))},f=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const t=p.indexOf(e.currentTarget)+1;n=null!=(a=p[t])?a:p[0];break}case"ArrowLeft":{var o;const t=p.indexOf(e.currentTarget)-1;n=null!=(o=p[t])?o:p[p.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:d},r,{className:(0,l.Z)("tabs__item",k.tabItem,null==r?void 0:r.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},o.createElement(y,(0,a.Z)({},e,t)),o.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},8372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(3117),o=(n(7294),n(3905));n(4866),n(5162);const l={title:"Python",sidebar_position:1},r=void 0,i={unversionedId:"python-sdk/python",id:"python-sdk/python",title:"Python",description:"Getting Started with the Python SDK",source:"@site/docs/python-sdk/python.md",sourceDirName:"python-sdk",slug:"/python-sdk/python",permalink:"/docs/python-sdk/python",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/python-sdk/python.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Python",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Python SDK",permalink:"/docs/category/python-sdk"},next:{title:"JavaScript Client",permalink:"/docs/javascript"}},s={},u=[{value:"Getting Started with the Python SDK",id:"getting-started-with-the-python-sdk",level:2},{value:"Configure Options",id:"configure-options",level:2},{value:"Available <code>Option</code> parameters",id:"available-option-parameters",level:3},{value:"Start the Client",id:"start-the-client",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Defaults",id:"defaults",level:3},{value:"Getting Started",id:"getting-started",level:3},{value:"Feature Flags",id:"feature-flags",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Logging",id:"logging",level:2},{value:"Targeted Log Levels",id:"targeted-log-levels",level:3},{value:"Log levels",id:"log-levels",level:3},{value:"Local Overrides",id:"local-overrides",level:2},{value:"Emergencies",id:"emergencies",level:2},{value:"Using Prefab For Rollouts",id:"using-prefab-for-rollouts",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Testing",id:"testing",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"getting-started-with-the-python-sdk"},"Getting Started with the Python SDK"),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"prefab_cloud_python")," to your package dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# pyproject.toml\n\n...\n\n[tool.poetry.dependencies]\nprefab_cloud_python = "0.1.0"\n')),(0,o.kt)("h2",{id:"configure-options"},"Configure Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from prefab_cloud_python import Options\n\noptions = Options(\n    api_key="SDK-your-api-key",\n    prefab_api_url="https://api.prefab.cloud",\n    prefab_grpc_url="grpc.prefab.cloud:443"\n)\n')),(0,o.kt)("p",null,"To avoid passing your API key directly in code, we recommend setting it in your\nenvironment as ",(0,o.kt)("inlineCode",{parentName:"p"},"PREFAB_API_KEY"),". Once you've done this you do not need to pass\na value for that key to ",(0,o.kt)("inlineCode",{parentName:"p"},"Options(...)"),", as it will look in your ENV for a value\nfor that key."),(0,o.kt)("h3",{id:"available-option-parameters"},"Available ",(0,o.kt)("inlineCode",{parentName:"h3"},"Option")," parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api_key")," - your prefab.cloud SDK API key"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prefab_api_url")," - the API endpoint your API key has been created for (i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"https://api.prefab.cloud"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prefab_grpc_url")," - the gRPC endpoint (including port) you wish to connect to (i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"grpc.prefab.cloud:443"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"namespace")," - an optional namespace to define your client's scope when looking up config"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prefab_datasources")," - one of ",(0,o.kt)("inlineCode",{parentName:"li"},'"ALL"')," (default) or ",(0,o.kt)("inlineCode",{parentName:"li"},'"LOCAL_ONLY"'),", determines whether to fetch data from remote\nsources or use only local data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prefab_config_classpath_dir")," - the directory from which to load locally defined configuration. This data\nwill be overwritten by data pulled from remote sources. This value defaults to the root of your project (i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},'"."'),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prefab_config_override_dir")," - the directory from which to load local override data. Any data found will be\nloaded overtop of data pulled from remote sources. This value defaults to your ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME")," directory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prefab_envs")," - one or more environment names from which to load local configuration and overrides.\nSee ",(0,o.kt)("a",{parentName:"li",href:"#module-local-config-and-overrides"},"Local config and overrides")," below for additional information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"on_no_default")," - one of ",(0,o.kt)("inlineCode",{parentName:"li"},'"RAISE"')," (default) or ",(0,o.kt)("inlineCode",{parentName:"li"},'"RETURN_NONE"'),". This determines how the client behaves when a request for\na config cannot find a value, and no default is supplied. These settings will, respectively, raise a ",(0,o.kt)("inlineCode",{parentName:"li"},"MissingDefaultException"),",\nor return ",(0,o.kt)("inlineCode",{parentName:"li"},"None"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"on_connection_failure")," - one of ",(0,o.kt)("inlineCode",{parentName:"li"},'"RETURN"')," (default) or ",(0,o.kt)("inlineCode",{parentName:"li"},'"RAISE"'),". This determines what should happen if the connection to\na remote datasource times out. These settings will, respectively, return whatever is in the local cache from the latest sync\nfrom the remote source, or else raise an ",(0,o.kt)("inlineCode",{parentName:"li"},"InitializationTimeoutException"),".")),(0,o.kt)("h2",{id:"start-the-client"},"Start the Client"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from prefab_cloud_python import Client, Options\n\noptions = Options(...)\nclient = Client(options)\n")),(0,o.kt)("p",null,"Unless your options are configured to run using only local data, the client will attempt to connect to\nthe remote CDN and gRPC data sources and begin syncing data to a local store."),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("h3",{id:"defaults"},"Defaults"),(0,o.kt)("p",null,"It is a best practice to specify a default value for all configuration. This\nreduces the likelihood of exceptions due to ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," values."),(0,o.kt)("p",null,"Here we ask for the value of a config named ",(0,o.kt)("inlineCode",{parentName:"p"},"max-jobs-per-second"),", and we specify\n",(0,o.kt)("inlineCode",{parentName:"p"},"10")," as a default value if no value is available."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'client.get("max-jobs-per-second", default=10) # => 10\n')),(0,o.kt)("p",null,"If no default is provided, the default behavior is to raise a ",(0,o.kt)("inlineCode",{parentName:"p"},"MissingDefaultException"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# raises a `MissingDefaultException`\nclient.get("max-jobs-per-second")\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you would prefer your application return ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," instead of raising an error,\nyou can set ",(0,o.kt)("inlineCode",{parentName:"p"},'on_no_default="RETURN_NONE"')," when creating your Options object."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},'options = Options(\n    ...\n    on_no_default="RETURN_NONE"\n)\nclient = Client(options)\nclient.get("max-jobs-per-second") # => None\n'))),(0,o.kt)("p",null,"You can specify defaults for your application by creating a file\n",(0,o.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")),(0,o.kt)("p",null,"Add the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# .prefab.default.config.yaml\nlog-level.prefab: info\nmy-first-int-config: 30\nmy-first-feature-flag: false\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/explanations/defaults"},"Learn more about defaults"),"."),(0,o.kt)("h3",{id:"getting-started"},"Getting Started"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'config_key = "my-first-int-config"\nprint(config_key, client.get(config_key))\n\nff_key = "my-first-feature-flag"\nprint(config_key, client.enabled(ff_key))\n')),(0,o.kt)("p",null,"Should output the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"my-first-int-config 30\nmy-first-feature-flag false\n")),(0,o.kt)("p",null,"Now create a config named ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-int-config")," in the Prefab UI. Set a default\nvalue to 50 and sync your change to the API."),(0,o.kt)("p",null,"Add a feature flag named ",(0,o.kt)("inlineCode",{parentName:"p"},"my-first-feature-flag")," in the Prefab UI. Add boolean\nvariants of ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". Set the inactive variant to false, make the flag\nactive and add a rule of type ",(0,o.kt)("inlineCode",{parentName:"p"},"ALWAYS_TRUE")," with the variant to serve as ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),".\nRemember to sync your change to the API."),(0,o.kt)("p",null,"Run the code above again and you should see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"my-first-int-config 50\nmy-first-feature-flag true\n")),(0,o.kt)("p",null,"Congrats! You're ready to rock!"),(0,o.kt)("h2",{id:"feature-flags"},"Feature Flags"),(0,o.kt)("p",null,"Feature flags become more powerful when we give the flag evaluation ",(0,o.kt)("a",{parentName:"p",href:"/docs/explanations/rules-and-segmentation"},"rules")," more\ninformation to work with."),(0,o.kt)("p",null,"We do this by providing a lookup key and identity attributes."),(0,o.kt)("p",null,"The lookup key serves two purposes. First, it will be the unique key that helps us\ntarget a specific user using ",(0,o.kt)("inlineCode",{parentName:"p"},"Lookup Key In")," when evaluating a flag."),(0,o.kt)("p",null,"Second, this key is used to make sure that percent rollout evaluations are\nconsistently applied."),(0,o.kt)("p",null,"Attributes come into play when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Property Is One Of")," and similar rule\ncriteria."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'lookup_key = "user-1234"\nidentity_attributes = {\n    "team_id": 432,\n    "user_id": 123,\n    "subscription_level": \'pro\',\n    "email": "alice@example.com"\n}\n\nresult = client.enabled("my-first-feature-flag", lookup_key=lookup_key, attributes=identity_attributes)\nprint("my-first-feature-flag is", result, "for", lookup_key)\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"How you choose the ",(0,o.kt)("inlineCode",{parentName:"p"},"tracking_id")," for your user is up to you, but we have some suggestions and we would generally\ndiscourage\n",(0,o.kt)("inlineCode",{parentName:"p"},"user.id")," unless you are positive you don't have anonymous users. See the section on ",(0,o.kt)("a",{parentName:"p",href:"../how-tos/tracking-ids"},"Tracking IDs")," for our suggestion.")),(0,o.kt)("p",null,"Feature flags don't have to return just true or false. You can get other data types using ",(0,o.kt)("inlineCode",{parentName:"p"},"get"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'client.get("ff-with-string", default="default-string")\nclient.get("ff-with-int", default=5)\n')),(0,o.kt)("h2",{id:"namespaces"},"Namespaces"),(0,o.kt)("p",null,"Namespaces allow you to share config between many applications while still allowing you to override when necessary."),(0,o.kt)("p",null,"For instance, let's assume that all our code shares an HTTP library. We can configure the HTTP library to get its retry\ncount & timeout duration from our config store. We'll set ",(0,o.kt)("inlineCode",{parentName:"p"},"http.connection.retries")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"http.connection.timeout")," in the\ndefault namespace."),(0,o.kt)("p",null,"All of our apps should initialize their config store in a namespace. For instance our User service can initialize\nwith:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'options = Options(\n  namespace="services.user_service.web"\n)\n')),(0,o.kt)("p",null,'Prefab config will find the "closest" matching config when the UserService goes to look for a value of\nhttp.connection.timeout.'),(0,o.kt)("p",null,"If our service namespace is ",(0,o.kt)("inlineCode",{parentName:"p"},"services.user-service.web")," it will match overrides in namespaces ",(0,o.kt)("inlineCode",{parentName:"p"},"services"),"\n, ",(0,o.kt)("inlineCode",{parentName:"p"},"services.user_service"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"services.user_service.web"),", but not ",(0,o.kt)("inlineCode",{parentName:"p"},"services.user_service.cron")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"services.user_service.web.tools"),"."),(0,o.kt)("p",null,"Let's imagine that the ",(0,o.kt)("inlineCode",{parentName:"p"},"UserService")," starts to go down because too many requests are timing out to a 3rd party service. We\ncan quickly reduce the ",(0,o.kt)("inlineCode",{parentName:"p"},"http.connection.timeout")," for our ",(0,o.kt)("inlineCode",{parentName:"p"},"services.user_service")," namespace and solve the issue without\npushing code or restarting."),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("p",null,"Prefab's Python Client comes with a powerful upgrade to the default Python ",(0,o.kt)("inlineCode",{parentName:"p"},"logging")," by building on top of ",(0,o.kt)("a",{parentName:"p",href:"https://www.structlog.org/en/stable/"},(0,o.kt)("inlineCode",{parentName:"a"},"structlog"))," to provide dynamic log levels."),(0,o.kt)("p",null,"To use it, use the logging functions included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Client")," public API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"client.logger().debug(message)\nclient.logger().info(message)\nclient.logger().warn(message)\nclient.logger().error(message)\nclient.logger().critical(message)\n")),(0,o.kt)("p",null,"You can now control logging at any level of your stack. For convenience, we'll set these as local defaults in ",(0,o.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/explanations/defaults"},"learn more"),") but you can set and tweak these on-the-fly in the Prefab web app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# .prefab.default.config.yaml\nlog-level.my_app.my_class: info\nlog-level.my_app.my_class.warn: warn\nlog-level.my_app.my_class.debug: debug\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# my_app/my_class.py\nclass MyClass:\n    def warn(self, client):\n        client.logger().warn("shown")\n        client.logger().info("never logs")\n        client.logger().debug("never logs")\n\n    def debug(self, client):\n        client.logger().warn("shown")\n        client.logger().info("shown")\n        client.logger().debug("shown")\n\n    def default(self, client):\n        client.logger().warn("shown")\n        client.logger().info("shown")\n        client.logger().debug("never logs")\n')),(0,o.kt)("h3",{id:"targeted-log-levels"},"Targeted Log Levels"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"../explanations/targeted-log-levels"},"Targeting")," to change your log levels based on the current user/request/device ",(0,o.kt)("a",{parentName:"p",href:"../explanations/context"},"context")," using our ",(0,o.kt)("a",{parentName:"p",href:"/docs/explanations/rules-and-segmentation"},"rules")," engine."),(0,o.kt)("h3",{id:"log-levels"},"Log levels"),(0,o.kt)("p",null,"To be as language agnostic as possible, ",(0,o.kt)("inlineCode",{parentName:"p"},"Prefab")," provides a standardized\nsubset of log levels that can be mapped to language-specific log levels.\nThe language-agnostic levels are the levels that should be set in the Prefab\nUI or in your local overrides. The list below shows the mappings from Prefab\nlog levels to Elixir log levels"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"Prefab => Python\n--------------------\ndebug  => :debug\ninfo   => :info\nwarn   => :warn\nerror  => :error\nfatal  => :critical\n")),(0,o.kt)("h2",{id:"local-overrides"},"Local Overrides"),(0,o.kt)("p",null,"It can be very useful to modify your defaults locally without changing the defaults file or values in the API. To do\nthis, add a file in your home directory or classpath called ",(0,o.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prefab.default.config.yaml\nmycorp.auth.api.url: "auth.staging.mycorp.com"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'#~/.prefab.default.config.yaml\nmycorp.auth.api.url: "localhost:9090"\n')),(0,o.kt)("p",null,"Prefab will first load the defaults, then merge the remote API values over the top, and finally it will apply the overrides file on\ntop of those values."),(0,o.kt)("h2",{id:"emergencies"},"Emergencies"),(0,o.kt)("p",null,"Prefab is designed to be extremely resilient. The client will try to pull live values from:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A Fastly CDN backed by the API"),(0,o.kt)("li",{parentName:"ol"},"A Cloudflare CDN backed by an S3 bucket"),(0,o.kt)("li",{parentName:"ol"},"The Prefab API"),(0,o.kt)("li",{parentName:"ol"},"Prefab Streaming APIs")),(0,o.kt)("p",null,"This strategy ensures the utmost reliability for your clients being able to pull live values, even in the case of a\nmajor outage of the Prefab APIs."),(0,o.kt)("p",null,"But wait, there's more."),(0,o.kt)("p",null,"In the terrible occurrence that the Prefab APIs are down for an extended period of time, your services should be able to\nbootstrap themselves and load from the CDN, but you would be unable to modify configuration."),(0,o.kt)("p",null,"In the event that one or all of these services become unavailable, the Python SDK stores a local copy of all data pulled\nfrom the remote endpoints, so it can continue to serve the last available live data, but would not be able to fetch or\npush new data until the APIs are restored."),(0,o.kt)("h2",{id:"using-prefab-for-rollouts"},"Using Prefab For Rollouts"),(0,o.kt)("p",null,"So you've built a new pipeline and are hoping to slowly dial up how much traffic uses it. You've got two great ways to\ndo that with Prefab."),(0,o.kt)("p",null,"One approach is to simply use dynamic config. We can use a floating point number to specify the percent of traffic we\nwant to rollout to and then evaluate that against a random number to determine whether to run the new code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import random\n\nif random.random() < client.get("percent-to-rollout"):\n    do_new_pipeline\nelse:\n    run_old_pipeline\n')),(0,o.kt)("p",null,"This approach works fine, but each evaluation of ",(0,o.kt)("inlineCode",{parentName:"p"},"random.random()")," will get you a different result. Sometimes this is what you\nwant, but if you'd like the rollout to keep server, requests, users in the new pipeline you may want to use a feature\nflag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'client.enabled("new-feature", lookup_key=any_consistent_id)\n')),(0,o.kt)("h2",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"You can control the Prefab client's log level by changing the configuration value of ",(0,o.kt)("inlineCode",{parentName:"p"},"log-level.prefab"),". In the rare\ncase that you are trying to debug issues that occur before this config file has been read, set env var"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"PREFAB_LOG_CLIENT_BOOTSTRAP_LOG_LEVEL = debug\n")),(0,o.kt)("p",null,"By default this level is set to ",(0,o.kt)("inlineCode",{parentName:"p"},":warn")),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Specify ",(0,o.kt)("inlineCode",{parentName:"p"},"LOCAL_ONLY")," and use your ",(0,o.kt)("a",{parentName:"p",href:"/docs/explanations/bootstrapping"},"config.yaml file"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'options = Options(data_sources="LOCAL_ONLY")\nclient = Client(options)\n')))}d.isMDXComponent=!0}}]);