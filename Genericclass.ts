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