import { ChatInputCommandInteraction, Events } from 'discord.js'
import { useAppStore } from '@/store/app'

export const event = {
  name: Events.InteractionCreate,
}

export const action = async (interaction: ChatInputCommandInteraction) => {
  if (!interaction.isChatInputCommand()) return
  const appStore = useAppStore()
  if (!appStore.commandsActionMap) return
  const action = appStore.commandsActionMap.get(interaction.commandName)
  if (!action) return

  await action(interaction)
}
