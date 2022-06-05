import * as echarts from 'echarts'
import chinaMapData from '../data/china.json'

echarts.registerMap('china', chinaMapData as any)
export default function useEchart(el: HTMLElement) {
  const echartInstance = echarts.init(el, 'light', { renderer: 'svg' })
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  const setResize = () => {
    echartInstance.resize()
  }
  return {
    echartInstance,
    setOptions,
    setResize
  }
}
