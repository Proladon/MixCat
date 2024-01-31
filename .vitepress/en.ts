import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  themeConfig: {
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Quick Start', link: '/guide/quick-start' },
          { text: 'Config', link: '/guide/configuration' },
        ],
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright  © 2023-${new Date().getFullYear()} Proladon`,
    },

    docFooter: {
      prev: 'Pre',
      next: 'Next',
    },

    outline: {
      label: 'Page Menu',
    },

    lastUpdated: {
      text: 'Last Updated At',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
  },
})
