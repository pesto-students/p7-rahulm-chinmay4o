const printUser = {
  x: 5,
  getX() {
    console.log(`this is x${this.x}`);
  },
};

let obj1 = {
  x: "David",
};

printUser.getX();

const newUser = printUser.getX.bind(obj1);

newUser();
