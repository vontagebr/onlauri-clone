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