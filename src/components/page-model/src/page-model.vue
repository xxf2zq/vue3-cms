<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <zq-from v-bind="modalConfig" v-model="FormData" :key="Date.now()"></zq-from>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="makesurebrnclick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import ZqFrom from '@/base_ui/form'
import { usemystore } from '@/store'

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    forminfo: {
      type: Object,
      default: () => {}
    },
    pageName: {
      type: String,
      required: true
    },
    otherinfo: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ZqFrom
  },
  setup(props, _) {
    const dialogVisible = ref(false)
    const store = usemystore()
    const FormData = ref({})
    watch(
      () => props.forminfo,
      (newval: any) => {
        console.log(newval)
        FormData.value = newval
      },
      { deep: true, immediate: true }
    )
    const length = Object.keys(props.forminfo).length
    const makesurebrnclick = () => {
      if (length) {
        console.log('编辑')
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          queryInfo: { ...FormData.value, ...props.otherinfo },
          id: props.forminfo.id
        })
        dialogVisible.value = false
      } else {
        console.log('新建')
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          queryInfo: { ...FormData.value, ...props.otherinfo }
        })
        dialogVisible.value = false
      }
    }
    return {
      dialogVisible,
      FormData,
      makesurebrnclick
    }
  }
})
</script>

<style lang="less" scoped></style>
