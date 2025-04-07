var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var newBox = new Box(100);
var strBox = new Box("Hello");
console.log(newBox.getValue());
console.log(strBox.getValue());
