function insertionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let j = i;
    let val = arr[i];
    while(j > 0 && val < arr[j - 1]) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = val;
  }
  return arr
}

arr = [24,42, 4, 16, 8, 15];
console.log(insertionSort(arr));