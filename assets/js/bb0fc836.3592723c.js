"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={title:"Context",sidebar_label:"Context",sidebar_position:3},l=void 0,i={unversionedId:"explanations/concepts/context",id:"explanations/concepts/context",title:"Context",description:"Contexts let you provide Prefab with knowledge about the current",source:"@site/docs/explanations/concepts/context.md",sourceDirName:"explanations/concepts",slug:"/explanations/concepts/context",permalink:"/docs/explanations/concepts/context",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/explanations/concepts/context.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Context",sidebar_label:"Context",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Client SDKs",permalink:"/docs/explanations/concepts/client-sdks"},next:{title:"Default Files",permalink:"/docs/explanations/concepts/defaults"}},s={},p=[{value:"Global context",id:"global-context",level:2},{value:"Dot notation",id:"dot-notation",level:2},{value:"Adding to and merging contexts",id:"adding-to-and-merging-contexts",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=c("Tabs"),d=c("TabItem"),f={toc:p},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,o.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Contexts let you provide Prefab with knowledge about the current"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"request"),(0,r.kt)("li",{parentName:"ul"},"device"),(0,r.kt)("li",{parentName:"ul"},"user"),(0,r.kt)("li",{parentName:"ul"},"server"),(0,r.kt)("li",{parentName:"ul"},"etc.")),(0,r.kt)("p",null,"Contexts allow you to set this knowledge to be used when evaluating feature flags, configs, and ",(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/features/targeted-log-levels"},"targeted log levels")," without having to pass your context data deeply around your app."),(0,r.kt)("p",null,"In a web app, the life-cycle of contexts are the life-cycle of the request. You set context at the beginning of the request and then it is cleared out when the request finishes."),(0,r.kt)("p",null,"For feature flags, context usage is optional but a useful ergonomic -- you can always pass in your context just-in-time to your FF evaluations."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To have your Contexts be searchable in Prefab, be sure to include a ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," field for each context. For the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," context, you might specify ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," as your user's unique ",(0,r.kt)("inlineCode",{parentName:"p"},"tracking_id"),".")),(0,r.kt)("p",null,"For usage examples, see your relevant SDK client documentation."),(0,r.kt)("h2",{id:"global-context"},"Global context"),(0,r.kt)("p",null,"To avoid deeply passing around awareness of the current user, request, etc., Prefab allows you to set Context globally. The mechanisms for doing so will vary by language and framework."),(0,r.kt)("p",null,"When global context is set, log levels and feature flags will evaluate in that context. If you provide just-in-time context to your FF evaluations, it will be merged with the global context. More on merging below."),(0,r.kt)(u,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(d,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("p",null,"We can use a block to specify the context for the duration of the block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'context = { device: { key: "abcdef", mobile: mobile? } }\n\n$prefab.with_context(context) do\n  # ...\nend\n'))),(0,r.kt)(d,{value:"ror",label:"Ruby on Rails",mdxType:"TabItem"},(0,r.kt)("p",null,"We can use an ",(0,r.kt)("inlineCode",{parentName:"p"},"around_action")," to set our context for the life-cycle of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'\nclass ApplicationController < ActionController::Base\n  around_action :set_prefab_context\n\n  def set_prefab_context\n    $prefab.with_context(context) do\n      yield\n    end\n  end\n\n  def context\n    {\n      device: {\n        key: "abcdef",\n        mobile: mobile?\n      }\n      user: current_user&.to_context\n      # ...\n    }\n  end\nend\n\n')),(0,r.kt)("p",null,"Learn more with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/example-rails-app"},"Prefab + Rails example app"))),(0,r.kt)(d,{value:"micronaut",label:"Micronaut",mdxType:"TabItem"},(0,r.kt)("p",null,"In your Prefab options, set your Prefab Context store to be your ServerRequestContextStore."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"options.setContextStore(new ServerRequestContextStore());\n")),(0,r.kt)("p",null,"Next we add a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/example-micronaut-app/blob/configure-prefab-context/src/main/java/com/example/prefab/PrefabContextFilter.java"},"filter"),' to add a prefab context based on the currently "logged in" user.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'configClient.getContextStore()\n      .addContext(PrefabContext.newBuilder("user")\n          .put("key", user.key())\n          .put("country", user.country())\n          .put("email", user.email())\n          .build()\n      );\n')),(0,r.kt)("p",null,"Learn more with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/example-micronaut-app"},"Prefab + Micronaut example app"))),(0,r.kt)(d,{value:"dropwizard",label:"Dropwizard",mdxType:"TabItem"},(0,r.kt)("p",null,"Use a ",(0,r.kt)("inlineCode",{parentName:"p"},"ContainerRequestFilter")," to set the context for your request when the request begins"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class PrefabContextAddingRequestFilter implements ContainerRequestFilter {\n    private static final Logger LOGGER = LoggerFactory.getLogger(PrefabContextAddingRequestFilter.class);\n    private final ConfigClient configClient;\n\n    @Inject\n    public PrefabContextAddingRequestFilter(ConfigClient configClient) {\n        this.configClient = configClient;\n    }\n\n    @Override\n    public void filter(ContainerRequestContext containerRequestContext) throws IOException {\n        final SecurityContext securityContext =\n                containerRequestContext.getSecurityContext();\n        if (securityContext != null) {\n            Principal principal = securityContext.getUserPrincipal();\n            if (principal instanceof User) {\n                User user = (User) principal;\n                LOGGER.info("will add pf context for {}", user);\n                configClient.getContextStore().addContext(PrefabContext.newBuilder("User")\n                        .put("name", user.getName())\n                        .put("key", user.getKey())\n                        .build());\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Then we'll add another ",(0,r.kt)("inlineCode",{parentName:"p"},"ContainerResponseFilter")," to clear the context when the request finishes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class PrefabContexClearingResponseFilter implements ContainerResponseFilter {\n    private static final Logger LOGGER = LoggerFactory.getLogger(PrefabContexClearingResponseFilter.class);\n    private final ConfigClient configClient;\n\n    @Inject\n    PrefabContexClearingResponseFilter(ConfigClient configClient) {\n        this.configClient = configClient;\n    }\n\n    @Override\n    public void filter(ContainerRequestContext containerRequestContext, ContainerResponseContext containerResponseContext) throws IOException {\n        configClient.getContextStore().clearContexts();\n        LOGGER.info("Cleared context");\n    }\n}\n')),(0,r.kt)("p",null,"Learn more with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prefab-cloud/example-dropwizard-app"},"Prefab + Dropwizard example app")))),(0,r.kt)("h2",{id:"dot-notation"},"Dot notation"),(0,r.kt)("p",null,"When referencing fields from context, we use dot notation."),(0,r.kt)("p",null,"Given the context"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'{\n  user: {\n    email: "test@example.com",\n    key: user.tracking_id,\n  },\n\n  device: {\n    key: "hijklm",\n    mobile: true,\n  },\n}\n')),(0,r.kt)("p",null,"You can reference mobile as ",(0,r.kt)("inlineCode",{parentName:"p"},"device.mobile")," and tracking_id as ",(0,r.kt)("inlineCode",{parentName:"p"},"user.key")," in the property field in the UI."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dot notation in UI",src:n(2215).Z,width:"1132",height:"197"})),(0,r.kt)("h2",{id:"adding-to-and-merging-contexts"},"Adding to and merging contexts"),(0,r.kt)("p",null,"Contexts have keys. When you provide a key that conflicts with an existing context key, your new context values will clobber any previous values under that key."),(0,r.kt)("p",null,'Let\'s use this example as our initial context. It has two keys: "request" and "subscription"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  request: {\n    mobile: true,\n    country: "US"\n  },\n  subscription: {\n    allow_overages: false,\n    plan: "Pro"\n  }\n}\n')),(0,r.kt)("p",null,'If we set the "request" context to ',(0,r.kt)("inlineCode",{parentName:"p"},'{ key: "f1e6461a" }')," then we lose the ",(0,r.kt)("inlineCode",{parentName:"p"},"mobile")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"country"),' attributes of our "request" context. Our current context is now'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  request: {\n    key: "f1e6461a"\n  },\n  subscription: {\n    allow_overages: false,\n    plan: "Pro"\n  }\n}\n')),(0,r.kt)("p",null,"If we provide JIT context to a flag then the JIT keys clobber the current context keys only for the duration of the evaluation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'jit_context = {\n  subscription: { allow_overages: true },\n  user: { admin: true }\n}\n\n$prefab.enabled?("my.flag.name", jit_context)\n')),(0,r.kt)("p",null,"That ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled?")," check uses this context"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  request: { key: "f1e6461a" },\n  subscription: { allow_overages: true },\n  user: { admin: true }\n}\n')),(0,r.kt)("p",null,"But then the current context after that evaluation is still"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  request: {\n    key: "f1e6461a"\n  },\n  subscription: {\n    allow_overages: false,\n    plan: "Pro"\n  }\n}\n')),(0,r.kt)("p",null,"You can, of course, do your own merging before re-setting the context key."))}b.isMDXComponent=!0},2215:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dot-notation-9d1f20824de800a311f6018055d0b024.png"}}]);