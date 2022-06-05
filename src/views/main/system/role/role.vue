<template>
  <div class="role">
    <page-search :formconfig="formconfig"></page-search>
    <page-content :contentconfig="contentconfig" pageName="role" @editbtnclick="editbtnclick">
      <template #tablerHeader>
        <div class="tablehead">
          <h3>角色列表</h3>
          <el-button type="primary" @click="addbtnclcik">新增角色</el-button>
        </div>
      </template>
    </page-content>
    <page-model ref="modelref" :otherinfo="otherinfo" :modalConfig="modalConfig" page-name="role" :forminfo="forminfo">
      <el-tree
        :data="menuslist"
        show-checkbox
        node-key="id"
        @check="handlecheck"
        :default-expanded-keys="[]"
        :props="{ children: 'children', label: 'name' }"
      />
    </page-model>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { contentconfig } from './config/content.config'
import { formconfig } from './config/search.config'
import PageContent from '@/components/page-content/index'
import PageSearch from '@/components/page-search'
import PageModel from '@/components/page-model'
import { usePageModal } from '@/hooks/use-page-modal'
import { modalConfig } from './config/modal.config'
import { usemystore } from '@/store'
export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch,
    PageModel
  },
  setup() {
    const ishidepas = ref(false)
    const store = usemystore()
    const newcallback = () => {
      ishidepas.value = false
    }
    const editcallback = () => {
      ishidepas.value = true
    }
    const { modelref, addbtnclcik, editbtnclick, forminfo } = usePageModal(newcallback, editcallback)
    const menuslist = computed(() => store.state.menuslist)
    const otherinfo = ref({})
    const handlecheck = (n1: any, n2: any) => {
      const menukeys = [...n2.checkedKeys, ...n2.halfCheckedKeys]
      otherinfo.value = { menuList: menukeys }
    }
    return {
      contentconfig,
      formconfig,
      modelref,
      addbtnclcik,
      editbtnclick,
      forminfo,
      modalConfig,
      menuslist,
      otherinfo,
      handlecheck
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
