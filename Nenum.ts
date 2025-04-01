enum Status{
     Pending,
     InProgress,
     Completed
};

console.log(Status.Pending);
console.log(Status.InProgress);
console.log(Status.Completed);

//Custome numeric values//
enum Statu{
     Pending=1,
     InProgress,
     Completed
};
 console.log(Statu.Pending);
 console.log(Statu.InProgress);
 console.log(Statu.Completed);

 /*Reverse mapping in Numeric enum */

  enum Colors
  {
      Red=1,
      Pink=2,
      Orange=3
  };

   console.log(Colors.Red);
   console.log(Colors[1]);
   console.log(Colors[2]);