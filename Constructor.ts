class Car{
     model:string;
     year:number;

   constructor(model:string, year:number)
   {
     this.model=model;
     this.year=year;
   }
 
  displayInfo()
  {
     console.log(`This is ${this.model} and is of year ${this.year}`);
  }



}

  const c1=new Car("BMW", 2015);
  c1.displayInfo();


  /* example of Access modifiers */
  class Employee{
     public name:string;
     private salary:number;
     protected department:string;

   constructor(name:string, salary:number, department:string)
   {
     this.name=name;
     this.salary=salary;
     this.department=department;
   }

     getSalaray()
     {
         return this.salary;
     }
        
     getName()
     {
         return this.name;
     }

  }

   const emp1=new Employee("Sahana",22000,"HR");
   console.log(emp1.getSalaray());
   console.log(emp1.getName());
   /* console.log(emp1.salary);-- since salary is private soo this is not accessed from outside of class" */
   console.log(emp1.name);
   /*console.log(emp1.department); --since department is protected this is not accessed outside of class" */