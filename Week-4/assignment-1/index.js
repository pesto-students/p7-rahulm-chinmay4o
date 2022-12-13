
//Custom promise to check if the number is divisible by 5 then resolve else reject
function CustomPromise(executor) {
  let STATE = "pending";
  let value = null;
  let handlers = [];

  function resolve(result) {
    if (STATE !== "pending") return;

    STATE = "fulfilled";
    value = result;
    console.log(value);

    handlers.forEach((ele) => ele(value));
  }

  function reject(error) {
    if (STATE !== "pending") return;

    STATE = "rejected";
    value = error;
    console.log(value + " being rejected as not divisible by 5");
  }

  this.then = function(callback) {
    if(STATE === "fulfilled") {
        callback(value);
    } else {
        handlers.push(callback);
    }
  }

  executor(resolve, reject);
}

// check if number is divisible by 5
function isDivisibleBy5(number) {
  return number % 5 === 0;
}

// Generate random number
function getRandomNumber(res, rej) {
  let randomNumber = Math.round(Math.random() * 100);

  setTimeout(() => {
    if(isDivisibleBy5(randomNumber)) {
        res(randomNumber)
    } else {
        rej(randomNumber)
    } 
  }, 1000)
}

let newRandomNumber = new CustomPromise(getRandomNumber)

newRandomNumber.then((val) => {
   console.log(val + " 1st .then random number is divisible by 5")
});

setTimeout(() => {
  newRandomNumber.then((val) => {
    console.log(val + " 2nd .then random number is divisible by 5Q")
 });
}, 3000)
