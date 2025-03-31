let person:[string, number]=["Alice", 23];
person.push("true");
console.log(person);
console.log(person[0]);
console.log(person[1]);

let persondetails:[string, number, ...string[]]=["Jyoti" ,22, "Coder", "Student"];
persondetails.push(20000);
console.log(persondetails);

let nestedTuple:[string,[number, string]]=["jyoti",[22,"Rani"]];
console.log(nestedTuple);

let employee:[name:string, age:number]=["Rani",22];
console.log(employee);

 function getUserdata():[string, number]
 {
     return ["Jyoti", 22];
 }
  let userData=getUserdata();
  console.log(userData);