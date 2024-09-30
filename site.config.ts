import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  // url: 'https://i0.hdslb.com/',
  lang: 'zh-CN',
  title: '橙汁不加糖',
  author: {
    name: '風',
    // avatar: 'http://p1.music.126.net/jm0idXPGrsrAbViQTd6gag==/109951168210713059.jpg?param=180y180',
    // avatar: 'http://p1.music.126.net/Lq_Nn-r3SkYt9EcRgnA6Mw==/109951166219186303.jpg?param=140y140',
    avatar:'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/%E7%97%85%E5%A8%87%E9%B8%BD%E5%AD%90%281%29%281%29.png',

  },
  subtitle: '00后社恐菜鸡前端',
  description: '双鸟暂时离分，必有重逢之日',
  social: [
    // {
    //   name: 'RSS',
    //   link: '/atom.xml',
    //   icon: 'i-ri-rss-line',
    //   color: 'orange',
    // },
    // {
    //   name: 'QQ 738960682',
    //   // link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
    //   icon: 'i-ri-qq-line',
    //   color: '#12B7F5',
    // },
    {
      name: 'GitHub',
      link: 'https://github.com/wzdxslzgzbdm',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    // {
    //   name: '微博',
    //   link: 'https://weibo.com/jizhideyunyoujun',
    //   icon: 'i-ri-weibo-line',
    //   color: '#E6162D',
    // },
    // {
    //   name: '豆瓣',
    //   link: 'https://www.douban.com/people/yunyoujun/',
    //   icon: 'i-ri-douban-line',
    //   color: '#007722',
    // },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=1623545907',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    // {
    //   name: '知乎',
    //   link: 'https://www.zhihu.com/people/yunyoujun/',
    //   icon: 'i-ri-zhihu-line',
    //   color: '#0084FF',
    // },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/285247009?spm_id_from=444.41.0.0',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    // {
    //   name: '微信公众号',
    //   link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
    //   icon: 'i-ri-wechat-2-line',
    //   color: '#1AAD19',
    // },
    // {
    //   name: 'Twitter',
    //   link: 'https://twitter.com/YunYouJun',
    //   icon: 'i-ri-twitter-line',
    //   color: '#1da1f2',
    // },
    // {
    //   name: 'Telegram Channel',
    //   link: 'https://t.me/elpsycn',
    //   icon: 'i-ri-telegram-line',
    //   color: '#0088CC',
    // },
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
