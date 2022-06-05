import zqrequest from '../index'
import { ILoginData, IData } from './type'

export function login(userinfo: any) {
  return zqrequest.post<ILoginData<IData>>({ url: '/login', data: { ...userinfo }, showloading: false })
}

export function getuserbyid(id: number) {
  return zqrequest.get<ILoginData>({ url: '/users/' + id, showloading: false })
}

export function getusermenubyid(id: number) {
  return zqrequest.get<ILoginData>({ url: `/role/${id}/menu`, showloading: false })
}
