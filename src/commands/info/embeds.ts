import { EmbedBuilder, Client } from 'discord.js'
import gitRev from 'git-rev-sync'
import { stateColors } from '@/config/colors'

export default (client: Client<true>) => {
  return new EmbedBuilder()
    .setColor(stateColors.info)
    .setTitle(`${client.user?.username} Info`)
    .addFields(
      // { name: '\u200B', value: '\u200B' },
      { name: 'Version', value: gitRev.tag() },
    )
}
