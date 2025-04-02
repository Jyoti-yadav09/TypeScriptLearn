var value;
value = "Hi";
value = 20;
console.log(value);
/*Union type in function parameter */
function Display(data) {
    if (typeof data === "string") {
        console.log(data.toUpperCase());
    }
    else {
        console.log(data.toFixed(2));
    }
    console.log("Data is :", data);
}
Display("Hello!");
Display(10);
/*Union type in Array */
var mixedArray = ["Rani", 20, 30, "Pinku"];
console.log(mixedArray);
