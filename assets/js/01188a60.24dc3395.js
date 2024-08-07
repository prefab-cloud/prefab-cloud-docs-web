"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[9630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),h=n,d=f["".concat(l,".").concat(h)]||f[h]||p[h]||o;return r?a.createElement(d,s(s({ref:t},c),{},{components:r})):a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={title:"Feature Opt-In",sidebar_label:"Feature Opt-In"},s=void 0,i={unversionedId:"how-tos/feature-opt-in",id:"how-tos/feature-opt-in",title:"Feature Opt-In",description:"You've built a new feature and you're ready to ship it. How do you make sure it's ready for your users?",source:"@site/docs/how-tos/feature-opt-in.md",sourceDirName:"how-tos",slug:"/how-tos/feature-opt-in",permalink:"/docs/how-tos/feature-opt-in",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/how-tos/feature-opt-in.md",tags:[],version:"current",frontMatter:{title:"Feature Opt-In",sidebar_label:"Feature Opt-In"},sidebar:"tutorialSidebar",previous:{title:"Experiment",permalink:"/docs/how-tos/experiment"},next:{title:"Rollouts",permalink:"/docs/how-tos/rollouts"}},l={},u=[{value:"1. How do we know who to enable the feature for?",id:"1-how-do-we-know-who-to-enable-the-feature-for",level:3},{value:"2. Persist this information",id:"2-persist-this-information",level:3},{value:"3. Send this Context to Prefab for evaluation",id:"3-send-this-context-to-prefab-for-evaluation",level:3},{value:"4. Configure our flag to respect this preference",id:"4-configure-our-flag-to-respect-this-preference",level:3},{value:"Putting it all together",id:"putting-it-all-together",level:2},{value:"Note",id:"note",level:2}],c={toc:u},f="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(f,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You've built a new feature and you're ready to ship it. How do you make sure it's ready for your users?"),(0,n.kt)("p",null,"Test internally of course!"),(0,n.kt)("p",null,"So first you get the VP of Sales to signup for a Prefab account and then... Clearly that's not going to work. How can we ",(0,n.kt)("strong",{parentName:"p"},"easily")," let end users opt-in to a feature?"),(0,n.kt)("p",null,"There are a few parts to the problem:"),(0,n.kt)("h3",{id:"1-how-do-we-know-who-to-enable-the-feature-for"},"1. How do we know who to enable the feature for?"),(0,n.kt)("p",null,"The way I like to do this is to have a magic URL parameter that is clear, copy-pasteable and obviously editable."),(0,n.kt)("p",null,"Let's support ",(0,n.kt)("inlineCode",{parentName:"p"},"example.com/?features[v2-beta]=true"),". If we Slack the VP of Sales a link with this in it, it should automatically put them in the beta group. If they want to get back out, they can just change the ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("details",{className:""},(0,n.kt)("summary",null,"Code"),(0,n.kt)("p",null,"This code will parse anything that looks like ",(0,n.kt)("inlineCode",{parentName:"p"},"?features[___]=___"),' and store it as a "feature request". We don\'t want a magic URL that can force any feature flag we like, that would be too dangerous. By treating these as a "request" we retain the ultimate ability to decide if we want to honor the request or not in the feature flag UI, which is where it should be.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import { useSearchParams } from "react-router-dom";\n\n// get any existing existing "featureRequests" from local storage\nlet featureReqs = {};\ntry {\n  featureReqs = JSON.parse(localStorage.getItem("featureRequests") ?? "{}");\n} catch (e) {\n  // localStorage can throw an error if the user has disabled via privacy settings\n  console.error(e);\n}\n\n// pass in url params eg ?features[v2-beta]=false\nconst [searchParams] = useSearchParams();\nsearchParams.forEach((value, key) => {\n  if (key.startsWith("feature")) {\n    const featureName = key.split("[")[1].split("]")[0]; // Extract \'v2-beta\' from \'feature[v2-beta]\'\n    featureReqs[featureName] = value;\n  }\n});\n'))),(0,n.kt)("h3",{id:"2-persist-this-information"},"2. Persist this information"),(0,n.kt)("p",null,"For today, let's imagine a React app and we'll use the browser's local storage. We'll store a JSON object with the feature names as keys and the values as booleans."),(0,n.kt)("details",{className:""},(0,n.kt)("summary",null,"Code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// store feature overrides\nif (Object.keys(featureReqs).length !== 0) {\n  try {\n    localStorage.setItem("featureRequests", JSON.stringify(featureReqs));\n  } catch (e) {\n    console.error(e);\n  }\n}\n'))),(0,n.kt)("h3",{id:"3-send-this-context-to-prefab-for-evaluation"},"3. Send this Context to Prefab for evaluation"),(0,n.kt)("p",null,"Now we'll just send the feature requests along with the user's tracking id to Prefab like we would any other ",(0,n.kt)("a",{parentName:"p",href:"/docs/explanations/concepts/context"},"context"),". We'll use the ",(0,n.kt)("inlineCode",{parentName:"p"},"featureRequests")," key to create a rule that will enable the feature for this user."),(0,n.kt)("details",{className:""},(0,n.kt)("summary",null,"Code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// at the top level of your app\n\nimport { PrefabProvider } from "@prefab-cloud/prefab-cloud-react";\n\nconst context = {\n  user: { key: user.tracking_id },\n  // highlight-next-line\n  featureRequests: featureReqs // we can now create a rule IF featureRequests.v2-beta = true\n}\n\nconst onError = (reason) => {\n  console.error(reason);\n};\n\nreturn (\n  <PrefabProvider\n    apiKey={"CLIENT_API_KEY"}\n    contextAttributes={context}\n    onError={onError}\n  >\n    <MyApp />\n  </PrefabProvider>\n};\n\n// in your component that renders the feature\n\nconst MyComponent = () => {\n  // highlight-start\n  const { isEnabled } = usePrefab();\n\n  if (isEnabled"v2-beta-flag")) {\n    return (\n      <div>New Improved V2 UI</div>\n    );\n  }\n  // highlight-end\n\n  return (\n    <div>Old UI</div>\n  );\n}\n'))),(0,n.kt)("h3",{id:"4-configure-our-flag-to-respect-this-preference"},"4. Configure our flag to respect this preference"),(0,n.kt)("p",null,"Now we can create a rule that will enable the feature for anyone who has ",(0,n.kt)("inlineCode",{parentName:"p"},"featureRequests.v2-beta = true"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"UI matching our context key",src:r(439).Z,width:"717",height:"538"})),(0,n.kt)("p",null,"By being explicit about it in the UI, we've ensured that this capability only exists for flags where we'd like this to be true."),(0,n.kt)("p",null,"The nice thing about this approach is that we shouldn't need to touch this code again. The next time we want to allow internal users to use a feature flag, we can just agree on the url param ",(0,n.kt)("inlineCode",{parentName:"p"},"?features[v3-redesign]=variant-a"),", add the rule in the UI and we're good to go."),(0,n.kt)("h2",{id:"putting-it-all-together"},"Putting it all together"),(0,n.kt)("p",null,"Here's all of the code together."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// at the top level of your app\n\nimport { PrefabProvider } from "@prefab-cloud/prefab-cloud-react";\n\n// highlight-start\nimport { useSearchParams } from "react-router-dom";\n\n// get any existing existing "featureRequests" from local storage\nlet featureReqs = {};\ntry {\n  featureReqs = JSON.parse(localStorage.getItem("featureRequests") ?? "{}");\n} catch (e) {\n  // localStorage can throw an error if the user has disabled via privacy settings\n  console.error(e);\n}\n\n// pass in url params eg ?features[v2-beta]=false\nconst [searchParams] = useSearchParams();\nsearchParams.forEach((value, key) => {\n  if (key.startsWith("feature")) {\n    const featureName = key.split("[")[1].split("]")[0]; // Extract \'v2-beta\' from \'feature[v2-beta]\'\n    featureReqs[featureName] = value;\n  }\n});\n\n// store feature overrides\nif (Object.keys(featureReqs).length !== 0) {\n  try {\n    localStorage.setItem("featureRequests", JSON.stringify(featureReqs));\n  } catch (e) {\n    console.error(e);\n  }\n}\n// highlight-end\n\nconst context = {\n  user: { key: user.tracking_id },\n  // highlight-next-line\n  featureRequests: featureReqs // we can now create a rule IF featureRequests.v2-beta = true\n}\n\nconst onError = (reason) => {\n  console.error(reason);\n};\n\nreturn (\n  <PrefabProvider\n    apiKey={"CLIENT_API_KEY"}\n    contextAttributes={context}\n    onError={onError}\n  >\n    <MyApp />\n  </PrefabProvider>\n};\n\n// in your component that renders the feature\n\nconst MyComponent = () => {\n  // highlight-start\n  const { isEnabled } = usePrefab();\n\n  if (isEnabled"v2-beta-flag")) {\n    return (\n      <div>New Improved V2 UI</div>\n    );\n  }\n  // highlight-end\n\n  return (\n    <div>Old UI</div>\n  );\n}\n')),(0,n.kt)("h2",{id:"note"},"Note"),(0,n.kt)("p",null,"This approach is a good solution for front end flags in JS or React. The same approach will also work for backend SDKs, swapping out local storage for a database or cache."),(0,n.kt)("p",null,"This approach will need to be modified if you are sharing flags across multiple applications or front end and backend. In that case, you'll need to find a way to give the same featureRequest context to all of your applications. This could be done as a column on the user table or as a cookie."))}p.isMDXComponent=!0},439:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/optin-ff-3f254f580ca50d68d87bf4df1284aa50.jpg"}}]);