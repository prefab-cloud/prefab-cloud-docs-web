"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[9149],{7741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(4848),a=n(8453);const o={title:"DataFiles",sidebar_label:"DataFiles",sidebar_position:5},s=void 0,l={id:"explanations/concepts/datafiles",title:"DataFiles",description:"Prefab supports offline mode and easy automated testing by using datafiles.",source:"@site/docs/explanations/concepts/datafiles.md",sourceDirName:"explanations/concepts",slug:"/explanations/concepts/datafiles",permalink:"/docs/explanations/concepts/datafiles",draft:!1,unlisted:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/explanations/concepts/datafiles.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"DataFiles",sidebar_label:"DataFiles",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Context",permalink:"/docs/explanations/concepts/context"},next:{title:"Testing",permalink:"/docs/explanations/concepts/testing"}},r={},d=[{value:"Using Datafiles for offline mode",id:"using-datafiles-for-offline-mode",level:2},{value:"Testing with Datafiles",id:"testing-with-datafiles",level:2},{value:"Using Datafiles in Docker Builds",id:"using-datafiles-in-docker-builds",level:2},{value:"Keeping The Datafile Up To Date",id:"keeping-the-datafile-up-to-date",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Prefab supports offline mode and easy automated testing by using datafiles."}),"\n",(0,i.jsxs)(t.p,{children:["When specifying a datafile via ",(0,i.jsx)(t.code,{children:"PREFAB_DATAFILE"})," (or the ",(0,i.jsx)(t.code,{children:"datafile"})," option), Prefab will use the datafile for all configurations instead of contacting the server and will run in ",(0,i.jsx)(t.code,{children:"local-only"})," mode."]}),"\n",(0,i.jsx)(t.p,{children:"The datafile is a JSON representation of all your configuration for an environment. It is human-readable, but we recommend using the Prefab CLI to generate it rather than editing it by hand."}),"\n",(0,i.jsx)(t.h2,{id:"using-datafiles-for-offline-mode",children:"Using Datafiles for offline mode"}),"\n",(0,i.jsxs)(t.p,{children:["Datafiles can enable Prefab usage in completely offline or on-premises feature flag and config evaluations. For full details, see the ",(0,i.jsx)(t.a,{href:"../../how-tos/offline-mode",children:"offline mode"})," docs."]}),"\n",(0,i.jsx)(t.h2,{id:"testing-with-datafiles",children:"Testing with Datafiles"}),"\n",(0,i.jsx)(t.p,{children:"To get started with a datafile:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Create an Environment in the Prefab UI"}),"\n",(0,i.jsx)(t.li,{children:"Generate a datafile for that environment using the Prefab CLI"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"prefab download --environment test\n# writes prefab.test.108.config.json\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Add the datafile to git ",(0,i.jsx)(t.code,{children:"git add prefab.test.108.config.json"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Set ",(0,i.jsx)(t.code,{children:"PREFAB_DATAFILE=prefab.test.108.config.json"})," in your CI environment."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"using-datafiles-in-docker-builds",children:"Using Datafiles in Docker Builds"}),"\n",(0,i.jsxs)(t.p,{children:["Datafiles can also be helpful in Docker builds or other environments where you want to avoid reaching out to Prefab. A common pattern is to use this for ",(0,i.jsx)(t.code,{children:"assets:precompile"})," in a Ruby on Rails application. That often looks like this:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"RUN RAILS_ENV=production PREFAB_DATAFILE=prefab.test.108.config.json bundle exec rake assets:precompile "})}),"\n",(0,i.jsx)(t.p,{children:"If you don't want the test data there, you could also create another environment called 'docker-build' with any other configuration you want and use the CLI to download that as well."}),"\n",(0,i.jsx)(t.h2,{id:"keeping-the-datafile-up-to-date",children:"Keeping The Datafile Up To Date"}),"\n",(0,i.jsx)(t.p,{children:"The CLI download will take a snapshot of the configuration at a given moment, but it won't keep it current. As you add configuration or feature flags that you need to test, you'll need to update the datafile by re-running the CLI command and committing the new datafile."})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(6540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);