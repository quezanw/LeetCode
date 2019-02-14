


function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let swapped = false;
    for(let j = 0; j < arr.length - 1 - i; j++) {
      if(arr[j] > arr[j + 1]) {
        swapped = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if(!swapped) {
      return arr;
    }
  }
  return arr;
}
let arr = [9,3,5,6];
let best = [1,2,3,4,5,6,7,8,9]
let worst = [9,8,7,6,5,4,3,2,1]
console.log(bubbleSort(best))