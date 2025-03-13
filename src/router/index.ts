import { Hono } from 'hono'
// import auth from '@/api/auth/routes'
import { startBot, destroyBot } from '@/bot'

export const registerRoutes = (app: Hono<{ Variables: Variables }>) => {
  // app.route('/auth', auth)
  app.get('/', (c) => {
    return c.text('Hello Hono!')
  })

  app.notFound((c) => {
    return c.text('Not Found', 404)
  })

  app.post('/startBot', async (c) => {
    await startBot()
    return c.text('Starting bot...')
  })

  app.post('/destroyBot', (c) => {
    try {
      destroyBot()
      return c.text('Destroying bot successfully')
    } catch (error) {
      console.error('Error destroying bot:', error)
      return c.text('Failed to destroy bot', 500)
    }
  })
}
