(()=>{
  let prices = [1,2,3,4,5,6,7,8,9,'Hola',true]
  prices.push(12231212)

  let products = ['mi string',true]
  products.push(false)

  let mixed: (number| string | boolean)[] = ['hola',true,false]
  mixed.push(123123)
  mixed.push('hello')
  mixed.push(true)

  let numbers = [1,2,3,4,5,6,7]
  numbers.map(number => number * 10)
})()
