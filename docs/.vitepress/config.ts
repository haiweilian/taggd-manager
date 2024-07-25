import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/taggd-manager/',
  title: 'Taggd Manager',
  description: 'Image tags tool, supporting movement, scaling, and custom events',
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    outline: 3,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/haiweilian/taggd-manager',
      },
    ],
  },
  locales: {
    en: {
      lang: 'en',
      label: 'English',
      themeConfig: {
        sidebar: [
          {
            text: 'Intro',
            link: '/en/introduction',
          },
          {
            text: 'Example',
            items: [
              { text: 'Basic', link: 'https://haiweilian.github.io/taggd-manager/example/basic.html' },
              { text: 'Editor', link: 'https://haiweilian.github.io/taggd-manager/example/editor.html' },
            ],
          },
          {
            text: 'Config',
            items: [
              { text: 'Options', link: '/en/api/options' },
              { text: 'Events', link: '/en/api/events' },
              { text: 'Taggd', link: '/en/api/taggd' },
              { text: 'Taggd.Tag', link: '/en/api/taggd.tag' },
            ],
          },
        ],
      },
    },
    zh: {
      lang: 'zh',
      label: '简体中文',
      themeConfig: {
        sidebar: [
          {
            text: '介绍',
            link: '/zh/introduction',
          },
          {
            text: '示例',
            items: [
              { text: '基础', link: 'https://haiweilian.github.io/taggd-manager/example/basic.html' },
              { text: '编辑', link: 'https://haiweilian.github.io/taggd-manager/example/editor.html' },
            ],
          },
          {
            text: '配置',
            items: [
              { text: 'Options', link: '/zh/api/options' },
              { text: 'Events', link: '/zh/api/events' },
              { text: 'Taggd', link: '/zh/api/taggd' },
              { text: 'Taggd.Tag', link: '/zh/api/taggd.tag' },
            ],
          },
        ],
      },
    },
  },
})
