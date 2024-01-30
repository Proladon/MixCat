import { dayjs } from '@/lib/dayjs'

export const dateFormat = (
  dateTime: string | Date,
  dateFormat: string = 'YYYY/MM/DD HH:mm:ss',
) => {
  return dayjs(dateTime).format(dateFormat)
}
