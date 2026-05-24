// Task 1: Code a Person class
class Person{
    constructor(name="Tom", age=20, energy=100) {
        this.name = name;
        this.age = age;
        this.energy = energy;

    }
    sleep() {
        this.energy += 10;

        
    }
    doSomethingFun() {
        this.energy -= 10;
        
    }
}


// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name, age, energy, xp = 0, hourlyWage = 10){
        super(name, age, energy)
        this.xp = xp;
        this.hourlyWage = hourlyWage;

    }
    goToWork() {
        this.xp += 10;

    }
}


// Task 3: Code an intern object, run methods
function intern() {
   let intern = new Worker(   "Bob", 21,110, 0 ,10);

    
    intern.goToWork();
    return intern;
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the intern properties
    // WRITE YOUR CODE HERE - Call the goToWork() method
    // WRITE YOUR CODE HERE - Return the intern object
}

// Task 4: Code a manager object, methods
function manager() {
    let manager = new Worker( "Alice", 30,120, 100,30);
    manager.doSomethingFun();

    
    return manager;
  
    
}
let cars=["red","yellow","blue"
]
for(let car of cars){
    console.log(car)
}
const text ="road";
for(let ros of text){
    console.log(ros)
}
//Object.keys(), Object.values(), and Object.entries().
//for Object toooo array

const car2={
    color:"blue"
    ,topSpeed: 330
}
for(let car3 of Object.values(car2)){

    console.log(car3);
}

const car = {
   speed: 100,
   color: "blue"
}

for(let key in car){
   console.log(key)
}

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}
function testBracketsDynamicAccess() {
  var dynamicKey;
  if(Math.random() > 0.5) {
    dynamicKey = "speed";
   }else{
     dynamicKey = "color";
   }

    var drone = {
      speed: 15,
      color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess()

/*| loop                          | ماذا يلف؟          |
| ----------------------------- | ------------------ |
| `for...in`                    | object + prototype |
| `for...of` مع `Object.keys()` | object فقط         |
*/
const car4 = {
    engine: true,
    steering: true,
    speed: "slow"
};

const sportsCar = Object.create(car4);

sportsCar.speed = "fast";
sportsCar.engine = false


console.log("The sportsCar object:", sportsCar);

console.log("----- for...in loop -----");

for (let prop in sportsCar) {
    console.log(prop);
}

console.log("Iterating over object AND its prototype!");

console.log("----- for...of loop -----");

for (let prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
  //  break;
}

console.log("Iterating over object's OWN PROPERTIES only!");
const baseGadget = {
  brand: "TechCo",
  status: "old",
  warranty: "expired"
};

const smartGadget = Object.create(baseGadget);

smartGadget.status = "new";
smartGadget.color = "black";

let result = "";

for (let key in smartGadget) {
  result += key + " ";
}

result += "| ";

for (let key of Object.keys(smartGadget)) {
  result += key + " ";
}

console.log(result);

//Template Literal
let name = "Mohamed";

console.log(`Hel
    lo ${name}`);
