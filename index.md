---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'MixCat'
  text: 'A discord.js bot mixed with vite, vue, pinia and Hono'
  tagline: Proladon styles discord bot ヾ(•ω•`)o
  image:
    src: /mix-cat_logo.png
    alt: MixCat
  actions:
    - theme: brand
      text: Quick Start
      link: /guide/quick-start
    - theme: alt
      text: Overview
      link: /overview

features:
  - title: 🧲 Path Aliases
    details: Easily set multiple path aliases without manual handling of path translation issues, thanks to the powerful bundling tool in Vite.
  - title: ⏏ Top-Level Await
    details: Thanks to Vite-node, no additional configuration is needed. It directly supports top-level await and many other powerful features.
  - title: 🔥 HMR
    details: Also, thanks to Vite-node, the 'watch' parameter supports HMR (Hot Module Replacement), enabling efficient hot updates.
  - title: 🍍 Global State Management
    details: Utilizing the preferred state management plugin for Vue, Pinia, makes global reactive state management easy.
  - title: ♻ Compatible with Vite/Vue Ecosystem
    details: With the use of Vite-node and Vue, full compatibility with Vite's configurations and all ecosystem plugins, packages, and features of both Vite and Vue is achieved.
  - title: 🟦 ESM/Typescript
    details: Again, thanks to Vite-node, there's no need for manual configuration of ESM/CommonJs and TypeScript. It's ready to use out of the box.
---
