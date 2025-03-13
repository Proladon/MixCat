import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { subCommandA, subCommandB, subCommandC } from './subCommands'

export const command = new SlashCommandBuilder()
  .setName('subcommand')
  .setDescription('subcommand example')
  .addSubcommand((sub) => sub.setName('a').setDescription('Sub Command A'))
  .addSubcommand((sub) => sub.setName('b').setDescription('Sub Command B'))
  .addSubcommand((sub) => sub.setName('c').setDescription('Sub Command C'))

export const action = async (ctx: ChatInputCommandInteraction) => {
  const cmdName = ctx.options.getSubcommand()
  await ctx.deferReply()

  switch (cmdName) {
    case 'a':
      await subCommandA(ctx)
      break
    case 'b':
      await subCommandB(ctx)
      break
    case 'c':
      await subCommandC(ctx)
      break
  }
}
