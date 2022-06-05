<template>
  <base-echart :options="piroption"></base-echart>
</template>

<script setup lang="ts">
import BaseEchart from '@/base_ui/echart'
import { defineProps, computed } from 'vue'
import { IPirData } from './type'

const props = defineProps<{
  pieData?: IPirData[]
}>()
const piroption = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style></style>
