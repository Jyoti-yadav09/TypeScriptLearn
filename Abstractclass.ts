abstract class Animal{
      abstract sound():void;

       sleep():void{
         console.log("The animal is sleeping");
       }
}

 class Dog extends Animal{
     
     sound():void{
         console.log("Dog barks");
     }
 }
  
  class Cat extends Animal{
     sound():void{
         console.log("Cat mews");
     }
  }


   const d1=new Dog();
   d1.sound();
   const c1=new Cat();
   c1.sound();