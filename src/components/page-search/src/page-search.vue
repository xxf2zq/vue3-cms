<template>
  <div class="search">
    <zq-form v-bind="formconfig" v-model="formDate">
      <template #header>
        <h2 class="title">高级检索</h2>
      </template>
      <template #footer>
        <div class="btns">
          <el-button plain :icon="Refresh" @click="resetSearch">重置</el-button>
          <el-button type="primary" :icon="Search" @click="handleQuery">搜索</el-button>
        </div>
      </template>
    </zq-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'
import ZqForm from '@/base_ui/form'
import emitter from '@/utils/eventbus'
export default defineComponent({
  props: {
    formconfig: {
      type: Object,
      required: true
    }
  },
  components: {
    ZqForm
  },
  setup(props) {
    const formItem = props.formconfig.formitems
    const formDate = ref({})
    for (const item of formItem) {
      formDate[item.field] = ''
    }
    // 重置
    const resetSearch = () => {
      formDate.value = {}
      emitter.emit('searchquery', {})
    }
    // 搜索
    const handleQuery = () => {
      emitter.emit('searchquery', { ...formDate.value })
    }
    return {
      formDate,
      Search,
      Refresh,
      resetSearch,
      handleQuery
    }
  }
})
</script>

<style lang="less" scoped>
.search {
  background-color: #fff;
  overflow: hidden;
  .title {
    padding: 20px;
  }
  .btns {
    text-align: right;
    margin: 0px 10px 10px 0px;
  }
}
</style>
