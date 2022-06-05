<template>
  <base-echart :options="selloption"></base-echart>
</template>

<script setup lang="ts">
import BaseEchart from '@/base_ui/echart'
import { defineProps, computed } from 'vue'
import { ISellData } from './type'

const props = defineProps<{
  sellData?: ISellData[]
}>()
const selloption = computed(() => {
  return {
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    legend: {
      data: ['分别销量']
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.sellData?.map((item) => item.name)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.sellData?.map((item) => item.value),
        name: '分别销量',
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>

<style></style>
