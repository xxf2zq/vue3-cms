<template>
  <div class="zq-table">
    <div class="header">
      <slot name="tablerHeader">
        <div class="tablehead">
          <h3 :key="title">{{ title }}</h3>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      v-bind="otherchildren"
      style="width: 100%"
      border
      stripe
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" v-if="showSelectColumn" align="center" />
      <el-table-column type="index" width="50" align="center" label="#" v-if="showindexColumn" />
      <el-table-column show-overflow-tooltip v-bind="item" align="center" v-for="item in propList" :key="item.prop">
        <template #default="{ row }">
          <slot :name="item.slotName" :value="row">{{ item.prop ? row[item?.prop] : '' }}</slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer" v-if="!hidefooter">
      <slot name="tablerFooter">
        <el-pagination
          v-model:currentPage="currentpage"
          v-model:pageSize="currentsize"
          :page-sizes="[4, 6, 8, 10]"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="dataCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array as PropType<any[]>,
      required: true
    },
    showindexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    dataCount: {
      type: Number,
      default: 0
    },
    hidefooter: {
      type: Boolean,
      default: false
    },
    otherchildren: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, _) {
    // 处理选中
    const handleSelectionChange = (value: any) => {
      _.emit('selectionChange', value)
    }
    // 分页
    const handleCurrentChange = () => {
      _.emit('handlePageChange', currentpage.value)
    }
    const handleSizeChange = () => {
      _.emit('handleSizeChange', currentsize.value)
    }
    const currentpage = ref(1)
    const currentsize = ref(10)
    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange,
      currentpage,
      currentsize
    }
  }
})
</script>

<style lang="less" scoped>
.tablehead {
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}
.footer {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
