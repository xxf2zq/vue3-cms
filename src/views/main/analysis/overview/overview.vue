<template>
  <div class="overview">
    <div class="c-left">
      Vue3-ts-cms 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5 等后台系统解决方案。
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'overview',
  components: {},
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.overview {
  .c-left {
    text-align: left;
  }
}
</style>
