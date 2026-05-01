for (var i = 1; i <= 10; i++) {

    if (i === 1) {
        console.log("Gold medal")

    }
    else if (i === 2) {
        console.log("Silver medal")
    }
    else if (i === 3) {
        console.log("Bronze medal")
    }

    else {
        console.log(i)
    }
}

for (i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("Hello");
    }
}

function multiplyTwoNums(x, y) {
    console.log(x * y);
}

multiplyTwoNums(2, 5);
multiplyTwoNums(3, 4);
multiplyTwoNums(1, 9);
const trainA = ["coal", "wood", "steel", "grain"];
const trainB = ["cars", "bikes", "tools"];

const firstFromA = trainA[0];
const secondFromB = trainB[1];
const thirdFromA = trainA[2];
const firstFromB = trainB[0];

console.log(firstFromA + "-" + secondFromB + "-" + thirdFromA + "-" + firstFromB);







try {
    Number(5).toPrecision(300)
} catch (e) {
    console.log("There was an error")
}



function consoleLog(val) {
    console.log(val)
    return val
}
consoleLog('Hello')

// Function to double a number
function doubleIt(num) {
    return num * 2;
}

// Function to create an object with a 'prop' key
function objectMaker(val) {
    return { prop: val };
}

// Chaining functions and returning values
let result = objectMaker(doubleIt(5));
console.log(result); // { prop: 10 }


function fib(n) {
    // Step 1: Define the base case(s) here.
    if (n === 0) return 0;
    if (n === 1) return 1;



    // Step 2: Define the recursive case here.

    return fib(n - 1) + fib(n - 2)
}
console.log(fib(10));

var num1 = 2;
var num2 = 3;
function getTotal(a, b) {
    return a + b
}


var total = getTotal(num1, num2);

console.log(total)


//Fu
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance);




//OOP
var iphone = {
    name: '15 pro max',
    turnedOff: true,

    turnOn: function () {
        console.log('the iphone is turned ON')
        this.turnedOff = false;
        return this.name;
    },

    clu: function (tax, relPrice) {

        console.log('the price')

        return tax * relPrice ;
    }
};


console.log(iphone.clu(100, 1.5));
console.log(iphone.turnedOff); 
console.log(iphone.turnOn());
console.log(iphone.turnedOff);

;



