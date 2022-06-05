const propList: any[] = [
  {
    prop: 'name',
    label: '用户名',
    width: 180
  },
  {
    prop: 'realname',
    label: '真实姓名',
    width: 180
  },
  {
    prop: 'cellphone',
    label: '电话号码',
    width: 180
  },
  {
    prop: 'enable',
    label: '状态',
    width: 100,
    slotName: 'enable'
  },
  {
    prop: 'createAt',
    label: '创建时间',
    width: 180,
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    slotName: 'updateAt',
    width: 180
  },
  {
    label: '操作',
    slotName: 'handler'
  }
]
const showindexColumn = true
const showSelectColumn = true
const title = '用户列表'

export const contentconfig = { propList, showSelectColumn, showindexColumn, title }
