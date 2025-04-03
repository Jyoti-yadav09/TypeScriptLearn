class Animal{
     name:string;

     constructor(name:string)
     {
         this.name=name;
     }
      speak()
      {
         console.log(`${this.name} makes a sound`);
      }
}
 class Dog extends Animal
 {
     constructor(name:string)
     {
        super(name);
     }
    
      speak(){
          console.log(`${this.name} barks`);
      }
     }
 
      const d1= new Dog("Buddy");
      d1.speak();

/*  More Inheritance examples   */
 class Vehicle{
     brand:string;
     year:number;

     constructor(brand:string, year:number)
     {
         this.brand=brand;
         this.year=year;
  
        }
       
         displayInfo()
         {
             console.log(`Brand is:${this.brand} and year is ${this.year}`);
         }
  

        }

         class Car extends Vehicle{
             model:string;

             constructor(brand:string, year:number, model:string)
             {
                 super(brand, year);
                 this.model=model;
             }

              displayInfo(){
                  console.log(`Brand is ${this.brand}, year is ${this.year} and model is ${this.model}`);
              }
         }
          const c1=new Car("BMW", 2015, "New");
          c1.displayInfo();