function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
/* Function with optional parameter */
function greet(name, age) {
    return "Hleoo ".concat(name, " and your age is ").concat(age);
}
console.log(greet("Pinku", 23));
console.log(greet("Sima"));
/*function with default value for parameter */
function greeting(name) {
    if (name === void 0) { name = "Raj"; }
    return "hello, ".concat(name);
}
console.log(greeting());
var addition = function (x, y) { return x + y; };
console.log(addition(2, 3));
var subtract = function (x, y) { return x - y; };
console.log(subtract(9, 7));
