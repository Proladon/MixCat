import { cacheStore } from '@/cache/app'
import cron from 'cron'

export const dailyCorn = () => {
  const job = new cron.CronJob(
    '0 0 * * *',
    async () => {
      console.log('🔁 Reset cache done !')
      cacheStore.clear()
    },
    null,
    false,
    'Asia/Taipei',
  )

  job.start()
}
