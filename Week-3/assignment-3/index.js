function createIncrement() {
    let count = 0;
  
    function increment() {
      count++;
    }
  
    let message = `Count is ${count}`;
  
    function log() {
      console.log(message);
    }
  
    return [increment, log];
  }

  const [increment, log] = createIncrement();

  increment();
  increment();
  increment();

  log(); // What is logged?
  
  // In the above example the function is being called at line number 19 where,
  // "count is 0" string is already created. Now after incrementing the count there
  // is no such function which updates the message and count inside thats why the count is printed as 0
  