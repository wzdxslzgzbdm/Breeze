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
        'https://img.mnorg.com/imgs/2025/06/16/684f7788b1f0d.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f76b8be752.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f76b709909.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f76b8ad1f8.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f76b7d2a68.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f76b7d19c6.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f76b7e00ff.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f76b5ee4fe.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f76b6000c6.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f76b6d4a44.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f76b6e0919.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f76b5d0981.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f76504102c.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f765061d42.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f76506e081.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f764f3ea22.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f764f42daf.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f764f9f5e0.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f764e5b019.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f764e54b36.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f764e6994f.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f764d57dc5.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f764d73cf7.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f764da4a0c.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f764c5d2ef.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f764c59f67.jpg',
        'https://img.mnorg.com/imgs/2025/06/16/684f764c5dd5a.jpg',
        'https://img.mnorg.com/imgs/2025/06/13/684bea22b6e23.png',
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
      //   target: '_blank',
      //   link: '/anime',
      // },
      // {
      //   icon: 'i-fa-edit',
      //   text: '留言板',
      //   link: '/comment',
      // },
      {
        text: '心爱之人',
        link: '/girls',
        icon: 'i-ri-women-line',
      },
      {
        text: '友情链接',
        icon: 'i-ri-genderless-line',
        link: '/links',
        // items: [
        //   {
        //     text: 'GitHub',
        //     icon: 'i-line-md-github-twotone',
        //     link: 'https://github.com/WRXinYue/valaxy-theme-sakura',
        //   },
        //   {
        //     text: 'Discord',
        //     icon: 'i-line-md-discord-twotone',
        //     link: 'https://discord.gg/sGe4U4p4CK',
        //   },
        //   {
        //     text: 'Valaxy →',
        //     icon: 'i-ri-cloud-fill',
        //     link: 'https://github.com/YunYouJun/valaxy',
        //   },
        // ],
      },
      // {
      //   text: pkg.author.name,
      //   icon: 'i-line-md-hazard-lights-filled',
      //   link: pkg.author.url,
      //   target: '_blank',
      // },
      {
        text: '关于',
        icon: 'i-fa-leaf',
        link: '/about',
        // target: '_blank',
      },
      // {
      //   text: 'RSS',
      //   icon: 'i-fa-feed',
      //   link: '/atom.xml',
      //   target: '_blank',
      // },
    ],
    navbarOptions: {
      title: ['Breeze', '風'],
      subTitle: '风过无痕，影存片刻；此刹之光，亦是吾所唯一之证。',
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
      showCounts: true
    },

    tags: {
      rainbow: true,
    },

    footer: {
      since: 2019,
      powered: true,
      icon: {
        img: 'https://img.mnorg.com/imgs/2025/06/16/684f7abb92859.png',
        animated: true,
        // url: 'https://wrxinyue.org',
        title: 'Breeze',
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
