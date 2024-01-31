# 開發設置

## Bot 設置檔

```ts
/* src/config/bot.ts */

const config: IBotConfig = {
  timeZone: 'Asia/Taipei',
  restApiVersion: '10',
  slashCommandDir: './src/commands',
  eventCommandDir: './src/events',
}
```

所有關於 bot 的運行設置，都在此進行配置設定

## timeZone

設置時區，這將會影響到 bot 在處理任何有關日期的操作。  
不管是送出訊息上的日期顯示、log 訊息的時間顯示以及任何的資料處理。

## restApiVersion

設置 discord rest api 的版本。

## slashCommandDir

定義與存放所有 `slash command` 檔案的頂層資料夾。  
此設置的路徑將會被用於 [loadCommandFiles]() 用以遍歷該路徑下所有層級的 `index.ts` 檔案，即蒐集所有定義 `slash command` 的主要檔案並進行註冊

## eventCommandDir

定義與存放所有 `event command` 檔案的頂層資料夾。  
此設置的路徑將會被用於 [loadEvents]() 用以遍歷該路徑下所有層級的 `index.ts` 檔案，即蒐集所有定義 `event command` 的主要檔案並進行註冊
