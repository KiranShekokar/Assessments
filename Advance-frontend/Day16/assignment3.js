var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.xaxis = 1234;
        this.yaxis = 2345;
        this.start = 4;
        this.stop = 7;
        this.pause = 30;
    }
    SmartPhone.prototype.mediaActions = function () {
        console.log("Starts at ".concat(this.start, "pm , Stops at ").concat(this.stop, "pm , Pause for ").concat(this.pause, "seconds"));
    };
    SmartPhone.prototype.getCoordinates = function () {
        console.log("x-coordinate is ".concat(this.xaxis));
        console.log("y-coordinate is ".concat(this.yaxis));
    };
    return SmartPhone;
}());
var SmartPhoneObj = new SmartPhone();
SmartPhoneObj.getCoordinates();
SmartPhoneObj.mediaActions();
