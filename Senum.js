var Direction;
(function (Direction) {
    Direction["up"] = "UP";
    Direction["left"] = "LEFT";
    Direction["right"] = "RIGHT";
    Direction["down"] = "DOWN";
})(Direction || (Direction = {}));
console.log(Direction.up);
console.log(Direction.left);
console.log(Direction.down);
console.log(Direction.right);
/*Uing enums in function*/
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
;
function checkAccess(role) {
    if (role === Role.Admin) {
        console.log("Access Granted");
    }
    else {
        console.log("Access denied");
    }
}
checkAccess(Role.Admin);
checkAccess(Role.Guest);
