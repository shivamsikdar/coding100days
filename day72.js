// Programe to check weather the array has duplicate numbers or not

var array=[1,2,3,4,5];
function hasDuplicates(array) {
  var valuesSoFar = [];
  for (var i = 0; i < array.length; ++i) {
      var value = array[i];
      if (valuesSoFar.indexOf(value) !== -1) {
          return false;
      }
      valuesSoFar.push(value);
  }
  return true;
}
console.log(hasDuplicates(array));