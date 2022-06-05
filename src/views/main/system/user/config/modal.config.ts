import { IFormItem, IForm } from '@/base_ui/form/index'
const formitems: IFormItem[] = [
  {
    field: 'name',
    label: '用户名',
    placeholder: '请输入用户名',
    type: 'text'
  },
  {
    field: 'realname',
    label: '真实姓名',
    placeholder: '请输入用户真实姓名',
    type: 'text'
  },
  {
    field: 'password',
    label: '密码',
    placeholder: '请输入用户密码',
    type: 'password'
  },
  {
    field: 'cellphone',
    label: '电话号码',
    placeholder: '请输入电话号码',
    type: 'text'
  },
  {
    field: 'departmentId',
    label: '选择部门',
    placeholder: '请选择部门',
    type: 'select',
    options: [
      { label: '可用', value: 1 },
      { label: '禁用', value: 0 }
    ]
  },
  {
    field: 'roleId',
    label: '选择角色',
    placeholder: '请选择角色',
    type: 'select',
    options: [
      { label: '可用', value: 1 },
      { label: '禁用', value: 0 }
    ]
  }
]
const colLayout = { span: 24 }

const rules = {
  name: [{ required: true, message: '不能为空', trigger: 'blur' }],
  realname: [{ required: true, message: '不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '不能为空', trigger: 'blur' }],
  cellphone: [{ required: true, message: '不能为空', trigger: 'blur' }],
  departmentId: [{ required: true, message: '不能为空', trigger: 'blur' }],
  roleId: [{ required: true, message: '不能为空', trigger: 'blur' }]
}
export const modalConfig: IForm = { formitems, colLayout, rules }
