(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const login = (data:{email:string,password:string}) => {
    console.log(data.email,data.password)
  }

  login({
    email: 'jane@example.com',
    password: 'Pa$$w0rd'
  })
  const products:any[] = [];
  const addProduct = (data:{
    titles: string,
    createdAt: Date,
    stock: number,
    size?:Sizes
  }) =>{
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
