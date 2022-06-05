type IType = 'text' | 'password' | 'select' | 'datepicker'
type IOptions = { label: string; value: string | number }
export interface IFormItem {
  field: string
  label: string
  rules?: any[]
  placeholder?: any
  type: IType
  options?: IOptions[]
  otheroptions?: any
}

export interface IForm {
  formitems: IFormItem[]
  laberWidth?: string
  itemstyle?: Object
  colLayout?: Object
  rules?: any
}
