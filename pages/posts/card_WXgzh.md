---
title: 微信公众号分享卡片样式问题
date: 2024-09-29 10:23:45
updated: 2023-08-24
categories: WX 笔记
tags:
  - UNIAPP
  - 微信
  - 笔记
top: 4
---

## 配置安全域名

<!-- ![image.jpg](https://img2023.cnblogs.com/blog/3137473/202305/3137473-20230516101736027-1494685.jpg) -->
![](https://img.mnorg.com/imgs/2025/06/16/684f77ec9bdfb.png)

## 页面引入相关JS

在需要调用JS接口的页面引入如下JS文件，（支持https）：http://res.wx.qq.com/open/js/jweixin-1.6.0.js

如需进一步提升服务稳定性，当上述资源不可访问时，可改访问：http://res2.wx.qq.com/open/js/jweixin-1.6.0.js （支持https）。

备注：支持使用 AMD/CMD 标准模块加载方法加载

## 步骤一：通过config接口注入权限验证配置
所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用（同一个url仅需调用一次，对于变化url的SPA的web app可在每次url变化时进行调用,目前Android微信客户端不支持pushState的H5新特性，所以使用pushState来实现web app的页面会导致签名失败，此问题会在Android6.2中修复）。
```js

wx.config({
  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: '', // 必填，公众号的唯一标识
  timestamp: , // 必填，生成签名的时间戳
  nonceStr: '', // 必填，生成签名的随机串
  signature: '',// 必填，签名
  jsApiList: [] // 必填，需要使用的JS接口列表
});
```
签名算法见[附录1](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62)，所有JS接口列表见[附录2](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#63)

注意：如果使用的是[小程序云开发静态网站托管](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/staticstorage/introduction.html)的域名的网页，可以免鉴权直接跳任意合法合规小程序，调用 wx.config 时 appId 需填入非个人主体的已认证小程序，不需计算签名，timestamp、nonceStr、signature 填入非空任意值即可。

## 步骤二：通过ready接口处理成功验证
```js

wx.ready(function(){
  // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
});
```
步骤三：通过error接口处理失败验证
```js

wx.error(function(res){
  // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
});
```

后记：以上内容为简化版的微信官方的开发文档  作者踩的坑不是在代码 而是进入方式不对 在进入公众号时需通过生成的二维码或者在公众号菜单打开并进入否则直接点链接进入后分享的话还是分享的链接 卡片样式不会生效

后记2：配置分享卡片图片时 路径需要将路径写全 例如

```js

wx.updateAppMessageShareData({
        title: '此处为分享标题', // 分享标题
        desc: '此处为分享描述', // 分享描述
        link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "http://{$_SERVER['HTTP_HOST']}__STATIC__/imgs/gys.png", // 分享图标 加上http
        success: function () {
        // 设置成功
        console.log('设置成功');
        },

    })
```


如下为作者的代码 仅供参考
```js

<script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>

<script>
  let url="http://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
  $.ajax({
    type: "post",
    url: "/index/index/get_share_data",
     data : { url:url },
    dataType: "json",
    success: function (data) {
      console.log(data);
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名
        jsApiList: [
                    'checkJsApi',
                   'onMenuShareAppMessage',
                    'onMenuShareTimeline',
                    'updateAppMessageShareData',
                    'updateTimelineShareData',
                    'onMenuShareQQ',
                    'onMenuShareQZone'
                ], // 必填，需要使用的JS接口列表
      });
    },
  });
  wx.ready(function () {
    wx.updateAppMessageShareData({
        title: '此处为分享标题', // 分享标题
        desc: '此处为分享描述', // 分享描述
        link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "http://{$_SERVER['HTTP_HOST']}__STATIC__/imgs/gys.png", // 分享图标
        success: function () {
        // 设置成功
        console.log('设置成功');
        },

    })
    console.log("??");
  });

  wx.error(function (res) {
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    console.log(res);
  });
</script>
```
