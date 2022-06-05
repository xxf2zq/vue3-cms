<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isexpand ? '60px' : '200px'">
        <main-menus :isexpand="isexpand"></main-menus>
      </el-aside>
      <el-container class="contain">
        <el-header>
          <main-header @togexpand="togexpand"></main-header>
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import MainMenus from '../../components/nav-menus/main-menus.vue'
import MainHeader from '../../components/nav-header/main-header.vue'
export default defineComponent({
  components: {
    MainMenus,
    MainHeader
  },
  setup() {
    const isexpand = ref(false)
    const togexpand = (flag: boolean) => {
      isexpand.value = flag
    }
    return {
      togexpand,
      isexpand
    }
  }
})
</script>

<style lang="less" scoped>
.el-aside {
  height: 100vh;
  overflow: hidden;
  transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -o-transition: width 0.25s;
}
.el-header {
  height: 48px;
  background-color: #fff;
}
.contain {
  height: 100vh;
}
.el-main {
  height: calc(100% - '148px');
  background-color: rgb(250, 248, 245);
  text-align: center;
  overflow: auto;
}
</style>
