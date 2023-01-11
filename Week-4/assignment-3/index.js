const fib = {
  [Symbol.iterator]: function () {
    let i = 0;
    let oldVal = 0;
    let newVal = 0;
    return {
      next() {
        const temp = oldVal;
        oldVal = newVal;
        newVal = temp + newVal === 0 ? 1 : temp + newVal;
        return {
          value: oldVal,
          done: i++ >= 10,
        };
      },
    };
  },
};

for (let ele of fib) {
  console.log(ele);
}

//Space complexity
// const fib = {
//   //this obj is now iterable
//   [Symbol.iterator]: function () {
//     let i = 0;
//     let val = 1;
//     let arr = [];
//     return {
//       next() {
//         if (i === 0) {
//           arr.push(0);
//         } else if (i === 1) {
//           arr.push(1);
//         } else {
//           arr.push(arr[i - 1] + arr[i - 2]);
//         }
//         return {
//           value: arr[i],
//           done: i++ >= 10,
//         };
//       },
//     };
//   },
// };
