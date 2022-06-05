<template>
  <el-card class="box-card">
    <div class="card-header">
      <div class="header">
        <span>{{ item.subtitle }}</span>
        <el-tooltip :content="item.tips" placement="top" effect="light">
          <el-icon><warning-filled /></el-icon>
        </el-tooltip>
      </div>
      <div class="footer">
        <div ref="box" class="num"></div>
        <div v-if="item.title === '商品总销量'">件</div>
        <div v-if="item.title === '商品总收藏'">次</div>
        <div v-if="item.title === '商品总库存'">件</div>
        <div v-if="item.title === '商品总销售额'">元</div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { CountUp } from 'countup.js'

export default defineComponent({
  props: ['item'],
  setup(props) {
    const box = ref<HTMLElement>()
    onMounted(() => {
      const countUp = new CountUp(box.value!, props.item.number1)
      if (!countUp.error) {
        countUp.start()
      } else {
        console.error(countUp.error)
      }
    })
    return {
      box
    }
  }
})
</script>

<style lang="less" scoped>
.card-header {
  text-align: left;
  .header {
    display: flex;
    justify-content: space-between;
    color: #ccc;
  }
  .num {
    font-size: 24px;
    font-weight: bold;
    margin-right: 4px;
  }
}
.footer {
  margin-top: 6px;

  display: flex;
  align-items: center;
}
</style>
