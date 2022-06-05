<template>
  <div class="header">
    <div class="left">
      <el-icon @click="changeexpand" :size="30">
        <Expand v-show="isexpand" />
        <Fold v-show="!isexpand" />
      </el-icon>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="item in breadcrumb" :key="item">{{ item }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-tooltip class="box-item" effect="dark" :content="!isfull ? '全屏' : '取消全屏'" placement="bottom">
        <el-icon :size="30"><FullScreen @click="handlescreen" /></el-icon>
      </el-tooltip>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            :size="36"
            src="https://tse4-mm.cn.bing.net/th/id/OIP-C.3FIU5cY3KRf4lG7vpn-4EgHaID?w=179&h=195&c=7&r=0&o=5&dpr=1.2&pid=1.7"
          >
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
          </el-avatar>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>编辑资料</el-dropdown-item>
            <el-dropdown-item class="exit" @click="exit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { mapbreadcrumb } from '@/utils/map-breadcrumb'
import Localcahce from '@/utils/Localcahce'
import screenfull from 'screenfull'
import useEchart from '@/base_ui/echart/hooks/useEchart'
export default defineComponent({
  setup(props, _) {
    const isexpand = ref(false)
    const isfull = ref(false)
    const route = useRoute()
    const router = useRouter()
    onMounted(() => {
      if (document.getElementById('myechart')) {
        const { setResize } = useEchart(document.getElementById('myechart')!)
        setResize()
      }
    })
    const changeexpand = () => {
      isexpand.value = !isexpand.value
      _.emit('togexpand', isexpand.value)
    }
    // 对面包屑的处理
    const breadcrumb = ref()
    watch(
      () => route.path,
      (newroute) => {
        breadcrumb.value = mapbreadcrumb(newroute.split('/')[2], newroute.split('/')[3])
      },
      {
        immediate: true
      }
    )
    // 处理全屏
    const handlescreen = () => {
      if (screenfull.isEnabled) {
        screenfull.on('change', () => {
          isfull.value = (screenfull as any).isFullscreen
        })
        screenfull.toggle()
      } else {
        alert('你的浏览器不支持全屏')
      }
    }
    // 退出登录
    const exit = () => {
      Localcahce.clear()
      router.push('/login')
    }
    return {
      isexpand,
      isfull,
      changeexpand,
      ArrowRight,
      breadcrumb,
      exit,
      handlescreen
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  display: flex;
  line-height: 48px;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    .el-breadcrumb {
      margin-left: 10px;
    }
  }
  .right {
    display: flex;
    align-items: center;
  }
}
:deep(.el-dropdown-menu__item.exit) {
  background-color: red;
  color: #fff;
}
.el-dropdown {
  margin-left: 10px;
}
</style>
