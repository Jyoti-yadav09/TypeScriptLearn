function identity(arg) {
    return arg;
}
console.log(identity(5));
console.log(identity("Hello"));
/* Generic Function with multiple parameters */
function pair(first, second) {
    return [first, second];
}
var result = pair(1, "Hii");
console.log(result);
var p1 = {
    first: "age",
    second: 21
};
console.log(p1);
