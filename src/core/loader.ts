import {
  REST,
  Routes,
  Collection,
  SlashCommandBuilder,
  Client,
} from 'discord.js'
import fg from 'fast-glob'
import envVar from '@/config/envVar'

export const logCommandChanges = () => {}

export const updateCommands = async (commands: SlashCommandBuilder[]) => {
  const rest = new REST({ version: '10' }).setToken(envVar.BotToken)
  try {
    await rest.put(
      Routes.applicationGuildCommands(envVar.ClientId, envVar.GuildId),
      { body: commands },
    )
  } catch (error) {
    console.log('updateCommands', error)
  }
}

export const loadCommandFiles = async () => {
  const commands: SlashCommandBuilder[] = []
  const actions: Collection<string, () => Promise<void>> = new Collection()
  const files = await fg('./src/commands/**/index.ts')

  for (const file of files) {
    const cmd = await import(file)
    if (!cmd.disabled) {
      commands.push(cmd.command)
      actions.set(cmd.command.name, cmd.action)
    }
  }

  return {
    commands,
    actions,
  }
}

export const loadEvents = async (client: Client) => {
  const files = await fg('./src/events/**/index.ts')
  for (const file of files) {
    const eventFile = await import(file)

    if (eventFile.event.once) {
      client.once(eventFile.event.name, eventFile.action)
    } else {
      client.on(eventFile.event.name, eventFile.action)
    }
  }
}
