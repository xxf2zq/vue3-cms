<template>
  <div class="goods">
    <page-search :formconfig="formconfig"></page-search>
    <page-content :contentconfig="contentconfig" pageName="goods">
      <template #tablerHeader>
        <div class="tablehead">
          <h3>商品列表</h3>
          <el-button type="primary">新增商品</el-button>
        </div>
      </template>
      <template #oldPrice="{ value }">
        {{ '￥' + value.oldPrice }}
      </template>
      <template #newPrice="{ value }">
        {{ '￥' + value.newPrice }}
      </template>
      <template #status="{ value }">
        <el-button size="small" :type="value.status ? 'success' : 'danger'" plain>
          {{ value.status ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #image="{ value }">
        <el-image
          preview-teleported
          style="width: 60px; height: 60px"
          :src="value.imgUrl"
          :preview-src-list="[value.imgUrl]"
        />
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { contentconfig } from './config/content.config'
import { formconfig } from './config/search.config'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    return { contentconfig, formconfig }
  }
})
</script>

<style scoped lang="less"></style>
