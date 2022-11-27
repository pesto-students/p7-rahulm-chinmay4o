
function createStack() {
    let items = [];
    return {
      push(item) {
        items.push(item);
        console.log(items);
      },
      pop() {
         items.pop();
        console.log(items);
      },
    };
  }
  
  const stack = createStack();
  
  stack.push(10);
  stack.push(5);
  stack.pop(); // => 5
  stack.items; // => [10]
  
  console.log("items", stack.items);
