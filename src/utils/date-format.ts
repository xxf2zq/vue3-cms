import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
export function formatUtcString(val: string, format: string) {
  return dayjs.utc(val).utcOffset(8).format(format)
}
