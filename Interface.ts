interface User{
     name:string;
     age:number;
}
 
interface Employee extends User{
     position:string;
}


 let emp1:Employee={
     name:"Sudepu",
     age:24,
     position:"HOD"
 };
  console.log(emp1);
