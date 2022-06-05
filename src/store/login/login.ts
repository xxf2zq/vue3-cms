import { Module } from 'vuex'
import { login, getuserbyid, getusermenubyid } from '../../network/login/index'
import { ILogin } from './type'
import { IRootstore } from '../type'
import Localcahce from '@/utils/Localcahce'
import router from '../../router/index'
import { mapMenusToRoutes, mapMenustoPermisson } from '../../utils/map-menus'

const loginstore: Module<ILogin, IRootstore> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userinfo: {},
      usermenu: [],
      permissions: []
    }
  },
  getters: {},
  actions: {
    async getlogininfo({ commit }, payload: any) {
      // 1 登录
      const { data } = await login(payload)
      commit('savetoken', data.token)
      // 2 请求用户信息的数据
      const res = await getuserbyid(data.id)
      commit('saveuserinfo', res.data)
      // 3 请求用户的菜单列表
      const res1 = await getusermenubyid(data.id)
      commit('saveusermenus', res1.data)
      router.push('/main')
    }
  },
  mutations: {
    savetoken(state, token: string) {
      if (token) {
        state.token = token
        Localcahce.setitem('token', token)
      }
    },
    saveuserinfo(state, userinfo: any) {
      if (userinfo) {
        state.userinfo = userinfo
        Localcahce.setitem('userinfo', userinfo)
      }
    },
    saveusermenus(state, usermenus: any) {
      if (usermenus) {
        state.usermenu = usermenus
        Localcahce.setitem('usermenus', usermenus)
      }
      const routes = mapMenusToRoutes(usermenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      // 获取用户按钮的权限
      const permissions = mapMenustoPermisson(usermenus)
      state.permissions = permissions
    }
  }
}
export default loginstore
