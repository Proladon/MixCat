import { destroyBot, startBot } from '@/bot'
import { Hono } from 'hono'

const app = new Hono()

app.post('/start', async (c) => {
  await startBot()
  return c.text('Bot started successfully')
})

app.post('/destroy', (c) => {
  try {
    destroyBot()
    return c.text('Destroying bot successfully')
  } catch (error) {
    console.error('Error destroying bot:', error)
    return c.text('Failed to destroy bot', 500)
  }
})

app.post('/restart', async (c) => {
  const appStore = useAppStore()
  if (!appStore.client) return c.text('Bot is not running', 400)
  try {
    destroyBot()
    await sleep(1000)
    startBot()
    return c.text('Bot restarted successfully')
  } catch (error) {
    console.error('Error restarting bot:', error)
    return c.text('Failed to restart bot', 500)
  }
})

export default app
