import{_ as m}from"./ValaxyMain.vue_vue_type_style_index_0_lang-237c101d.js";import{_ as g,c as u,w as s,p as c,o as E,a as n,b as t,d as r,e as f,r as a,f as h}from"./app-109f7ca1.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-d5c3252f.js";import"./YunCard.vue_vue_type_style_index_0_lang-1eb0a02e.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-247c8ef1.js";const V=JSON.parse('{"title":"阿里云物联网平台、微信小程序、ESP8266三者简易通讯","description":"","frontmatter":{"title":"阿里云物联网平台、微信小程序、ESP8266三者简易通讯","date":"2023-07-05T00:00:00.000Z","updated":"2023-07-05T00:00:00.000Z","categories":"Arduino 笔记","tags":["Arduino","C++","阿里云","微信小程序"],"top":2},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"前期准备","slug":"前期准备","link":"#前期准备","children":[]},{"level":2,"title":"阿里云前期操作","slug":"阿里云前期操作","link":"#阿里云前期操作","children":[]},{"level":2,"title":"开发板与微信小程序","slug":"开发板与微信小程序","link":"#开发板与微信小程序","children":[]},{"level":2,"title":"在接收端和发送端代码内订阅各自的topic并与阿里云链接","slug":"在接收端和发送端代码内订阅各自的topic并与阿里云链接","link":"#在接收端和发送端代码内订阅各自的topic并与阿里云链接","children":[]},{"level":2,"title":"结束语","slug":"结束语","link":"#结束语","children":[]}],"relativePath":"pages/posts/Arduino-ESP8266.md","path":"/home/runner/work/Breeze/Breeze/pages/posts/Arduino-ESP8266.md","lastUpdated":1729216588000}'),l=JSON.parse('{"title":"阿里云物联网平台、微信小程序、ESP8266三者简易通讯","description":"","frontmatter":{"title":"阿里云物联网平台、微信小程序、ESP8266三者简易通讯","date":"2023-07-05T00:00:00.000Z","updated":"2023-07-05T00:00:00.000Z","categories":"Arduino 笔记","tags":["Arduino","C++","阿里云","微信小程序"],"top":2},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"前期准备","slug":"前期准备","link":"#前期准备","children":[]},{"level":2,"title":"阿里云前期操作","slug":"阿里云前期操作","link":"#阿里云前期操作","children":[]},{"level":2,"title":"开发板与微信小程序","slug":"开发板与微信小程序","link":"#开发板与微信小程序","children":[]},{"level":2,"title":"在接收端和发送端代码内订阅各自的topic并与阿里云链接","slug":"在接收端和发送端代码内订阅各自的topic并与阿里云链接","link":"#在接收端和发送端代码内订阅各自的topic并与阿里云链接","children":[]},{"level":2,"title":"结束语","slug":"结束语","link":"#结束语","children":[]}],"relativePath":"pages/posts/Arduino-ESP8266.md","path":"/home/runner/work/Breeze/Breeze/pages/posts/Arduino-ESP8266.md","lastUpdated":1729216588000}'),B={name:"pages/posts/Arduino-ESP8266.md",data(){return{data:l,frontmatter:l.frontmatter}},setup(){c("pageData",l)}},b={id:"简介",tabindex:"-1"},y={id:"前期准备",tabindex:"-1"},z={id:"阿里云前期操作",tabindex:"-1"},v={id:"开发板与微信小程序",tabindex:"-1"},k={id:"在接收端和发送端代码内订阅各自的topic并与阿里云链接",tabindex:"-1"},$={id:"结束语",tabindex:"-1"};function S(i,e,P,A,d,T){const o=h,p=m;return E(),u(p,{frontmatter:d.frontmatter,data:d.data},{"main-content-md":s(()=>[n("h2",b,[e[1]||(e[1]=t("简介 ")),r(o,{class:"header-anchor",href:"#简介","aria-hidden":"true"},{default:s(()=>e[0]||(e[0]=[t("#")])),_:1})]),e[12]||(e[12]=n("p",null,"本篇文章将会带领读者从零开始实现阿里云物联网平台、微信小程序、开发板之间的数据交互，可以作为实现智能家居的基座。完成后可以使用微信小程序实现对开发板的基本控制，如传递布尔值实现接入开发板的相关模块的状态切换，下发具体数值使接入开发板的模块更新逻辑处理阈值，以及最基本的将开发板接入的传感器采集到的读数实时传递给阿里云平台，平台再将读数传递给微信小程序进行展示。后续亦可进行模块的增减以实现相应需求。",-1)),n("h2",y,[e[3]||(e[3]=t("前期准备 ")),r(o,{class:"header-anchor",href:"#前期准备","aria-hidden":"true"},{default:s(()=>e[2]||(e[2]=[t("#")])),_:1})]),e[13]||(e[13]=n("p",null,"1、学习微信小程序开发相关（入门即可） 2、阿里云物联网平台公共实例一份（需注册） 3、ESP8266NodeMCU开发板一块（自备相关配件） 4、用到的编译软件：微信开发者工具、ArduinoIDE 5、你家Wifi的名称及密码（建议提前记下来放到桌面上，后续可直接粘贴）",-1)),n("h2",z,[e[5]||(e[5]=t("阿里云前期操作 ")),r(o,{class:"header-anchor",href:"#阿里云前期操作","aria-hidden":"true"},{default:s(()=>e[4]||(e[4]=[t("#")])),_:1})]),e[14]||(e[14]=n("p",null,[t("创建产品 "),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%871.png",alt:""}),t(" 功能定义（主要是接收端的定义，新增功能也需要新增功能定义） "),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%872.png",alt:""}),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%873.png",alt:""}),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%874.png",alt:""}),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%875.png",alt:""}),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%876.png",alt:""}),t(" 自定义topic （建议接收端和发送端各一个，权限为发布和订阅） "),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%877.png",alt:""})],-1)),n("h2",v,[e[7]||(e[7]=t("开发板与微信小程序 ")),r(o,{class:"header-anchor",href:"#开发板与微信小程序","aria-hidden":"true"},{default:s(()=>e[6]||(e[6]=[t("#")])),_:1})]),e[15]||(e[15]=n("p",null,[t("创建设备（发送端和接收端都需要创建） "),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%878.png",alt:""}),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%879.png",alt:""}),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8710.png",alt:""})],-1)),e[16]||(e[16]=n("p",null,[t("！！！此处三元组与arduino代码里的三元组不是同一组 本文档arduino与小程序截图内的两处三元组都为以往项目的三元组 需进行二次替换不可照搬因抄袭代码导致的损失不予承担且保留追责权利 "),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8711.png",alt:""}),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8712.png",alt:""})],-1)),n("h2",k,[e[9]||(e[9]=t("在接收端和发送端代码内订阅各自的topic并与阿里云链接 ")),r(o,{class:"header-anchor",href:"#在接收端和发送端代码内订阅各自的topic并与阿里云链接","aria-hidden":"true"},{default:s(()=>e[8]||(e[8]=[t("#")])),_:1})]),e[17]||(e[17]=n("p",null,[t("打开阿里云物联网控制台 左侧 消息转发==》云产品流传 点击数据源 创建数据源 编辑 添加topic 选择发送端的自定义topic "),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8713.png",alt:""}),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8714.png",alt:""}),t(" 点击数据目的 创建数据目的 编辑 操作为发送到另一个topic 产品选择接收端 "),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8715.png",alt:""}),t(" 点击解析器 创建解析器 "),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8716.png",alt:""}),t(" 编辑 关联数据源 选择之前创建的数据源 "),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8717.png",alt:""}),t(" 点击数据目的 关联数据目的 "),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8718.png",alt:""}),t(" 选择之前创建的数据目的 点击解析器脚本 编写脚本 "),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8719.png",alt:""}),n("img",{src:"https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8720.png",alt:""}),t(' 首行固定格式 var data = payload("json"); 将发送端的JSON数据转化 流传物模型上报数据 writeIotTopic(1002, "/sys/id9fLzoFUFT/4_12_8266/thing/service/property/set",data) writeIotTopic为解析器的API 1002为数据目的ID /sys/id9fLzoFUFT/4_12_8266/thing/service/property/set为接收端的topic (/sys为前缀 不可去除 此为设置接收端物模型的属性) data为解析后的数据 可于在线调试界面调试测试接收端是否能正确接收平台转发的消息 如成功则于日志服务中查看平台转发的消息格式 并将此格式作为发送端发送数据时的格式')],-1)),n("h2",$,[e[11]||(e[11]=t("结束语 ")),r(o,{class:"header-anchor",href:"#结束语","aria-hidden":"true"},{default:s(()=>e[10]||(e[10]=[t("#")])),_:1})]),e[18]||(e[18]=n("p",null,"本教程于演示于2023年中完成并运行成功 如有变动请自行查阅相关文档。",-1)),e[19]||(e[19]=n("p",null,"重申：本教程仅作为学习参考，切勿抄袭三元组数据，由此带来的损失作者概不负责且导致作者损失的，作者有权利追责。更多详细内容请查阅官方文档。",-1)),f(" Modify `valaxy.config.ts` to custom your blog. ")]),"main-header":s(()=>[a(i.$slots,"main-header")]),"main-header-after":s(()=>[a(i.$slots,"main-header-after")]),"main-nav":s(()=>[a(i.$slots,"main-nav")]),"main-content":s(()=>[a(i.$slots,"main-content")]),"main-content-after":s(()=>[a(i.$slots,"main-content-after")]),"main-nav-before":s(()=>[a(i.$slots,"main-nav-before")]),"main-nav-after":s(()=>[a(i.$slots,"main-nav-after")]),comment:s(()=>[a(i.$slots,"comment")]),footer:s(()=>[a(i.$slots,"footer")]),aside:s(()=>[a(i.$slots,"aside")]),"aside-custom":s(()=>[a(i.$slots,"aside-custom")]),default:s(()=>[a(i.$slots,"default")]),_:3},8,["frontmatter","data"])}const D=g(B,[["render",S]]);export{V as __pageData,D as default};
