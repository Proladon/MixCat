import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import vueInit from '@/lib/vue'
import { registerRoutes } from './router'

const startServe = () => {
  const app = new Hono<{ Variables: Variables }>()
  registerRoutes(app)
  vueInit()

  console.log(useAppStore().client)

  serve(
    {
      fetch: app.fetch,
      port: 3000,
    },
    (info) => {
      console.log(`Server is running on http://localhost:${info.port}`)
    },
  )
}

startServe()
