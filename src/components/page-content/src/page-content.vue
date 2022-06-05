<template>
  <div class="contain">
    <page-table
      v-bind="contentconfig"
      :listData="dataList"
      :dataCount="dataCount"
      @handlePageChange="handlePageChange"
      @handleSizeChange="handleSizeChange"
    >
      <template #tablerHeader="{ value }">
        <slot name="tablerHeader" :value="value" v-if="iscreate"> </slot>
      </template>
      <template #enable="{ value }">
        <el-button size="small" :type="value.enable ? 'success' : 'danger'" plain>
          {{ value.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="{ value }"> {{ global.formatUtcTime(value.createAt) }}</template>
      <template #updateAt="{ value }"> {{ global.formatUtcTime(value.updateAt) }}</template>
      <template #handler="{ value }">
        <el-button type="danger" :icon="Delete" text v-if="isdelete" @click="deleteitem(value)">删除</el-button>
        <el-button type="primary" :icon="Edit" text v-if="isupdate" @click="edititem(value)">编辑</el-button>
      </template>

      <template #[item.slotName]="{ value }" v-for="item in otherslot">
        <slot :name="item.slotName || 'default'" :value="value" :key="item"></slot>
      </template>
    </page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, computed, onBeforeUnmount, reactive } from 'vue'
import PageTable from '@/base_ui/table/index'
import { usemystore } from '../../../store/index'
import emitter from '@/utils/eventbus'
import { Edit, Delete } from '@element-plus/icons-vue'
import { usePermission } from '@/hooks/use-permission'

export default defineComponent({
  props: {
    contentconfig: {
      type: Object as any,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  // props: ['contentconfig', 'userList'],
  components: {
    PageTable
  },
  setup(props, _) {
    const internalInstance = getCurrentInstance()
    const global = (internalInstance as any).appContext.config.globalProperties.$filters
    const otherslot = props.contentconfig.propList.filter((item: any) => {
      if (item.slotName === 'enable') return false
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handler') return false
      return true
    })
    const store = usemystore()

    // 按钮权限
    const iscreate = usePermission(props.pageName, 'create')
    const isupdate = usePermission(props.pageName, 'update')
    const isdelete = usePermission(props.pageName, 'delete')
    const isquery = usePermission(props.pageName, 'query')
    const pageinfo = reactive({
      offset: 0,
      size: 10
    })
    // 发送网络请求
    const getPageData = (queryinfo: any = {}, page = pageinfo) => {
      if (!isquery) return
      store.dispatch('system/getPagesLiseAction', {
        pageUrl: '/' + props.pageName + '/list',
        queryInfo: {
          ...page,
          ...queryinfo
        }
      })
    }

    const handlesearchquery = (msg: any) => {
      // console.log('接收到得Page-search发送得数据了：', msg)
      getPageData(msg)
    }

    emitter.on('searchquery', handlesearchquery)
    getPageData(pageinfo)
    // 获取数据
    const list = props.pageName + 'List'
    const Count = props.pageName + 'Count'
    // const userList = computed(() => (store.state.system as any)[list])
    const dataList = computed(() => (store.state.system as any)[list])
    const dataCount = computed(() => (store.state.system as any)[Count])
    // 处理底部分页器
    const handlePageChange = (currentpage: number) => {
      pageinfo.offset = (currentpage - 1) * pageinfo.size
      getPageData({}, pageinfo)
    }
    const handleSizeChange = (currentsize: number) => {
      pageinfo.size = currentsize
      getPageData({}, pageinfo)
    }
    // 删除
    const deleteitem = (item: any) => {
      console.log(item)
      store.dispatch('system/deletePagedataAction', { pageName: props.pageName, id: item.id })
    }
    // 编辑
    const edititem = (item: any) => {
      _.emit('editbtnclick', item)
    }
    // 收尾
    onBeforeUnmount(() => {
      emitter.off('searchquery', handlesearchquery)
    })
    return {
      global,
      dataList,
      dataCount,
      handlePageChange,
      handleSizeChange,
      otherslot,
      iscreate,
      isupdate,
      isdelete,
      Edit,
      Delete,
      deleteitem,
      edititem
    }
  }
})
</script>

<style lang="less" scoped>
.contain {
  border-top: 20px solid #f5f5f5;
}
.tablehead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 10px 0px;
}
</style>
