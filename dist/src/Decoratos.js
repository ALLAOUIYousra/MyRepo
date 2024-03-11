// Define the decorator function
function logged(constructor) {
    // return class extends constructor {
    //     constructor(...args: any[]) {
    //         super(...args);
    //         console.log(`Instance of ${constructor.name} created.`);
    //     }
    // };
}
// Usage example
// @logged
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
// Creating an instance of Greeter
var greeter = new Greeter('world');
