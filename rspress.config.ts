import { resolve } from 'path'
import { pluginPreview } from '@rspress/plugin-preview'
import { defineConfig } from 'rspress/config'

export default defineConfig({
  lang: 'en',
  root: 'docs',
  base: '/taggd-manager/',
  title: 'Taggd Manager',
  description: 'Image tags tool, supporting movement, scaling, and custom events',
  route: {
    exclude: ['public/**'],
  },
  locales: [
    {
      lang: 'en',
      label: 'English',
    },
    {
      lang: 'zh',
      label: '简体中文',
    },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/haiweilian/taggd-manager',
      },
    ],
  },
  plugins: [pluginPreview()],
  markdown: {
    mdxRs: false,
  },
  mediumZoom: false,
  builderConfig: {
    tools: {
      rspack(options) {
        options.resolve.alias ??= {}
        options.resolve.alias['taggd-manager'] = resolve(__dirname, './dist/taggd.esm.js')
        options.resolve.alias['taggd-manager/dist/taggd.css'] = resolve(__dirname, './dist/taggd.css')
      },
    },
  },
})
