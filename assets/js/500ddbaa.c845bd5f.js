"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[821],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),g=i,k=u["".concat(c,".").concat(g)]||u[g]||p[g]||a;return t?r.createElement(k,o(o({ref:n},d),{},{components:t})):r.createElement(k,o({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={title:"Tracking IDs",sidebar_label:"Tracking IDs"},o=void 0,s={unversionedId:"how-tos/tracking-ids",id:"how-tos/tracking-ids",title:"Tracking IDs",description:"An Opinionated Guide to Identifying Users",source:"@site/docs/how-tos/tracking-ids.md",sourceDirName:"how-tos",slug:"/how-tos/tracking-ids",permalink:"/docs/how-tos/tracking-ids",draft:!1,editUrl:"https://github.com/prefab-cloud/prefab-cloud-docs-web/tree/main/docs/how-tos/tracking-ids.md",tags:[],version:"current",frontMatter:{title:"Tracking IDs",sidebar_label:"Tracking IDs"},sidebar:"tutorialSidebar",previous:{title:"Beta Releases",permalink:"/docs/how-tos/beta-releases"},next:{title:"Ruby SDK",permalink:"/docs/category/ruby-sdk"}},c={},l=[{value:"An Opinionated Guide to Identifying Users",id:"an-opinionated-guide-to-identifying-users",level:2},{value:"Adding a tracking ID to a Rails application",id:"adding-a-tracking-id-to-a-rails-application",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},u=d("Tabs"),p=d("TabItem"),g={toc:l},k="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(k,(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"an-opinionated-guide-to-identifying-users"},"An Opinionated Guide to Identifying Users"),(0,i.kt)("p",null,"If you are only concerned with logged-in users, your ",(0,i.kt)("inlineCode",{parentName:"p"},"user.id")," will work just fine as the sticky property for roll-outs."),(0,i.kt)("p",null,'If you are working with users as they transition from anonymous to logged-in users however, we need a value that will persist across this transition.\nIf we don\'t keep this value consistent, we will run into situations where a new user lands on our site and gets the "Control" variant of an experiment,\nthen logs in and is thrown into a different variant.'),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Prefab's recommendation is that you create a separate tracking ID the moment you see a request, save it in a cookie and then persist it\nto the user record upon creation.")),(0,i.kt)(u,{groupId:"lang",mdxType:"Tabs"},(0,i.kt)(p,{value:"Rails",label:"Rails",mdxType:"TabItem"},(0,i.kt)("h2",{id:"adding-a-tracking-id-to-a-rails-application"},"Adding a tracking ID to a Rails application"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"rails g migration AddTrackingId\n")),(0,i.kt)("p",null,"Migration to add a column and initialize it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'class AddTrackingId < ActiveRecord::Migration[7.0]\n  def change\n    add_column :users, :tracking_id, :string\n    execute "update users set tracking_id = id" # initialize pre-existing users to have a tracking_id == their user_id\n    change_column :users, :tracking_id, :string, null: false\n  end\nend\n')),(0,i.kt)("p",null,"Useful to always have ",(0,i.kt)("inlineCode",{parentName:"p"},"@tracking_id")," available in our controllers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"class ApplicationController < ActionController::Base\n  before_action :set_tracking_id\n  def set_tracking_id\n    @tracking_id = TrackingId.build(user: current_user, cookies: cookies)\n  end\nend\n")),(0,i.kt)("p",null,"TrackingId looks at the (possibly nil) user and cookies and gets us the correct tracking_id while setting it as a long-lived cookie."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'class TrackingId\n  COOKIE_KEY = "tid".freeze\n\n  def self.build(user:, cookies:)\n    builder = new(user, cookies)\n    builder.persist_to_cookies\n    builder.tracking_id\n  end\n\n  def initialize(user = nil, cookies = {})\n    @user = user\n    @cookies = cookies\n  end\n  def tracking_id\n    @tracking_id ||= user_tracking_id || cookie_tracking_id || self.class.new_tracking_id\n  end\n\n  def persist_to_cookies\n    @cookies[COOKIE_KEY] = {\n      value: tracking_id,\n      expires: 1.year.from_now\n    }\n  end\n\n  private\n\n  def user_tracking_id\n    @user.try(:tracking_id)\n  end\n\n  def cookie_tracking_id\n    return if @cookies[COOKIE_KEY].blank?\n    @cookies[COOKIE_KEY]\n  end\n\n  def self.new_tracking_id\n    SecureRandom.uuid\n  end\nend\n')),(0,i.kt)("p",null,"When a user signs up and created an account, we need to remember to permanently set the tracking ID on the user account."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"class RegistrationsController < Devise::RegistrationsController\n  def sign_up_params\n    devise_parameter_sanitizer.sanitize(:sign_up).merge(tracking_id: TrackingId.build(user: current_user, cookies: cookies))\n  end\nend\n")))))}f.isMDXComponent=!0}}]);