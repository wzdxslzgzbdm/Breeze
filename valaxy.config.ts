import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',
  siteConfig: {
    comment:{
      enable:true
    },
  },
  addons:[
    addonWaline({
      serverURL:'https://mytaketeam-4u0audb63-wzdxslzgzbdms-projects.vercel.app/.well-known/vercel/toolbar?path=%2F%3FvercelToolbarCode%3DMfDpTzMM6TuICcJ'
    })
  ],
  themeConfig: {
    banner: {
      enable: true,
      title: '風のひみつ基地',
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '我亲爱的老婆们',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2019,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },
  },

  unocss: { safelist },
})
