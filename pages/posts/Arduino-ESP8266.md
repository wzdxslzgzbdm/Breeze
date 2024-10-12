---
title: 阿里云物联网平台、微信小程序、ESP8266三者简易通讯
date: 2023-07-05
updated: 2023-07-05
categories: Arduino 笔记
tags:
  - Arduino
  - C++
  - 阿里云
  - 微信小程序
top: 2
---
## 简介
本篇文章将会带领读者从零开始实现阿里云物联网平台、微信小程序、开发板之间的数据交互，可以作为实现智能家居的基座。完成后可以使用微信小程序实现对开发板的基本控制，如传递布尔值实现接入开发板的相关模块的状态切换，下发具体数值使接入开发板的模块更新逻辑处理阈值，以及最基本的将开发板接入的传感器采集到的读数实时传递给阿里云平台，平台再将读数传递给微信小程序进行展示。后续亦可进行模块的增减以实现相应需求。
## 前期准备

1、学习微信小程序开发相关（入门即可）
2、阿里云物联网平台公共实例一份（需注册）
3、ESP8266NodeMCU开发板一块（自备相关配件）
4、用到的编译软件：微信开发者工具、ArduinoIDE
5、你家Wifi的名称及密码（建议提前记下来放到桌面上，后续可直接粘贴）

## 阿里云前期操作
 创建产品
 ![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%871.png)
功能定义（主要是接收端的定义，新增功能也需要新增功能定义）
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%872.png)
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%873.png)
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%874.png)
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%875.png)
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%876.png)
自定义topic （建议接收端和发送端各一个，权限为发布和订阅）
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%877.png)
## 开发板与微信小程序
创建设备（发送端和接收端都需要创建）
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%878.png)
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%879.png)
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8710.png)

！！！此处三元组与arduino代码里的三元组不是同一组 本文档arduino与小程序截图内的两处三元组都为以往项目的三元组 需进行二次替换不可照搬因抄袭代码导致的损失不予承担且保留追责权利
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8711.png)
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8712.png)

## 在接收端和发送端代码内订阅各自的topic并与阿里云链接
打开阿里云物联网控制台
左侧 消息转发==》云产品流传
点击数据源 创建数据源 编辑 添加topic 选择发送端的自定义topic
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8713.png)
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8714.png)
点击数据目的 创建数据目的 编辑 操作为发送到另一个topic 产品选择接收端
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8715.png)
点击解析器 创建解析器
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8716.png)
 编辑 关联数据源 选择之前创建的数据源
 ![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8717.png)
 点击数据目的 关联数据目的
 ![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8718.png)
选择之前创建的数据目的 点击解析器脚本 编写脚本
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8719.png)
![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/esp8266/%E5%9B%BE%E7%89%8720.png)
首行固定格式 var data = payload("json");
将发送端的JSON数据转化 流传物模型上报数据 writeIotTopic(1002, "/sys/id9fLzoFUFT/4_12_8266/thing/service/property/set",data)  writeIotTopic为解析器的API 1002为数据目的ID
/sys/id9fLzoFUFT/4_12_8266/thing/service/property/set为接收端的topic  (/sys为前缀 不可去除 此为设置接收端物模型的属性) data为解析后的数据
可于在线调试界面调试测试接收端是否能正确接收平台转发的消息 如成功则于日志服务中查看平台转发的消息格式 并将此格式作为发送端发送数据时的格式

## 结束语
本教程于演示于2023年中完成并运行成功 如有变动请自行查阅相关文档。

重申：本教程仅作为学习参考，切勿抄袭三元组数据，由此带来的损失作者概不负责且导致作者损失的，作者有权利追责。更多详细内容请查阅官方文档。
<!-- Modify `valaxy.config.ts` to custom your blog. -->

