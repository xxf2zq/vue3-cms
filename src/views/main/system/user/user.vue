<template>
  <div class="user">
    <div class="search">
      <page-search :formconfig="formconfig"></page-search>
      <page-content :contentconfig="contentconfig" page-name="users" @editbtnclick="editbtnclick">
        <template #tablerHeader>
          <div class="tablehead">
            <h3>用户列表</h3>
            <el-button type="primary" @click="addbtnclcik">新增用户</el-button>
          </div>
        </template>
      </page-content>
      <page-model ref="modelref" :modalConfig="modalConfig" page-name="users" :forminfo="forminfo"></page-model>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModel from '@/components/page-model'
import { formconfig } from './config/search.config'
import { contentconfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'
import { usemystore } from '@/store'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModel
  },

  setup() {
    const store = usemystore()
    const ishidepas = ref(false)
    const newcallback = () => {
      ishidepas.value = false
    }
    const editcallback = () => {
      ishidepas.value = true
    }
    const { modelref, addbtnclcik, editbtnclick, forminfo } = usePageModal(newcallback, editcallback)

    provide('ishidepassword', ishidepas)
    // 动态添加部门和角色数据
    const departmentItem = modalConfig.formitems.find((item) => item.field === 'departmentId')
    const roleItem = modalConfig.formitems.find((item) => item.field === 'roleId')
    departmentItem!.options = store.state.entireDeparment.map((item) => {
      return { label: item.name, value: item.id }
    })
    roleItem!.options = store.state.entireRole.map((item) => {
      return { label: item.name, value: item.id }
    })
    return {
      formconfig,
      contentconfig,
      modalConfig,
      modelref,
      addbtnclcik,
      editbtnclick,
      ishidepas,
      forminfo
    }
  }
})
</script>

<style scoped lang="less"></style>
