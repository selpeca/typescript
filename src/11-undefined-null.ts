(() =>{
  let myNumber:number;
  let myString:string;
  let myNull: null;
  let myUndefined: undefined;

  function hi(name:string | null) {
    let hello = 'Hola '
    if(name) {
      hello +=name
    } else {
      hello +=`nobody`
    }

    console.log(hello);
  }

  function hi2(name:string | null) {
    let hello = 'Hola '
    hello += name?.toLowerCase() || 'nobody'
    console.log(hello);
  }
  hi("Sergio")
  hi(null)
  hi2("Sergio")
  hi2(null)
})()
