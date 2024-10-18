"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[8426],{6612:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(4848),o=t(8453);const a={title:"How Frontend SDKs Work",sidebar_label:"Frontend SDKs",sidebar_position:2},i=void 0,r={id:"explanations/concepts/frontend-sdks",title:"How Frontend SDKs Work",description:"Frontend Architecture",source:"@site/docs/explanations/concepts/frontend-sdks.md",sourceDirName:"explanations/concepts",slug:"/explanations/concepts/frontend-sdks",permalink:"/docs/explanations/concepts/frontend-sdks",draft:!1,unlisted:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/explanations/concepts/frontend-sdks.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How Frontend SDKs Work",sidebar_label:"Frontend SDKs",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Backend SDKs",permalink:"/docs/explanations/concepts/backend-sdks"},next:{title:"Context",permalink:"/docs/explanations/concepts/context"}},l={},c=[{value:"Frontend Architecture",id:"frontend-architecture",level:2},{value:"Client Side Reliability",id:"client-side-reliability",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"frontend-architecture",children:"Frontend Architecture"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:'To prevent accidentally leaking sensitive config information, frontend SDKs do not receive Configs by default. You can enable frontend availability for any individual config using the "Send to frontend SDKs" checkbox in the Prefab UI.'})}),"\n",(0,s.jsx)(n.p,{children:"The frontend architecture has different goals and operating characteristics from the backend SDKs. The goals of the clients are:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Make lookups as fast as possible"}),"\n",(0,s.jsx)(n.li,{children:"Don't leak raw configuration data to the end user"}),"\n",(0,s.jsx)(n.li,{children:"Give clear and configurable behavior options if a connection cannot be made"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"With those goals in mind, the architecture is:"}),"\n",(0,s.jsx)(n.mermaid,{value:'flowchart TB\n\n    subgraph Prefab\n        direction LR\n        CDN\n        GDN["Global Delivery Network (belt)"]\n        API["API (suspenders)"]\n\n        GoogleSpanner[("Google Spanner")]\n    end\n\n    subgraph "Your JS app"\n        subgraph "Your Code"\n            setup\n            code["prefab.enabled?(my-flag)"]\n        end\n\n        subgraph "Prefab Frontend SDK"\n            init\n            ResultsCache["Cached evaluated flags for user"]\n            ResultsCache --\x3e code\n            code --\x3e ResultsCache\n        end\n    end\n\n    setup -- Context + API Key--\x3e init\n    init --belt--\x3e CDN\n    init -.suspenders.-> CDN\n    CDN -.suspenders miss.-> API\n    CDN -.belt miss.-> GDN\n    API --suspenders update--\x3e CDN\n    GDN --belt update--\x3e CDN\n    CDN --\x3e ResultsCache\n    API --\x3e GoogleSpanner\n    GoogleSpanner --\x3e API'}),"\n",(0,s.jsx)(n.p,{children:'Usually, clients make a single request and receive the values of all evaluated Feature Flags for a given context. For reliability, the client uses a belt-and-suspenders approach, so if the "belt" request isn\'t timely, we\'ll fall back to the "suspenders" endpoint.'}),"\n",(0,s.jsx)(n.p,{children:"If you change a context\u2019s attributes and re-initialize the client, we'll re-fetch the flags for that context."}),"\n",(0,s.jsxs)(n.p,{children:["Note that ",(0,s.jsx)(n.strong,{children:"evaluation happens server side"}),". This prevents your potentially sensitive rule data from leaking to an untrusted browser. For example, if you\nhave a ",(0,s.jsx)(n.code,{children:"special-feature"})," released to a list of customer IDs, the browser will only see ",(0,s.jsx)(n.code,{children:"special-feature: false"}),", not the list of your special customer IDs."]}),"\n",(0,s.jsx)(n.p,{children:"The client will be returned a list that is basically:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "feature.exp12-big-button": "control",\n  "feature.exp14-button-class": "very-blue",\n  "feature.risky-business": true\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/explanations/concepts/backend-sdks",children:"backend SDKs"})," to compare this approach to in-memory rule evaluation."]}),"\n",(0,s.jsx)(n.h2,{id:"client-side-reliability",children:"Client Side Reliability"}),"\n",(0,s.jsx)(n.p,{children:'The "belt" is a globally distributed service that serves evaluations near your users to keep latency low. The "suspenders" is a global API that serves evaluations if the belt is down.'}),"\n",(0,s.jsx)(n.p,{children:"Each end-user that needs flags evaluated is a different request to Prefab. So what happens if Prefab's belt and suspenders are both down?"}),"\n",(0,s.jsxs)(n.p,{children:["First, the good news. All ",(0,s.jsx)(n.strong,{children:"active"})," users will be unaffected because they will have cached values in the CDN.\nIf you make a change to your feature flags, it won't be reflected, but logged-in users will be served the most\nrecent evaluation of the flags."]}),"\n",(0,s.jsxs)(n.p,{children:["The less good news is that if a ",(0,s.jsx)(n.a,{href:"/docs/explanations/concepts/context",children:"context"})," that has not been seen before asks for evaluation, it will not have been cached. After a configurable timeout, the client will fall back to default values.\nWithout values, your ",(0,s.jsx)(n.code,{children:"isEnabled"})," checks will return ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Frontend config will return ",(0,s.jsx)(n.code,{children:"undefined"}),", and you can use the pattern ",(0,s.jsx)(n.code,{children:'prefab.get("thing") ?? "this-is-my-default"'})," to set a default."]}),"\n",(0,s.jsxs)(n.p,{children:["The default timeout is ",(0,s.jsx)(n.code,{children:"10"})," seconds, but you can set this in client initialization."]}),"\n",(0,s.jsxs)(n.p,{children:["You can run your own JS/React evaluation endpoint using the prefab CLI's ",(0,s.jsx)(n.a,{href:"/docs/tools/cli#download",children:"download"})," and ",(0,s.jsx)(n.a,{href:"/docs/tools/cli#serve",children:"serve"})," commands (",(0,s.jsx)(n.a,{href:"/docs/how-tos/offline-mode",children:"read more in our offline mode documentation"}),"). We also support ",(0,s.jsx)(n.a,{href:"/docs/explanations/concepts/zero-ms-frontend-feature-flags",children:"zero-ms feature flags and configs"})," in some Backend SDKs. If you have questions about this or our reliability roadmap, contact us, and we'll share what we're working on."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(6540);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);