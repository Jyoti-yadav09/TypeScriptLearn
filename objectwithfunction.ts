type user={
     name:string;
     age:number;
      greet:()=>string;
      description:()=>string;
};

 let user1:user={
     name:"Rani",
     age:23,
     greet:()=>"Hello world",
     description:function()
         
     {
        return `Hello I am a girl ${this.name}`;
     },
 };
  console.log(user1.greet());
  console.log(user1.description());