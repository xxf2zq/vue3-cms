import { Module } from 'vuex'
import { IDashboardState } from './type'
import { IRootstore } from '@/store/type'

import {
  getCategoryGoodsCount,
  getAmountList,
  getAddressGoodsSale,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from '@/network/main/analysis/analysis'
const analysis: Module<IDashboardState, IRootstore> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
      amountList: []
    }
  },
  actions: {
    async getCategoryGoodsCountAction({ commit }) {
      const data = await getCategoryGoodsCount()
      commit('cahngecategoryGoodsCount', data.data)
    },
    async getamountListAction({ commit }) {
      const data = await getAmountList()
      commit('cahngegetamountList', data.data)
    },
    async getAddressGoodsSaleAction({ commit }) {
      const data = await getAddressGoodsSale()
      commit('cahngegetAddressGoodsSale', data.data)
    },
    async getCategoryGoodsFavorAction({ commit }) {
      const data = await getCategoryGoodsFavor()
      commit('cahngegetCategoryGoodsFavor', data.data)
    },
    async getCategoryGoodsSaleAction({ commit }) {
      const data = await getCategoryGoodsSale()
      commit('cahngegetCategoryGoodsSale', data.data)
    }
  },
  mutations: {
    cahngecategoryGoodsCount(state, data) {
      state.categoryGoodsCount = data
    },
    cahngegetamountList(state, data) {
      state.amountList = data
    },
    cahngegetAddressGoodsSale(state, data) {
      state.addressGoodsSale = data
    },
    cahngegetCategoryGoodsFavor(state, data) {
      state.categoryGoodsFavor = data
    },
    cahngegetCategoryGoodsSale(state, data) {
      state.categoryGoodsSale = data
    }
  }
}
export default analysis
