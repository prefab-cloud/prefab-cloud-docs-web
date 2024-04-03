"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[5311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,b=u["".concat(s,".").concat(f)]||u[f]||d[f]||r;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"Context",sidebar_label:"Context",sidebar_position:3},i=void 0,l={unversionedId:"explanations/concepts/context",id:"explanations/concepts/context",title:"Context",description:"Feature Flags, Dynamic Logging and Config are most powerful when we can target specific users, teams or parts of our infrastructure.",source:"@site/docs/explanations/concepts/context.md",sourceDirName:"explanations/concepts",slug:"/explanations/concepts/context",permalink:"/docs/explanations/concepts/context",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/explanations/concepts/context.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Context",sidebar_label:"Context",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Frontend SDKs",permalink:"/docs/explanations/concepts/frontend-sdks"},next:{title:"Testing & DataFiles",permalink:"/docs/explanations/concepts/testing"}},s={},p=[{value:"Global and scoped context",id:"global-and-scoped-context",level:2},{value:"Context keys",id:"context-keys",level:2},{value:"Dot notation",id:"dot-notation",level:2},{value:"Advanced: Adding to and Merging Contexts",id:"advanced-adding-to-and-merging-contexts",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=c("Tabs"),d=c("TabItem"),f={toc:p},b="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(b,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Feature Flags, Dynamic Logging and Config are most powerful when we can target specific users, teams or parts of our infrastructure.\nContext is how we do that."),(0,o.kt)("mermaid",{value:'graph TD;\n    A[Request] --\x3e Server\n    subgraph Server\n        Filter\n        subgraph Filter[Set Context In Filter]\n            D["Prefab.setContext (<br/>user: {key: 123, name: bob},<br/>team: {key: 456, tier: enterprise}<br/>cloud: {key: pod/web-55bbd, region: us-east})"]\n            subgraph ApplicationCode[Application Code]\n                E[prefab.enabled? my-flag // target user, team or cloud]\n            end\n            D --\x3e ApplicationCode\n        end\n    end\n'}),(0,o.kt)("p",null,"Setting context in a filter allows you to set this knowledge once and use it everywhere when you evaluate feature flags, configs, and ",(0,o.kt)("a",{parentName:"p",href:"/docs/explanations/features/targeted-log-levels"},"targeted log levels")," without having to pass your context data deeply around your app."),(0,o.kt)("p",null,"In a web app, the life-cycle of contexts are the life-cycle of the request. You set context at the beginning of the request and then it is cleared out when the request finishes."),(0,o.kt)("p",null,"For feature flags, context usage is optional but a useful ergonomic -- you can always pass in your context just-in-time to your FF evaluations."),(0,o.kt)("p",null,"For usage examples, see your relevant SDK client documentation."),(0,o.kt)("h2",{id:"global-and-scoped-context"},"Global and scoped context"),(0,o.kt)("p",null,"To avoid deeply passing around awareness of the current user, request, etc., Prefab allows you to set Context globally and also for a thread/request. The mechanisms for doing so will vary by language and framework."),(0,o.kt)("p",null,"When context is set, log levels and feature flags will be evaluated in that context. If you provide just-in-time context to your FF evaluations, it will be merged with the thread/request context and global context. More on merging below."),(0,o.kt)("p",null,"The most-specific context will always win. If you set the same key in your JIT context that is present in another context, it will clobber the global context and thread/request context for the duration of the evaluation."),(0,o.kt)(u,{groupId:"lang",mdxType:"Tabs"},(0,o.kt)(d,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,o.kt)("p",null,"We can use a block to specify the context for the duration of the block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'\nPrefab.init(global_context: {application: {key: "my.corp.web"}})\n\ncontext = { device: { key: "abcdef", mobile: mobile? } }\n\nPrefab.with_context(context) do\n  # ...\nend\n'))),(0,o.kt)(d,{value:"ror",label:"Ruby on Rails",mdxType:"TabItem"},(0,o.kt)("p",null,"We can set global context when initializing Prefab"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'# in config/application.rb\nPrefab.init(global_context: {application: {key: "my.corp.web"}})\n')),(0,o.kt)("p",null,"We can use an ",(0,o.kt)("inlineCode",{parentName:"p"},"around_action")," to set our context for the life-cycle of the request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'# in app/controllers/application_controller.rb\nclass ApplicationController < ActionController::Base\n  around_action :set_prefab_context\n\n  def set_prefab_context\n    Prefab.with_context(context) do\n      yield\n    end\n  end\n\n  def context\n    {\n      device: {\n        key: "abcdef",\n        mobile: mobile?\n      }\n      user: current_user&.to_context\n      # ...\n    }\n  end\nend\n')),(0,o.kt)("p",null,"Learn more with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/example-rails-app"},"Prefab + Rails example app"))),(0,o.kt)(d,{value:"micronaut",label:"Micronaut",mdxType:"TabItem"},(0,o.kt)("p",null,"In your Prefab options, set your Prefab Context store to be your ServerRequestContextStore."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"options.setContextStore(new ServerRequestContextStore());\n")),(0,o.kt)("p",null,"Next, we add a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/example-micronaut-app/blob/configure-prefab-context/src/main/java/com/example/prefab/PrefabContextFilter.java"},"filter"),' to add a prefab context based on the currently "logged in" user.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'configClient.getContextStore()\n      .addContext(PrefabContext.newBuilder("user")\n          .put("key", user.key())\n          .put("country", user.country())\n          .put("email", user.email())\n          .build()\n      );\n')),(0,o.kt)("p",null,"Learn more with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/example-micronaut-app"},"Prefab + Micronaut example app"))),(0,o.kt)(d,{value:"dropwizard",label:"Dropwizard",mdxType:"TabItem"},(0,o.kt)("p",null,"Use a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerRequestFilter")," to set the context for your request when the request begins"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class PrefabContextAddingRequestFilter implements ContainerRequestFilter {\n    private static final Logger LOGGER = LoggerFactory.getLogger(PrefabContextAddingRequestFilter.class);\n    private final ConfigClient configClient;\n\n    @Inject\n    public PrefabContextAddingRequestFilter(ConfigClient configClient) {\n        this.configClient = configClient;\n    }\n\n    @Override\n    public void filter(ContainerRequestContext containerRequestContext) throws IOException {\n        final SecurityContext securityContext =\n                containerRequestContext.getSecurityContext();\n        if (securityContext != null) {\n            Principal principal = securityContext.getUserPrincipal();\n            if (principal instanceof User) {\n                User user = (User) principal;\n                LOGGER.info("will add pf context for {}", user);\n                configClient.getContextStore().addContext(PrefabContext.newBuilder("User")\n                        .put("key", user.getKey())\n                        .put("name", user.getName())\n                        .build());\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Then we'll add another ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerResponseFilter")," to clear the context when the request finishes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class PrefabContexClearingResponseFilter implements ContainerResponseFilter {\n    private static final Logger LOGGER = LoggerFactory.getLogger(PrefabContexClearingResponseFilter.class);\n    private final ConfigClient configClient;\n\n    @Inject\n    PrefabContexClearingResponseFilter(ConfigClient configClient) {\n        this.configClient = configClient;\n    }\n\n    @Override\n    public void filter(ContainerRequestContext containerRequestContext, ContainerResponseContext containerResponseContext) throws IOException {\n        configClient.getContextStore().clearContexts();\n        LOGGER.info("Cleared context");\n    }\n}\n')),(0,o.kt)("p",null,"Learn more with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/example-dropwizard-app"},"Prefab + Dropwizard example app"))),(0,o.kt)(d,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("p",null,"In JavaScript, there is only the global context. You can't specify a JIT context. Prefab fetches evaluated feature flags based on the context you provided."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { prefab, Context } from '@prefab-cloud/prefab-cloud-js'\n\nconst context = new Context({user: { email: 'test@example.com' }, device: { mobile: true } });\n\nconst options = { apiKey: '1234', context };\n\nawait prefab.init(options);\n\nif (prefab.isEnabled('cool-feature') {\n  // ...\n}\n"))),(0,o.kt)(d,{value:"react",label:"React",mdxType:"TabItem"},(0,o.kt)("p",null,"In React, there is only the global context. You can't specify a JIT context. Prefab fetches evaluated feature flags based on the context you provided."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { PrefabProvider } from '@prefab-cloud/prefab-cloud-react';\n\nconst WrappedApp = () => {\n  const context = { user: { email: \"jeffrey@example.com\" }, subscription: { plan: \"advanced\" } };\n\n  return (\n    <PrefabProvider\n      apiKey={'YOUR_API_KEY'}\n      contextAttributes={context}\n      <App />\n    </PrefabProvider>\n  );\n}\n"))),(0,o.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("p",null,"In Python, there is only the global context. You can't specify a JIT context. Prefab fetches evaluated feature flags based on the context you provided."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from prefab_cloud_python import Options, Client, Context\n\ncontext = {\n    "user": {\n        "key": 123,\n        "subscription_level": "pro",\n        "email": "bob@example.com"\n    },\n    "team": {\n        "key": 432,\n    },\n    "device": {\n        "key": "abcdef",\n        "mobile": False\n    }\n}\n\nshared_context = Context(context)\n\nprefab = Client(Options())\n\nContext.set_current(shared_context)\n\nprefab.enabled("my-first-feature-flag")\n')))),(0,o.kt)("h2",{id:"context-keys"},"Context keys"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"key")," is special")),(0,o.kt)("p",{parentName:"admonition"},"The key is the one special attribute of a context. It should be the unchanging, primary key of whatever your context is. For a user, that's likely the tracking ID set when you first saw them. For a team, it's probably the primary key of the table. For a Kubernetes pod, the pod id. Key is the handle Prefab if you want to add this context entity to a feature flag."),(0,o.kt)("p",{parentName:"admonition"},"It's ok if there isn't a good key. If you add ",(0,o.kt)("inlineCode",{parentName:"p"},"{cloud: {region: us-east, availability-zone: us-east-1a}}"),", you'll be able to target ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud.region")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud.availability-zone")," with rules. If you add ",(0,o.kt)("inlineCode",{parentName:"p"},'cloud.key: "i-1234567890abcdef0"')," you'll additionally be able to search for this context entity in context search tool."),(0,o.kt)("p",{parentName:"admonition"},"If you provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," attributes (as a sibling to ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),'), it will be used in the Prefab UI to display the context entity as a "friendly" alternative to ',(0,o.kt)("inlineCode",{parentName:"p"},"key"),". If you don't provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", Prefab will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," as the display name.")),(0,o.kt)("h2",{id:"dot-notation"},"Dot notation"),(0,o.kt)("p",null,"When referencing fields from context, we use dot notation."),(0,o.kt)("p",null,"Given the context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'{\n  user: {\n    key: "1234",\n    email: "test@example.com",\n  },\n\n  device: {\n    key: "abcd123e-a123-bcFG-d123",\n    mobile: true,\n  },\n}\n')),(0,o.kt)("p",null,"You can reference ",(0,o.kt)("inlineCode",{parentName:"p"},"user.key")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"device.mobile")," in the property field in the UI."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"dot notation in UI",src:n(2215).Z,width:"1912",height:"340"})),(0,o.kt)("h2",{id:"advanced-adding-to-and-merging-contexts"},"Advanced: Adding to and Merging Contexts"),(0,o.kt)("p",null,"If you provide a context that conflicts with an existing context, your new context values will clobber any previous value."),(0,o.kt)("p",null,'Let\'s use this example as our initial context. It has two contexts: "request" and "subscription".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "mobile": true,\n    "country": "US"\n  },\n  "subscription": {\n    "key": "s_123",\n    "allow_overages": false,\n    "plan": "Pro"\n  }\n}\n')),(0,o.kt)("p",null,'If we set the "request" context to ',(0,o.kt)("inlineCode",{parentName:"p"},'{ key: "f1e6461a", type: "iPhone" }')," then we lose the ",(0,o.kt)("inlineCode",{parentName:"p"},"mobile")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"country"),' attributes of our "request" context. Our current context is now'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "key": "f1e6461a",\n    "device_type": "iPhone"\n  },\n  "subscription": {\n    "key": "s_123",\n    "allow_overages": false,\n    "plan": "Pro"\n  }\n}\n')),(0,o.kt)("p",null,"If we provide Just-In-Time (JIT) context to our flag evaluation call, then the JIT keys clobber the current context keys only for the duration of the evaluation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'jit_context = {\n  subscription: { allow_overages: true },\n  user: { admin: true }\n}\n\nPrefab.enabled?("my.flag.name", jit_context)\n')),(0,o.kt)("p",null,"That ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled?")," check uses this context"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "key": "f1e6461a",\n    "type": "iPhone"\n  },\n  "subscription": { "allow_overages": true },\n  "user": { "admin": true }\n}\n')),(0,o.kt)("p",null,"But then the current context after that evaluation is still"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "key": "f1e6461a",\n    "type": "iPhone"\n  },\n  "subscription": {\n    "key": "s_123",\n    "allow_overages": false,\n    "plan": "Pro"\n  }\n}\n')),(0,o.kt)("p",null,"You can, of course, do your own merging before re-setting the context key."))}m.isMDXComponent=!0},2215:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dot-notation-79a9f5bbe65d2b1fa320a8117b66bc71.png"}}]);