import {
  REST,
  Routes,
  Collection,
  SlashCommandBuilder,
  Client,
} from 'discord.js'
import fg from 'fast-glob'
import envVar from '@/config/envVar'
import botConfig from '@/config/bot'

export const logCommandChanges = () => {}

export const updateCommands = async (commands: SlashCommandBuilder[]) => {
  const rest = new REST({ version: botConfig.restApiVersion })
  rest.setToken(envVar.BotToken)
  try {
    await rest.put(
      Routes.applicationGuildCommands(envVar.ClientId, envVar.GuildId),
      { body: commands },
    )
  } catch (error) {
    console.log('[🔥error] updateCommands: ', error)
  }
}

export const loadCommandFiles = async () => {
  const commands: SlashCommandBuilder[] = []
  const actions: Collection<string, () => Promise<void>> = new Collection()
  const files = await fg(`${botConfig.slashCommandDir}/**/index.ts`)

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
  const files = await fg(`${botConfig.eventCommandDir}/**/index.ts`)
  for (const file of files) {
    const eventFile = await import(file)

    if (eventFile.event.once) {
      client.once(eventFile.event.name, eventFile.action)
    } else {
      client.on(eventFile.event.name, eventFile.action)
    }
  }
}
