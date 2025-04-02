function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + "" + b;
    }
}
console.log(add(2, 4));
console.log(add("hello", "jyoti"));
