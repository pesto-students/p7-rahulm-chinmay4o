const maxProfit = (arr) => {
  let temp = 0;
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        temp = arr[j] - arr[i];
        if(temp > maxProfit) maxProfit = temp;
      }
    }
  }
  console.log(maxProfit);
  return maxProfit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([7, 6, 4, 3, 1,7]);
