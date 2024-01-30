import _dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import botConfig from '@/config/bot'

_dayjs.extend(utc)
_dayjs.extend(timezone)
_dayjs.tz.setDefault(botConfig.timeZone)

export const dayjs = (dateTime: string | Date, timeZone?: string) => {
  if (timeZone) return _dayjs.tz(dateTime, timeZone)
  return _dayjs.tz(dateTime)
}
