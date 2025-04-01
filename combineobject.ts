type Person={
     name:string;
}

type Employee={
     role:string;
}
 type Manager=Person & Employee;

  let manager1:Manager={
     
    name:"Pinku",
    role:"HOD"
  };
   console.log(manager1);

   let manager2:Manager={
     name:"munna",
     role:"BM"
   };

    console.log(manager2);