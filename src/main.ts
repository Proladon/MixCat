import { Client, GatewayIntentBits } from 'discord.js'
import vueInit from '@/core/vue'
import envVar from '@/config/envVar'

import { loadCommandFiles, updateCommands, loadEvents } from '@/core/loader'

vueInit()

const appStore = useAppStore()

const { commands, actions } = await loadCommandFiles()
updateCommands(commands)

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
loadEvents(client)

appStore.commandsActionMap = actions
appStore.client = client

// dailyCorn()

client.login(envVar.BotToken)
