  // Problem 6.1: Max Sum Contiguous Subarray

// Input 1: A = [1, 2, 3, 4, -10]
// Output 1: 10
// Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.

// Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output 2: 6
// Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6.

let A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function findMaxOfSubarray(arr) {
  let max = 0,
    temp = arr[i];
  for (let i = 0; i < arr.length; i++) {
    // temp = temp + arr[i];
    if (temp < temp + arr[i + 1]) {
      temp = temp + arr[i + 1];
    } else if (temp > temp + arr[i + 1]) {
      temp = temp + arr[i];
    }
  }
  return max;
}
