function printAllPaths(matrix, start, end) {
  var paths = [];

  var startX = start[0];
  var startY = start[1];
  var endX = end[0];
  var endY = end[1];

  function printPath(x, y, path){
    var node = matrix[x][y];

    // current node / coordinate is the end
    if (x === endX && y === endY){
      path += node;
      paths.push(path);
      return
    }

    // path = '', node = 0
    // x = 0 , y = 0

    // can move right?
    if (y < endY) {
      printPath(x, y+1, path + node + '-')
    }

    // can move left?
    if (y > endY) {
      printPath(x, y-1, path + node + '-')
    }

    // can move down?
    if (x < endX) {
      printPath(x+1, y, path + node + '-')
    }

    // can move up?
    if (x > endX) {
      printPath(x-1, y, path + node + '-')
    }

  }

  printPath(startX, startY, '');

  return paths;
}

function foo() {
    arguments.callee; // 이 함수를 가리킨다.
    arguments.callee.caller; // 이 함수를 호출한 부모함수를 가리킨다.
}

function bigLoop() {
    for(var i = 0; i < 100000; i++) {
        foo(); // 원래 인라인 돼야 하는디...
    }
}

function Person(name) {
  this.name = name;
}

Person.prototype.logName = function() {
  console.log(this.name);
};

var sean = new Person();


function Car() {
  return 'ford';
}
new Car();

function Person() {
  this.someValue = 2;

  return {
    name: 'Charles'
  };
}
new Person();

function Pirate() {
  this.hasEyePatch = true;
}
var somePirate = Pirate();

function Robot() {
  var color = 'gray';
  return {
    getColor: function() {
      return color;
    }
  }
}
Robot.prototype = {
  someFunction: funtion() {

  };
}

new Robot();
Robot();

function CarFactroy() {
  var car = {};
  car.owner = 'nobody';

  var milesPerGallon = 2;

  car.setOwner = function(newOwner) {
    this.owner = newOwner;
  }

  car.getMPG = function() {
    return milesPerGallon;
  }

  return car;
}

function test() {
  for(var i=0; i<10; i++) {

  }
  console.log(i);
}

foo ='42';
var foo = '42';

var foo = 42;
function test() {
  foo = 21;
}
test();
foo;

// Global scope
var items = [];
for (var i=0; i<10; i++) {
  subLoopp();
}

function subLoop() {
  for(i=0; i<10; i++) {

  }
}

function test(i) {
  i = 5;

  var foo = 3;
  bar = 4;
}
test(10);


bar();
var bar = function() {};
var someValue = 42;

test();
function test(data) {
  if(false) {
    goo = 1;
  } else {
    var goo = 2;
  }
  for(var i=0; i<100; i++) {
    var e = data[i];
  }
}

var bar, someValue;

function test(data) {
  var goo, i, e;
  if(false) {
    goo = 1;
  } else {
    goo = 2;
  }
  for(i=0; i<100; i++) {
    e = data[i];
  }
}

bar();
someValue = 42;
bar = function() {};
test();

if(!SomeImportantThing) {
    var SomeImportantThing = {};
}

!function(){}();
+function(){}();
(function(){}());

var arr = [1,2,3,4,5,6];
arr.length = 3;
arr;

arr.length = 6;
arr.push(4);
arr;

[1,2,3];
new Array(1,2,3);

[3];
new Array(3);
new Array('3');

var arr = new Array(3);
arr[1];
1 in arr;

new Array(count + 1).join(stringToRepeat);

function is(type, obj) {
  var clas = Object.prototype.toString.call(obj).slice(8, -1);
  return obj != undefined && obj !== null && clas === type;
}

if('String', 'test');
if('String', new String('test'));

typeof foo !== 'undefied'

Object.prototype.toString

function Foo() {}
function Bar() {}
Bar.prototype = new Foo();

new Bar() instanceof Bar;
new Bar() instanceof Foo;

Bar.prototype = Foo;
new Bar() instanceof Foo;

new String('foo') instanceof String;
new String('foo') instanceof Object;

'foo' instanceof String;
'foo' instanceof Object;

new Number(10) == 10;
isNaN(null) == false;

var number = 1;
function test() {
  var number = 2;
  eval('number' = 3);
  return number;
}
test();
number;

var number = 1;
function test() {
  var number = 2;
  var copyOfEval = 'eval';
  copyOfEval('number = 3');
  return number;
}
test();
number;


var undefined = 123;
(function(something, foo, undefined) {

})('Hello World', 42);

var undefiend = 123;
(function(something, foo) {
  var undefiend;
})('Hello World', 42);

var obj = {x: 1};
obj.y = 2;
delete obj.x;
delete obj.y;
obj.x;
obj.y;


(function(x) {
  delete argumenets;
  typeof arguements;

  delete x;
  x;

  function f(){}
  delete f.length;
  typeof f.length;
})(1);


function foo() {}
var id = setTimeout(foo, 1000);

function Foo() {
  this.value = 42;
  this.method = function() {
    console.log(this.value);
  };
  setTimeout(this.method, 500);
}
new Foo();

function foo() {

}
setnterval(foo, 100);



function foo() {
  setTime(foo, 100);
}
foo();

var id = setTimeout(foo ,1000);
clearTimeout(id);

for(var i=1;i<1000; i++) {
  clearTimeout(i);
}
