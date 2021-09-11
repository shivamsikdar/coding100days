// Remove an item from an array

function removeFromArray(array,n){
    const newArray = [];

    for (let i=0; i<array.length; i++){

        if (array[i] !==n){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const result = removeFromArray([1,2,3,4,5],2);
console.log(result);