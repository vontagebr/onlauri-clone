import type { RouteLocationRaw } from 'vue-router'
export { RouteLocationRaw }

export interface ISectionLink {
  id: string
  label: string
  highlight?: boolean
  to?: RouteLocationRaw
}

export interface IProduct {
  label: string
  images: string[]
  price: number
  discount?: number
}

export interface IBanner {
  key: string
  imgUrl: string
}
