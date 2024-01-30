import { Client, Collection } from 'discord.js'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const client = ref<Client<boolean> | null>(null)
  const commandsActionMap = ref<Collection<string, () => Promise<void>> | null>(
    null,
  )

  return { client, commandsActionMap }
})
