const sort = (nums) => {
  let zero = 0;
  let one = 0;
  let high = nums.length - 1;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (one >= 1) {
        result[zero + 1] = result[zero];
        result[zero] = nums[i];
      }
      result[zero] = nums[i];
      zero++;
      one++;
    } else if (nums[i] === 2) {
      result[high] = nums[i];
      high--;
    } else if (nums[i] === 1) {
      result[one] = nums[i];
      one++;
    }
  }

  console.log(result);
  return result;
};

sort([0, 2, 1, 2, 2, 2, 1, 1]); // [0, 1, 1, 1, 2, 2, 2, 2]
sort([0, 1, 0, 2, 1, 1, 1, 1]); // [0, 0, 1, 1, 1, 1, 1, 2]
