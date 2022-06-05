<template>
  <base-echart :options="favoroption"></base-echart>
</template>

<script setup lang="ts">
import BaseEchart from '@/base_ui/echart'
import * as echarts from 'echarts'
import { defineProps, computed } from 'vue'
import { IPirData } from './type'

const props = defineProps<{
  favorData?: IPirData[]
}>()
const favoroption = computed(() => {
  return {
    xAxis: {
      data: props.favorData?.map((item) => item.name),
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },

    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.favorData?.map((item) => item.value)
      }
    ]
  }
})
</script>

<style></style>
