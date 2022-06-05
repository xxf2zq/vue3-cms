import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { IZqRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import 'element-plus/dist/index.css'

class ZqRequest {
  instance: AxiosInstance
  loading: any
  showloaing: boolean
  constructor(config: IZqRequestConfig) {
    this.instance = axios.create(config)
    // 对应实例的拦截器
    this.instance.interceptors.request.use(config?.requestInterceptor, config?.requestInterceptorCatch)
    this.instance.interceptors.response.use(config.responseInterceptor, config.responseInterceptorCatch)
    this.showloaing = config?.showloading ?? true
    // 所以实例都有的拦截器
    this.instance.interceptors.request.use(
      (res) => {
        if (this.showloaing) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'Loading...',
            fullscreen: true,
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }
        return res
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res
      },
      (err) => {
        return err
      }
    )
  }

  request<T>(config: IZqRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.requestInterceptor) {
        this.instance.interceptors.request.use(config.requestInterceptor)
      }
      if (config.showloading || config.showloading === undefined) {
        this.showloaing = true
      } else {
        this.showloaing = false
      }
      if (config.responseInterceptor) {
        this.instance.interceptors.response.use(config.responseInterceptor)
      }
      this.instance
        .request(config)
        .then((res: any) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: IZqRequestConfig): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'GET'
    })
  }

  post<T>(config: IZqRequestConfig): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'POST'
    })
  }

  delete<T>(config: IZqRequestConfig): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'DELETE'
    })
  }

  patch<T>(config: IZqRequestConfig): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'PATCH'
    })
  }
}

export default ZqRequest
