import { defineConfig } from "vitepress";

export const tw = defineConfig({
  lang: "tw",
  themeConfig: {
    sidebar: [
      {
        text: "開始上手",
        collapsed: false,
        items: [
          { text: "環境建置", link: "/tw/guide/environment" },
          { text: "開發配置", link: "/tw/guide/dev-config" },
        ],
      },
    ],
    footer: {
      message: "基於 MIT 許可發布",
      copyright: `版權所有 © 2023-${new Date().getFullYear()} Proladon`,
    },

    docFooter: {
      prev: "上一頁",
      next: "下一頁",
    },

    outline: {
      label: "頁面導航",
    },

    lastUpdated: {
      text: "最後更新於",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
});