/* using as keyword*/
let x:any="Hello";
console.log((x as string).length);

let a:unknown="Hello world";
let strlength:number=(a as string).length;
console.log(strlength);


/*using <> */
let obj:unknown="Hello world";
let strlength2:number=(<string>obj).length;
console.log(strlength2);