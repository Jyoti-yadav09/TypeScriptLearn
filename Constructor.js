var Car = /** @class */ (function () {
    function Car(model, year) {
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayInfo = function () {
        console.log("This is ".concat(this.model, " and is of year ").concat(this.year));
    };
    return Car;
}());
var c1 = new Car("BMW", 2015);
c1.displayInfo();
/* example of Access modifiers */
var Employee = /** @class */ (function () {
    function Employee(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    Employee.prototype.getSalaray = function () {
        return this.salary;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    return Employee;
}());
var emp1 = new Employee("Sahana", 22000, "HR");
console.log(emp1.getSalaray());
console.log(emp1.getName());
/* console.log(emp1.salary);-- since salary is private soo this is not accessed from outside of class" */
console.log(emp1.name);
/*console.log(emp1.department); --since department is protected this is not accessed outside of class" */ 
