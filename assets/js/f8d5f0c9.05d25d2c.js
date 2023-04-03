"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[462],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||l;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},964:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={title:"Dynamic Log Levels",sidebar_label:"Dynamic Log Levels"},o=void 0,i={unversionedId:"ruby-sdk/dynamic-log-levels",id:"ruby-sdk/dynamic-log-levels",title:"Dynamic Log Levels",description:"Setting Dynamic Log Levels",source:"@site/docs/ruby-sdk/dynamic-log-levels.md",sourceDirName:"ruby-sdk",slug:"/ruby-sdk/dynamic-log-levels",permalink:"/docs/ruby-sdk/dynamic-log-levels",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/ruby-sdk/dynamic-log-levels.md",tags:[],version:"current",frontMatter:{title:"Dynamic Log Levels",sidebar_label:"Dynamic Log Levels"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/ruby-sdk/ruby"},next:{title:"Tracking IDs",permalink:"/docs/ruby-sdk/tracking-ids"}},s={},c=[{value:"Setting Dynamic Log Levels",id:"setting-dynamic-log-levels",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setting-dynamic-log-levels"},"Setting Dynamic Log Levels"),(0,a.kt)("p",null,"A simple example here is worth a million words. "),(0,a.kt)("p",null,"First add a simple controller."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'class PrefabController < ApplicationController\n  def index\n    Rails.logger.warn "warn level logging"\n    Rails.logger.info "info level logging"\n    Rails.logger.debug "debug level logging"\n\n    render plain: "Loaded. Check your logs."\n  end\nend\n')),(0,a.kt)("p",null,"Next, we'll set the Rails logger to use our logger"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"#application.rb\n$prefab = Prefab::Client.new\n$prefab.set_rails_loggers\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/ruby-sdk/ruby#special-considerations-with-forking-servers-like-puma--unicorn-that-use-workers"},"Puma/Unicorn")," notes for special considerations with forking servers."))),(0,a.kt)("p",null,"Finally we can start adjusting log levels. For convenience, we'll set these in our local defaults (",(0,a.kt)("a",{parentName:"p",href:"/docs/explanations/defaults"},"learn more"),") but you can set and tweak these on-the-fly in the Prefab web app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#.prefab.default.config.yaml\nlog-level:\n  _: debug\n  cloud.prefab: debug\n  app.controllers.prefab_controller: debug\n")),(0,a.kt)("p",null,"Our results speak for themselves. You can see that we've enabled debug for the prefab internals, rails internals and our application code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'DEBUG 2022-09-06 13:01:54 -0400: cloud.prefab.client.sse:  Received event: #<struct SSE::StreamEvent type=:message, id=nil, last_event_id=nil>\nDEBUG 2022-09-06 13:01:54 -0400: cloud.prefab.client.load_configs:  Checkpoint with highwater id 16621316872267098 from sse. No changes.\nDEBUG 2022-09-06 13:02:03 -0400:  active_support.log_subscriber.debug:    (1.0ms)  SELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC\nDEBUG 2022-09-06 13:02:03 -0400:  active_record.log_subscriber.log_query_source:   \u21b3 /Users/...\nWARN  2022-09-06 13:02:03 -0400:  app.controllers.prefab_controller.index: warn level logging\nINFO  2022-09-06 13:02:03 -0400:  app.controllers.prefab_controller.index: info level logging\nDEBUG 2022-09-06 13:02:03 -0400:  app.controllers.prefab_controller.index: debug level logging\nDEBUG 2022-09-06 13:02:03 -0400:  active_record.log_subscriber.log_query_source:   \u21b3 app/views/layouts/application.html.haml:47\nINFO  2022-09-06 13:05:17 -0400:  lograge.log_subscriber.process_action: method=GET path=/prefab format=html controller=PrefabController action=index status=200 duration=151.10 view=141.43 db=6.20\n')),(0,a.kt)("p",null,"If we set our levels to ",(0,a.kt)("inlineCode",{parentName:"p"},"info"),", we see much less logging."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#.prefab.default.config.yaml\nlog-level:\n  _: info\n  cloud.prefab: info\n  app.controllers.prefab_controller: info\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"INFO  2022-09-06 13:05:17 -0400:  app.controllers.prefab_controller.index: info level logging\nINFO  2022-09-06 13:05:17 -0400:  lograge.log_subscriber.process_action: method=GET path=/prefab format=html controller=PrefabController action=index status=200 duration=151.10 view=141.43 db=6.20\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If the values are in your ",(0,a.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")," you'll need to restart the server to see new values. If you change these values on the server, they will update automatically."))),(0,a.kt)("p",null,"Now we are free to adjust our log levels, down to the controller or method level in realtime. Invaluable for debugging!"),(0,a.kt)("p",null,"Enjoy!"))}d.isMDXComponent=!0}}]);