'use strict';

function buildSubsequences(s) {

  var result = {};

  function sub(s){
    result[s] = 1;

    for (var i = 0; i < s.length; i++){
      var newString = s.substr(0, i) + s.substr(i + 1);
      if (!result[newString] && newString.length){
        sub(newString);
      }
    }

  }

  sub(s);

  return Object.keys(result).sort()

}










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
