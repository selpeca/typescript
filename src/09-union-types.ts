(()=> {
  let userId: (number | string);
  userId = 123;
  userId = '123';

  function greeting(myText: string|number){
    if (typeof myText === 'string') {
      console.log(`String ${myText.toLocaleLowerCase()}`);
    }else{
      console.log(`Number ${myText.toFixed(2)}`);
    }
  }
  greeting('Hello, World!');
  greeting(123.3155454);
})()
