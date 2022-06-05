import zqrequest from '@/network'

export function getCategoryGoodsCount() {
  return zqrequest.get<any>({ url: '/goods/category/count' })
}
export function getAmountList() {
  return zqrequest.get<any>({ url: 'goods/amount/list' })
}
export function getAddressGoodsSale() {
  return zqrequest.get<any>({ url: '/goods/address/sale' })
}

export function getCategoryGoodsFavor() {
  return zqrequest.get<any>({ url: '/goods/category/favor' })
}

export function getCategoryGoodsSale() {
  return zqrequest.get<any>({ url: '/goods/category/sale' })
}
