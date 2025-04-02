function getInfo(value) {
    if (typeof value === "string") {
        return "hello, ".concat(value);
    }
    else {
        return "Your id is ".concat(value);
    }
}
console.log(getInfo("Yojana"));
console.log(getInfo(10));
