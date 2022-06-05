import { RouteRecordRaw } from 'vue-router'
export function mapMenusToRoutes(userMenus: any): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1 加载默认所以的routes
  const allroutes: RouteRecordRaw[] = []
  const routeFiles = import.meta.globEager('../router/main/*/*/*.ts')
  for (const key in routeFiles) {
    allroutes.push(routeFiles[key].default)
  }
  // 2递归获取注册路径
  const _recurseGetRouter = (menus: any[]) => {
    if (menus) {
      for (const menu of menus) {
        if (menu.type === 2) {
          const route = allroutes.find((route) => route.path === menu.url)
          if (route) {
            routes.push(route)
          }
        } else {
          _recurseGetRouter(menu.children)
        }
      }
    }
  }
  _recurseGetRouter(userMenus)
  return routes
}
export function mapMenustoPermisson(userMenus: any[]) {
  const permissions: string[] = []
  const _recurseGetPermisstions = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermisstions(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermisstions(userMenus)
  return permissions
}
