//Quick sort

function qsort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const [pivot, ...rest] = arr;
    const left = [], right = [];
    rest.forEach( el => el < pivot ? left.push(el) : right.push(el) );
    return qsort(left).concat(pivot).concat(qsort(right));
}
console.log(qsort([ 5, 4, 3, 8]));