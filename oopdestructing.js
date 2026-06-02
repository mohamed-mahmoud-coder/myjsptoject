const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];
const seconditem = ["Phone", 500]
const[secondProductName,secondProductPrice]=seconditem


console.log(`Second product: ${secondProductName}`);
console.log(`Second product price: ${secondProductPrice}`);

const review = {
    title: "Amazing Product",
    description: "This product exceeded my expectations.",
    author: "John Doe",
    timePosted: "2024-11-24"
};
const author = review.author;
const title = review.title;
const timePosted = review.timePosted;

// Destructure the author, title, and timePosted properties from the review object
console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);

// The forEach() method

const fruits = ['kiwi','mango','apple','pear']
fruits.forEach(function(fruit,index){
    console.log(`${index} . ${fruit}`)
});

// The filter() method
const nums = [0,10,20,30,40,50,60,70]
let result=nums.filter(function(num){
    return num >30;

})
console.log(result)

//The map method
const nums1=[10,20,30,40]
let result1 =nums1.map(function(num){
    
    return num/10;


})
console.log(result1)
const bestBoxers =new Map();

bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
console.log(bestBoxers)

console.log(bestBoxers.get(1))
//Working with Sets in JavaScript


const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);



// Spread Operator
//يفتح الصندوق 📦

//showItinerary(...top3); // تمرير عناصر Array كـ arguments

//const copy = [...arr]; // نسخ Array

//const merged = [...arr1, ...arr2]; // دمج Arrays

function describeTrip(stop1, stop2, stop3) {
  console.log("First: " + stop1 + ", then: " + stop2 + ", finally: " + stop3);
}

const cities = ["Paris", "Berlin", "Rome"];

describeTrip(...cities);


function logTrip(stop1, stop2, stop3) {
  console.log("First: " + stop1 + ", then: " + stop2 + ", finally: " + stop3);
}

const favoriteSpots = ["Museum", "Park", "Cafe"];

logTrip(...favoriteSpots);

//Rest 
//يجمع الأشياء داخل صندوق 📦

function multiplyRest(firstNumber, ...otherNumbers) {
  const doubled = otherNumbers.map(function(num) {
    return num * 2;
  });
  console.log(doubled);
}

multiplyRest(3, 4, 5, 7);
function addTaxToPrices(taxRate, ...prices) {
  const taxedPrices = prices.map(function(price) {
    return price * taxRate;
  });
  console.log(taxedPrices);
}

addTaxToPrices(1.2, 10, 5, 15);



//reduce  تجمع عناصر الـ Array في قيمة واحدة. 1 + 2 + 3 + 4
function sum(...numbers1) {

  return numbers1.reduce((total, num) => total + num, 0);

}

console.log(sum(1, 2, 3,4)); // 10

const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = {...flying, ...car};
console.log(flyingCar); // {wings: 2, wheels: 4}
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']