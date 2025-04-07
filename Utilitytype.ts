
/*Partial Type */
interface User{
     name:string;
     age:number;
}

 const updateuser=(user:Partial<User>)=>
 {
     console.log(user);
 }

  updateuser({name:"Jyoti"});

  /*Required Type */
  interface Users{
     message?:string;
     age?:number;
  }

  const user1:Required<Users> ={
     message:"Hi",
     age:22
  };

     console.log(user1);

     /*Readonly type */
     interface Car{
         brand:string;
     }
     const  c1:Readonly<Car> ={
         brand:"BMW"
     };
        
     console.log(c1);

     /*Pick type */
      interface Employee{
         name:string;
         department:string;
         email:string;
      }

       const empdata:Pick<Employee, "name" |"department"> =
       {
         name:"Hari",
         department:"HOD"
       }
        console.log(empdata);