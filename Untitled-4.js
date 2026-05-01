for (var i = 1; i <= 10; i++) {
    switch (i) {
        case 1:
            console.log("Gold medal");
            break;

        case 2:
            console.log("Salver medal");
            break;
        case 3:

            console.log("Bronz medal");
            break;

        default:
            console.log(i);
    }
}

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i * 100, "tomato!")
        } else {
            console.log(i * 100, arr[i])
        }
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); // display all items in the array at once

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i)

        }
        else if (word[i] !== match) {
            console.log('---No match found at', i)

        }
    }

}

letterFinder("test", "t");


var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}











let name1 = 'alice',
    name2 = 'bob';
let color = 'red';

let result = name1 < name2;
console.log(result); // true
console.log(name1 == 'alice'); // true
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
assistantManager.hero = 10000;
assistantManager[color] = 200;
console.log(assistantManager[color]);


var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()
//So, properties describe what an object is, and methods describe what an object can do.

var product = {
    name: "Laptop",
    price: 500,
    buy: function () {
        console.log("Purchased");
    }
};




const values = [4, 5, 6];
console.log(typeof values);
var test = typeof (function addnum() { });
console.log(test)




try{
    throw TypeError();
    console.log(c , w);
}
catch{
    console.log("there is error")
    
}
(10).toString(8);