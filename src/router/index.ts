import { Hono } from 'hono'
import botRoutes from '@/api/bot/routes'

export const registerRoutes = (app: Hono<{ Variables: Variables }>) => {
  app.get('/', (c) => {
    return c.text('Hello Hono!')
  })
  app.route('bot', botRoutes)

  app.notFound((c) => {
    return c.text('Not Found', 404)
  })
}
