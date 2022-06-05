<template>
  <div class="menus">
    <div class="top">
      <img src="@/assets/img/logo.svg" alt="" />
    </div>
    <el-menu
      :collapse="isexpand"
      :collapse-transition="false"
      :default-active="currentitem"
      router
      unique-opened
      active-text-color="#ffd04b"
      class="el-menu-vertical-demo"
    >
      <el-sub-menu :index="item.url" v-for="item in menus" :key="item.id">
        <template #title>
          <keep-alive>
            <el-icon>
              <component v-show="item.icon === 'chat'" :is="ischat"></component>
              <component :is="item.icon" v-show="item.icon !== 'chat'"></component>
            </el-icon>
          </keep-alive>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item :index="i1.url" v-for="i1 in item.children" :key="i1.id">
          <span> {{ i1.name }} </span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRaw, computed } from 'vue'
import { usemystore } from '../../store/index'
import { useRoute } from 'vue-router'
export default defineComponent({
  props: ['isexpand'],
  setup() {
    const ischat = 'ChatLineRound'
    const store = usemystore()
    const route = useRoute()
    const menus = [
      ...store.state.Loginstore.usermenu.map((item: any) => {
        item.icon = item.icon.split('-')[2]
        return toRaw(item)
      })
    ]
    // const currentitem = ref(Localcahce.getitem('currentitem') || '')
    const currentitem = computed(() => route.path)
    return {
      menus,
      ischat,
      currentitem
    }
  }
})
</script>

<style lang="less" scoped>
.top {
  display: flex;
  justify-content: center;
  height: 48px;
  img {
    vertical-align: middle;
    width: 40px;
    height: 40px;
  }
}
.el-menu {
  transition: all 10ms;
  border-right: 0px;
}
.el-menu--collapse .el-submenu__title span {
  display: none;
}
.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
</style>
