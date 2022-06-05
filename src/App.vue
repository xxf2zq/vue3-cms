<template>
  <div class="box">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<style lang="less">
.box {
  width: 100%;
  height: 100%;
  min-width: 600px;
}
.tablehead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 10px 0px;
}
</style>
