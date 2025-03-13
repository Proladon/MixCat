import { Client, GatewayIntentBits } from 'discord.js'
import envVar from '@/config/envVar'
import { loadCommandFiles, updateCommands, loadEvents } from '@/bot/core/loader'

let client: Client

export const startBot = async () => {
  const appStore = useAppStore()
  const { commands, actions } = await loadCommandFiles()
  updateCommands(commands)
  client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  })
  loadEvents(client)
  appStore.commandsActionMap = actions
  appStore.client = client
  client.login(envVar.BotToken)
}

export const destroyBot = () => {
  if (!client) return
  // console.log(appStore.client.uptime)
  // console.log(appStore.client.isReady())
  try {
    client.destroy()
  } catch (error) {
    console.log('[🔥error] destroyBot: ', error)
  }

  console.log('[🔥] Bot destroyed')
  // botStore.isOnline = false
}
