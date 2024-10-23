export type Sizes = 'S' | 'M' | 'L' | 'XL'
export type Product = {
  titles: string,
  createdAt: Date,
  stock: number,
  size?:Sizes
}
