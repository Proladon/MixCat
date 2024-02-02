<div align="center">
  <img src="https://raw.githubusercontent.com/Proladon/MixCat/main/mix-cat_logo.png" width="250px">
</div>

<h1 align="center">
  <br>
    MixCat Discord Bot
  <br>
</h1>

<h4 align="center">整合了 typescript、vite、vue、pinia，就像一隻米克斯一樣 !</h4>

<h4 align="center">
<a href="https://proladon.github.io/MixCat/" target="_blank">Document</a>
/
<a href="https://proladon.github.io/MixCat/tw/" target="_blank">中文文檔</a>
</h4>

## Overview

MixCat 是一個由 [Proladon](https://github.com/Proladon) 所構想出的一個 discord bot 架構，是由最基本的 discord.js bot 結合混用了一些前端生態套件與工具，像是 [vite(前端打包工具)](https://vitejs.dev)、[vue(前端框架)](https://vuejs.org)、[pinia(前端全域狀態管理套件)](https://pinia.vuejs.org) 而成的一個 discord bot 架構。

### Support Discord Server (伺服器語言: 中文)

<a href="https://shelterzone.net" target="_blank" >
<img src="https://discordapp.com/api/guilds/445157253385814016/widget.png?style=banner2" alt="Discord Banner 2"/>
</a>

## Why

作為一名前端工程師，我熟悉的工具與技術就是天天圍繞著 vue / vite 的技術生態圈。我非常喜歡 vue 的響應式設計與 vite 的簡潔快速和龐大的社群與生態。

在開發 vue 的時後，基本上一定會使用路徑別名，因此當我自己在使用 discord.js 開發的時候，我也總想著使用路徑別名來讓程式碼更簡潔易讀；但我發現如果用 typescript 開發，在最後編譯時，路徑別名常常會有解析錯誤的問題
，當時花了很多時間去配置，但一直覺得不完美與麻煩。

於是我想到，如果使用 vite 來作為打包工具，就如同在開發 vue 的時候一樣，配置路徑別名不就輕而易舉嗎? 同時又可以引入 vue ，使用 vue 的響應式功能，像是 `watch`、`computed`、`ref`、`reactive` ，又可以結合 vue 的全域狀態管理工具 `pinia` 來實現更多功能 !

最終找到了 [vite-node](https://www.npmjs.com/package/vite-node) !! 基於 vite 的 node 運行環境，並且經過實驗還真的可行! 最終就誕生了 MixCat ！

### [Youtube 教學影片撥放清單](https://www.youtube.com/playlist?list=PLSCgthA1AnidGdmSea6V6N24O8mXESrf3)

如果你想深入一步步了解 MixCat 的運作原理與方式，可觀看 Proladon 的教學影片
![Youtube 教學影片撥放清單](https://proladon.github.io/MixCat/yt-playlist.png)
