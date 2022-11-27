const printName = {
    firstName : "John",
    getName () {
        console.log(`this is ${this.firstName}`)
    }
}
  
const obj1 = {
    firstName : "David",
}

printName.getName();

printName.getName.call(obj1);