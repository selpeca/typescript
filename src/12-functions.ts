(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  function createProductToJSON(
    titles: string,
    createdAt: Date,
    stock: number,
    size:Sizes
  ){
    return {
      titles,
      createdAt,
      stock,
      size
    }
  }

  const createProductToJSONv2 = (
    titles: string,
    createdAt: Date,
    stock: number,
    size?:Sizes
  ) => {
    return {
      titles,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJSON('P1',new Date(),12,'XL');
  console.log(product1);
  const product2 = createProductToJSONv2('P2',new Date(),12);
  console.log(product2);
})()
