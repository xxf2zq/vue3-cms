import { IFormItem, IForm } from '@/base_ui/form/index'
const formitems: IFormItem[] = [
  {
    field: 'id',
    label: 'ID',
    placeholder: '请输入用户ID',
    type: 'text'
  },
  {
    field: 'name',
    label: '用户名',
    placeholder: '请输入用户名',
    type: 'text'
  },
  {
    field: 'realname',
    label: '真实姓名',
    placeholder: '请输入真实姓名',
    type: 'text'
  },
  {
    field: 'cellphone',
    label: '电话号码',
    placeholder: '请输入电话号码',
    type: 'text'
  },
  {
    field: 'enable',
    label: '是否可用',
    placeholder: '请选择用户状态',
    type: 'select',
    options: [
      { label: '可用', value: 1 },
      { label: '禁用', value: 0 }
    ]
  },
  {
    field: 'createAt',
    label: '创建时间',
    type: 'datepicker',
    otheroptions: {
      startPlaceholder: '开始的时间',
      endPlaceholder: '结束的时间',
      type: 'daterange'
    }
  }
]
export const formconfig: IForm = {
  formitems
}
