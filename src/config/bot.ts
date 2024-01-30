interface IBotConfig {
  timeZone: string
  restApiVersion: string
  slashCommandDir: string
  eventCommandDir: string
}

const config: IBotConfig = {
  timeZone: 'Asia/Taipei',
  restApiVersion: '10',
  slashCommandDir: './src/commands',
  eventCommandDir: './src/events',
}

export default config
