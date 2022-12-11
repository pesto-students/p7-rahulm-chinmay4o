const Person = function () {};
const Teacher = function() {
  // Person.call(this, nameA, age);
};

Person.prototype.initialize = function (nameA, age) {
  this.nameA = nameA;
  this.age = age;
};

Teacher.prototype.teach = function (subject) {
  this.subject = subject;
  console.log(`${this.nameA} is teaching ${this.subject}`);
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

const him = new Teacher();

him.initialize("Adam", 45);

him.teach("Inheritance");
