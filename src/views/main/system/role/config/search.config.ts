const formitems = [
  {
    field: 'name',
    label: '用户名',
    placeholder: '请输入角色名称',
    type: 'text'
  },
  {
    label: '权限介绍',
    field: 'intro',
    placeholder: '请输入权限介绍',
    type: 'text'
  },
  {
    field: 'cratedata',
    label: '时间',
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
