"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[858],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),f=i,g=c["".concat(s,".").concat(f)]||c[f]||d[f]||l;return t?a.createElement(g,r(r({ref:n},u),{},{components:t})):a.createElement(g,r({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const l={title:"Elixir",sidebar_position:16},r=void 0,o={unversionedId:"sdks/elixir",id:"sdks/elixir",title:"Elixir",description:"Getting Started with the Elixir SDK",source:"@site/docs/sdks/elixir.md",sourceDirName:"sdks",slug:"/sdks/elixir",permalink:"/docs/sdks/elixir",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/sdks/elixir.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Elixir",sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"JavaScript",permalink:"/docs/sdks/javascript"},next:{title:"Python",permalink:"/docs/sdks/python"}},s={},p=[{value:"Getting Started with the Elixir SDK",id:"getting-started-with-the-elixir-sdk",level:2},{value:"Configure Options",id:"configure-options",level:2},{value:"Available options",id:"available-options",level:3},{value:"Initialize Client",id:"initialize-client",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Defaults",id:"defaults",level:3},{value:"Getting Started",id:"getting-started",level:3},{value:"Feature Flags",id:"feature-flags",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Logging",id:"logging",level:2},{value:"Targeted Log Levels",id:"targeted-log-levels",level:3},{value:"Log levels",id:"log-levels",level:3},{value:"Local Overrides",id:"local-overrides",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Testing",id:"testing",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getting-started-with-the-elixir-sdk"},"Getting Started with the Elixir SDK"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Note: This library is under active development and not quite ready for production usage")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://forms.gle/BuAwqqmEDxfEybkN6"},"Sign up to be notified when this library releases"))),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"prefab")," to your mix dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'# mix.exs\ndefp deps do\n  [\n    ...\n    {:prefab, "~> 0.1.0"},\n    ...\n  ]\nend\n')),(0,i.kt)("h2",{id:"configure-options"},"Configure Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'options = Prefab.Options.new(\n  api_key: "SDK-your-api-key",\n  prefab_api_url: "https://api.prefab.cloud",\n  prefab_grpc_url: "grpc.prefab.cloud:443"\n)\n')),(0,i.kt)("p",null,"To avoid passing your API key in directly in code, we recommend setting up your\n",(0,i.kt)("inlineCode",{parentName:"p"},"config/*.exs")," files to read that value from ENV"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'# config/*.exs\nconfig :prefab,\n  api_key: System.get_env("PREFAB_API_KEY"),\n  api_url: System.get_env("PREFAB_API_URL", "https://api.staging-prefab.cloud"),\n  grpc_url: System.get_env("PREFAB_GRPC_URL", "grpc.staging-prefab.cloud:443")\n')),(0,i.kt)("h3",{id:"available-options"},"Available options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api_key")," - your prefab.cloud SDK API key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefab_api_url")," - the API endpoint your API key has been created for (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://api.prefab.cloud"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefab_grpc_url")," - the gRPC endpoint (including port) you wish to connect to (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"grpc.prefab.cloud:443"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namespace")," - an optional namespace to define your client's scope when looking up config"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefab_datasources")," - one of ",(0,i.kt)("inlineCode",{parentName:"li"},":all")," (default) or ",(0,i.kt)("inlineCode",{parentName:"li"},":local_only"),", determines whether to fetch data from remote\nsources or use only local data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefab_config_classpath_dir")," - the directory from which to load locally defined configuration. This data\nwill be overwritten by data pulled from remote sources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefab_config_override_dir")," - the directory from which to load local override data. Any data found will be\nloaded overtop of data pulled from remote sources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefab_envs")," - one or more environment names from which to load local configuration and overrides.\nSee ",(0,i.kt)("a",{parentName:"li",href:"#module-local-config-and-overrides"},"Local config and overrides")," below for additional information.")),(0,i.kt)("h2",{id:"initialize-client"},"Initialize Client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"client = Prefab.Client.new(options)\n")),(0,i.kt)("p",null,"Unless your options are configured to run using only local data, the client will attempt to connect to\nthe various remote data sources and begin syncing data to a local store."),(0,i.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("h3",{id:"defaults"},"Defaults"),(0,i.kt)("p",null,"It is a best practice to specify a default value for all configuration. This\nreduces the likelihood of exceptions due to nil values."),(0,i.kt)("p",null,"Here we ask for the value of a config named max-jobs-per-second, and we specify\n",(0,i.kt)("inlineCode",{parentName:"p"},"10")," as a default value if no value is available."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'Prefab.Client.get(client, "max-jobs-per-second", default: 10) # => 10\n')),(0,i.kt)("p",null,"If no default is provided, the return value will be ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'Prefab.Client.get(client, "max-jobs-per-second") # => nil\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you would prefer your application raise an error if no value is found\nwhen no default is provided, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"get!")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'# raises a Prefab.Errors.MissingDefaultError\nPrefab.Client.get!(client, "max-jobs-per-second")\n'))),(0,i.kt)("p",null,"You can specify defaults for your application by creating a file\n",(0,i.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")),(0,i.kt)("p",null,"Add the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# .prefab.default.config.yaml\nlog-level.prefab: info\nmy-first-int-config: 30\nmy-first-feature-flag: false\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/defaults"},"Learn more about defaults"),"."),(0,i.kt)("h3",{id:"getting-started"},"Getting Started"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'config_key = "my-first-int-config"\nIO.puts("#{config_key}: #{Prefab.Client.get(client, config_key)}")\n\nff_key = "my-first-feature-flag"\nIO.puts("#{ff_key}: #{Prefab.Client.enabled?(client, ff_key)}")\n')),(0,i.kt)("p",null,"Should output the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"my-first-int-config: 30\nmy-first-feature-flag: false\n")),(0,i.kt)("p",null,"Now create a config named ",(0,i.kt)("inlineCode",{parentName:"p"},"my-first-int-config")," in the Prefab UI. Set a default\nvalue to 50 and sync your change to the API."),(0,i.kt)("p",null,"Add a feature flag named ",(0,i.kt)("inlineCode",{parentName:"p"},"my-first-feature-flag")," in the Prefab UI. Add boolean\nvariants of ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". Set the inactive variant to false, make the flag\nactive and add a rule of type ",(0,i.kt)("inlineCode",{parentName:"p"},"ALWAYS_TRUE")," with the variant to serve as ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".\nRemember to sync your change to the API."),(0,i.kt)("p",null,"Run the code above again and you should see:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"my-first-int-config is: 50\nmy-first-feature-flag is: true\n")),(0,i.kt)("p",null,"Congrats! You're ready to rock!"),(0,i.kt)("h2",{id:"feature-flags"},"Feature Flags"),(0,i.kt)("p",null,"Feature flags become more powerful when we give the flag evaluation ",(0,i.kt)("a",{parentName:"p",href:"/docs/explanations/features/rules-and-segmentation"},"rules")," more information to work with."),(0,i.kt)("p",null,"We do this by providing a lookup key and identity attributes."),(0,i.kt)("p",null,"The lookup key serves two purposes. First, it will be the unique key that helps us\ntarget a specific user using ",(0,i.kt)("inlineCode",{parentName:"p"},"Lookup Key In")," when evaluating a flag."),(0,i.kt)("p",null,"Second, this key is used to make sure that percent rollout evaluations are\nconsistently applied."),(0,i.kt)("p",null,"Attributes come into play when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Property Is One Of")," and similar rule\ncriteria."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'lookup_key = "user-1234"\nidentity_attributes = [\n                        team_id: 432,\n                        user_id: 123,\n                        subscription_level: \'pro\',\n                        email: "alice@example.com"\n                      ]\nresult = Prefab.Client.enabled?(\n  client,\n  "my-first-feature-flag",\n  lookup_key: lookup_key,\n  attributes: identity_attributes\n)\n\nIO.puts("my-first-feature-flag is: #{result} for #{lookup_key}")\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"How you choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"tracking_id")," for your user is up to you, but we have some suggestions and we would generally\ndiscourage\n",(0,i.kt)("inlineCode",{parentName:"p"},"user.id")," unless you are positive you don't have anonymous users. See the section on ",(0,i.kt)("a",{parentName:"p",href:"/docs/how-tos/tracking-ids"},"Tracking IDs")," for our suggestion.")),(0,i.kt)("p",null,"Feature flags don't have to return just true or false. You can get other data types using ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'Prefab.Client.get(client, "ff-with-string", default_string_value)\nPrefab.Client.get(client, "ff-with-int", default_int_value)\n')),(0,i.kt)("h2",{id:"namespaces"},"Namespaces"),(0,i.kt)("p",null,"Namespaces allow you to share config between many applications while still allowing you to override when necessary."),(0,i.kt)("p",null,"For instance, let's assume that all our code shares an HTTP library. We can configure the HTTP library to get its retry\ncount & timeout duration from our config store. We'll set ",(0,i.kt)("inlineCode",{parentName:"p"},"http.connection.retries")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"http.connection.timeout")," in the\ndefault namespace."),(0,i.kt)("p",null,"All of our apps should initialize their config store in a namespace. For instance our User service can initialize\nwith:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'options = Prefab.Options.new(\n  namespace: "services.user_service.web"\n)\n')),(0,i.kt)("p",null,'Prefab config will find the "closest" matching config when the UserService goes to look for a value of\nhttp.connection.timeout.'),(0,i.kt)("p",null,"If our service namespace is ",(0,i.kt)("inlineCode",{parentName:"p"},"services.user-service.web")," it will match overrides in namespaces ",(0,i.kt)("inlineCode",{parentName:"p"},"services"),"\n, ",(0,i.kt)("inlineCode",{parentName:"p"},"services.user_service"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"services.user_service.web"),", but not ",(0,i.kt)("inlineCode",{parentName:"p"},"services.user_service.cron")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"services.user_service.web.tools"),"."),(0,i.kt)("p",null,"Let's imagine that the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserService")," starts to go down because too many requests are timing out to a 3rd party service. We\ncan quickly reduce the ",(0,i.kt)("inlineCode",{parentName:"p"},"http.connection.timeout")," for our ",(0,i.kt)("inlineCode",{parentName:"p"},"services.user_service")," namespace and solve the issue without\npushing code or restarting."),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"Prefab's Elixir Client comes with a powerful upgrade to the default Elixir ",(0,i.kt)("inlineCode",{parentName:"p"},"Logger")," to provide dynamic log levels."),(0,i.kt)("p",null,"To use it, use the logging functions included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Prefab.Client")," public API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"Prefab.Client.debug(client, message)\nPrefab.Client.info(client, message)\nPrefab.Client.warning(client, message)\nPrefab.Client.error(client, message)\nPrefab.Client.critical(client, message)\n")),(0,i.kt)("p",null,"You can now control logging at any level of your stack. For convenience, we'll set these as local defaults in ",(0,i.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/defaults"},"learn more"),") but you can set and tweak these on-the-fly in the Prefab web app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# .prefab.default.config.yaml\nlog-level.app_web.controllers.my_controller: info\nlog-level.app_web.controllers.my_controller.index: warning\nlog-level.app_web.controllers.my_controller.show: debug\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'defmodule AppWeb.MyController do\n  ...\n  def index(conn) do\n    Prefab.Client.warning(conn.prefab_client, "shown")\n    Prefab.Client.info(conn.prefab_client, "disabled")\n    Prefab.Client.debug(conn.prefab_client, "disabled")\n  end\n\n  def show(conn, _) do\n    Prefab.Client.warning(conn.prefab_client, "shown")\n    Prefab.Client.info(conn.prefab_client, "shown")\n    Prefab.Client.debug(conn.prefab_client, "shown")\n  end\n\n  def edit(conn, _) do\n    Prefab.Client.warning(conn.prefab_client, "shown")\n    Prefab.Client.info(conn.prefab_client, "shown")\n    Prefab.Client.debug(conn.prefab_client, "disabled")\n  end\nend\n')),(0,i.kt)("h3",{id:"targeted-log-levels"},"Targeted Log Levels"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/explanations/features/targeted-log-levels"},"Targeting")," to change your log levels based on the current user/request/device context using our ",(0,i.kt)("a",{parentName:"p",href:"/docs/explanations/features/rules-and-segmentation"},"rules")," engine."),(0,i.kt)("h3",{id:"log-levels"},"Log levels"),(0,i.kt)("p",null,"To be as language agnostic as possible, ",(0,i.kt)("inlineCode",{parentName:"p"},"Prefab")," provides a standardized\nsubset of log levels that can be mapped to language-specific log levels.\nThe language-agnostic levels are the levels that should be set in the Prefab\nUI or in your local overrides. The list below shows the mappings from Prefab\nlog levels to Elixir log levels"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"Prefab => Elixir\n--------------------\ndebug  => :debug\ninfo   => :info\nwarn   => :warning\nerror  => :error\nfatal  => :critical\n")),(0,i.kt)("h2",{id:"local-overrides"},"Local Overrides"),(0,i.kt)("p",null,"It can be very useful to modify your defaults locally without changing the defaults file or values in the API. To do\nthis, add a file in your home directory or classpath called ",(0,i.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prefab.default.config.yaml\nmycorp.auth.api.url: "auth.staging.mycorp.com"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'#~/.prefab.default.config.yaml\nmycorp.auth.api.url: "localhost:9090"\n')),(0,i.kt)("p",null,"Prefab will first load the defaults, then merge the remote API values over the top, and finally it will apply the overrides file on\ntop of those values."),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"You can control the Prefab client's log level by changing the configuration value of ",(0,i.kt)("inlineCode",{parentName:"p"},"log-level.prefab"),". In the rare\ncase that you are trying to debug issues that occur before this config file has been read, set env var"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PREFAB_LOG_CLIENT_BOOTSTRAP_LOG_LEVEL = debug\n")),(0,i.kt)("p",null,"By default this level is set to ",(0,i.kt)("inlineCode",{parentName:"p"},":warning")),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"Specify ",(0,i.kt)("inlineCode",{parentName:"p"},"LOCAL_ONLY")," and use your ",(0,i.kt)("a",{parentName:"p",href:"/docs/explanations/architecture/bootstrapping"},"config.yaml file"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"options = Prefab.Options.new(data_sources: :local_only)\n\nclient = Prefab.Client.new(options)\n")))}d.isMDXComponent=!0}}]);