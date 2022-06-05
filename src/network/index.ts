import ZqRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import Localcahce from '@/utils/Localcahce'

const zqrequest = new ZqRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  showloading: true,
  requestInterceptor: (res): any => {
    const token = Localcahce.getitem('token')
    if (token) {
      res.headers!.Authorization = `Bearer ${token}`
    }
    return res
  },
  requestInterceptorCatch: (res): any => {
    return res
  },
  responseInterceptor: (res): any => {
    return res.data
  },
  responseInterceptorCatch: (res): any => {
    return res
  }
})

export default zqrequest
