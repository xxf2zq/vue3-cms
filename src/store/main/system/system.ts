import { Module } from 'vuex'
import type { ISystemdata } from './type'
import { IRootstore } from '../../type'

// 网络请求
import { getpagedata, deletePagedata, createPagedata, editPagedata } from '@/network/main/system/system'

const systemModule: Module<ISystemdata, IRootstore> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  actions: {
    async getPagesLiseAction({ commit }, payload: any) {
      const res = await getpagedata(payload)
      switch (payload.pageUrl) {
        case '/users/list':
          commit('changeUserList', res.data.list)
          commit('changeUserCount', res.data.totalCount)
          break
        case '/role/list':
          commit('changeRoleList', res.data.list)
          commit('changeRoleCount', res.data.totalCount)
          break
        case '/goods/list':
          commit('changeGoodsList', res.data.list)
          commit('changeGoodsCount', res.data.totalCount)
          break
        case '/menu/list':
          commit('changeMenuList', res.data.list)
          commit('changeMenuCount', res.data.totalCount)
          break
        default:
      }
    },
    async deletePagedataAction({ dispatch }, payload: any) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await deletePagedata(pageUrl)
      dispatch('getPagesLiseAction', {
        pageUrl: '/' + pageName + '/list',
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload: any) {
      console.log(999)
      let { pageName, queryInfo } = payload
      const pageUrl = '/' + pageName
      if (pageName === 'users') {
        queryInfo = {
          cellphone: queryInfo.cellphone,
          departmentId: queryInfo.departmentId,
          name: queryInfo.name,
          password: undefined,
          realname: queryInfo.realname,
          roleId: queryInfo.roleIdm
        }
      }
      if (pageName === 'role') {
        queryInfo = {
          name: queryInfo.name,
          intro: queryInfo.intro,
          menuList: queryInfo.menuList || []
        }
      }
      const res = await createPagedata({ pageUrl, queryInfo })
      console.log(res)
      dispatch('getPagesLiseAction', {
        pageUrl: '/' + pageName + '/list',
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: any) {
      console.log(1111, payload)
      let { pageName, queryInfo, id } = payload
      const pageUrl = '/' + pageName + '/' + id
      if (pageName === 'users') {
        queryInfo = {
          cellphone: queryInfo.cellphone,
          departmentId: queryInfo.departmentId,
          name: queryInfo.name,
          password: undefined,
          realname: queryInfo.realname,
          roleId: queryInfo.roleIdm
        }
      }
      if (pageName === 'role') {
        queryInfo = {
          name: queryInfo.name,
          intro: queryInfo.intro,
          menuList: queryInfo.menuList || []
        }
      }
      console.log(11111, queryInfo)
      await editPagedata({
        pageUrl,
        queryInfo
      })
      dispatch('getPagesLiseAction', {
        pageUrl: '/' + pageName + '/list',
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  },
  mutations: {
    changeUserList(state, userlist) {
      state.usersList = userlist
    },
    changeUserCount(state, usercount) {
      state.usersCount = usercount
    },
    changeRoleList(state, rolelist) {
      state.roleList = rolelist
    },
    changeRoleCount(state, rolecount) {
      state.roleCount = rolecount
    },
    changeGoodsList(state, goodslist) {
      state.goodsList = goodslist
    },
    changeGoodsCount(state, goodscount) {
      state.goodsCount = goodscount
    },
    changeMenuList(state, menulist) {
      state.menuList = menulist
    },
    changeMenuCount(state, menucount) {
      state.menuCount = menucount
    }
  }
}
export default systemModule
