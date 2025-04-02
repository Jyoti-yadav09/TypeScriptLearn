function multiply(a:number,b:number)
{
     return a*b;
}
   console.log(multiply(2,3));

   /* Function with optional parameter */
    function greet(name:string, age?:number)
    {
         return `Hleoo ${name} and your age is ${age}`;
    }
     console.log(greet("Pinku", 23));
     console.log(greet("Sima"));

     /*function with default value for parameter */
     function greeting(name:string="Raj")
     {
           return `hello, ${name}`
     }
      console.log(greeting());

      /*function type alias */
      type MathOperation=(a:number, b:number)=>number;
       
       const addition:MathOperation=(x,y)=>x+y;

       console.log(addition(2,3));
       
       
       const subtract:MathOperation=(x,y)=>x-y;
      console.log(subtract(9,7));

      function Welcome(greeting:string, ...name:string[]):string{
           return `${greeting} ${name}`;
      }

       console.log(Welcome("Hello", "Jyoti"));
       console.log(Welcome("Hi!","Rinky","tinku","chinku"));
