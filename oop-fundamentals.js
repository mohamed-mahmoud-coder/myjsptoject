var purchase={
Car:23000,
statTax:500,
totalPrice:function(){
    var calculation = this.Car * this.statTax;
    console.log('the Total price is ',calculation,'$')
}


}
purchase.totalPrice();


//class 1
class Car{
constructor(name, color,modelNumber,TopSpeed,brand, baseSpeed){
    this.name=name;
    this.color=color;
    this.modelNumber=modelNumber;
    this.TopSpeed=TopSpeed;
    this.brand = brand;
    this.baseSpeed = baseSpeed;

}
//function info() do not do!!!!!!!
 v12() {
    console.log("the name of the car :",this.name,"the model number",this.modelNumber)
    
}
drive(extraSpeed) {
    console.log(this.brand + " drives at " + (this.baseSpeed + extraSpeed));
  }

}
const carA = new Car("bugate","blue",294325,320,"Falcon", 80);
const carB = new Car("marsedes","green",284325,320,"Comet", 90);
const car1=new Car("ferrare","red",204325,320,"SoDet", 90);

car1.v12();





carA.drive(10);
carB.drive(5);

//class 2

class Player {
  constructor(name, level, bonus) {
    this.name = name;
    this.level = level;
    this.bonus = bonus;
  }

  score() {
    return this.level * this.bonus;
  }

  describe() {
    return this.name + "-L" + this.level;
  }
}

const p1 = new Player("Alex", 2, 5);
const p2 = new Player("Blair", 3, 4);
const p3 = new Player("Casey", 5, 2);

const first = p2.describe();
const second = p1.score();
const third = p3.score();
const fourth = p2.score();
const fifth = p1.describe();

console.log(first + "," + second + "," + third + "," + fourth + "," + fifth);

//class 3 

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.area = width * height;
  }
}

const rectA = new Rectangle(2, 5);
const rectB = new Rectangle(3, 4);

console.log(rectA.width + rectB.area);
//Rectangle  --> circle 
class circle extends Rectangle{};

/*
Animal the main
   ↑
Mammal
   ↑
Elephant
*/
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Mammal extends Animal {
  walk() {
    console.log("Walking...");
  }
}

class Elephant extends Mammal {
  trunk() {
    console.log("Using trunk...");
  }
}

const elephant1 = new Elephant();

elephant1.eat();
elephant1.walk();
elephant1.trunk();
//Abstraction is all about writing code
// in a way that will make it more generalized.

console.log("adf".concat("fsd"))


class Bird {
    useWings() {
        console.log("Flying!");
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings();
        console.log("Barely flapping!");
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!");
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"



/*| المبدأ        | المعنى                   |
| ------------- | ------------------------ |
| Inheritance   | الوراثة                  |
| Encapsulation | إخفاء التفاصيل           |
| Abstraction   | تبسيط الاستخدام          |
| Polymorphism  | نفس الدالة بس سلوك مختلف |
*/

//prototype
const animal = {
  hasFur: true,
  canRun: true
};                                            

const cat1 = Object.create(animal);
const cat2 = Object.create(animal);

cat1.canRun = false;

console.log(cat1.canRun +` The  ${cat1.canRun}  `+ cat2.canRun + " " + animal.canRun);
const today = new Date();
console.log(today)
console.log(today.getFullYear())

// 
new String('plum') === new String('plum')
/*false
You're getting the false when 
comparing objects because it is not 
the values that you pass to the constructor
that are being compared, but rather the
memory location where objects are saved.
*/
/*
| الكود          | الاسم              |
| -------------- | ------------------ |
| `new Object()` | Object Constructor |
| `{}`           | Object Literal     |
*/


// old wayyyyy
var bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true
}

var eagle1 = Object.create(bird);

console.log("eagle1:", eagle1);
console.log("eagle1 has wings:", eagle1.hasWings);
console.log("eagle1 can fly:", eagle1.canFly);
console.log("eagle1 has feathers:", eagle1.hasFeathers);
