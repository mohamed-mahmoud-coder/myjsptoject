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