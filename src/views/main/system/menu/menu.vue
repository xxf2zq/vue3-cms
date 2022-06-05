<template>
  <div class="menu">
    <page-content :contentconfig="contentconfig" pageName="menu"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentconfig } from './config/content.config'
export default defineComponent({
  name: 'my-menu',
  components: {
    PageContent
  },
  setup() {
    return { contentconfig }
  }
})
</script>

<style scoped></style>
