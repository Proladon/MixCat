import { loadCommandFiles, updateCommands } from '@/bot/core/loader'

const deploy = async () => {
  console.log('Deploying commands...')
  try {
    const { commands } = await loadCommandFiles()
    await updateCommands(commands)
    console.log('Commands deployed successfully!')
  } catch (error) {
    console.error('Failed to deploy commands:', error)
    process.exit(1)
  }
}

deploy()
