class Person{
     name:string;
     age:number;

constructor(name:string, age:number)
{
     this.name=name;
     this.age=age;
}
 greet()
 {
     console.log(`Hello my name is ${this.name} and i am ${this.age} years old`);
 };

}

 const person1=new Person("Jyoti", 22);
 person1.greet();