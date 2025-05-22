import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  // url: 'https://valaxy.site/',
  lang: 'zh-CN',
  title: '風の城',
  author: {
    name: '風丶Breeze',
    status:{
      emoji:'🐀',
    },
    // avatar: 'http://p1.music.126.net/jm0idXPGrsrAbViQTd6gag==/109951168210713059.jpg?param=180y180',
    // avatar: 'http://p1.music.126.net/Lq_Nn-r3SkYt9EcRgnA6Mw==/109951166219186303.jpg?param=140y140',
    avatar:'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/%E7%97%85%E5%A8%87%E9%B8%BD%E5%AD%90%281%29%281%29.png',

  },
  subtitle: '懒狗随缘更新ing...',
  description: '六朝何事,只成门户私计',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/wzdxslzgzbdm',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=1623545907',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/285247009?spm_id_from=444.41.0.0',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:fx17628692325@163.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: true,
    title: '生活不易，懒狗卖艺，大哥大嫂行行好',
    description:'赞....赞助什么的 请多来一点',
    methods: [
      {
        name: '支付宝',
        url: 'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/zfb.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/qq.jpg',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/wx.png',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
