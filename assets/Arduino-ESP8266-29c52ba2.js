import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang-3bac8278.js";import{_ as u,p as c,c as m,w as e,o as p,a as i,b as a,d as s,e as f,r as n,f as _}from"./app-90684ef7.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-c0138c6b.js";import"./YunCard.vue_vue_type_style_index_0_lang-cc1d5dc5.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-34448be1.js";const Z=JSON.parse('{"title":"阿里云物联网平台、微信小程序、ESP8266三者简易通讯","description":"","frontmatter":{"title":"阿里云物联网平台、微信小程序、ESP8266三者简易通讯","date":"2023-07-05T00:00:00.000Z","updated":"2023-07-05T00:00:00.000Z","categories":"Arduino 笔记","tags":["Arduino","C++","阿里云","微信小程序"],"top":2},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"前期准备","slug":"前期准备","link":"#前期准备","children":[]},{"level":2,"title":"阿里云","slug":"阿里云","link":"#阿里云","children":[]},{"level":2,"title":"微信小程序","slug":"微信小程序","link":"#微信小程序","children":[]},{"level":2,"title":"ESP8266","slug":"esp8266","link":"#esp8266","children":[]},{"level":2,"title":"ArduinoIDE","slug":"arduinoide","link":"#arduinoide","children":[]}],"relativePath":"pages/posts/Arduino-ESP8266.md","path":"/home/runner/work/Breeze/Breeze/pages/posts/Arduino-ESP8266.md","lastUpdated":1727711894000}'),o=JSON.parse('{"title":"阿里云物联网平台、微信小程序、ESP8266三者简易通讯","description":"","frontmatter":{"title":"阿里云物联网平台、微信小程序、ESP8266三者简易通讯","date":"2023-07-05T00:00:00.000Z","updated":"2023-07-05T00:00:00.000Z","categories":"Arduino 笔记","tags":["Arduino","C++","阿里云","微信小程序"],"top":2},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"前期准备","slug":"前期准备","link":"#前期准备","children":[]},{"level":2,"title":"阿里云","slug":"阿里云","link":"#阿里云","children":[]},{"level":2,"title":"微信小程序","slug":"微信小程序","link":"#微信小程序","children":[]},{"level":2,"title":"ESP8266","slug":"esp8266","link":"#esp8266","children":[]},{"level":2,"title":"ArduinoIDE","slug":"arduinoide","link":"#arduinoide","children":[]}],"relativePath":"pages/posts/Arduino-ESP8266.md","path":"/home/runner/work/Breeze/Breeze/pages/posts/Arduino-ESP8266.md","lastUpdated":1727711894000}'),g={name:"pages/posts/Arduino-ESP8266.md",data(){return{data:o,frontmatter:o.frontmatter}},setup(){c("pageData",o)}},v={id:"简介",tabindex:"-1"},E=i("p",null,"本篇文章将会带领读者从零开始实现阿里云物联网平台、微信小程序、开发板之间的数据交互，可以作为实现智能家居的基座。完成后可以使用微信小程序实现对开发板的基本控制，如传递布尔值实现接入开发板的相关模块的状态切换，下发具体数值使接入开发板的模块更新逻辑处理阈值，以及最基本的将开发板接入的传感器采集到的读数实时传递给阿里云平台，平台再将读数传递给微信小程序进行展示。后续亦可进行模块的增减以实现相应需求。",-1),k={id:"前期准备",tabindex:"-1"},S=i("p",null,"1、学习微信小程序开发相关（入门即可） 2、阿里云物联网平台公共实例一份（需注册） 3、ESP8266NodeMCU开发板一块（自备相关配件） 4、用到的编译软件：微信开发者工具、ArduinoIDE 5、你家Wifi的名称及密码（建议提前记下来放到桌面上，后续可直接粘贴）",-1),P={id:"阿里云",tabindex:"-1"},$={id:"微信小程序",tabindex:"-1"},A={id:"esp8266",tabindex:"-1"},b={id:"arduinoide",tabindex:"-1"};function B(t,N,D,C,d,T){const r=_,l=h;return p(),m(l,{frontmatter:d.frontmatter,data:d.data},{"main-content-md":e(()=>[i("h2",v,[a("简介 "),s(r,{class:"header-anchor",href:"#简介","aria-hidden":"true"},{default:e(()=>[a("#")]),_:1})]),E,i("h2",k,[a("前期准备 "),s(r,{class:"header-anchor",href:"#前期准备","aria-hidden":"true"},{default:e(()=>[a("#")]),_:1})]),S,i("h2",P,[a("阿里云 "),s(r,{class:"header-anchor",href:"#阿里云","aria-hidden":"true"},{default:e(()=>[a("#")]),_:1})]),i("h2",$,[a("微信小程序 "),s(r,{class:"header-anchor",href:"#微信小程序","aria-hidden":"true"},{default:e(()=>[a("#")]),_:1})]),i("h2",A,[a("ESP8266 "),s(r,{class:"header-anchor",href:"#esp8266","aria-hidden":"true"},{default:e(()=>[a("#")]),_:1})]),i("h2",b,[a("ArduinoIDE "),s(r,{class:"header-anchor",href:"#arduinoide","aria-hidden":"true"},{default:e(()=>[a("#")]),_:1})]),f(" Modify `valaxy.config.ts` to custom your blog. ")]),"main-header":e(()=>[n(t.$slots,"main-header")]),"main-header-after":e(()=>[n(t.$slots,"main-header-after")]),"main-nav":e(()=>[n(t.$slots,"main-nav")]),"main-content":e(()=>[n(t.$slots,"main-content")]),"main-content-after":e(()=>[n(t.$slots,"main-content-after")]),"main-nav-before":e(()=>[n(t.$slots,"main-nav-before")]),"main-nav-after":e(()=>[n(t.$slots,"main-nav-after")]),comment:e(()=>[n(t.$slots,"comment")]),footer:e(()=>[n(t.$slots,"footer")]),aside:e(()=>[n(t.$slots,"aside")]),"aside-custom":e(()=>[n(t.$slots,"aside-custom")]),default:e(()=>[n(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const M=u(g,[["render",B]]);export{Z as __pageData,M as default};