<template>
  <el-form ref="accountRef" hide-required-asterisk :model="accountForm" :rules="acctountrules" label-width="80px">
    <el-form-item label="账号：" prop="name">
      <el-input v-model="accountForm.name" />
    </el-form-item>
    <el-form-item label="密码：" prop="password">
      <el-input v-model="accountForm.password" type="password" show-password />
    </el-form-item>
    <el-form-item class="pwd">
      <el-checkbox v-model="isremeber" label="记住密码" size="large" />
      <el-link type="info">忘记密码</el-link>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { reactive, ref, defineComponent } from 'vue'
import { acctountrules } from '../config/account'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import Localcahce from '@/utils/Localcahce'
export default defineComponent({
  components: {},
  setup() {
    const store = useStore()
    const accountForm = reactive({
      // name: Localcahce.getitem('username') || '',
      // password: Localcahce.getitem('password') || ''
      name: 'coderwhy',
      password: '123456'
    })
    const accountRef = ref<InstanceType<typeof ElForm>>()
    const isremeber = ref(false)
    const accountlogin = () => {
      accountRef.value.validate((valid: boolean, fields: any) => {
        if (valid) {
          // 是否保存密码
          store.dispatch('Loginstore/getlogininfo', { ...accountForm })
          if (isremeber.value) {
            Localcahce.setitem('username', accountForm.name)
            Localcahce.setitem('password', accountForm.password)
            // 发起登录请求
          } else {
            // 删除掉本存储
            Localcahce.deleteitem('username')
            Localcahce.deleteitem('password')
          }
        } else {
          console.log('error submit!', fields)
        }
      })
    }
    return {
      accountForm,
      accountRef,
      isremeber,
      accountlogin,
      acctountrules
    }
  }
})
</script>

<style lang="less">
.loginbtn {
  width: 100%;
}

.el-form-item__content {
  display: flex;
  justify-content: space-between;
}
</style>
