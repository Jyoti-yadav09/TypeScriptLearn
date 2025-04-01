var user1 = {
    name: "Rani",
    age: 23,
    greet: function () { return "Hello world"; },
    description: function () {
        return "Hello I am a girl ".concat(this.name);
    },
};
console.log(user1.greet());
console.log(user1.description());
