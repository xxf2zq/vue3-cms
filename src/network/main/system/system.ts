import zqrequest from '@/network'
import type { IGetpagelist } from './type'

export function getpagedata(payload: IGetpagelist) {
  return zqrequest.post<any>({ url: payload.pageUrl, data: { ...payload.queryInfo } })
}
export function deletePagedata(url: string) {
  return zqrequest.delete<any>({ url })
}
export function createPagedata(payload: IGetpagelist) {
  return zqrequest.post<any>({ url: payload.pageUrl, data: { ...payload.queryInfo } })
}

export function editPagedata(payload: IGetpagelist) {
  return zqrequest.patch<any>({ url: payload.pageUrl, data: { ...payload.queryInfo } })
}
