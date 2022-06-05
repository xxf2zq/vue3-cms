<template>
  <div class="base-echarts">
    <div id="myechart" ref="myChartref" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineProps, watchEffect } from 'vue'
import useEchart from '../hooks/useEchart'
// import type { EChartsOption } from 'echarts'
const myChartref = ref<HTMLElement>()

// 定义props
const props = withDefaults(
  defineProps<{
    options: any
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '400px'
  }
)

onMounted(() => {
  const { setOptions } = useEchart(myChartref.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style lang="less" scoped></style>
