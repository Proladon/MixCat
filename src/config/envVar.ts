import { config } from 'dotenv'
config({ path: `.env.${process.env.MODE}` })

export default {
  RunMode: process.env.MODE || 'development',
  BotToken: process.env.BOT_TOKEN || '',
  ClientId: process.env.CLIENT_ID || '',
  GuildId: process.env.GUILD_ID || '',
  BackendHost: process.env.BACKEND_HOST || '',
}
