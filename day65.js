//Array Challenge1 for practice

let digits = [1,2,3];
  var plusOne = function(digits) {
    let digitsJoined=digits.join('');
    let digitsNumber=Number(digitsJoined)+1;
    return digitsNumber.toString().split('').map(x=>Number(x));
};
console.log(plusOne(digits));