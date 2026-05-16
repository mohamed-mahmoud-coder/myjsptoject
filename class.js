//the class to make object
class Train {
    constructor(color, lightOn) {
        this.color = color;
        this.lightOn = lightOn;


    }
    toggleLight() {
        this.lightOn = !this.lightOn;

    }
    lightStatus() {
        console.log("Lights On !?", this.lightOn)
    }
    getSelf() {
        console.log(this);

    }
    getPrototype() {
        const proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

// Override when you use the same name in the extends one 

class HighSpeedTrain extends Train {
    constructor(passenger, highSpeedOn, color, lightOn) {
        super(color, lightOn)
        this.passenger = passenger;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed(){
        this.highSpeedOn=!this.highSpeedOn;
        console.log("High Speed Status !?",this.highSpeedOn)
    }
    // Method Overriding
    toggleLight(){
        super.toggleLight()
        super.lightStatus();
        console.log("Lights are 100% operational.")
    }



}




const highSpeed_Train1 =new HighSpeedTrain(200, false,"green" , false);
const myFirstTrain = new Train('red', false)
const mySecondTrain = new Train('blue', true)
const myThreadTrain = new Train('yellow', true)
const myForthTrain = new Train('green', false)
highSpeed_Train1.toggleLight();





myFirstTrain.toggleLight()
myFirstTrain.lightStatus()
myForthTrain.getPrototype()
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(myForthTrain)));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(highSpeed_Train1)));

//   Composition    object يحتوي objects ثانية.
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

//console.log(boxingGym.openHrs) 
console.log(boxingGym.stationaryBike) //
//console.log(boxingGym.treadmill) //

// Default Parameter
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
// ex
class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var fail = new NoDefaultParams(1,2,3,false);
fail.calculate(); // 'The value of bool1 is incorrect'

// the right way 
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6