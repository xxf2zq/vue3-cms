<template>
  <base-echart :options="roseoption"></base-echart>
</template>

<script setup lang="ts">
import BaseEchart from '@/base_ui/echart'
import { defineProps, computed } from 'vue'
import { IRoleData } from './type'

const props = defineProps<{
  roseData?: IRoleData[]
}>()
const roseoption = computed(() => {
  return {
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [10, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style></style>
