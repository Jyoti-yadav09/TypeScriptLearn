var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello my name is ".concat(this.name, " and i am ").concat(this.age, " years old"));
    };
    ;
    return Person;
}());
var person1 = new Person("Jyoti", 22);
person1.greet();
