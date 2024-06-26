"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[1087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,y=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Secret Management",sidebar_label:"Secret Management",sidebar_position:2},i=void 0,l={unversionedId:"explanations/features/secret-management",id:"explanations/features/secret-management",title:"Secret Management",description:"Prefab has zero-knowledge support for sharing your secrets between developers and between your different applications. We use simple & straightforward cryptography and Prefab never sees anything unencrypted. This simplifies sharing secrets for local development and sharing secrets between multiple applications or languages because you only need a single encryption/decryption secret. (Multiple secrets is perfectly fine too, use as many as you require).",source:"@site/docs/explanations/features/secret-management.md",sourceDirName:"explanations/features",slug:"/explanations/features/secret-management",permalink:"/docs/explanations/features/secret-management",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/explanations/features/secret-management.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Secret Management",sidebar_label:"Secret Management",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Targeted Log Levels",permalink:"/docs/explanations/features/targeted-log-levels"},next:{title:"Rules and Segmentation",permalink:"/docs/explanations/features/rules-and-segmentation"}},s={},p=[{value:"How Does It Work",id:"how-does-it-work",level:2},{value:"What Does That Look Like?",id:"what-does-that-look-like",level:2},{value:"Walkthrough",id:"walkthrough",level:2},{value:"Step 1: Create an Encryption Key",id:"step-1-create-an-encryption-key",level:3},{value:"Create the Provided By Env Var Config",id:"create-the-provided-by-env-var-config",level:4},{value:"Put something in the vessel locally",id:"put-something-in-the-vessel-locally",level:4},{value:"Step 2: Encrypt Something",id:"step-2-encrypt-something",level:2},{value:"Encrypt a value",id:"encrypt-a-value",level:4},{value:"Step 3: Using the Secret",id:"step-3-using-the-secret",level:2},{value:"Separate Keys For Different Environments",id:"separate-keys-for-different-environments",level:2},{value:"Generate a second secret",id:"generate-a-second-secret",level:4},{value:"Put that secret into a separate env var",id:"put-that-secret-into-a-separate-env-var",level:4},{value:"Update the prefab.secrets.encryption.key to look for the other ENV var in production",id:"update-the-prefabsecretsencryptionkey-to-look-for-the-other-env-var-in-production",level:4},{value:"Set a Secret in Production",id:"set-a-secret-in-production",level:4},{value:"Full Example Diagram",id:"full-example-diagram",level:2},{value:"How should I get the actual Secret keys passed around.",id:"how-should-i-get-the-actual-secret-keys-passed-around",level:2},{value:"How do secrets work in  CI?",id:"how-do-secrets-work-in--ci",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Prefab has zero-knowledge support for ",(0,r.kt)("a",{parentName:"p",href:"https://prefab.cloud/features/secret-management/"},"sharing your secrets")," between developers and between your different applications. We use simple & straightforward cryptography and Prefab never sees anything unencrypted. This simplifies sharing secrets for local development and sharing secrets between multiple applications or languages because you only need a single encryption/decryption secret. (Multiple secrets is perfectly fine too, use as many as you require)."),(0,r.kt)("p",null,"Prefab owns: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CLI to locally encrypt and push to Prefab"),(0,r.kt)("li",{parentName:"ul"},"Distributing the encrypted values to your systems"),(0,r.kt)("li",{parentName:"ul"},"SDKs to decrypt ",(0,r.kt)("inlineCode",{parentName:"li"},'Prefab.get("my-secret") => "the message"'))),(0,r.kt)("p",null,"You own:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sharing the encryption/decryption secret(s) with the correct people / services")),(0,r.kt)("h2",{id:"how-does-it-work"},"How Does It Work"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You create a ",(0,r.kt)("inlineCode",{parentName:"li"},"secret key")," with the CLI. This is a series of random bytes that you keep secret."),(0,r.kt)("li",{parentName:"ol"},"This ",(0,r.kt)("inlineCode",{parentName:"li"},"secret key")," needs to be available on developer machines to encrypt and in deployed environments to decrypt, you do this via your existing process for sharing environment variables."),(0,r.kt)("li",{parentName:"ol"},"You use our ",(0,r.kt)("a",{parentName:"li",href:"/docs/tools/cli"},"CLI")," to encrypt the string you want to keep secret. "),(0,r.kt)("li",{parentName:"ol"},"Prefab will share the encrypted contents with your applications."),(0,r.kt)("li",{parentName:"ol"},"Your applications will decrypt the contents with the ",(0,r.kt)("inlineCode",{parentName:"li"},"secret key"),".")),(0,r.kt)("h2",{id:"what-does-that-look-like"},"What Does That Look Like?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=el_IEDCfoIU"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/el_IEDCfoIU/0.jpg",alt:"YouTube"}))),(0,r.kt)("h2",{id:"walkthrough"},"Walkthrough"),(0,r.kt)("p",null,"Prefab secret management uses standard Prefab dynamic configuration to store and share your secrets between your applications."),(0,r.kt)("p",null,"In particular, it uses two special types of configuration attributes: ",(0,r.kt)("inlineCode",{parentName:"p"},"decryptWith")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"provided"),". Let's see how these work together."),(0,r.kt)("h3",{id:"step-1-create-an-encryption-key"},"Step 1: Create an Encryption Key"),(0,r.kt)("p",null,"Prefab allows you to declare that a configuration value will be ",(0,r.kt)("em",{parentName:"p"},'"provided by"'),' an environment variable. Prefab will store a config that is kind of an empty vessel. It is a pointer that says "find my value from this ENV VAR".'),(0,r.kt)("p",null,"We want Prefab to have zero knowledge of your encryption key, so we'll use these provided values so you don't have to tell us the encryption key."),(0,r.kt)("h4",{id:"create-the-provided-by-env-var-config"},"Create the Provided By Env Var Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"prefab create prefab.secrets.encryption.key --env-var=PREFAB_SECRET_KEY_DEFAULT --type string --confidential\n")),(0,r.kt)("p",null,"This creates:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A config called ",(0,r.kt)("inlineCode",{parentName:"li"},"prefab.secrets.encryption.key")),(0,r.kt)("li",{parentName:"ol"},"That will resolve to ",(0,r.kt)("inlineCode",{parentName:"li"},"PREFAB_SECRET_KEY_DEFAULT")),(0,r.kt)("li",{parentName:"ol"},"That won't report/print the value because it's ",(0,r.kt)("inlineCode",{parentName:"li"},"--confidential"))),(0,r.kt)("h4",{id:"put-something-in-the-vessel-locally"},"Put something in the vessel locally"),(0,r.kt)("p",null,"We'll generate a secure series of random bytes to be our encryption key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> prefab generate-new-hex-key\n17f65155e45a42777d89091e40cddc5541ac4851c44134f86db7a408a7fea5a8\n")),(0,r.kt)("p",null,"Now we put this into our environment using something like a ",(0,r.kt)("inlineCode",{parentName:"p"},".env.local")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#.env.local\nPREFAB_SECRET_KEY_DEFAULT=17f65155e45a42777d89091e40cddc5541ac4851c44134f86db7a408a7fea5a8\n")),(0,r.kt)("p",null,"If we run our application now and call ",(0,r.kt)("inlineCode",{parentName:"p"},'Prefab.get("prefab.secrets.encryption.key")')," we'll get ",(0,r.kt)("inlineCode",{parentName:"p"},"17f65155e45a42777d89091e40cddc5541ac4851c44134f86db7a408a7fea5a8"),"."),(0,r.kt)("h2",{id:"step-2-encrypt-something"},"Step 2: Encrypt Something"),(0,r.kt)("h4",{id:"encrypt-a-value"},"Encrypt a value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'prefab create my.api.key --type string --value="sample api key" --secret\n')),(0,r.kt)("p",null,"This will:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Assume that we are using the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"prefab.secrets.encryption.key")," to encrypt."),(0,r.kt)("li",{parentName:"ol"},"Pull the key from our environment."),(0,r.kt)("li",{parentName:"ol"},"Use that key to encrypt ",(0,r.kt)("inlineCode",{parentName:"li"},"sample api key")),(0,r.kt)("li",{parentName:"ol"},"Push and encrypted blob to Prefab under the key ",(0,r.kt)("inlineCode",{parentName:"li"},"my.api.key"))),(0,r.kt)("p",null,"Here's a pictorial representation of what we've done so far"),(0,r.kt)("mermaid",{value:"graph\n  subgraph Configs\n    subgraph my.api.key\n      s[Value=ENCRYPTED<br/>decryptWith=prefab.secrets.encryption.key]\n    end\n    subgraph pk[prefab.secrets.encryption.key]\n      e[ProvidedBy=PREFAB_SECRET_KEY_DEFAULT]\n    end\n    subgraph normal[Example Non-secret Config String]\n      n[Value=TheValue]\n    end\n  end\n  subgraph .env.local\n    ev[PREFAB_SECRET_KEY_DEFAULT=ABCDE12345]\n  end\n  ev--\x3ee\n  pk--\x3es"}),(0,r.kt)("h2",{id:"step-3-using-the-secret"},"Step 3: Using the Secret"),(0,r.kt)("p",null,"Locally, we're all set. We can use the language appropriate form of ",(0,r.kt)("inlineCode",{parentName:"p"},'Prefab.get("my.api.key")')," and the library will decrypt our secret. "),(0,r.kt)("p",null,"To use the secret in another environment, you just need to get ",(0,r.kt)("inlineCode",{parentName:"p"},"PREFAB_SECRET_KEY_DEFAULT=17f65155e45a42777d89091e40cddc5541ac4851c44134f86db7a408a7fea5a8"),"\nset in that environment."),(0,r.kt)("h2",{id:"separate-keys-for-different-environments"},"Separate Keys For Different Environments"),(0,r.kt)("p",null,"So far, we've shared the same secret for development and staging, but it's very likely you'll want a different key for your production secrets. This is no problem. The nature of ",(0,r.kt)("inlineCode",{parentName:"p"},"provided")," means that our ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab.secrets.encryption.key")," can resolve to different ENV vars in different environments."),(0,r.kt)("h4",{id:"generate-a-second-secret"},"Generate a second secret"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> prefab generate-new-hex-key\n17f65155e45a42777d89091e40cddc5541ac4851c44134f86db7a408a7fea5a8\n")),(0,r.kt)("h4",{id:"put-that-secret-into-a-separate-env-var"},"Put that secret into a separate env var"),(0,r.kt)("p",null,"Why use a second env var? Well, you aren't required to. You could share the same name for the env var in all your environments. "),(0,r.kt)("p",null,"The trick is that this can make using the CLI locally more challenging. Locally, the CLI will need to be able to encrypt for both the default and production environments. We find it is easier to have them use different names so they don't collide locally. Here's what that looks like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#.env.local\nPREFAB_SECRET_KEY_DEFAULT=17f65155e45a42777d89091e40cddc5541ac4851c44134f86db7a408a7fea5a8\nPREFAB_SECRET_KEY_PRODUCTION=994899132443777d89091e40cddc5541abdeff123830488a7fea173b3b1b2b38\n")),(0,r.kt)("h4",{id:"update-the-prefabsecretsencryptionkey-to-look-for-the-other-env-var-in-production"},"Update the prefab.secrets.encryption.key to look for the other ENV var in production"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ prefab change-default --confidential --env-var=PREFAB_SECRET_KEY_PRODUCTION              \n\n? Which item would you like to change the default for? prefab.secrets.encryption.key\n? Which environment would you like to change the default for? Production\nConfirm: change the default for prefab.secrets.encryption.key in Production to be provided by `PREFAB_SECRET_KEY_PRODUCTION`? yes/no: yes\n\u2714 Successfully changed default to be provided by `PREFAB_SECRET_KEY_PRODUCTION` (confidential)\n")),(0,r.kt)("p",null,"This is now the mapping of environment to ENV Var. "),(0,r.kt)("mermaid",{value:"graph\n  subgraph YourOrg\n    subgraph PREFAB_SECRET_KEY_DEFAULT\n      Development\n      Test\n      Staging\n    end\n    subgraph PREFAB_SECRET_KEY_PRODUCTION\n      Production\n    end\n   \n  end"}),(0,r.kt)("p",null,"We can also see this by running ",(0,r.kt)("inlineCode",{parentName:"p"},"prefab info"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ prefab info  prefab.secrets.encryption.key\n\n- Default: `PREFAB_SECRET_KEY_DEFAULT` via ENV\n- Development: [inherit]\n- Production: `PREFAB_SECRET_KEY_PRODUCTION` via ENV\n\nNo evaluations in the past 24 hours\n")),(0,r.kt)("h4",{id:"set-a-secret-in-production"},"Set a Secret in Production"),(0,r.kt)("p",null,"Finally, let's set a production secret."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ prefab change-default\n? Which item would you like to change the default for? my.api.key\n? Which environment would you like to change the default for? Production\nDefault value: sk_live_123\nConfirm: change the default for my.new.string in Production to `sk_live_123`? yes/no: yes\n\u2714 Successfully changed default to `sk_live_123`\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note: You can use as many encryption keys as you want. It is a common practice to have 2, one for production and one for all other environments. But you can have as many secrets as you need in order to align with the trust groups you require.")),(0,r.kt)("h2",{id:"full-example-diagram"},"Full Example Diagram"),(0,r.kt)("mermaid",{value:"graph\n  subgraph Configs\n    subgraph StripeAPIKey\n      subgraph DevS[Development/Staging]\n        s[Value=ENCRYPTED_WITH_ABC...<br/>decryptWith=prefab.secrets.encryption.key]\n      end\n      subgraph ProdS[Production]\n        s2[Value=ENCRYPTED_WITH_ZWX...<br/>decryptWith=prefab.secrets.encryption.key]\n      end\n    end\n    subgraph pk[prefab.secrets.encryption.key]\n      subgraph Dev[Development/Staging]\n        e[ProvidedBy=PREFAB_SECRET_KEY_DEFAULT]\n      end\n      subgraph Production\n        p[ProvidedBy=PREFAB_SECRET_KEY_PRODUCTION]\n      end\n    end\n  end\n  subgraph Development\n      subgraph .env.local\n        ev[PREFAB_SECRET_KEY_DEFAULT=ABCDE12345]\n      end\n  end\n  subgraph Staging\n      sv[PREFAB_SECRET_KEY_DEFAULT=ABCDE12345]\n  end\n  subgraph ProductionEnv[Production]\n    pv[PREFAB_SECRET_KEY_PRODUCTION=ZWXY9876]\n  end\n  ev--\x3ee\n  pv--\x3ep\n  sv--\x3ee\n  pk--\x3es\n  p--\x3es2"}),(0,r.kt)("h2",{id:"how-should-i-get-the-actual-secret-keys-passed-around"},"How should I get the actual Secret keys passed around."),(0,r.kt)("p",null,"In order to share the ",(0,r.kt)("inlineCode",{parentName:"p"},"PREFAB_SECRET_KEY_DEFAULT")," with developers, you can use a password manager such as 1Password or you can use one of the secure 1-time password sharing website like ",(0,r.kt)("a",{parentName:"p",href:"https://1ty.me/"},"1ty.me")," ",(0,r.kt)("a",{parentName:"p",href:"https://onetimesecret.com/"},"onetimesecret")," or ",(0,r.kt)("a",{parentName:"p",href:"https://password.link/"},"password.link"),"."),(0,r.kt)("p",null,"This will be the only secret you ever need to share amongst your developers going forward. "),(0,r.kt)("h2",{id:"how-do-secrets-work-in--ci"},"How do secrets work in  CI?"),(0,r.kt)("p",null,"Because Prefab secret management uses the regular dynamic configuration, you'll use the same techniques to run in continuous integration environments which may be offline. The full guide is available in ",(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/testing"},"Testing"),". The only thing you'll need to remember is to make ",(0,r.kt)("inlineCode",{parentName:"p"},"PREFAB_SECRET_KEY_DEFAULT")," available to processes in CI."))}d.isMDXComponent=!0}}]);