"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),f=l,g=c["".concat(s,".").concat(f)]||c[f]||d[f]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={title:"Ruby",sidebar_position:11},o=void 0,i={unversionedId:"sdks/ruby",id:"sdks/ruby",title:"Ruby",description:"Install the latest version",source:"@site/docs/sdks/ruby.md",sourceDirName:"sdks",slug:"/sdks/ruby",permalink:"/docs/sdks/ruby",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/sdks/ruby.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Ruby",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"SDKs",permalink:"/docs/category/sdks"},next:{title:"Java",permalink:"/docs/sdks/java"}},s={},u=[{value:"Install the latest version",id:"install-the-latest-version",level:2},{value:"Initialize Client",id:"initialize-client",level:2},{value:"Rails Applications",id:"rails-applications",level:3},{value:"Special Considerations with Forking servers like Puma &amp; Unicorn that use workers",id:"special-considerations-with-forking-servers-like-puma--unicorn-that-use-workers",level:4},{value:"Feature Flags",id:"feature-flags",level:2},{value:"Context",id:"context",level:2},{value:"Just-in-time Context",id:"just-in-time-context",level:4},{value:"Dynamic Config",id:"dynamic-config",level:2},{value:"Default Values for Configs",id:"default-values-for-configs",level:4},{value:"Dynamic Log Levels",id:"dynamic-log-levels",level:2},{value:"Targeted Log Levels",id:"targeted-log-levels",level:3},{value:"Setting default log levels in the Prefab config file",id:"setting-default-log-levels-in-the-prefab-config-file",level:4},{value:"Telemetry",id:"telemetry",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Testing",id:"testing",level:2},{value:"Local Overrides",id:"local-overrides",level:3},{value:"Test Setup",id:"test-setup",level:3},{value:"Example Test",id:"example-test",level:3},{value:"Reference",id:"reference",level:2},{value:"Client Initialization Options",id:"client-initialization-options",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},c=p("Tabs"),d=p("TabItem"),f={toc:u},g="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"install-the-latest-version"},"Install the latest version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," gem install prefab-cloud-ruby\n")),(0,l.kt)("h2",{id:"initialize-client"},"Initialize Client"),(0,l.kt)("p",null,"If you set ",(0,l.kt)("inlineCode",{parentName:"p"},"PREFAB_API_KEY")," as an environment variable, initializing the client is as easy as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"Prefab.init # reads PREFAB_API_KEY env var\n")),(0,l.kt)("h3",{id:"rails-applications"},"Rails Applications"),(0,l.kt)("p",null,"Initializing Prefab in your ",(0,l.kt)("inlineCode",{parentName:"p"},"application.rb")," will allow you to reference dynamic configuration in your environment (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"staging.rb"),") and initializers. This is useful for setting environment-specific config like your redis connection URL."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"#application.rb\nmodule MyApplication\n  class Application < Rails::Application\n    #...\n\n    Prefab.init\n  end\nend\n")),(0,l.kt)("details",{className:"alert--warning"},(0,l.kt)("summary",null,(0,l.kt)("h4",{id:"special-considerations-with-forking-servers-like-puma--unicorn-that-use-workers"},"Special Considerations with Forking servers like Puma & Unicorn that use workers")),(0,l.kt)("p",null,"Many ruby web servers fork. In order to work properly we should have a Prefab Client running independently in each fork. You do not need to do this if you are only using threads and not workers.\nWe also need to set the reset the logger for ActionView and friends because those get set pre-fork."),(0,l.kt)(c,{groupId:"lang",mdxType:"Tabs"},(0,l.kt)(d,{value:"puma",label:"Puma",mdxType:"TabItem"},(0,l.kt)("p",null,"If using workers in Puma, you can initialize inside an on_worker_boot hook in your puma.rb config file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"# puma.rb\non_worker_boot do\n  Prefab.fork\n  Prefab.set_rails_loggers\nend\n"))),(0,l.kt)(d,{value:"unicorn",label:"Unicorn",mdxType:"TabItem"},(0,l.kt)("p",null,"If using workers in Unicorn, you can initialize inside an after_fork hook in your unicorn.rb config file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"# unicorn.rb\nafter_fork do |server, worker|\n  Prefab.fork\n  Prefab.set_rails_loggers\nend\n"))))),(0,l.kt)("h2",{id:"feature-flags"},"Feature Flags"),(0,l.kt)("p",null,"For boolean flags, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"enabled?")," convenience method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},'flag_name = "my-first-feature-flag"\nputs "#{flag_name} is: #{Prefab.enabled? flag_name}"\n')),(0,l.kt)("p",null,"Feature flags don't have to return just true or false. You can get other data types using ",(0,l.kt)("inlineCode",{parentName:"p"},"get"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},'Prefab.get("ff-with-string")\nPrefab.get("ff-with-int")\n')),(0,l.kt)("h2",{id:"context"},"Context"),(0,l.kt)("p",null,"Feature flags become more powerful when we give the flag evaluation rules more information to work with. We do this by providing ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/context"},"context")," of the current user (and/or team, request, etc.)"),(0,l.kt)("p",null,"To make the best use of Prefab, we recommend setting ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/context"},"context")," in an ",(0,l.kt)("inlineCode",{parentName:"p"},"around_action")," in your ",(0,l.kt)("inlineCode",{parentName:"p"},"ApplicationController"),". Setting this context for the life-cycle of the request means the Prefab logger can be aware of your user/etc. for feature flags and ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/features/targeted-log-levels"},"targeted log levels")," and you won't have to explicitly pass context into your ",(0,l.kt)("inlineCode",{parentName:"p"},".enabled?")," and ",(0,l.kt)("inlineCode",{parentName:"p"},".get")," calls."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"# application_controller.rb\nclass ApplicationController < ActionController::Base\n  around_action do |_, block|\n    Prefab.with_context(prefab_context, &block)\n  end\n\n  def prefab_context\n    {\n      device: {\n        mobile: mobile?\n        # ...\n      },\n    }.merge(prefab_user_context)\n  end\n\n  def prefab_user_context\n    return {} unless current_user\n\n    {\n      key: current_user.tracking_id,\n      id: current_user.id,\n      email: current_user.email,\n      country: current_user.country,\n      # ...\n    }\n  end\nend\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h4",{id:"just-in-time-context"},"Just-in-time Context")),(0,l.kt)("p",null,"You can also pass context when evaluating individual flags or config values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},'context = {\n  user: {\n    id: 123,\n    key: \'user-123\',\n    subscription_level: \'pro\',\n    email: "alice@example.com"\n  },\n  team: {\n    id: 432,\n    key: \'team-abc\',\n  },\n  device: {\n    key: "abcdef",\n    mobile: true,\n  }\n}\nresult = Prefab.enabled?("my-first-feature-flag", context)\n\nputs "my-first-feature-flag is: #{result} for #{context.inspect}"\n'))),(0,l.kt)("h2",{id:"dynamic-config"},"Dynamic Config"),(0,l.kt)("p",null,"Config values are accessed the same way as feature flag values. You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"enabled?")," as a convenience for boolean values, and ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," works for all data types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},'config_key = "my-first-int-config"\nputs "#{config_key} is: #{Prefab.get(config_key)}"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h4",{id:"default-values-for-configs"},"Default Values for Configs")),(0,l.kt)("p",null,"It is a best practice to specify a default value for all configuration. This reduces the likelihood of exceptions due to\nnil values. Prefab encourages this practice by raising an error if you try to reference a value that is unset."),(0,l.kt)("p",null,"Here we ask for the value of a config named ",(0,l.kt)("inlineCode",{parentName:"p"},"max-jobs-per-second"),", and we specify ",(0,l.kt)("inlineCode",{parentName:"p"},"10")," as a default value if no value is available."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},'Prefab.get("max-jobs-per-second", 10) # => returns `10` if no value is available\n')),(0,l.kt)("p",null,"If we don't provide a default and no value is available, a ",(0,l.kt)("inlineCode",{parentName:"p"},"Prefab::Errors::MissingDefaultError")," error will be raised."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},'Prefab.get("max-jobs-per-second") # => raises if no value is available\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You can modify this behavior by setting the option ",(0,l.kt)("inlineCode",{parentName:"p"},"on_no_default")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Prefab::Options::ON_NO_DEFAULT::RETURN_NIL"))),(0,l.kt)("p",null,"You can specify defaults for your application by creating a file ",(0,l.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")),(0,l.kt)("p",null,"Add the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# .prefab.default.config.yaml\nlog-level.cloud.prefab: info\nmy-first-int-config: 30\nmy-first-feature-flag: false\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/defaults"},"Learn more about defaults"),".")),(0,l.kt)("h2",{id:"dynamic-log-levels"},"Dynamic Log Levels"),(0,l.kt)("p",null,"Set the Rails logger to use our logger"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"#application.rb\nmodule MyApplication\n  class Application < Rails::Application\n    #...\n\n    Prefab.init\n    // highlight-next-line\n    Prefab.set_rails_loggers\n  end\nend\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Prefab.set_rails_loggers")," wraps the Rails logger to allow using ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/features/targeted-log-levels"},"dynamic log levels")," with your normal Rails logger calls."),(0,l.kt)("p",null,"Now we are free to adjust our log levels, down to the controller or method level in real-time. Invaluable for debugging! You can set and tweak these on-the-fly in the Prefab web app."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Please read the ",(0,l.kt)("a",{parentName:"p",href:"ruby#special-considerations-with-forking-servers-like-puma--unicorn-that-use-workers"},"Puma/Unicorn")," notes for special considerations with forking servers.")),(0,l.kt)("h3",{id:"targeted-log-levels"},"Targeted Log Levels"),(0,l.kt)("p",null,"You can use ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/features/targeted-log-levels"},"Targeting")," to change your log levels based on the current user/request/device context using our ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/features/rules-and-segmentation"},"rules")," engine."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h4",{id:"setting-default-log-levels-in-the-prefab-config-file"},"Setting default log levels in the Prefab config file")),(0,l.kt)("p",null,"You can also set default log levels in the Prefab config file (",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/defaults"},"learn more"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"#.prefab.default.config.yaml\nlog-level:\n  _: debug\n  cloud.prefab: debug\n  app.controllers.prefab_controller: debug\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If the values are in your ",(0,l.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")," you'll need to restart the server to see new values. If you change these values on the server, they will update automatically."))),(0,l.kt)("h2",{id:"telemetry"},"Telemetry"),(0,l.kt)("p",null,"By default, Prefab uploads telemetry that enables a number of useful features. You can alter or disable this behavior using the following options:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collect_evaluation_summaries"),(0,l.kt)("td",{parentName:"tr",align:null},"Send counts of config/flag evaluation results back to Prefab to view in web app"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collect_logger_counts"),(0,l.kt)("td",{parentName:"tr",align:null},"Send counts of logger usage back to Prefab to power log-levels configuration screen"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context_upload_mode"),(0,l.kt)("td",{parentName:"tr",align:null},'Upload either context "shapes" (the names and data types your app uses in prefab contexts) or periodically send full example contexts'),(0,l.kt)("td",{parentName:"tr",align:null},":periodic_example")))),(0,l.kt)("p",null,"If you want to change any of these options, you can pass an ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," object when initializing the Prefab client."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"#application.rb\nmodule MyApplication\n  class Application < Rails::Application\n    #...\n\n    // highlight-start\n    options = Prefab::Options.new(\n      collect_evaluation_summaries: true,\n      collect_logger_counts: true,\n      context_upload_mode: :periodic_example,\n    )\n\n    Prefab.init(options)\n    // highlight-end\n  end\nend\n")),(0,l.kt)("h2",{id:"debugging"},"Debugging"),(0,l.kt)("p",null,"You can control the Prefab client's log level by changing the configuration value of ",(0,l.kt)("inlineCode",{parentName:"p"},"log-level.cloud.prefab"),". In the rare\ncase that you are trying to debug issues that occur before this config file has been read, set env var"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"PREFAB_LOG_CLIENT_BOOTSTRAP_LOG_LEVEL = debug\n")),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("h3",{id:"local-overrides"},"Local Overrides"),(0,l.kt)("p",null,"It can be very useful to modify your defaults locally without changing the defaults file or values in the API. To do\nthis, add a file in your home directory or classpath called ",(0,l.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# .prefab.default.config.yaml\nmycorp.auth.api.url: "auth.staging.mycorp.com"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'#~/.prefab.default.config.yaml\nmycorp.auth.api.url: "localhost:9090"\n')),(0,l.kt)("p",null,"Prefab will first load the defaults. Then merge the API values over the top. Finally it will apply the overrides file on\ntop."),(0,l.kt)("h3",{id:"test-setup"},"Test Setup"),(0,l.kt)("p",null,"Specify ",(0,l.kt)("inlineCode",{parentName:"p"},"LOCAL_ONLY")," via an env var and use your ",(0,l.kt)("a",{parentName:"p",href:"/docs/explanations/architecture/bootstrapping"},"config.yaml file"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"export PREFAB_DATASOURCES='LOCAL_ONLY'\n")),(0,l.kt)("p",null,"If you need to test multiple scenarios that depend on a single config or feature key, you can use a mock or stub to change the Prefab value."),(0,l.kt)("h3",{id:"example-test"},"Example Test"),(0,l.kt)("p",null,"Imagine we want to test a ",(0,l.kt)("inlineCode",{parentName:"p"},"batches")," method on our ",(0,l.kt)("inlineCode",{parentName:"p"},"Job")," class. ",(0,l.kt)("inlineCode",{parentName:"p"},"batches")," depends on ",(0,l.kt)("inlineCode",{parentName:"p"},"job.batch.size")," and the value for ",(0,l.kt)("inlineCode",{parentName:"p"},"job.batch.size")," in our default config file is ",(0,l.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,l.kt)("p",null,"We can test how ",(0,l.kt)("inlineCode",{parentName:"p"},"batches")," performs with different values for ",(0,l.kt)("inlineCode",{parentName:"p"},"job.batch.size")," by mocking the return value of ",(0,l.kt)("inlineCode",{parentName:"p"},"Prefab.get"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"class Job < Array\n  def batches\n    slice_size = Prefab.get('job.batch.size')\n    each_slice(slice_size)\n  end\nend\n\nRSpec.describe Job do\n  describe '#batches' do\n    it 'returns batches of jobs' do\n      jobs = Job.new([1, 2, 3, 4, 5])\n\n      expect(jobs.batches.map(&:size)).to eq([3, 2])\n\n      allow(Prefab).to receive(:get).with('job.batch.size').and_return(2)\n      expect(jobs.batches.map(&:size)).to eq([2, 2, 1])\n    end\n  end\nend\n")),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"client-initialization-options"},"Client Initialization Options"),(0,l.kt)("p",null,"For more control, you can initialize your client with options. Here are the defaults with explanations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"options = Prefab::Options.new(\n  api_key: ENV['PREFAB_API_KEY'],\n  logdev: $stdout,\n  namespace: '',\n  log_formatter: DEFAULT_LOG_FORMATTER,\n  log_prefix: nil,\n  prefab_api_url: ENV['PREFAB_API_URL'] || 'https://api.prefab.cloud',\n  on_no_default: ON_NO_DEFAULT::RAISE, # options :raise, :warn_and_return_nil,\n  initialization_timeout_sec: 10, # how long to wait before on_init_failure\n  on_init_failure: ON_INITIALIZATION_FAILURE::RAISE, # choose to crash or continue with local data only if unable to fetch config data from prefab at startup\n  prefab_datasources: ENV['PREFAB_DATASOURCES'] == 'LOCAL_ONLY' ? DATASOURCES::LOCAL_ONLY : DATASOURCES::ALL,\n  prefab_config_override_dir: Dir.home,\n  prefab_config_classpath_dir: '.', # where to load local overrides\n  prefab_envs: ENV['PREFAB_ENVS'].nil? ? [] : ENV['PREFAB_ENVS'].split(','),\n  collect_logger_counts: true, # send counts of logger usage back to Prefab to power log-levels configuration screen\n  collect_max_paths: DEFAULT_MAX_PATHS,\n  collect_sync_interval: nil,\n  context_upload_mode: :periodic_example, # :periodic_example, :shape_only, :none\n  context_max_size: DEFAULT_MAX_EVAL_SUMMARIES,\n  collect_evaluation_summaries: true, # send counts of config/flag evaluation results back to Prefab to view in web app\n  collect_max_evaluation_summaries: DEFAULT_MAX_EVAL_SUMMARIES,\n  allow_telemetry_in_local_mode: false\n)\n\nPrefab.init(options)\n")))}m.isMDXComponent=!0}}]);