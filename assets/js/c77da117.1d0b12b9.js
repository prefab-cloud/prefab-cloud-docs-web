"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),r=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:f,values:m,groupId:b,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,l.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===f?f:null!=(t=null!=f?f:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[_,C]=(0,r.useState)(v),P=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=b){const e=N[b];null!=e&&e!==_&&k.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=P.indexOf(t),a=k[n].value;a!==_&&(O(t),C(a),null!=b&&w(b,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=P.indexOf(e.currentTarget)+1;n=null!=(a=P[t])?a:P[0];break}case"ArrowLeft":{var r;const t=P.indexOf(e.currentTarget)-1;n=null!=(r=P[t])?r:P[P.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},g)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>P.push(e),onKeyDown:A,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function f(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},1077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),o=n(5162);const l={title:"Ruby",sidebar_position:1},s=void 0,u={unversionedId:"ruby-sdk/ruby",id:"ruby-sdk/ruby",title:"Ruby",description:"Getting Started With the Ruby SDK",source:"@site/docs/ruby-sdk/ruby.md",sourceDirName:"ruby-sdk",slug:"/ruby-sdk/ruby",permalink:"/docs/ruby-sdk/ruby",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/ruby-sdk/ruby.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Ruby",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ruby SDK",permalink:"/docs/category/ruby-sdk"},next:{title:"Dynamic Log Levels",permalink:"/docs/ruby-sdk/dynamic-log-levels"}},p={},c=[{value:"Getting Started With the Ruby SDK",id:"getting-started-with-the-ruby-sdk",level:2},{value:"Initialize Client",id:"initialize-client",level:2},{value:"Client Initialization Options",id:"client-initialization-options",level:3},{value:"Rails Applications",id:"rails-applications",level:3},{value:"Special Considerations with Forking servers like Puma &amp; Unicorn that use workers",id:"special-considerations-with-forking-servers-like-puma--unicorn-that-use-workers",level:4},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Defaults",id:"defaults",level:3},{value:"Getting Started",id:"getting-started",level:3},{value:"Feature Flags",id:"feature-flags",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Local Overrides",id:"local-overrides",level:2},{value:"Emergencies",id:"emergencies",level:2},{value:"Using Prefab For Rollouts",id:"using-prefab-for-rollouts",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Testing",id:"testing",level:2},{value:"Example Test",id:"example-test",level:3}],d={toc:c};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getting-started-with-the-ruby-sdk"},"Getting Started With the Ruby SDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," gem install prefab-cloud-ruby\n")),(0,r.kt)("h2",{id:"initialize-client"},"Initialize Client"),(0,r.kt)("p",null,"If you set ",(0,r.kt)("inlineCode",{parentName:"p"},"PREFAB_API_KEY")," as an environment variable, initializing the client is as easy as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"$prefab = Prefab::Client.new # reads PREFAB_API_KEY env var\n")),(0,r.kt)("h3",{id:"client-initialization-options"},"Client Initialization Options"),(0,r.kt)("p",null,"For more control, you can initialize your client with options. Here are the defaults with explanations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"options = Prefab::Options.new(\n  api_key: ENV['PREFAB_API_KEY'],\n  namespace: \"\",\n  logdev: $stdout,\n  # Optional. `log_prefix` can prefix your log lines. `app.controllers.my_controller.index` would be `com.yourapp.app.controllers.my_controller.index`\n  log_prefix: \"com.yourapp\",\n  log_formatter: Prefab::Options::DEFAULT_LOG_FORMATTER,\n  # one of\n  # - Prefab::Options::ON_NO_DEFAULT::RAISE -- raise an exception when no value or default is available\n  # - Prefab::Options::ON_NO_DEFAULT::RETURN_NIL -- return nil if no value or default is available\n  on_no_default: Prefab::Options::ON_NO_DEFAULT::RAISE,\n  # how long to wait before on_init_failure\n  initialization_timeout_sec: 10,\n  # one of\n  # - Prefab::Options::ON_INITIALIZATION_FAILURE::RAISE -- raise an error if no connection can be made\n  # - Prefab::Options::ON_INITIALIZATION_FAILURE::RETURN -- continue without error using failover config\n  on_init_failure: Prefab::Options::ON_INITIALIZATION_FAILURE::RAISE,\n  prefab_datasources: ENV['PREFAB_DATASOURCES'] == \"LOCAL_ONLY\" ? Prefab::Options::DATASOURCES::LOCAL_ONLY : Prefab::Options::DATASOURCES::ALL,\n  prefab_config_override_dir: Dir.home,\n  prefab_config_classpath_dir: \".\",\n  prefab_api_url: ENV[\"PREFAB_API_URL\"] || 'https://api.prefab.cloud',\n  prefab_grpc_url: ENV[\"PREFAB_GRPC_URL\"] || 'grpc.prefab.cloud:443',\n  # You can specify an array of one ore more items here OR set PREFAB_ENVS to\n  # be split on commas into an array\n  prefab_envs: ENV['PREFAB_ENVS'].nil? ? [] : ENV['PREFAB_ENVS'].split(','),\n)\n$prefab = Prefab::Client.new(options)\n")),(0,r.kt)("h3",{id:"rails-applications"},"Rails Applications"),(0,r.kt)("p",null,"Initializing Prefab in your ",(0,r.kt)("inlineCode",{parentName:"p"},"application.rb")," will allow you to reference dynamic configuration in your environment (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"staging.rb"),") and initializers. This is useful for setting environment-specific config like your redis connection URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"#application.rb\nmodule MyApplication\n  class Application < Rails::Application\n    #...\n\n    $prefab = Prefab::Client.new\n    $prefab.set_rails_loggers\n  end\nend\n")),(0,r.kt)("h4",{id:"special-considerations-with-forking-servers-like-puma--unicorn-that-use-workers"},"Special Considerations with Forking servers like Puma & Unicorn that use workers"),(0,r.kt)("p",null,"Many ruby web servers fork. In order to work properly we should have a Prefab Client running independently in each fork. You do not need to do this if you are only using threads and not workers.\nWe also need to set the reset the logger for ActionView and friends because those get set pre-fork."),(0,r.kt)(i.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"puma",label:"Puma",mdxType:"TabItem"},"If using workers in Puma, you can initialize inside an on_worker_boot hook in your puma.rb config file.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# puma.rb\non_worker_boot do\n  $prefab = Prefab::Client.new(options)\n  $prefab.set_rails_loggers\nend\n"))),(0,r.kt)(o.Z,{value:"unicorn",label:"Unicorn",mdxType:"TabItem"},"If using workers in Unicorn, you can initialize inside an after_fork hook in your unicorn.rb config file:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# unicorn.rb\nafter_fork do |server, worker|\n  $prefab = Prefab::Client.new(options)\n  $prefab.set_rails_loggers\nend\n")))),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("h3",{id:"defaults"},"Defaults"),(0,r.kt)("p",null,"It is a best practice to specify a default value for all configuration. This reduces the likelihood of exceptions due to\nnil values. Prefab encourages this practice by raising an error if you try to reference a value that is unset."),(0,r.kt)("p",null,"Here we ask for the value of a config named ",(0,r.kt)("inlineCode",{parentName:"p"},"max-jobs-per-second"),", and we specify ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," as a default value if no value is available."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'$prefab.get("max-jobs-per-second", 10) # => returns `10` if no value is available\n')),(0,r.kt)("p",null,"If we don't provide a default and no value is available, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Prefab::Errors::MissingDefaultError")," error will be raised."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'$prefab.get("max-jobs-per-second") # => raises if no value is available\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can modify this behavior by setting the config option ",(0,r.kt)("inlineCode",{parentName:"p"},"on_no_default")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Prefab::Options::ON_NO_DEFAULT::RETURN_NIL")))),(0,r.kt)("p",null,"You can specify defaults for your application by creating a file ",(0,r.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")),(0,r.kt)("p",null,"Add the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# .prefab.default.config.yaml\nlog-level.cloud.prefab: info\nmy-first-int-config: 30\nmy-first-feature-flag: false\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/defaults"},"Learn more about defaults"),"."),(0,r.kt)("h3",{id:"getting-started"},"Getting Started"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'config_key = "my-first-int-config"\nputs "#{config_key} is: #{$prefab.get(config_key)}"\n\nflag_name = "my-first-feature-flag"\nputs "#{flag_name} is: #{$prefab.enabled? flag_name}"\n')),(0,r.kt)("p",null,"Run these and you should see the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"my-first-int-config is: 30\nmy-first-feature-flag is: false\n")),(0,r.kt)("p",null,"Now create a config named ",(0,r.kt)("inlineCode",{parentName:"p"},"my-first-int-config")," in the Prefab UI. Set a default value to 50 and sync your change to the\nAPI."),(0,r.kt)("p",null,"Add a feature flag named ",(0,r.kt)("inlineCode",{parentName:"p"},"my-first-feature-flag")," in the Prefab UI. Add boolean variants of ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".\nSet the inactive variant to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", make the flag active and add a rule of type ",(0,r.kt)("inlineCode",{parentName:"p"},"ALWAYS_TRUE")," with the variant to serve\nas ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".\nRemember to sync your change to the API."),(0,r.kt)("p",null,"Run your command again and you should see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"my-first-int-config is: 50\nmy-first-feature-flag is: true\n")),(0,r.kt)("p",null,"Congrats! You're ready to rock!"),(0,r.kt)("h2",{id:"feature-flags"},"Feature Flags"),(0,r.kt)("p",null,"Feature flags become more powerful when we give the flag evaluation rules more information to work with."),(0,r.kt)("p",null,"We do this by providing a lookup key and identity attributes."),(0,r.kt)("p",null,"The lookup key serves two purposes. First, it will be the unique key that helps us target a specific user\nusing ",(0,r.kt)("inlineCode",{parentName:"p"},"Lookup Key In")," when evaluating a flag."),(0,r.kt)("p",null,"Second, this key is used to make sure that percent rollout evaluations are consistently applied."),(0,r.kt)("p",null,"Attributes come into play when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Property Is One Of")," and similar rule criteria."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'lookup_key = "user-123"\nidentity_attributes = {\n  team_id: 432,\n  user_id: 123,\n  subscription_level: \'pro\',\n  email: "alice@example.com"\n}\nresult = $prefab.enabled? "my-first-feature-flag", lookup_key, identity_attributes\n\nputs "my-first-feature-flag is: #{result} for #{lookup_key}"\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"How you choose the ",(0,r.kt)("inlineCode",{parentName:"p"},"tracking_id")," for your user is up to you, but we have some suggestions and we would generally\ndiscourage\n",(0,r.kt)("inlineCode",{parentName:"p"},"user.id")," unless you are positive you don't have anonymous users. See the section on ",(0,r.kt)("a",{parentName:"p",href:"tracking-ids"},"Tracking IDs")," for our suggestion."))),(0,r.kt)("p",null,"Feature flags don't have to return just true or false. You can get other data types using ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'$prefab.get("ff-with-string", default_string_value)\n$prefab.get("ff-with-int", default_int_value)\n')),(0,r.kt)("h2",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,"Namespaces allow you to share config between many applications while still allowing you to override when necessary."),(0,r.kt)("p",null,"For instance, let's assume that all our code shares an HTTP library. We can configure the HTTP library to get its retry\ncount & timeout duration from our config store. We'll set ",(0,r.kt)("inlineCode",{parentName:"p"},"http.connection.retries")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"http.connection.timeout")," in the\ndefault namespace."),(0,r.kt)("p",null,"All of our apps should initialize their config store in a namespace. For instance our User service can initialize\nwith:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'options = Prefab::Options.new(\n  namespace: "services.user-service.web"\n)\n')),(0,r.kt)("p",null,'Prefab config will find the "closest" matching config when the UserService goes to look for a value of\nhttp.connection.timeout.'),(0,r.kt)("p",null,"If our service namespace is ",(0,r.kt)("inlineCode",{parentName:"p"},"services.user-service.web")," it will match overrides in namespaces ",(0,r.kt)("inlineCode",{parentName:"p"},"services"),"\n, ",(0,r.kt)("inlineCode",{parentName:"p"},"services.user-service"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"services.user-service.web"),", but not ",(0,r.kt)("inlineCode",{parentName:"p"},"services.user-service.cron")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"services.user-service.web.tools"),"."),(0,r.kt)("p",null,"Let's imagine that the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserService")," starts to go down because too many requests are timing out to a 3rd party service. We\ncan quickly reduce the ",(0,r.kt)("inlineCode",{parentName:"p"},"http.connection.timeout")," for our ",(0,r.kt)("inlineCode",{parentName:"p"},"services.user-service")," namespace and solve the issue without\npushing code or restarting."),(0,r.kt)("h2",{id:"local-overrides"},"Local Overrides"),(0,r.kt)("p",null,"It can be very useful to modify your defaults locally without changing the defaults file or values in the API. To do\nthis, add a file in your home directory or classpath called ",(0,r.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prefab.default.config.yaml\nmycorp.auth.api.url: "auth.staging.mycorp.com"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'#~/.prefab.default.config.yaml\nmycorp.auth.api.url: "localhost:9090"\n')),(0,r.kt)("p",null,"Prefab will first load the defaults. Then merge the API values over the top. Finally it will apply the overrides file on\ntop."),(0,r.kt)("h2",{id:"emergencies"},"Emergencies"),(0,r.kt)("p",null,"Prefab is designed to be extremely resilient. The client will try to pull live values from:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A Fastly CDN backed by the API"),(0,r.kt)("li",{parentName:"ol"},"A Cloudflare CDN backed by an S3 bucket"),(0,r.kt)("li",{parentName:"ol"},"The Prefab API"),(0,r.kt)("li",{parentName:"ol"},"Prefab Streaming APIs")),(0,r.kt)("p",null,"This strategy ensures the utmost reliability for your clients being able to pull live values, even in the case of a\nmajor outage of the Prefab APIs."),(0,r.kt)("p",null,"But wait, there's more."),(0,r.kt)("p",null,"In the terrible occurrence that the Prefab APIs are down for an extended period of time, your services should be able to\nbootstrap themselves and load from the CDN, but you would be unable to modify configuration."),(0,r.kt)("p",null,"To fix this, Prefab clients will also read from the ",(0,r.kt)("inlineCode",{parentName:"p"},"live_override_url"),". This should be a URL that you are in fully in\ncontrol of. Prefab clients, will periodically poll this endpoint and if any values are found there it will prefer them\nover all other values. The format of this file is the same as a default config value file."),(0,r.kt)("h2",{id:"using-prefab-for-rollouts"},"Using Prefab For Rollouts"),(0,r.kt)("p",null,"So you've built a new pipeline and are hoping to slowly dial up how much traffic uses it. You've got two great ways to\ndo that with Prefab."),(0,r.kt)("p",null,"One approach is to simply use dynamic config. We can use a floating point number to specify the percent of traffic we\nwant to rollout to and then evaluate that against a random number to determine whether to run the new code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'if rand() < @config.get_float("percent-to-rollout")\n  do_new_pipeline\nend\n')),(0,r.kt)("p",null,"This approach works fine, but each evaluation of ",(0,r.kt)("inlineCode",{parentName:"p"},"rand()")," will get you a different result. Sometimes this is what you\nwant, but if you'd like the rollout to be sticky and keep server, requests, users in the new pipeline you may want to use a feature flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'$prefab.enabled? "new-feature", any_consistent_id\n')),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"You can control the Prefab client's log level by changing the configuration value of ",(0,r.kt)("inlineCode",{parentName:"p"},"log-level.cloud.prefab"),". In the rare\ncase that you are trying to debug issues that occur before this config file has been read, set env var"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"PREFAB_LOG_CLIENT_BOOTSTRAP_LOG_LEVEL = debug\n")),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"LOCAL_ONLY")," and use your ",(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/bootstrapping"},"config.yaml file"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"options = Prefab::Options.new(data_sources: LOCAL_ONLY)\n\n$prefab = Prefab::Client.initialize(options)\n")),(0,r.kt)("p",null,"If you need to test multiple scenarios that depend on a single config or feature key, you can use a mock or stub to change the Prefab value."),(0,r.kt)("h3",{id:"example-test"},"Example Test"),(0,r.kt)("p",null,"Imagine we want to test a ",(0,r.kt)("inlineCode",{parentName:"p"},"batches")," method on our ",(0,r.kt)("inlineCode",{parentName:"p"},"Job")," class. ",(0,r.kt)("inlineCode",{parentName:"p"},"batches")," depends on ",(0,r.kt)("inlineCode",{parentName:"p"},"job.batch.size")," and the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"job.batch.size")," in our default config file is ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,r.kt)("p",null,"We can test how ",(0,r.kt)("inlineCode",{parentName:"p"},"batches")," performs with different values for ",(0,r.kt)("inlineCode",{parentName:"p"},"job.batch.size")," by mocking the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"$prefab.get"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"class Job < Array\n  def batches\n    slice_size = $prefab.get('job.batch.size')\n    each_slice(slice_size)\n  end\nend\n\nRSpec.describe Job do\n  describe '#batches' do\n    it 'returns batches of jobs' do\n      jobs = Job.new([1, 2, 3, 4, 5])\n\n      expect(jobs.batches.map(&:size)).to eq([3, 2])\n\n      allow($prefab).to receive(:get).with('job.batch.size').and_return(2)\n      expect(jobs.batches.map(&:size)).to eq([2, 2, 1])\n    end\n  end\nend\n")))}f.isMDXComponent=!0}}]);