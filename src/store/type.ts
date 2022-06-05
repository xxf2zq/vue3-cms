import { ILogin } from './login/type'
import { ISystemdata } from './main/system/type'
import { IDashboardState } from './main/analysis/type'
export interface IRootstore {
  count: number
  entireDeparment: any[]
  entireRole: any[]
  menuslist: any[]
}

export interface IRootstate {
  Loginstore: ILogin
  system: ISystemdata
  analysis: IDashboardState
}

export type IRootstatewithMudule = IRootstate & IRootstore
