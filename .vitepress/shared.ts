import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'MixCat Discord Bot',
  description: 'A discord.js bot mixed with vite, vue, pinia',
  lastUpdated: true,
  cleanUrls: true,
  base: '/MixCat/',

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/mix-cat_logo.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/mix-cat_logo.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'MixCat Discord Bot' }],
    ['meta', { name: 'og:image', content: 'https://github.com/Proladon/MixCat/blob/main/mix-cat_logo.png' }],
  ],

  themeConfig: {
    i18nRouting: true,
    logo: { src: '/mix-cat_logo.png', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Proladon/MixCat' },
    ],
  },
})
