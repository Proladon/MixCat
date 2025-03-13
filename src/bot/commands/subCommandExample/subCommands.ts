import { ChatInputCommandInteraction } from 'discord.js'

export const subCommandA = async (ctx: ChatInputCommandInteraction) => {
  await ctx.editReply('this is subCommand A !')
}

export const subCommandB = async (ctx: ChatInputCommandInteraction) => {
  await ctx.editReply('this is subCommand B !')
}

export const subCommandC = async (ctx: ChatInputCommandInteraction) => {
  await ctx.editReply('this is subCommand C !')
}
