// export const contentTableConfig = {
//   title: '菜单列表',
//   propList: [
//     { prop: 'name', label: '菜单名称', minWidth: '100' },
//     { prop: 'type', label: '类型', minWidth: '60' },
//     { prop: 'url', label: '菜单url', minWidth: '100' },
//     { prop: 'icon', label: '菜单icon', minWidth: '100' },
//     { prop: 'permission', label: '按钮权限', minWidth: '100' },
//     {
//       prop: 'createAt',
//       label: '创建时间',
//       minWidth: '220',
//       slotName: 'createAt'
//     },
//     {
//       prop: 'updateAt',
//       label: '更新时间',
//       minWidth: '220',
//       slotName: 'updateAt'
//     },
//     { label: '操作', minWidth: '120', slotName: 'handler' }
//   ],
//   showIndexColumn: false,
//   showSelectColumn: false,
//   childrenProps: {
//     rowKey: 'id',
//     treeProp: {
//       children: 'children'
//     }
//   },
//   showFooter: false
// }

const propList: any[] = [
  {
    prop: 'name',
    label: '菜单名称',
    width: 180
  },
  {
    prop: 'type',
    label: '类型',
    width: 80
  },
  {
    prop: 'url',
    label: '菜单url',
    width: 220
  },
  {
    prop: 'icon',
    label: '菜单icon',
    width: 220
  },
  {
    prop: 'permission',
    label: '按钮权限',
    width: 180
  },
  {
    prop: 'createAt',
    label: '创建时间',
    slotName: 'createAt',
    width: 180
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
const showSelectColumn = false
const title = '菜单列表'
const hidefooter = true
const otherchildren = {
  'row-key': 'id',
  treeProp: {
    children: 'children'
  }
}

export const contentconfig = { propList, showSelectColumn, showindexColumn, title, otherchildren, hidefooter }
