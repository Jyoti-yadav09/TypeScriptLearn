class Box<T> 
{
     value:T;

      constructor(value:T)
      {
         this.value=value;
      }

       getValue():T{
         return this.value;
       }

}

  const newBox=new Box<number>(100);
  const strBox=new Box<string>("Hello");

  console.log(newBox.getValue());
  console.log(strBox.getValue());

  /*Generic constraints */
   interface Lengthy{
     length:number;
   }

     function logLength<T extends Lengthy>(item:T):void {
         console.log(item.length);
     }

      logLength("Hello ");
      logLength([1,2,3,4,5]);