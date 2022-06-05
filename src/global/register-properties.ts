import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'
export default function registerProperties(app: App): void {
  app.config.globalProperties.$filters = {
    foo: () => {
      return 'foo'
    },
    formatUtcTime: (time: string, format = 'YYYY-MM-DD HH:mm:ss') => {
      return formatUtcString(time, format)
    }
  }
}
export {}
