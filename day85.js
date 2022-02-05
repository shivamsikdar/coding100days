//Array challenge (Sum of an array)

function sumArray (arr){
    var sum = 0;
    for(var i =0; i<arr.length; i++){

        for (var j=0; j<arr[i].length; j++){

            sum += arr[i][j];
        }
    }
    return sum;

}
console.log(sumArray([[3, 2], [1], [4, 12]]));
