# Configuration

## Bot Configuration File

```ts
/* src/config/bot.ts */

const config: IBotConfig = {
  timeZone: 'Asia/Taipei',
  restApiVersion: '10',
  slashCommandDir: './src/commands',
  eventCommandDir: './src/events',
}
```

All settings regarding the bot's runtime are configured here.

## timeZone

Sets the timezone. This will affect how the bot handles any date-related operations,  
including date display in sent messages, time display in log messages, and any data processing.

## restApiVersion

Sets the `Discord REST API` version.

## slashCommandDir

Defines the top level directory where all `slash command` files are located and stored.  
The path set here will be used in [loadCommandFiles]() to traverse all `index.ts` files at all levels under this path,
to gather all files that define `slash commands` and register them.

## eventCommandDir

Defines the top level directory where all `event command` files are located and stored.  
The path set here will be used in [loadEvents]() to traverse all `index.ts` files at all levels under this path,
to gather all files that define `event commands` and register them.
