import { Events } from 'discord.js'

export const event = {
  name: Events.ClientReady,
  once: true,
}

export const action = (ctx) => {
  console.log(`✅ Ready! Logged in as ${ctx.user.tag}`)
}
