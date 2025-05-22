// import type { UserThemeConfig } from 'valaxy-theme-yun'
// import { defineValaxyConfig } from 'valaxy'

// // add icons what you will need
// const safelist = [
//   'i-ri-home-line',
// ]

// /**
//  * User Config
//  */
// export default defineValaxyConfig<UserThemeConfig>({
//   // site config see site.config.ts

//   theme: 'yun',

//   themeConfig: {
//     banner: {
//       enable: true,
//       title: '云游君的小站',
//     },

//     pages: [
//       {
//         name: '我的小伙伴们',
//         url: '/links/',
//         icon: 'i-ri-genderless-line',
//         color: 'dodgerblue',
//       },
//       {
//         name: '喜欢的女孩子',
//         url: '/girls/',
//         icon: 'i-ri-women-line',
//         color: 'hotpink',
//       },
//     ],

//     footer: {
//       since: 2016,
//       beian: {
//         enable: true,
//         icp: '苏ICP备17038157号',
//       },
//     },
//   },

//   unocss: { safelist },
// })

// sakurua主题配置
import type { ThemeUserConfig } from 'valaxy-theme-sakura'
import { defineValaxyConfig } from 'valaxy'
import { addonBangumi } from 'valaxy-addon-bangumi'// 追番插件
import { addonLive2d } from 'valaxy-addon-live2d'
import { addonMeting } from 'valaxy-addon-meting'
import { addonWaline } from 'valaxy-addon-waline'
import pkg from 'valaxy-theme-sakura/package.json'

export default defineValaxyConfig<ThemeUserConfig>({
  theme: 'sakura',
  devtools: true,

  themeConfig: {
    ui: {
      primary: '#fe9500',

      toggleDarkButton: {
        lightIcon: 'i-line-md-moon-alt-to-sunny-outline-loop-transition',
        darkIcon: 'i-line-md-sunny-outline-to-moon-loop-transition',
      },
      pinnedPost: {
        icon: 'i-fa-anchor',
      },
      postList: {
        icon: 'i-fa-envira',
      },
      scrollDown: {
        icon: 'i-fa-chevron-down',
      },
    },

    hero: {

      title: 'Breezeの笔记站',
      motto: 'You got to put the past behind you before you can move on.',
      urls: [
        // 'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-858k3j.jpg',
        // 'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-3l2vm3.jpg',
        // 'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-3z9dz9.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-rrdgp1.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/%E4%B8%9C%E6%B5%B7%E5%B8%9D%E7%9A%87%26%E9%BA%A6%E6%98%86.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/1688474262024.png',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/93032371_p0_master1200.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522155929.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160020.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160148.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160154.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160158.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160203.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160212.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160216.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160221.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160225.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160231.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160236.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160242.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160301.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160308.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160312.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160317.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160321.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160327.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160332.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160336.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160341.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160344.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/QQ%E5%9B%BE%E7%89%8720250522160348.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/hanser.jpg',
        'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/banner/alioss/%E6%98%8E%E6%97%A5%E9%A6%99.jpg',
        // 'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-zyxq6j.jpg',
        // Source: https://www.pixiv.net/artworks/72203573
        // 'https://valaxy-theme-sakura.s3.bitiful.net/home-wallpaper.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper/yae-miko-sunset-sakura-genshin-impact-moewalls-com.mp4',
      ],
      randomUrls: true,
      playerUrl: 'https://breeze-info.oss-rg-china-mainland.aliyuncs.com/%E6%98%8E%E6%97%A5%E9%A6%99.mp4',
      // playerUrl: 'https://valaxy-theme-sakura.s3.bitiful.net/theming-demos/mashiro/The Pet Girl of Sakurasou.mp4',
      // playerUrl: 'https://valaxy-theme-sakura.s3.bitiful.net/PV/Original PV Little love song MONGOL 800 cover by Amatsuki.mp4',
      style: '',
      fixedImg: true,
      typewriter: true,
      enableHitokoto: true,
      waveTheme: 'horizontal',
    },

    notice: {
      message: '<b>这是Breeze的新站点，欢迎访问！友链互换请从以上方式任意联系</b></br>',
    },

    // pinnedPost: {
    //   text: 'START:DASH!!',

    //   entries: [
    //     {
    //       title: 'Docs',
    //       desc: '主题文档',
    //       link: 'https://sakura.valaxy.site',
    //       img: 'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-yxoejx.jpg',
    //     },
    //   ],
    // },

    pagination: {
      animation: true,
      infiniteScrollOptions: {
        preload: true,
      },
    },

    postList: {
      text: '文章列表',

      isImageReversed: true,
      // defaultImage: ['https://www.dmoe.cc/random.php?random', 'https://www.loliapi.com/acg/pc/?random'],
      defaultImage: ['https://www.dmoe.cc/random.php?random', 'https://img.xjh.me/random_img.php?random?type=bg&return=302'],
    },

    postFooter: {
      navigationMerge: true,
    },

    navbar: [
      {
        icon: 'i-fa-fort-awesome',
        locale: 'menu.home',
        link: '/',
      },
      // {
      //   icon: 'i-line-md-folder-twotone',
      //   locale: 'menu.categories',
      //   link: '/categories',
      // },
      // {
      //   icon: 'i-fa-archive',
      //   locale: 'menu.archives',
      //   link: '/archives',
      // },
      // {
      //   icon: 'i-fa-film',
      //   text: '番剧',
      //   // locale: 'menu.anime',
      //   link: '/anime',
      // },
      // {
      //   icon: 'i-fa-edit',
      //   text: '留言板',
      //   link: '/comment',
      // },
      // {
      //   text: '友情链接',
      //   icon: 'i-fa-chain',
      //   link: '/links',
      //   items: [
      //     {
      //       text: 'GitHub',
      //       icon: 'i-line-md-github-twotone',
      //       link: 'https://github.com/WRXinYue/valaxy-theme-sakura',
      //     },
      //     {
      //       text: 'Discord',
      //       icon: 'i-line-md-discord-twotone',
      //       link: 'https://discord.gg/sGe4U4p4CK',
      //     },
      //     {
      //       text: 'Valaxy →',
      //       icon: 'i-ri-cloud-fill',
      //       link: 'https://github.com/YunYouJun/valaxy',
      //     },
      //   ],
      // },
      // {
      //   text: pkg.author.name,
      //   icon: 'i-line-md-hazard-lights-filled',
      //   link: pkg.author.url,
      //   target: '_blank',
      // },
      {
        text: '关于',
        icon: 'i-fa-leaf',
        link: pkg.author.url,
        target: '_blank',
      },
      // {
      //   text: 'RSS',
      //   icon: 'i-fa-feed',
      //   link: '/atom.xml',
      //   target: '_blank',
      // },
    ],
    navbarOptions: {
      title: ['Valaxy Theme', 'Sakura'],
      subTitle: '一个基于 valaxy 的 sakura 主题',
      offset: 0,
      invert: ['home'],
      showMarker: false,
      autoHide: ['home'],
    },

    sidebar: [
      {
        text: '🌈',
        locale: 'menu.home',
        link: '/',
      },
      // {
      //   text: '🗂️',
      //   locale: 'menu.archives',
      //   link: '/archives/',
      // },
      // {
      //   text: '📂',
      //   locale: 'menu.categories',
      //   link: '/categories/',
      // },
      // {
      //   text: '🏷️',
      //   locale: 'menu.tags',
      //   link: '/tags/',
      // },
      // {
      //   text: '🎯 清单',

      //   items: [
      //     {
      //       text: '电影 🎞️',
      //       link: '/movie',
      //     },
      //     {
      //       text: '番剧 🍨',
      //       link: '/anime',
      //     },
      //     {
      //       text: '游戏 🎮',
      //       link: '/game',
      //     },
      //     {
      //       text: '歌单 🎵',
      //       link: '/music',
      //     },
      //   ],
      // },
      // {
      //   text: '📝 留言板',
      // },
      // {
      //   text: '🍻 朋友圈',
      // },
      // {
      //   text: '❤️ 打赏',
      // },
      // {
      //   text: '📌',
      //   locale: 'menu.about',
      // },
    ],
    sidebarOptions: {
      position: 'left',
    },

    tags: {
      rainbow: true,
    },

    footer: {
      since: 2019,

      icon: {
        img: '/favicon-16x16.ico',
        animated: true,
        url: 'https://wrxinyue.org',
        title: 'WRXinYue',
      },
    },

    scrollToTop: true,
    scrollIndicator: true,
    scrollLock: false,
  },

  addons: [
    addonWaline({
      serverURL: 'https://waline.wrxinyue.org',
      pageview: true,
      comment: true,
    }),
    addonMeting({
      global: true,
      props: {
        id: '2489775340',
        server: 'netease',
        type: 'playlist',
      },
      options: {
        autoHidden: true,
        animationIn: true,
        lyricHidden: true,
      },
    }),
    addonLive2d({
      enableLive2D: ['Tia', 'Pio', 'XiaoYun'],
      live2DCollection: {
        // https://github.com/AdingApkgg/live2d-api
        // https://cdn.jsdelivr.net/gh/adingapkgg/live2d-api/
        Asuna: {
          models: [
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_01/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_02/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_03/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_04/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_05/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_06/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_07/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_08/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_09/index.json',
            // 'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_10/index.json',
            // 'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_11/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_12/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_13/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_14/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_15/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_16/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_17/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_18/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_19/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_20/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_21/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_22/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_23/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_24/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_25/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_26/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_27/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_28/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_29/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_30/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_31/index.json',
            // 'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_32/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_33/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_34/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_35/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_36/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_37/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_38/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_39/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_40/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_41/index.json',
            // 'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_42/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_43/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_44/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_45/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/asuna/asuna_46/index.json',
          ],
        },
        Type95: {
          models: [
            'https://registry.npmmirror.com/weblive2d/latest/files/model/95type/95type_3702/normal/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/95type/95type_3702/destroy/index.json',
          ],
        },
        HK416: {
          models: [
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_3401/destroy/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_3401/normal/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_805/normal/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_805/destroy/index.json',
          ],
        },
      },
    }),
    addonBangumi({
      api: 'https://yi_xiao_jiu-bangumi.web.val.run',
      bilibiliUid: '1579790',
      bgmEnabled: false,
    }),
  ],

  vite: {
    optimizeDeps: {
      include: [
        'd3',
        'lodash-es',
      ],
    },
  },
})
