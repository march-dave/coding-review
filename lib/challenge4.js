'use strict';

function people(firstName, lastName) {

  this.firstName = firstName;
  this.lastName = lastName;

};

var person = new people('John', 'Doe');

console.log(person.firstName);
console.log(person.lastName);
