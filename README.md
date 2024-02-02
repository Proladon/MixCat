<div align="center">
  <img src="https://raw.githubusercontent.com/Proladon/MixCat/main/mix-cat_logo.png" width="250px">
</div>

<h1 align="center">
  <br>
    MixCat Discord Bot
  <br>
</h1>

<h4 align="center">Integrated with TypeScript, Vite, Vue, and Pinia, just like a Mixed Breed Cat !</h4>

<h4 align="center">
<a href="https://proladon.github.io/MixCat/" target="_blank">Document</a>
/
<a href="https://proladon.github.io/MixCat/tw/" target="_blank">中文文檔</a>
</h4>

<h4 align="center">
<a href="https://github.com/Proladon/MixCat/blob/main/README-ch.md" target="_blank">中文 README</a>
</h4>

## Overview

MixCat is a discord bot framework conceptualized by Proladon. It combines the basics of a discord.js bot with elements from the frontend ecosystem, such as [Vite (frontend bundling tool)](https://vitejs.dev), [Vue (frontend framework)](https://vuejs.org), and [Pinia (frontend global state management library)](https://pinia.vuejs.org).

### Support Discord Server (language: Traditional Chinese)

<a href="https://shelterzone.net" target="_blank" >
<img src="https://discordapp.com/api/guilds/445157253385814016/widget.png?style=banner2" alt="Discord Banner 2"/>
</a>

## Why

As a frontend engineer, my familiarity revolves around the Vue/Vite technical ecosystem on a daily basis. I particularly appreciate Vue's reactive design, Vite's simplicity and speed, and the extensive community and ecosystem.

While developing with Vue, I always use path aliases to make the code cleaner and more readable. So when I was developing with discord.js, I wanted to use path aliases to achieve the same. However, when using TypeScript, I often encountered path alias resolution errors during compilation. I spent a lot of time configuring it, but I always felt it was imperfect and troublesome.

That's when I thought, if I use Vite as the bundling tool, just like when developing with Vue, configuring path aliases would be a breeze. At the same time, I could bring in Vue and utilize its reactive features like `watch`, `computed`, `ref`, `reactive`... and more, and combine them with Vue's global state management tool, `Pinia`, to implement more functionalities!

Finally, I found [vite-node](https://www.npmjs.com/package/vite-node) !! Based on Vite's node runtime environment, and after experimentation, it turned out to be feasible! Thus, MixCat was born!

## [Youtube Tutorial Playlist](https://www.youtube.com/playlist?list=PLSCgthA1AnidGdmSea6V6N24O8mXESrf3)

If you want to delve deeper into how MixCat operates, you can watch Proladon's tutorial videos.

![Youtube Tutorial Playlist](https://proladon.github.io/MixCat/yt-playlist.png)
