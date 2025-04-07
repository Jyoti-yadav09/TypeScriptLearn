function identity<T>(arg:T):T
{
     return arg;
}


console.log(identity(5));
console.log(identity("Hello"));

/* Generic Function with multiple parameters */
 function pair<T,U>(first:T, second:U):[T,U]
 {
      return[first, second];
 }
 const result=pair(1,"Hii");
 console.log(result);

 /*Generic Interface */

   interface Pairs<T,U>{
      first:T;
      second:U;
   }
   const p1:Pairs<string, number>={
      first:"age",
      second:21
   };
    console.log(p1);

    