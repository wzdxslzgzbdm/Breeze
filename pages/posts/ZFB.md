---
title: 基于UNIAPP开发的H5页面使用微信JSAPI接入微信支付
date: 2024-09-29 16:07:59
updated: 2023-06-04
categories: UNIAPP 笔记
tags:
  - UNIAPP
  - 笔记
top: 3
---


注意看 本文主要讲解uniapp打包成h5页面并部署在公众号时使用JSAPI的微信支付问题\
## 前期准备工作
.首先要有一个开通商户注册的公众号，我们需要他的appid；\
.其次要开通商户公众号的公众号支付的功能并添加域名，开通完成后就可以基本开始我们的开发了

![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/img2wsjsapi.png)

既然是jsapi开发 自然是要引入的\
`npm install weixin-jsapi`\
在页面引入文件\
`import wx from 'weixin-jsapi'`\
如果是html文件中可以script标签引入

![](https://breeze-info.oss-rg-china-mainland.aliyuncs.com/img1wxjsapi.png)


再来就是熟悉一下流程\
微信支付需要先跳转到微信指定的页面获取code ，这个code会在跳到微信指定的页面时会把这个code自动添加到地址栏中再返回支付的页面，注意 返回支付页面时地址栏的code参数不会消失，code参数是在支付的页面进行获取的。

然后我们再把这个code传给后端拿到openid ，再之后把openid给到后端获取调起微信支付的一系列参数\
以下为作者的个人的支付流程 大家可以自行参考

OK 理论到此为止
## codetime

这里作者采用了静默授权的方式获取code

首先写一个获取地址栏code参数的函数 这个函数会在支付页面的onshow生命周期内触发

```js
function getUrlKey(name){//获取url 参数
	 return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(window.location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
	 }
```

这是作者当时赶工期的低质量代码 name 参数可以不写 只需要将return语句中的name变量换成"code"字符串 后续调用时如果有这个name参数就给此函数传递"code"字符串反之则不用传

获取地址栏参数想必大家肯定有更好的方案或者写法 如果想偷懒那就直接借鉴吧

```js
function getCodeApi(state){//获取code
	 let urlNow=encodeURIComponent(window.location.href);
	 let scope='snsapi_base'; //snsapi_userinfo //静默授权 用户无感知
	 let appid='你的appid';//可以自己写死在这或者让后端传给你 作者是直接在此处写死的
	 let url=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlNow}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`;
	 window.location.replace(url);
	}
```

这段代码为拼接地址，并跳转到微信的指定界面 也就是跳转到地址栏中含有code参数的页面

然后作者在触发支付的页面（获取code参数之后返回的页面）onshow生命周期内调用了上面提到的getUrlKey（name）函数来对地址栏的code进行提取

```js
//作者使用的是uniapp的VUE3版本 VUE2版本可自行调整
let WXcode = ref('')
onShow(()=>{
WXcode.value=getUrlKey("code");//获取url参数code
if(WXcode.value!==null){
console.log('拿到了code为',WXcode.value);
getOpenIdWXh5Api(WXcode.value).then(res=>{//此函数为上传code至后端获取openid
console.log('openid:')
console.log(res.data.data.result.openid);
if(res.data.status==1){
	let openid = res.data.data.result.openid;
	payByWXh5Api({order_sn: props.sn,openid:openid}).then(res=>{//此函数为上传订单编号与openid获取支付的相关参数 props.sn为作者在支付页面的父页面传递过来的订单编号参数
	console.log('订单参数：');
	console.log(res);
	let response = res.data.data.response;
	//此处调用本文一开始引入的wxjsapi并进行初始化
	wx.config({
		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。 以下参数均为接口返回 直接填入即可接口没有就拷打你的后端
		appId: response.appId, // 必填，公众号的唯一标识
		timestamp: response.timeStamp, // 必填，生成签名的时间戳
		nonceStr: response.nonceStr, // 必填，生成签名的随机串
		signature: response.paySign, // 必填，签名
		jsApiList: ['chooseWXPay'],
			});
	wx.ready(res=>{
		console.log('js-sdk初始化成功',res);
		wx.chooseWXPay({
		appId: response.appId,
		timestamp: response
		.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
		nonceStr: response.nonceStr, // 支付签名随机串，不长于 32
		package: response.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
		signType: response.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
		paySign: response.paySign, // 支付签名
		success: function(res) {
		console.log('付款成功！', res);
		uni.showToast({
		title: "付款成功！",
		duration: 1000
			})
			window.location.replace('https://xxx.com/x/#/x此处为支付完成后的跳转地址 对地址栏进行直接替换用以清除地址栏上的上一单的code参数，否则会影响onshow时获取code，使之第二次及之后获取的code都为第一次支付时的code，用此重复code去请求openid会报40029 即code无效 以下还有两处为取消支付，支付失败后的跳转地址，同样需要对地址进行整体替换')
				},
		cancel: function(res) {
		console.log('付款取消！', res);
		uni.showToast({
		title: "付款取消！",
		icon:'error',
		duration: 1000
			})
		window.location.replace('https://xxx.com/x/#/x')
		},
		fail: function(res) {
			console.log('付款失败！', res);
			uni.showToast({
			title: "付款失败！",
			icon:'error',
			duration: 1000
		})
		window.location.replace('https://xxx.com/x/#/x')
		}
		});
	});
		wx.error(err=>{
			console.log('js-sdk初始化失败',err);
			});
		});
		}
	});
	} else {
			console.log('第一次进，没拿到');
		}
})

```

OK 到了使用的时候了 给你的支付函数调用前文提到的getCodeApi（）函数 也就是拼接地址跳转的函数

```js
payFun（）{
	//此payfun为你的支付函数 由于作者的支付函数过于复杂 此处不便展示
	getCodeApi('123')//

}
```
## 总结与注意事项
这个‘123’参数无实意 只是微信的拼接要求 也可以换成其他的 （也许是起一个装饰作用吧，如果删掉或者改了之后不能运行的话直接用作者的这个123吧，当时作者没有对其它参数或者空参进行实验，也许微信会改，到时候如果有BUG大家还是去看看文档）

ok 再梳理一下流程 别晕

一、支付函数触发getCodeApi（‘123’）拼接地址跳到指定界面

二、微信会给你的地址栏加上code参数之后会自动跳转回来

三、在支付函数触发的页面也就是微信加完code参数跳转回来的页面的onshow生命周期里写了判断地址栏是否含有code参数的方法

四、onshow方法发现地址栏有code则直接调起支付流程 并在支付完成或失败后手动的对地址栏进行了覆盖以解决首次onshow触发支付后再次触发onshow时获取的code值为旧值（因为地址栏上的code参数不手动清除他真的会一直存在）
使用微信开发助手进行调试时此错误更加明显 可以观察上方的地址栏上在触发一次支付后地址栏会一直存在code参数

OK 看到这里你已经学会了如何在使用uniapp做H5公众号时使用微信JSAPI支付了 恭喜恭喜

（注：此为重置版，原版在作者的博客园，\[原版文章逻辑较为混乱看这一版就足够了]\([uniapp VUE-H5页面微信公众号内使用微信JSAPI支付 - 橙汁不加糖 - 博客园 (cnblogs.com)](https://www.cnblogs.com/silencesuzuka/p/17704671.html))）
