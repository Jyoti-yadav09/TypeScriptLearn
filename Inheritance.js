var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a sound"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " barks"));
    };
    return Dog;
}(Animal));
var d1 = new Dog("Buddy");
d1.speak();
/*  More Inheritance examples   */
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    Vehicle.prototype.displayInfo = function () {
        console.log("Brand is:".concat(this.brand, " and year is ").concat(this.year));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, year, model) {
        var _this = _super.call(this, brand, year) || this;
        _this.model = model;
        return _this;
    }
    Car.prototype.displayInfo = function () {
        console.log("Brand is ".concat(this.brand, ", year is ").concat(this.year, " and model is ").concat(this.model));
    };
    return Car;
}(Vehicle));
var c1 = new Car("BMW", 2015, "New");
c1.displayInfo();
