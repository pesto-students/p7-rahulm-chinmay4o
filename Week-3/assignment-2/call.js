// var name1 = "chinmay";

function getName(a, b) {
    let name1 = "chinmay";
  
    console.log(`${this.name1} lives in Mumbai and his age is ${a + b}`);
    return `${this.name1} lives in Mumbai and his age is ${a + b}`;
  }
  
  let obj = {
    name1: "David",
  };
  
  // getName(10, 20);
  getName.call(obj, 10, 20); // call takes second param as list of args
  