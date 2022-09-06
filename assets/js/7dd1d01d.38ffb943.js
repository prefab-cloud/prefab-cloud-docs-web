"use strict";(self.webpackChunkprefab_cloud_docs_web=self.webpackChunkprefab_cloud_docs_web||[]).push([[781],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>p});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=l(r),p=i,g=k["".concat(c,".").concat(p)]||k[p]||u[p]||a;return r?t.createElement(g,o(o({ref:n},d),{},{components:r})):t.createElement(g,o({ref:n},d))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=k;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}k.displayName="MDXCreateElement"},2457:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=r(7462),i=(r(7294),r(3905));const a={title:"Tracking IDs",sidebar_label:"Tracking IDs"},o=void 0,s={unversionedId:"ruby-sdk/tracking-ids",id:"ruby-sdk/tracking-ids",title:"Tracking IDs",description:"Tracking IDs",source:"@site/docs/ruby-sdk/tracking-ids.md",sourceDirName:"ruby-sdk",slug:"/ruby-sdk/tracking-ids",permalink:"/docs/ruby-sdk/tracking-ids",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ruby-sdk/tracking-ids.md",tags:[],version:"current",frontMatter:{title:"Tracking IDs",sidebar_label:"Tracking IDs"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/ruby-sdk/ruby"},next:{title:"Java SDK",permalink:"/docs/java"}},c={},l=[{value:"Tracking IDs",id:"tracking-ids",level:2}],d={toc:l};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tracking-ids"},"Tracking IDs"),(0,i.kt)("p",null,"If you are only concerned with logged in users, your ",(0,i.kt)("inlineCode",{parentName:"p"},"user.id")," will work just fine."),(0,i.kt)("p",null,'If you are working with users as they transistion from anonymous to logged in users however, we need a value that will persist across this transition.\nIf we don\'t keep this value consistent, we will run into situations where a new user lands on our site and gets the "Control" variant of an experiment,\nthen logs in and is thrown into a different variant.'),(0,i.kt)("p",null,"Prefab's recommendation is that you create a separate tracking ID to help. This can look like the following:"),(0,i.kt)("p",null,"Migration to add a column and initialize it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'class AddTrackingId < ActiveRecord::Migration[4.2]\n  def change\n    add_column :users, :tracking_id, :string\n    execute "update users set tracking_id = id" # initialize pre-existing users to have a tracking_id == their user_id\n    change_column :users, :tracking_id, :string, null: false\n  end\nend\n')),(0,i.kt)("p",null,"Useful to always have ",(0,i.kt)("inlineCode",{parentName:"p"},"@tracking_id")," available in our controllers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"class ApplicationController < ActionController::Base\n  before_action :set_tracking_id\n  def set_tracking_id\n    @tracking_id = TrackingId.build(user: current_user, cookies: cookies)\n  end\nend\n")),(0,i.kt)("p",null,"TrackingId looks at the (possibly nil) user and cookies and gets us the correct tracking_id while setting it as a long-lived cookie."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'class TrackingId\n  COOKIE_KEY = "tid".freeze\n\n  def self.build(user:, cookies:)\n    builder = new(user, cookies)\n    builder.persist_to_cookies\n    builder.tracking_id\n  end\n\n  def initialize(user = nil, cookies = {})\n    @user = user\n    @cookies = cookies\n  end\n  def tracking_id\n    @tracking_id ||= user_tracking_id || cookie_tracking_id || self.class.new_tracking_id\n  end\n\n  def persist_to_cookies\n    @cookies[COOKIE_KEY] = {\n      value: tracking_id,\n      expires: 1.year.from_now\n    }\n  end\n\n  private\n\n  def user_tracking_id\n    @user.try(:tracking_id)\n  end\n\n  def cookie_tracking_id\n    return if @cookies[COOKIE_KEY].blank?\n    @cookies[COOKIE_KEY]\n  end\n\n  def self.new_tracking_id\n    SecureRandom.uuid\n  end\nend\n')),(0,i.kt)("p",null,"When a user signs up and created an account, we need to remember to permanently set the tracking ID on the user account."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"class RegistrationsController < Devise::RegistrationsController\n  def sign_up_params\n    devise_parameter_sanitizer.sanitize(:sign_up).merge(tracking_id: TrackingId.build(user: current_user, cookies: cookies))\n  end\nend\n")))}u.isMDXComponent=!0}}]);