import fetch from "node-fetch";

//completing the tasks with Generators
function doTask1() {
  let result = fetch("https://jsonplaceholder.typicode.com/users");
  result
    .then((val) => {
      return val.json();
    })
    .then((val) => {
      console.log(val);
      me.next();
    });
}

function doTask2() {
  setTimeout(() => {
    console.log("completed task 2");
    me.next();
  }, 3000);
}

function doTask3() {
  setTimeout(() => {
    return console.log("completed task 3");
  }, 3000);
}

function* printResults() {
  yield doTask1();

  console.log("Done with task1");
  yield doTask2();

  console.log("Done with task2");
  yield doTask3();
}

const me = printResults();
me.next();

// Completing the tasks with Async/Await
// async function printAsyncResults() {
//     await doTask1();

//     console.log("Done with task1");
//     await doTask2();

//     console.log("Done with task2");
//     await doTask3();
// }

// printAsyncResults();