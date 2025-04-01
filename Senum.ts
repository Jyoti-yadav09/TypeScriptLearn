enum Direction
{
     up="UP",
     left="LEFT",
     right="RIGHT",
     down="DOWN"
}

 console.log(Direction.up);
 console.log(Direction.left);
 console.log(Direction.down);
 console.log(Direction.right);

 /*Uing enums in function*/
 enum Role{
      Admin,
      User, 
      Guest
 };

  function checkAccess(role:Role)
  {
      if(role===Role.Admin)
      {
           console.log("Access Granted");
      }
      else{
           console.log("Access denied");
      }
  }
   checkAccess(Role.Admin);
   checkAccess(Role.Guest);
