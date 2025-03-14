import { ChatInputCommandInteraction, Client, Collection } from 'discord.js'

export const useAppStore = defineStore('app', () => {
  const client = ref<Client<boolean> | null>(null)
  const botOnline = ref(false)
  const commandsActionMap = ref<Collection<
    string,
    (ctx: ChatInputCommandInteraction) => Promise<void>
  > | null>(null)

  return { client, commandsActionMap, botOnline }
})
