const printUser = {
  x: 5,
  getX() {
    console.log(`this is ${this.x}`);
  },
};

let obj1 = {
  x: "David",
};

printUser.getX();

const newUser = printUser.getX.bind(obj1);

newUser();
/*
on line 12 the getX method looks for reference of x in printUser Obj and a result of implicit binding
however with .bind menthod on line 14 we have given the function a new reference which is chaging how this keyword behaves
*/

