import { defineConfig } from "vitepress";
import { shared } from "./shared";
import { en } from "./en";
import { tw } from "./tw";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,

  locales: {
    root: {
      label: "English",
      ...en,
    },
    tw: {
      label: "繁體中文",
      ...tw,
    },
  },
});
