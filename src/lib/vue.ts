export default () => {
  const vue = createApp({})
  const pinia = createPinia()

  vue.use(pinia)
}
