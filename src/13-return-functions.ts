(() =>{
  const calcTotal = (prices: number[]):number =>{
    let total = 0
    prices.forEach(item=>{
      total += item
    })
    return total
  }
  const respuesta = calcTotal([1,3,4,3,2,5])
  console.log(respuesta);
  // Función que no retorna nada
  const printTotal = (prices: number[]):void=>{
    console.log(`El total es ${calcTotal(prices)}`)
  }

  printTotal([1,3,4,3,2,5]);
})()
