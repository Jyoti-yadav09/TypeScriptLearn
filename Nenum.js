var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Completed"] = 2] = "Completed";
})(Status || (Status = {}));
;
console.log(Status.Pending);
console.log(Status.InProgress);
console.log(Status.Completed);
//Custome numeric values//
var Statu;
(function (Statu) {
    Statu[Statu["Pending"] = 1] = "Pending";
    Statu[Statu["InProgress"] = 2] = "InProgress";
    Statu[Statu["Completed"] = 3] = "Completed";
})(Statu || (Statu = {}));
;
console.log(Statu.Pending);
console.log(Statu.InProgress);
console.log(Statu.Completed);
