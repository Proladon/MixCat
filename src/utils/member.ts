import type { Guild, Snowflake } from 'discord.js'

// ID查找指定成員 | find member by id
export const findMember = async (guild: Guild, memberId: Snowflake) => {
  try {
    const member = await guild.members.fetch(memberId)
    return [member, null]
  } catch (error) {
    return [null, error]
  }
}
