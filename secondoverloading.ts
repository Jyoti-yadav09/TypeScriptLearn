function add(a:number, b:number):number;
 function add(a:string, b:string):string;

  function add (a:number|string, b:string|number):number|string
  {
     if(typeof a==="number" && typeof b==="number")
     {
         return a+b;
     }
      else if(typeof a==="string" && typeof b==="string")
      {
         return a+""+b;
      }
  }
console.log(add(2,4));
console.log(add("hello","jyoti"));

