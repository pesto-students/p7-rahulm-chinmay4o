function add(a = 0, b = 0) {
  return a + b;
}

function memoize(fn) {
  let cache = new Map();
  //   console.log("fn", fn);
  function m(...par) {
    let key = par.toString();
    if (cache.has(key)) {
      //   console.log(cache.get(key));
      return cache.get(key);
    }
    cache.set(key, fn(...par));
    // console.log(cache.get(key));
    return cache.get(key);
  }
  return m;
}

//Create a method called memoize such that:
//   const memoizeAdd = memoize(add)(100, 100); // add = fn
const memoizeAdd = memoize(add); // add = fn
// memoizeAdd will get function m

// console.log("memoizeAdd", memoizeAdd);

//then calling...
time(() => memoizeAdd(100, 100)); //returns 200
memoizeAdd(100); //returns 100
memoizeAdd(100, 200); //returns 300
time(() => memoizeAdd(100, 200)); //returns 200
time(() => memoizeAdd(100)); //returns 100
time(() => memoizeAdd(100, 100)); //returns 200

// Time function to log time;
function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}
