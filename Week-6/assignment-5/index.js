function findPair(arr, target) {
  let result = 0;
  // let sortedArray = arr.sort((a, b) => (target >= 0 ? b - a : a - b));

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] - arr[j] === target) {
        result = 1;
        console.log(result);
        return result; //  why not 1
      }
    }
  }
  console.log(result);
  return result;
}

findPair([24, 4, 2, -50, 23, -4, 50, 12, 0], 46);
