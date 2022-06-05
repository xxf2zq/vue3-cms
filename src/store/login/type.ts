export interface ILogin<T = any> {
  token: string
  userinfo: T
  usermenu: any
  permissions: string[]
}
