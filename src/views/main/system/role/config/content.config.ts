const propList: any[] = [
  { prop: 'name', label: '角色名', width: 180 },
  { prop: 'intro', label: '权限介绍', width: 240 },
  {
    prop: 'createAt',
    label: '创建时间',
    width: 260,
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    slotName: 'updateAt',
    width: 260
  },
  {
    label: '操作',
    slotName: 'handler'
  }
]
const showindexColumn = true
const showSelectColumn = true
const title = '角色列表'

export const contentconfig = { propList, showSelectColumn, showindexColumn, title }
