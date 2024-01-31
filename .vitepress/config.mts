import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MixCat",
  description: "A discord.js bot mixed with vite, vue, pinia",
  themeConfig: {
    i18nRouting: true,
    logo: "/mix-cat_logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },

  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    tw: {
      label: "繁體中文",
      lang: "tw",
    },
  },
});
