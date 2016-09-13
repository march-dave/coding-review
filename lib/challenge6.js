false.toString();
[1,2,3].toString();

function foo() {}
Foo.bar = 1;
Foo.bar;

2.toString();
2..toString();
2 .toString();
(2).toString();

var foo = {};
var bar = {test: 12};

var foo = {name: 'kitten'};
foo.name;
foo['name'];

var get = 'name';
foo[get];

foo.1234;
foo['1234'];

var obj  ={
  bar: 1,
  foo: 2,
  baz: 3
};

obj.bar = undefiend;
obj.foo = null;
delete obj.baz;

for(var in obj) {
  if(obj.hasOwnProperty(i)) {
    console.log(i, '' + obj[i]);
  }
}

var test = {
  'case': 'I am a keyword, so I must be notated as a string',
  delete: 'I am a keyword, so me too'
}

function Foo() {
  this.value = 42;
}

Foo.prototype = function() {
  method: function() {}
};

Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

Bar.prototype.constructor = Bar;

var test = new Bar();

function Foo() {}
Foo.prototype = 1;

Array.forEach

hasOwnProperty
Object.prototype.bar = 1;
var foo = { goo: undefined };
foo.bar;
'bar' in foo;

foo.hasOwnProperty('bar');
foo.hasOwnProperty('goo');

var foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'Here be dragons'
};

foo.hasOwnProperty('bar');

({}).hasOwnProperty.call(foo, 'bar');

Object.prototype.hasOwnProperty.call(obj, 'bar');

Object.prototype.bar = 1;
var foo = { moo: 2 };
for(var i in foo) {
  console.log(i);
}

for(var i in foo) {
  if(foo.hasOwnProperty(i)) {
    console.log(i);
  }
}

function foo() {}

foo();
function foo() {}

var foo = function() {};

var foo = function bar() {
  bar();  // OK
}

bar(); // Error


foo; // 'undefined'
foo(); // TpyeError
var foo = function() {};

this;

foo();

test.foo();

new foo();

function foo(a, b, c) {}
var bar = {};
foo.apply(bar, 1, 2, 3);
foo.call(bar, 1, 2, 3);

Foo.method = function() {
  function test() {

  }
  test();
}

Foo.method = function() {
  var self = this;
  function test() {

  }
  test();
}

Foo.method = function() {
  var test = function() {

  }.bind(this);
  test();
}

var test = someObject.methodTest;
test();

function Foo() {}
Foo.prototype.method = function() {};

function Bar() {}
Bar.prototype = Foo.prototype;

new Bar().method();


function Counter(start) {
  var count = start;
  return {
    incremenet: function() {
      count++;
    },

    get: function() {
      return count;
    }
  }
}

var foo = Counter();
foo.increment();
foo.get();

var foo = new Counter();
foo.hack = function() {
  count = 1337;
};

for(var i=0;i<10;i++) {
  setTimout(function() {
    console.log(i);
  }, 1000);
}


for(var i=0;i<10;i++) {
  (function(e) {
    setTimeout(function() {
      console.log(e);
    }, 1000)
  })(i);
}

for(var i=0;i<10;i++) {
  setTimeout((function(e) {
    return function() {
      console.log(e);
    }
  })(i), 1000)
}

for(var i=0;i<10;i++) {
  setTimeout(function(e) {
    console.log(e);
  }, 1000, i)
}


Array.prototype.slice.call(arguments);

function foo() {
  bar.apply(null, arguments);
}

function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.prototype.fullname = function(joiner, options) {
  options = options || {order: "western"};
  var first = options.oder === "western" ? this.first : this.last;
  var last = options.order === "western" ? this.last : this.first;
  return first + (joiner || " ") + last;
}


Person.fullname = function() {
  return grace = new Person("Grace", "Hopper");
}
grace.fullname();

Person.fullname({first: "Alan", last: "Turing"}, ",", {order: "eastern"})

function Person(name) {
  this.name = name;
}

Person.prototype.logName = function() {
  console.log(this.name);
}

var sean = new Person();

function Car() {
  return 'ford';
}
new Car();

function Person() {
  this.someValue = 2;

  return {
    name: "Charles"
  };
}
new Person();

function Pirate() {
  this.hasEyePath = true;
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
  someFunction: function() {}
};
new Robot();
Robot();

function CarFactory() {
  var car = {};
  car.owner = 'nobody';

  var milesPerGallon = '2';

  car.setOwner = function(newOwner) {
    this.owenr = newOwner;
  }

  car.getMPG = function() {
    return milesPerGallon;
  }

  return car;
}

function test() {
  for(var i=0; i<10; i++) {

  }
  console.log(this.state = {
    :
  });
}

var foo = 42;
function test() {
  foo = 21;
}
test();
foo;


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

if(!SomeImportanThing) {
  var SomeImportantThing = {};
}

var SomeImportantThing;

if(!SomeImportantThing) {
  SomeImportantThing = {};
}

(function() {
  window.foo = function() {

  };
})();

(
  function() {}
)()

!function(){}();
+function(){}();
(function(){})();

var list = [1,2,3,4,5, .... 100000];
for(var i=0; l = list.length; i<l; i++) {
  console.log(list[i]);
}

hasOwnProperty

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

function is(type, obj) {
  var clas = Object.prototype.toString.call(obj).slice(8, -1);
  return obj !== undefined && obj !== null && clas === type;
}

if('String', 'test'); //true
if('String', new String('test'));

function Foo() {}
function Bar() {}
Bar.prototype = new Foo();

new Bar() instanceof Bar; // true
new Bar() instanceof Foo; // true

// Bar.prototype에 함수 객체인 Foo를 할당하면
// Bar의 인스턴스는 Foo의 인스턴스가 아니다.
Bar.prototype = Foo;
new Bar() instanceof Foo; // false

new String('foo') instanceof String; // true
new String('foo') instanceof Object; // true

'foo' instanceof String; // false
'foo' instanceof Object; // false

new Number(10) === 10; // false
Number(10) === 10; // true
new Number(10) + 0 === 10; // true

var number = 1;
function test() {
  var number = 2;
  eval('number = 3');
  return number;
}
test();
number;

var number = 1;
function test() {
  var number = 2;
  var copyOfEval = eval;
  copyOfEval('number = 3');
  return number;
}
test();
number;

var undefiend = 123;
(function(something, foo, undefined) {

})('Hello World', 42);

var undefined = 123;
(function(something, foo) {
  var undfeind;
})('Hello World', 42);

(function(window, undefined) {
  function test(options) {
    log('testing!')

    (options.list || []).forEach(function(i))
  }
})


Object.keys
var foo = {'bar': 'baz'};

if(!Object.keys) Object.keys = function(o) {
  if (o != Object.(o))
    throw new TypeError('Object.keys called on non-object');

    var ret = [], p;
    for(p in o) if(Object.prototype.hasOwnProperty.call(o, p)) ret.push(p);
    return set;
}


// mongodb.com/download-center
//
// docs.mongodb.com/manual/release-notes/3.3-dev-series
//
// ls -alt
// ./mongo --port 27018
// ps -ef | grep mongo

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

function foo() {}
setInterval(foo, 100);

function foo() {
  setTimeout(foo, 100);
}

var id = setTimeout(foo, 1000);
clearTimeout(id);

for(var i=1;i<1000;i++) {
  clearTieout(i);
}

var biggestTimeoutId = window.setTimeout(function() }{},1), i;
for(i=1;i<=biggestTimeoutId;i++) {
  clearTimeout(i);
}

function foo(a, b, c) {}

setTimeout('foo(1,2,3)', 1000)
setTimeout(function() {
  foo(1,2,3);
}, 1000)


<script type="text/babel">

  var HelloWorld = React.createClass({
    render: function() {
      return <div><h1>Hello World</h1></div>
    }
  })

  React.render(<HelloWorld /> , document.body);

</script>

var HelloWorld = React.createClass({
  render: function() {
    return (
      React.createElement("div", null, React.createElement("h1", null, "Hello World"), React.createElement("p"), null, "This is some Text")
    )
  }
});

React.render(React.createElement(HelloWorld ,null), document.body);

<div id="react-container"></div>
var MyComponent = React.createClass({ render: function() {
  return <div>My React Component</div>;
}});

React.render(<div><MyComponent /><MyComponent /> </div>, document.getElementById('react-container'))






<div id="react-container"> </div>

var MyComponent = React.createClass({
  render: function() {
    return <div>My React Component</div>
  }
});


React.render(<div><MyComponent /><MyComponent /> </div>  , document.getElementById('react-container'));


function CarFactory() {
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

(function(window, undefined) {
    function test(options) {

        // 쎄미콜론을 넣는 것이 아니라 줄을 합친다.
        log('testing!')(options.list || []).forEach(function(i) {

        }); // <- 여기

        options.value.test(
            'long string to pass here',
            'and another long string to pass'
        ); // <- 여기

        return; // <- 여기에 넣어서 그냥 반환시킨다.
        { // 파서는 단순 블럭이라고 생각하고

            // 단순한 레이블과 함수
            foo: function() {}
        }; // <- 여기
    }
    window.test = test; // <- 여기

// 이 줄도 합쳐진다.
})(window)(function(window) {
    window.someLibrary = {}; // <- 여기

})(window); //<- 여기에 파서는 쎄미콜론을 넣는다.

log('testing!')
(options.list || []).forEach(function(i) {})


log('testing')(options.list || []).forEach(function(i) {})


import React from 'react'
import { render } from 'react-dom'
import { match, Router, browserHistory} from 'react-router'
import AsyncProps from 'async-props'
import routes from '../routes/index'

const { pathname, search, hash} = window.location
const location = `${pathname}${search}${hash}`

match({ routes, location }, () => {
  render(
    <Router
      render={props => <AsyncProps {...props} />}
      routes={routes}
      histroy={browserHistory}
      />,
      document.getElementById('app')
  )
})


var HelloClass = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
});

React.render(<HelloClass />, document.body);


 //true
// function printAllPaths(matrix, start, end) {
//   var paths = [];
//
//   var startX = start[0];
//   var startY = start[1];
//   var endX = end[0];
//   var endY = end[1];
//
//   function printPath(x, y, path){
//     var node = matrix[x][y];
//
//     // current node / coordinate is the end
//     if (x === endX && y === endY){
//       path += node;
//       paths.push(path);
//       return
//     }
//
//     // path = '', node = 0
//     // x = 0 , y = 0
//
//     // can move right?
//     if (y < endY) {
//       printPath(x, y+1, path + node + '-')
//     }
//
//     // can move left?
//     if (y > endY) {
//       printPath(x, y-1, path + node + '-')
//     }
//
//     // can move down?
//     if (x < endX) {
//       printPath(x+1, y, path + node + '-')
//     }
//
//     // can move up?
//     if (x > endX) {
//       printPath(x-1, y, path + node + '-')
//     }
//
//   }
//
//   printPath(startX, startY, '');
//
//   return paths;
// }
//
// function foo() {
//     arguments.callee; // 이 함수를 가리킨다.
//     arguments.callee.caller; // 이 함수를 호출한 부모함수를 가리킨다.
// }
//
// function bigLoop() {
//     for(var i = 0; i < 100000; i++) {
//         foo(); // 원래 인라인 돼야 하는디...
//     }
// }
//
// function Person(name) {
//   this.name = name;
// }
//
// Person.prototype.logName = function() {
//   console.log(this.name);
// };
//
// var sean = new Person();
//
//
// function Car() {
//   return 'ford';
// }
// new Car();
//
// function Person() {
//   this.someValue = 2;
//
//   return {
//     name: 'Charles'
//   };
// }
// new Person();
//
// function Pirate() {
//   this.hasEyePatch = true;
// }
// var somePirate = Pirate();
//
// function Robot() {
//   var color = 'gray';
//   return {
//     getColor: function() {
//       return color;
//     }
//   }
// }
// Robot.prototype = {
//   someFunction: funtion() {
//
//   };
// }
//
// new Robot();
// Robot();
//
// function CarFactroy() {
//   var car = {};
//   car.owner = 'nobody';
//
//   var milesPerGallon = 2;
//
//   car.setOwner = function(newOwner) {
//     this.owner = newOwner;
//   }
//
//   car.getMPG = function() {
//     return milesPerGallon;
//   }
//
//   return car;
// }
//
// function test() {
//   for(var i=0; i<10; i++) {
//
//   }
//   console.log(i);
// }
//
// foo ='42';
// var foo = '42';
//
// var foo = 42;
// function test() {
//   foo = 21;
// }
// test();
// foo;
//
// // Global scope
// var items = [];
// for (var i=0; i<10; i++) {
//   subLoopp();
// }
//
// function subLoop() {
//   for(i=0; i<10; i++) {
//
//   }
// }
//
// function test(i) {
//   i = 5;
//
//   var foo = 3;
//   bar = 4;
// }
// test(10);
//
//
// bar();
// var bar = function() {};
// var someValue = 42;
//
// test();
// function test(data) {
//   if(false) {
//     goo = 1;
//   } else {
//     var goo = 2;
//   }
//   for(var i=0; i<100; i++) {
//     var e = data[i];
//   }
// }
//
// var bar, someValue;
//
// function test(data) {
//   var goo, i, e;
//   if(false) {
//     goo = 1;
//   } else {
//     goo = 2;
//   }
//   for(i=0; i<100; i++) {
//     e = data[i];
//   }
// }
//
// bar();
// someValue = 42;
// bar = function() {};
// test();
//
// if(!SomeImportantThing) {
//     var SomeImportantThing = {};
// }
//
// !function(){}();
// +function(){}();
// (function(){}());
//
// var arr = [1,2,3,4,5,6];
// arr.length = 3;
// arr;
//
// arr.length = 6;
// arr.push(4);
// arr;
//
// [1,2,3];
// new Array(1,2,3);
//
// [3];
// new Array(3);
// new Array('3');
//
// var arr = new Array(3);
// arr[1];
// 1 in arr;
//
// new Array(count + 1).join(stringToRepeat);
//
// function is(type, obj) {
//   var clas = Object.prototype.toString.call(obj).slice(8, -1);
//   return obj != undefined && obj !== null && clas === type;
// }
//
// if('String', 'test');
// if('String', new String('test'));
//
// typeof foo !== 'undefied'
//
// Object.prototype.toString
//
// function Foo() {}
// function Bar() {}
// Bar.prototype = new Foo();
//
// new Bar() instanceof Bar;
// new Bar() instanceof Foo;
//
// Bar.prototype = Foo;
// new Bar() instanceof Foo;
//
// new String('foo') instanceof String;
// new String('foo') instanceof Object;
//
// 'foo' instanceof String;
// 'foo' instanceof Object;
//
// new Number(10) == 10;
// isNaN(null) == false;
//
// var number = 1;
// function test() {
//   var number = 2;
//   eval('number' = 3);
//   return number;
// }
// test();
// number;
//
// var number = 1;
// function test() {
//   var number = 2;
//   var copyOfEval = 'eval';
//   copyOfEval('number = 3');
//   return number;
// }
// test();
// number;
//
//
// var undefined = 123;
// (function(something, foo, undefined) {
//
// })('Hello World', 42);
//
// var undefiend = 123;
// (function(something, foo) {
//   var undefiend;
// })('Hello World', 42);
//
// var obj = {x: 1};
// obj.y = 2;
// delete obj.x;
// delete obj.y;
// obj.x;
// obj.y;
//
//
// (function(x) {
//   delete argumenets;
//   typeof arguements;
//
//   delete x;
//   x;
//
//   function f(){}
//   delete f.length;
//   typeof f.length;
// })(1);
//
//
// function foo() {}
// var id = setTimeout(foo, 1000);
//
// function Foo() {
//   this.value = 42;
//   this.method = function() {
//     console.log(this.value);
//   };
//   setTimeout(this.method, 500);
// }
// new Foo();
//
// function foo() {
//
// }
// setnterval(foo, 100);
//
//
//
// function foo() {
//   setTime(foo, 100);
// }
// foo();
//
// var id = setTimeout(foo ,1000);
// clearTimeout(id);
//
// for(var i=1;i<1000; i++) {
//   clearTimeout(i);
// }
