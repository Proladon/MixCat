import { createApp } from 'vue'
import { createPinia } from 'pinia'

export default () => {
  const vue = createApp({})
  const pinia = createPinia()

  vue.use(pinia)
}
