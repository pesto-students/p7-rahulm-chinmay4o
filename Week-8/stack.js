class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove an element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Get the top element of the stack
    peek() {
      if (this.isEmpty()) {
        return "No elements in Stack";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Print the stack
    print() {
      console.log(this.items.toString());
    }
  }

  const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);



  