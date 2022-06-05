import type { AxiosRequestConfig, AxiosResponse } from 'axios'
interface IZqRequestConfig extends AxiosRequestConfig {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (config: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (config: any) => any
  showloading?: boolean
}
export type { IZqRequestConfig }
