"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[5090],{1166:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var s=o(4848),i=o(8453);const n={title:"Editor Tools",sidebar_label:"Editor Tools"},r=void 0,l={id:"tools/editor-tools",title:"Editor Tools",description:"VSCode",source:"@site/docs/tools/editor-tools.md",sourceDirName:"tools",slug:"/tools/editor-tools",permalink:"/docs/tools/editor-tools",draft:!1,unlisted:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/tools/editor-tools.md",tags:[],version:"current",frontMatter:{title:"Editor Tools",sidebar_label:"Editor Tools"},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/docs/tools/cli"},next:{title:"Slack Integration",permalink:"/docs/tools/slack-integration"}},a={},d=[{value:"VSCode",id:"vscode",level:2},{value:"Features",id:"features",level:2},{value:"Autocompletion",id:"autocompletion",level:3},{value:"Hover",id:"hover",level:3},{value:"Personal Overrides",id:"personal-overrides",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",...(0,i.R)(),...e.components},{Button:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"vscode",children:"VSCode"}),"\n",(0,s.jsxs)(t.p,{children:["You can install the extension by pressing ",(0,s.jsx)(t.code,{children:"cmd+shift+x"})," to open the extensions sidebar. search for Prefab and click install. Alternatively, you can use the ",(0,s.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=Prefab.prefab-editor-tools",children:"extension marketplace"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image",src:o(4703).A+"",width:"1958",height:"972"})}),"\n",(0,s.jsxs)(t.p,{children:["You\u2019ll need to enter a production API key. The extension will read your ",(0,s.jsx)(t.code,{children:".env"})," or ",(0,s.jsx)(t.code,{children:".envrc"})," file to find ",(0,s.jsx)(t.code,{children:"PREFAB_API_KEY"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Alternatively, you can find settings for the extension by clicking on the gear on the Prefab extension and choosing \u201cExtension Settings\u201d."}),"\n",(0,s.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(t.h3,{id:"autocompletion",children:"Autocompletion"}),"\n",(0,s.jsxs)(t.p,{children:["Just start typing and you'll see your flag and config keys autocomplete. Create simple boolean flags with one click if the flag doesn't exist yet.\n",(0,s.jsx)(t.img,{alt:"image",src:o(5738).A+"",width:"640",height:"360"})]}),"\n",(0,s.jsx)(t.h3,{id:"hover",children:"Hover"}),"\n",(0,s.jsxs)(t.p,{children:["Hovering over a configuration or flag will show you the current values of the flag in all environments. If it has been deployed and had time to send back evaluation telemetry, you'll also see evaluation data for the flag.\n",(0,s.jsx)(t.img,{alt:"image",src:o(7787).A+"",width:"990",height:"606"})]}),"\n",(0,s.jsx)(t.h3,{id:"personal-overrides",children:"Personal Overrides"}),"\n",(0,s.jsxs)(t.p,{children:["Personal overrides allow you to override a feature flag for your local development environment. This is useful for testing a feature flag without changing the flag for other developers. To do this, make sure that you've generated your own ",(0,s.jsx)(t.code,{children:"PREFAB_API_KEY"})," for development. API keys are tied to your account which lets Prefab set the override for you. Overrides are simple rule matches to a ",(0,s.jsx)(t.code,{children:"prefab.user-id"})," context key that Prefab sets for you. This is visible in the Prefab UI.\n",(0,s.jsx)(t.img,{alt:"image",src:o(4954).A+"",width:"640",height:"360"})]}),"\n",(0,s.jsxs)("div",{className:"flex flex-col gap-4 md:gap-8 items-center",children:[(0,s.jsx)("div",{className:"text-lg md:text-2xl font-bold text-center",children:(0,s.jsx)(t.p,{children:"Use Vim or a Jetbrains IDE?"})}),(0,s.jsx)(n,{label:"Get Notified When We Add Your Editor",href:"https://share.hsforms.com/1WGgDPf6pQp-6y7oT4ZMiFA9z48"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5738:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/lsp-autocomplete-d670602ce61f6c535db51a76d26c5e01.gif"},4954:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/lsp-personal-be89c0067fc14e923489f571e637859b.gif"},7787:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/lsp-puma-hover-4beafe4c4de3b9820e4c1b5c825cfb89.jpg"},4703:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/vscode-install-bb2fb4ef8a73cadd0916e54c47459c0d.jpg"},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>l});var s=o(6540);const i={},n=s.createContext(i);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);