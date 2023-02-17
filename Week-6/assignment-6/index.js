function closestSum(arr, target) {
  let closestNum = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      let sum = arr[i] + arr[j] + arr[j + 1];
      if (i === 0) {
        closestNum = sum;
      }

      if ( Math.abs(sum - target) < Math.abs(closestNum - target)) {
        closestNum = sum;
      }
    }
  }
  return closestNum;
}

let arr = [-1, 2, 1, -4];
let target = 1;

console.log(closestSum(arr, target));

// TC : O(n^2)
// SC : O(1)
