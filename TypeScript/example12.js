var keyValuePair = /** @class */ (function () {
    function keyValuePair() {
    }
    //method
    keyValuePair.prototype.setkeyValue = function (x, y) {
        this.key = x;
        this.value = y;
    };
    //function
    keyValuePair.prototype.Display = function () {
        console.log('key = ' + this.key + " and value = " + this.value);
    };
    return keyValuePair;
}());
var obj1 = new keyValuePair();
obj1.setkeyValue(1, 'Srikanth');
obj1.Display();
var obj2 = new keyValuePair();
obj2.setkeyValue('Designation', 'TechLead');
obj2.Display();
