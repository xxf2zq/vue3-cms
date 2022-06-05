import { ref } from 'vue'
import PageModel from '@/components/page-model'
type CallbackType = () => void
type EditbackType = () => void

export function usePageModal(newcb?: CallbackType, editcb?: EditbackType) {
  const modelref = ref<InstanceType<typeof PageModel>>()
  const forminfo = ref({})
  const addbtnclcik = () => {
    modelref.value!.dialogVisible = true
    forminfo.value = {}
    newcb && newcb()
  }
  // 编辑
  const editbtnclick = (item: any) => {
    modelref.value!.dialogVisible = true
    forminfo.value = item
    editcb && editcb()
  }
  return { addbtnclcik, editbtnclick, modelref, forminfo }
}
