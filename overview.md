# About MixCat Discord Bot

MixCat is a discord bot framework conceptualized by Proladon. It combines the basics of a discord.js bot with elements from the frontend ecosystem, such as [Vite (frontend bundling tool)](https://vitejs.dev), [Vue (frontend framework)](https://vuejs.org), and [Pinia (frontend global state management library)](https://pinia.vuejs.org).

## Youtube Tutorial Playlist

If you want to delve deeper into how MixCat operates, you can watch Proladon's tutorial videos.

![Youtube Tutorial Playlist](/yt-playlist.png)

## Why

As a frontend engineer, my familiarity revolves around the Vue/Vite technical ecosystem on a daily basis. I particularly appreciate Vue's reactive design, Vite's simplicity and speed, and the extensive community and ecosystem.

While developing with Vue, I always use path aliases to make the code cleaner and more readable. So when I was developing with discord.js, I wanted to use path aliases to achieve the same. However, when using TypeScript, I often encountered path alias resolution errors during compilation. I spent a lot of time configuring it, but I always felt it was imperfect and troublesome.

That's when I thought, if I use Vite as the bundling tool, just like when developing with Vue, configuring path aliases would be a breeze. At the same time, I could bring in Vue and utilize its reactive features like `watch`, `computed`, `ref`, `reactive`... and more, and combine them with Vue's global state management tool, `Pinia`, to implement more functionalities!

Finally, I found [vite-node](https://www.npmjs.com/package/vite-node) !! Based on Vite's node runtime environment, and after experimentation, it turned out to be feasible! Thus, MixCat was born!
