let count = 2;

if (count < 5) {
  console.log("Check once");
}

for (let i = 0; i < 3; i++) {
  if (count < 5) {
    console.log("Loop run");
  }
}

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}