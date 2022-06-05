import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Localcahce from '@/utils/Localcahce'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*', // 对匹配失败路径的处理
    component: () => import('../views/notfount/nofind.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    if (!Localcahce.getitem('token')) {
      return '/login'
    }
  }
  if (to.path === '/main') {
    return '/main/analysis/overview'
  }
})

export default router
