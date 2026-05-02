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

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Declare a variable for the message
    var message = "%c" + txt;

    
    // Declare a variable for the style
    var style = `color: ${color};`;

    
    // Append background style to the style variable
     style += `background: ${background};`;
    // Append font size style to the style variable
         style += `font-size: ${fontSize};`;     

    
    // Log the message with the applied style
   console.log(message,style)
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    // Declare a fontStyle variable with default styles
    var fontStyle = "color: tomato; font-size: 50px";

    
    // Check if the reason is "birthday"
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    }
    
    // If reason is "champions", log a congrats message
    else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
        
     }
    
    // For any other reason, log a default message
    else {
       console.log(message, style); 
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Call the consoleStyler function with appropriate arguments
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');

// Call the celebrateStyler function with an appropriate argument
celebrateStyler('birthday')

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    // Call consoleStyler with the first four arguments
   consoleStyler(color, background, fontSize, txt);
    
    
    // Call celebrateStyler with the last argument
    celebrateStyler(reason)
}

// Call styleAndCelebrate with appropriate arguments
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');

