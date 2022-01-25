//Bubble sort
var bubbleSort = (items) => {
  for (let i = 0; i < items.length; i++) {
    for (let j =  i + 1; j < items.length; j++) {
      if (items[i] > items[j]) {
        [items[i], items[j]] = [items[j], items[i]];
      }
    }
  } 
  return items;
}
console.log(bubbleSort([ 5, 4, 3, 8, 7, 1, 13, 41, 22, 2, 18, 75, 9]));
