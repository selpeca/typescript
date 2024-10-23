(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  type Product = {
    titles: string,
    createdAt: Date,
    stock: number,
    size?:Sizes
  }

  const products:Product[] = [];
  const addProduct = (data:Product) =>{
    products.push(data)
  }

  addProduct({
    titles: 'Product A',
    createdAt: new Date(1997,5,30),
    stock: 100,
    size: 'M'
  })
  addProduct({
    titles: 'Product B',
    createdAt: new Date(2000,1,15),
    stock: 50,
  })
  console.log(products);

})()
