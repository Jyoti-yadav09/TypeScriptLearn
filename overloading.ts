function getInfo(id:number):string;

function getInfo(name:string):string;


  function getInfo(value:string|number):string{
     if (typeof value==="string")
     {
         return `hello, ${value}`;
     }
      else{
         return `Your id is ${value}`;
      }
  }
  console.log(getInfo("Yojana"));
  console.log(getInfo(10));