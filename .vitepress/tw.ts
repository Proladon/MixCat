import { createRequire } from "module";
import { defineConfig, type DefaultTheme } from "vitepress";

const require = createRequire(import.meta.url);
const pkg = require("vitepress/package.json");

export const tw = defineConfig({
  lang: "tw",

  themeConfig: {
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 尤雨溪`,
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

    // langMenuLabel: "多语言",
    // returnToTopLabel: "回到顶部",
    // sidebarMenuLabel: "菜单",
    // darkModeSwitchLabel: "主题",
    // lightModeSwitchTitle: "切换到浅色模式",
    // darkModeSwitchTitle: "切换到深色模式",
  },
});
