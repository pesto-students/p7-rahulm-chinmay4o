var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.teach = function (subject) {
  this.subject = subject;

  console.log(`${this.name} is teaching ${this.subject}`);
  return this;
};

var teacher = new Person();

console.log(teacher);

teacher.initialize("Adam", 45);

teacher.teach("Inheritance");
