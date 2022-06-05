export interface IData {
  id: number
  name: string
  token: string
}

export interface ILoginData<T = any> {
  code: number
  data: T
}
