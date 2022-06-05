const propList: any[] = [
  {
    prop: 'name',
    label: '商品名称',
    width: 180
  },
  {
    prop: 'oldPrice',
    label: '原价格',
    width: 100,
    slotName: 'oldPrice'
  },
  {
    prop: 'newPrice',
    label: '现价格',
    width: 100,
    slotName: 'newPrice'
  },
  {
    prop: 'imgUrl',
    label: '商品图片',
    width: 100,
    slotName: 'image'
  },
  {
    prop: 'status',
    label: '状态',
    width: 100,
    slotName: 'status'
  },
  {
    prop: 'createAt',
    label: '创建时间',
    width: 250,
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    slotName: 'updateAt',
    width: 250
  },
  {
    label: '操作',
    slotName: 'handler'
  }
]
const showindexColumn = true
const showSelectColumn = true
const title = '商品列表'

export const contentconfig = { propList, showSelectColumn, showindexColumn, title }
