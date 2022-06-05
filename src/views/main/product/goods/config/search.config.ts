const formitems = [
  {
    field: 'name',
    label: '用户名',
    placeholder: '请输入商品名称',
    type: 'text'
  },
  {
    field: 'oldPrice',
    label: '原价格',
    placeholder: '请输入商品原价格',
    type: 'text'
  },
  {
    field: 'newPrice',
    label: '现价格',
    placeholder: '请输入商品现价格',
    type: 'text'
  },

  {
    field: 'status',
    label: '是否可用',
    placeholder: '请选择用户状态',
    type: 'select',
    options: [
      { label: '可用', value: 1 },
      { label: '禁用', value: 0 }
    ]
  },
  {
    field: 'cratedata',
    label: '创建时间',
    type: 'datepicker',
    otheroptions: {
      startPlaceholder: '开始的时间',
      endPlaceholder: '结束的时间',
      type: 'daterange'
    }
  }
]
export const formconfig = {
  formitems
}
