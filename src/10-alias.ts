(()=>{
  type UserID =number | string
  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let userId:UserID;
  let shirtSize: Sizes;

  function greeting(myText:UserID, size: Sizes){
    if (typeof myText === 'string') {
      console.log(`String ${myText.toLocaleLowerCase()}`);
    }
  }


})()
