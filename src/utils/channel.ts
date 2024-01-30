import type { Guild, GuildChannel, OverwriteResolvable } from 'discord.js'

// ID查找指定頻道 | find channel by id
export const findChannel = async (guild: Guild, channelId: string) => {
  try {
    const ch = await guild.channels.fetch(channelId)
    return [ch, null]
  } catch (error) {
    console.log(error)
    return [null, error]
  }
}

// 覆寫頻道權限 | override channel permission
export const editChannelPermission = async (
  channel: GuildChannel,
  permissions: OverwriteResolvable[],
) => {
  try {
    await channel.edit({ permissionOverwrites: permissions })
    return [true, null]
  } catch (error) {
    return [null, error]
  }
}
