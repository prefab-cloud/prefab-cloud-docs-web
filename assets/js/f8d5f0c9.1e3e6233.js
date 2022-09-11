"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[462],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>d});var t=r(7294);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(r),d=l,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||a;return r?t.createElement(m,o(o({ref:n},p),{},{components:r})):t.createElement(m,o({ref:n},p))}));function d(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},964:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=r(7462),l=(r(7294),r(3905));const a={title:"Dynamic Log Levels",sidebar_label:"Dynamic Log Levels"},o=void 0,i={unversionedId:"ruby-sdk/dynamic-log-levels",id:"ruby-sdk/dynamic-log-levels",title:"Dynamic Log Levels",description:"Setting Dynamic Log Levels",source:"@site/docs/ruby-sdk/dynamic-log-levels.md",sourceDirName:"ruby-sdk",slug:"/ruby-sdk/dynamic-log-levels",permalink:"/docs/ruby-sdk/dynamic-log-levels",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/ruby-sdk/dynamic-log-levels.md",tags:[],version:"current",frontMatter:{title:"Dynamic Log Levels",sidebar_label:"Dynamic Log Levels"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/ruby-sdk/ruby"},next:{title:"Tracking IDs",permalink:"/docs/ruby-sdk/tracking-ids"}},s={},c=[{value:"Setting Dynamic Log Levels",id:"setting-dynamic-log-levels",level:2}],p={toc:c};function u(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"setting-dynamic-log-levels"},"Setting Dynamic Log Levels"),(0,l.kt)("p",null,"An simple example here is worth a million words. "),(0,l.kt)("p",null,"First add a simple controller."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},'class PrefabController < ApplicationController\n  def index\n    Rails.logger.warn "warn level logging"\n    Rails.logger.info "info level logging"\n    Rails.logger.debug "debug level logging"\n  end\nend\n')),(0,l.kt)("p",null,"Next, we'll set the Rails logger to use our logger"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"#application.rb\n$prefab = Prefab::Client.new\nRails.logger = $prefab.log\n")),(0,l.kt)("p",null,"Finally we can start adjusting log levels. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"#.prefab.default.config.yaml\nlog_level:\n  _: debug\n  prefab: debug\n  app.controllers.prefab_controller: debug\n")),(0,l.kt)("p",null,"Our results speak for themselves. You can see that we've enabled debug logging for the prefab internals, rails internals and our application code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'DEBUG 2022-09-06 13:01:54 -0400: prefab.config.sse:  Received event: #<struct SSE::StreamEvent type=:message, id=nil, last_event_id=nil>\nDEBUG 2022-09-06 13:01:54 -0400: prefab.config_client.load_configs:  Checkpoint with highwater id 16621316872267098 from sse. No changes.\nDEBUG 2022-09-06 13:02:03 -0400:  active_support.log_subscriber.debug:    (1.0ms)  SELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC\nDEBUG 2022-09-06 13:02:03 -0400:  active_record.log_subscriber.log_query_source:   \u21b3 /Users/...\nWARN  2022-09-06 13:02:03 -0400:  app.controllers.prefab_controller.index: warn level logging\nINFO  2022-09-06 13:02:03 -0400:  app.controllers.prefab_controller.index: info level logging\nDEBUG 2022-09-06 13:02:03 -0400:  app.controllers.prefab_controller.index: debug level logging\nDEBUG 2022-09-06 13:02:03 -0400:  active_record.log_subscriber.log_query_source:   \u21b3 app/views/layouts/application.html.haml:47\nINFO  2022-09-06 13:05:17 -0400:  lograge.log_subscriber.process_action: method=GET path=/prefab format=html controller=PrefabController action=index status=200 duration=151.10 view=141.43 db=6.20\n')),(0,l.kt)("p",null,"If we set our levels to ",(0,l.kt)("inlineCode",{parentName:"p"},"info"),", we see much less logging."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"#.prefab.default.config.yaml\nlog_level:\n  _: info\n  prefab: info\n  app.controllers.prefab_controller: info\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"INFO  2022-09-06 13:05:17 -0400:  app.controllers.prefab_controller.index: info level logging\nINFO  2022-09-06 13:05:17 -0400:  lograge.log_subscriber.process_action: method=GET path=/prefab format=html controller=PrefabController action=index status=200 duration=151.10 view=141.43 db=6.20\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If the values are in your ",(0,l.kt)("inlineCode",{parentName:"p"},".prefab.default.config.yaml")," you'll need to restart the server to see new values. If you change these values on the server, they will update automatically."))),(0,l.kt)("p",null,"Now we are free to adjust our log levels, down to the controller or method level in realtime. Invaluable for debugging!"),(0,l.kt)("p",null,"Enjoy!"))}u.isMDXComponent=!0}}]);