<template>
  <div class="dashboard">
    <el-row :gutter="7">
      <el-col :xs="24" :md="12" :sm="12" :lg="6" :xl="4" v-for="(item, index) in topconutlist" :key="index">
        <count-up :item="item"></count-up>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7">
        <zq-card title="分类商品数量(饼图)"> <pie-echart :pieData="pieData"></pie-echart></zq-card>
      </el-col>
      <el-col :span="10"
        ><zq-card title="不同城市商品销量"> <map-echart :mapData="mapData"></map-echart> </zq-card
      ></el-col>
      <el-col :span="7"
        ><zq-card title="分类商品数量(玫瑰图)"><rose-echart :roseData="roseData"></rose-echart></zq-card
      ></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12"
        ><zq-card title="分类商品的销量"> <sell-echart :sellData="sellData"></sell-echart> </zq-card
      ></el-col>
      <el-col :span="12"
        ><zq-card title="分类商品的收藏"> <favor-echart :favor-data="favorData"></favor-echart> </zq-card
      ></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { usemystore } from '@/store'
import countUp from '@/components/count-up/count-up.vue'
import ZqCard from '@/base_ui/card'
import { PieEchart } from '@/components/page-echart'
import { RoseEchart } from '@/components/page-echart'
import { SellEchart } from '@/components/page-echart'
import { FavorEchart } from '@/components/page-echart'
import { MapEchart } from '@/components/page-echart'
export default defineComponent({
  name: 'dashboard',
  components: { countUp, ZqCard, PieEchart, RoseEchart, SellEchart, FavorEchart, MapEchart },
  setup() {
    const store = usemystore()

    store.dispatch('analysis/getamountListAction')
    store.dispatch('analysis/getCategoryGoodsCountAction')
    store.dispatch('analysis/getCategoryGoodsSaleAction')
    store.dispatch('analysis/getCategoryGoodsFavorAction')
    store.dispatch('analysis/getAddressGoodsSaleAction')

    const topconutlist = computed(() => store.state.analysis.amountList)
    const pieData = computed(() =>
      store.state.analysis.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount }
      })
    )
    const roseData = computed(() =>
      store.state.analysis.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount }
      })
    )
    const sellData = computed(() =>
      store.state.analysis.categoryGoodsSale.map((item) => {
        return { name: item.name, value: item.goodsCount }
      })
    )
    const favorData = computed(() =>
      store.state.analysis.categoryGoodsFavor.map((item) => {
        return { name: item.name, value: item.goodsFavor }
      })
    )
    const mapData = computed(() =>
      store.state.analysis.addressGoodsSale.map((item) => {
        return { name: item.address, value: item.count }
      })
    )

    return {
      topconutlist,
      pieData,
      roseData,
      sellData,
      favorData,
      mapData
    }
  }
})
</script>

<style scoped lang="less">
.dashboard {
  height: 100%;
  .digital-panel-row {
    height: 130px;
    margin-bottom: 20px;
    overflow: hidden;
    text-align: left;
  }

  .center-echart {
    height: 450px;
    margin: 0 0 20px 0;
  }

  .bottom-echart {
    height: 290px;
  }
}
.content-row {
  margin-top: 20px;
}
.el-col {
  margin-bottom: 10px;
}
</style>
