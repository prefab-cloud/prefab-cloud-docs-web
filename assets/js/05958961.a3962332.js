"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[7719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,b=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(b,r(r({ref:t},p),{},{components:n})):a.createElement(b,r({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={title:"Testing & DataFiles",sidebar_label:"Testing & DataFiles",sidebar_position:5},r=void 0,s={unversionedId:"explanations/concepts/testing",id:"explanations/concepts/testing",title:"Testing & DataFiles",description:"Our SDKs and Clients have library and language-specific testing advice. For specific details, refer to the docs for the SDK or client you're using.",source:"@site/docs/explanations/concepts/testing.md",sourceDirName:"explanations/concepts",slug:"/explanations/concepts/testing",permalink:"/docs/explanations/concepts/testing",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/explanations/concepts/testing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Testing & DataFiles",sidebar_label:"Testing & DataFiles",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Context",permalink:"/docs/explanations/concepts/context"},next:{title:"JavaScript SSR & Hybrid Apps",permalink:"/docs/explanations/concepts/SSR-and-hybrid-apps"}},l={},c=[{value:"Best Practices For Testing",id:"best-practices-for-testing",level:3},{value:"Mocking",id:"mocking",level:2},{value:"Backend SDKs",id:"backend-sdks",level:3},{value:"Frontend Libraries",id:"frontend-libraries",level:3},{value:"Testing with DataFiles",id:"testing-with-datafiles",level:2},{value:"Keeping The Datafile Up To Date",id:"keeping-the-datafile-up-to-date",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=p("Tabs"),u=p("TabItem"),f={toc:c},b="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Our SDKs and Clients have library and language-specific testing advice. For specific details, refer to the docs for the SDK or client you're using.")),(0,i.kt)("p",null,"Testing is a first-class citizen in Prefab. We've designed Prefab in a way that makes it easy to test your code that uses Prefab."),(0,i.kt)("h3",{id:"best-practices-for-testing"},"Best Practices For Testing"),(0,i.kt)("p",null,"The best practice for testing is to create a test environment and use a datafile for the bulk of your configuration. A datafile is a JSON snapshot of your configuration which allows the Prefab client to boot up in a consistent state without talking to the Prefab server."),(0,i.kt)("p",null,"You can then use mocking to override specific values as needed, when you are testing the behavior of a specific feature flag or config."),(0,i.kt)("h2",{id:"mocking"},"Mocking"),(0,i.kt)("h3",{id:"backend-sdks"},"Backend SDKs"),(0,i.kt)("p",null,"The primary way to test Prefab is by mocking out calls to Prefab. Here are some examples:"),(0,i.kt)(d,{groupId:"lang",mdxType:"Tabs"},(0,i.kt)(u,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Test\nvoid testPrefab(){\n  ConfigClient mockConfigClient = mock(ConfigClient.class);\n  when(mockConfigClient.liveString("sample.string")).thenReturn(FixedValue.of("test value"));\n  when(mockConfigClient.liveLong("sample.long")).thenReturn(FixedValue.of(123L));\n\n  MyClass myClass = new MyClass(mock(ConfigClient.class));\n\n  // test business logic\n\n}\n'))),(0,i.kt)(u,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"class Job < Array\n  def batches\n    slice_size = Prefab.get('job.batch.size')\n    each_slice(slice_size)\n  end\nend\n\nRSpec.describe Job do\n  describe '#batches' do\n    it 'returns batches of jobs' do\n      jobs = Job.new([1, 2, 3, 4, 5])\n      expect(jobs.batches.map(&:size)).to eq([3, 2])\n      allow(Prefab).to receive(:get).with('job.batch.size').and_return(2)\n      expect(jobs.batches.map(&:size)).to eq([2, 2, 1])\n    end\n  end\nend\n")))),(0,i.kt)("h3",{id:"frontend-libraries"},"Frontend Libraries"),(0,i.kt)("p",null,"Rather than talking to the server, use ",(0,i.kt)("inlineCode",{parentName:"p"},"setConfig")," or use a ",(0,i.kt)("inlineCode",{parentName:"p"},"Provider")," manually with your test setup."),(0,i.kt)(d,{groupId:"lang",mdxType:"Tabs"},(0,i.kt)(u,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("p",null,"Don't call ",(0,i.kt)("inlineCode",{parentName:"p"},"prefab.init"),". Instead, use ",(0,i.kt)("inlineCode",{parentName:"p"},"setConfig")," to set up your scenario."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"prefab.setConfig({\n  turbo: true,\n  defaultMediaCount: 3,\n});\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sdks/javascript#testing"},"Read the full JavaScript testing docs."))),(0,i.kt)(u,{value:"react",label:"React",mdxType:"TabItem"},(0,i.kt)("p",null,"Don't use the ",(0,i.kt)("inlineCode",{parentName:"p"},"PrefabProvider"),". Instead, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"PrefabTestProvider")," and pass in a config object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<PrefabTestProvider config={config}>\n  <MyComponent />\n</PrefabTestProvider>,\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sdks/react#testing"},"Read the full React testing docs.")))),(0,i.kt)("h2",{id:"testing-with-datafiles"},"Testing with DataFiles"),(0,i.kt)("p",null,"Mocking out all of the Prefab calls can be tedious, so we've added a feature called DataFiles to Prefab."),(0,i.kt)("p",null,"Having your tests/CI reach out to Prefab to get the latest configuration is a viable approach, but for consistency & reproducibility many of us prefer to have full control over the configuration used to run tests."),(0,i.kt)("p",null,"Prefab supports this approach by allowing you to specify a datafile. When specifying a datafile via ",(0,i.kt)("inlineCode",{parentName:"p"},"PREFAB_DATAFILE")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"datafile")," option, Prefab will use the datafile for all configuration instead of reaching out to the server and will run in ",(0,i.kt)("inlineCode",{parentName:"p"},"local-only")," mode."),(0,i.kt)("p",null,"The datafile is a JSON representation of all your configuration for an environment. It is human readable, but we recommend using the Prefab CLI to generate it and not editing it by hand."),(0,i.kt)("p",null,"To get started with a datafile:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Create an Environment in the Prefab UI called "Test"'),(0,i.kt)("li",{parentName:"ol"},"Generate a datafile for that environment using the Prefab CLI")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"prefab download --environment test\n# writes prefab.test.108.config.json\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Add the datafile to git ",(0,i.kt)("inlineCode",{parentName:"li"},"git add prefab.test.108.config.json"),"."),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"PREFAB_DATAFILE=prefab.test.108.config.json")," in your CI environment.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Datafiles can also be useful in Docker builds or other environments where you want to avoid reaching out to Prefab. A very common pattern is to use this for ",(0,i.kt)("inlineCode",{parentName:"p"},"assets:precompile")," in a Ruby on Rails application. That often looks like:"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"RUN RAILS_ENV=production PREFAB_DATAFILE=prefab.test.108.config.json bundle exec rake assets:precompile\n")),(0,i.kt)("p",{parentName:"admonition"},"If you don't want the test data there, you could also create another environment called 'docker-build' with any other configuration you want and use the CLI to download that as well.")),(0,i.kt)("h3",{id:"keeping-the-datafile-up-to-date"},"Keeping The Datafile Up To Date"),(0,i.kt)("p",null,"The CLI download will take a snapshot of the configuration at a given moment, but it won't keep it up to date. As you add configuration or feature flags that you need to test, you'll need to update the datafile by re-running the CLI command and committing the new datafile."))}g.isMDXComponent=!0}}]);