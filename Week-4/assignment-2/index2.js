`use strict`;
const Person = {
  initialize: function (nameA, age) {
    this.nameA = nameA;
    this.age = age;
    console.log(`${this.nameA} & age is ${this.age}`);
    return 
  },
};

const Teacher = Object.create(Person); //new doesn't work on object

Teacher.teach = function (subject) {
    this.subject = subject;
    console.log(`${this.nameA} is teaching ${this.subject}`);
  };

Teacher.initialize("Chin", 12);
Teacher.teach("Histo");

console.log(Object.getPrototypeOf(Teacher) === Person);
