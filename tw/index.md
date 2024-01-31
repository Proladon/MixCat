---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'MixCat'
  text: 'A discord.js bot mixed with vite, vue, pinia'
  tagline: Proladon styles discord bot ヾ(•ω•`)o
  image:
    src: /mix-cat_logo.png
    alt: MixCat
  actions:
    - theme: brand
      text: 快速開始
      link: /tw/guide/quick-start
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

features:
  - title: 🧲 路徑別名
    details: 很容易可以設定多個路徑別名，不須再手動處理路徑轉譯的問題，多虧了 vite 強大的打包工具
  - title: ⏏ 頂層 Await
    details: 多虧了 vite-node，不須額外配置，直接支持 top-level await，以及諸多強大的功能
  - title: 🔥 熱更新
    details: 同樣多虧了 vite-node，watch 參數支持了 HMR (Hot module replacement)
  - title: 🍍 全域狀態管理
    details: 使用 vue 首選的狀態管理插件 pinia，可以很容易幫助你進行全域的響應式狀態管理
  - title: ♻ 可使用 Vite/Vue 生態
    details: 由於使用了 vite-node 與 vue，完全可以使用 vite 的相關配置與所有 vite 和 vue 的生態插件、套件、功能
  - title: 🟦 ESM/Typescript
    details: 同樣多虧了 vite-node，不在需要手動配置 ESM/CommonJs 與 typescript 的相關配置，開箱即用
---
