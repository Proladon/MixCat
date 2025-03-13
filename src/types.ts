import type { JwtVariables } from 'hono/jwt'

declare global {
  export type Variables = JwtVariables
}
