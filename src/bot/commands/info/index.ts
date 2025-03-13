import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import infoEmbed from './embeds'

export const command = new SlashCommandBuilder()
  .setName('info')
  .setDescription('SZBot info')

export const action = async (ctx: ChatInputCommandInteraction) => {
  await ctx.reply({ embeds: [infoEmbed(ctx.client)] })
}
