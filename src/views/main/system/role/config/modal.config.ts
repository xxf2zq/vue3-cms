import { IFormItem, IForm } from '@/base_ui/form/index'
const formitems: IFormItem[] = [
  {
    field: 'name',
    type: 'text',
    label: '角色名',
    placeholder: '请输入角色名'
  },
  {
    field: 'intro',
    type: 'text',
    label: '角色介绍',
    placeholder: '请输入角色介绍'
  }
]
const colLayout = { span: 24 }

const rules = {
  name: [{ required: true, message: '不能为空', trigger: 'blur' }],
  intro: [{ required: true, message: '不能为空', trigger: 'blur' }]
}
export const modalConfig: IForm = { formitems, colLayout, rules }
