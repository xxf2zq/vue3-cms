<template>
  <div class="login">
    <div class="contain">
      <h3 class="title">XXF2-CMS</h3>
      <login-planel></login-planel>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPlanel from './component/LoginPlanel.vue'

export default defineComponent({
  components: {
    LoginPlanel
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg') no-repeat center center;
  .contain {
    width: 400px;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    text-align: center;
    .title {
      padding: 10px;
    }
  }
}
</style>
