import { createStore, Store, useStore } from 'vuex'
import Loginstore from './login/login'
import system from './main/system/system'
import analysis from './main/analysis/analysis'
import Localcahce from '@/utils/Localcahce'
import { IRootstatewithMudule, IRootstore } from './type'
import { getpagedata } from '@/network/main/system/system'
export const store = createStore<IRootstore>({
  state() {
    return {
      count: 10,
      entireDeparment: [],
      entireRole: [],
      menuslist: []
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 请求部门和角色数据
      const {
        data: { list }
      } = await getpagedata({
        pageUrl: '/department/list',
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
      commit('changeEntireDepartment', list)
      const res = await getpagedata({
        pageUrl: '/role/list',
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
      commit('changeEntireRole', res.data.list)
      const menusResult = await getpagedata({
        pageUrl: '/menu/list',
        queryInfo: {}
      })
      const { list: menusllist } = menusResult.data
      commit('cahngemenuslist', menusllist)
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDeparment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    cahngemenuslist(state, list) {
      state.menuslist = list
    }
  },
  modules: {
    Loginstore,
    system,
    analysis
  }
})

export function setupLoginstate() {
  // Loginstore.commit('savetoken', Localcahce.getitem('token'))
  // Loginstore.state.token = Localcahce.getitem('token')
  store.commit('Loginstore/savetoken', Localcahce.getitem('token'))
  store.commit('Loginstore/saveuserinfo', Localcahce.getitem('userinfo'))
  store.commit('Loginstore/saveusermenus', Localcahce.getitem('usermenus'))
  store.dispatch('getInitialDataAction')
}

export function usemystore(): Store<IRootstatewithMudule> {
  return useStore()
}
