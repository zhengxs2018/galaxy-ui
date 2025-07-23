import lists from 'markdown-it-task-lists'
import { defineConfig } from 'vitepress'

import typedocSidebar from '../reference/typedoc-sidebar.json'

export default defineConfig({
  base: '/docs/',
  title: 'Galaxy UI',
  description:
    '基于 Galaxy 设计规范，提供的高质量组件，服务于所有中后台类应用，让开发者可以快速搭建出高质量的页面。',
  themeConfig: {
    search: {
      provider: 'local',
    },
    outline: {
      level: [2, 3],
    },
    nav: [
      { text: '指南', link: '/guide/introduction', activeMatch: '/guide/' },
      { text: '组件', link: '/component/overview', activeMatch: '/component/' },
      { text: '演练场', link: '/playground' },
      { text: '参考', link: '/reference/', activeMatch: '/reference/' },
    ],
    sidebar: {
      '/guide/': [
        { text: '介绍', link: '/guide/introduction' },
        { text: '快速上手', link: '/guide/getting-started' },
        { text: '自定义主题', link: '/guide/theming' },
      ],
      '/component/': [
        { text: '概览', link: '/component/overview' },
        {
          text: '基础',
          items: [
            { text: 'Config Provider', link: '/component/config-provider' },
            { text: 'Button', link: '/component/button' },
          ],
        },
      ],
      '/reference/': typedocSidebar,
    },
    footer: {
      message: 'Made in <a href="https://mdesign.mediinfo.cn">Galaxy Teams</a>',
      copyright: '© 2025 <a href="https://ui.galaxy.com">Galaxy UI</a>',
    },
  },
  markdown: {
    preConfig(md) {
      md.use(lists)
    },
  },
})
