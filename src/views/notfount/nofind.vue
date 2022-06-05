<template>
  <div>
    <h2>404页面</h2>
    <el-button type="primary" @click="gohome">回到首页</el-button>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const route = useRouter()
    const gohome = () => {
      route.push('/')
    }
    return {
      gohome
    }
  }
})
</script>

<style scoped></style>
