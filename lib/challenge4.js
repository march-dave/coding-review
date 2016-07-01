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









var votes = ['Alex', 'Michael', 'Harry', 'Dave', 'Michael', 'Victory', 'Harry', 'Alex', 'Mary', 'Mary'];

var arrRet = votes.reduce( (p, c) => {
    console.log('p', p);
    return (p+10);
}, []);


var votes = ['Alex', 'Michael', 'Harry', 'Dave', 'Michael', 'Victory', 'Harry', 'Alex', 'Mary', 'Mary'];

var arrRet = votes.sort().reverse().reduce( (p, c) => {
    if (c in p) {
      p[c]++;
    } else {
      p[c] = 1;
    }
    return p;
}, {});

var r = ''; count = 0;
Object.keys(arrRet).forEach( key => {
  console.log(arrRet[key], key);

  if (arrRet[key] > count) {
      count = arrRet[key];
      r = '';
      r = key;
  }
});

console.log(r);
// return r;
