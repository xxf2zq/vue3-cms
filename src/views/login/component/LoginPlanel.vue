<template>
  <el-tabs type="border-card" class="demo-tabs" stretch v-model="tabsname">
    <el-tab-pane name="account">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><User /></el-icon>
          <span>账号登录</span>
        </span>
      </template>
      <Account ref="accountcomref"></Account>
    </el-tab-pane>
    <el-tab-pane name="phone">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><Iphone /></el-icon>
          <span>手机登录</span>
        </span>
      </template>
      <Phone></Phone>
    </el-tab-pane>
    <el-button type="primary" class="loginbtn" @click="handlelogin">登录</el-button>
  </el-tabs>
</template>

<script lang="ts" setup>
import Phone from './Phone.vue'
import Account from './Account.vue'
import { User, Iphone } from '@element-plus/icons-vue'

import { ref } from 'vue'
const tabsname = ref('account')
const accountcomref = ref<InstanceType<typeof Account>>()

// 处理登录逻辑
const handlelogin = () => {
  if (tabsname.value === 'account') {
    // 验证登录信息是否填写完全
    accountcomref.value?.accountlogin()
  }
}
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
