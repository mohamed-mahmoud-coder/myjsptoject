var aryy=[];
aryy.push('apple');
aryy.push('merdo');
aryy.pop();


var pure ;
console.log(Math.ceil(Math.random()*10));






function multiplyTwoNum(num1,num2){

return num1 * num2

};

function randomNum(){
 return Math.ceil(Math.random()*10)
  ;
}
//the EXP
//multiplyTwoNum(randomNum()==>num1,randomNum()==>num2)


//console.log(randomNum());
function const1(){
  return 21*5;
}
var random1=true;
var getNumber;
if(random1)
{
getNumber=randomNum;

}
else
{
  getNumber=const1;
}
//class function
console.log(multiplyTwoNum(getNumber(),getNumber()))
//High order function
console.log(multiplyTwoNum(randomNum(),const1()))


//inPure
function c(x) {
  return x * Math.random();
}
//Pure
function d(x) {
  return x * 2;
}


