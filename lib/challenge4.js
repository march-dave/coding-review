'use strict';

function people(firstName, lastName) {

  this.firstName = firstName;
  this.lastName = lastName;

};

var person = new people('John', 'Doe');

console.log(person.firstName);
console.log(person.lastName);

function people() {

    var count = 0;

    return function getIndentify () {
      return count++;
    }
}

var person = people();
console.log('person', person);











var arr = ['Alex', 'Dave', 'Alex'];

arr.sort();

var a = arr.find( c => { return ( c == 'Alex' ) } );
var a = arr.includes('Alex');
