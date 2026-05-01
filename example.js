function checkNumber(value) {
  if (value > 5) {
    throw new RangeError("Too big");
  }
  console.log("Value is fine");
}

try {
  checkNumber(10);
  console.log("After check");
} catch (err) {
  console.log(err.name);
  console.log("Caught an error");
}

console.log("Program continues");


function showMessage(text) {
  console.log(text);
  return text;
}

let status;

console.log(status);
console.log(showMessage("Ready"));

status = "Started";

console.log(status);


/*function showCity() {
  console.log("Paris");

  
}
const result = showCity();
console.log(result);

*/


function addTwoNums(a,b){
  try{
  if(typeof a !== "number"){
    throw TypeError('The first argument is not a number .')
  
  }
  else if(typeof b !=='number'){
    throw TypeError('The second argument is not a number .')

  }
  else{
  console.log(a+b)
  }
  
console.log('still workkk')
  

}

catch(err){
console.log("Error!!",err)
}
}
addTwoNums(5, "5")
console.log("It still works")



function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2
    var condition2 = typeof(match) == 'string' && match.length == 1
    if(condition1==true&&condition2==true){

      for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
       
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
      }
    }
    }
       else{
      console.log("Please pass correct arguments to the function.")
      
       }

    }
    

/*letterFinder(5,4);*/
letterFinder("catscc", "c")
