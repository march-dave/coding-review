// Closures

var closureAlert = function() {
	var message = "Help! I'm stuck in a clouser!";
	var showAlert = function() {
		alert(message);
	};
	return showAlert;
};

console.log(typeof closureAlert());

// var x = function() {
// 	return "Hello";
// };

// console.log(typeof x());


var showAlert = closureAlert();
showAlert();
// console.log(showAlert);


var add = function(num1) {
	return function(num2) {
		return num1 + num2;
	};
};

var a = add(1);
// console.log(a());


var counter = function() {
	var n = 0;
	return {
		increment: function() {
			n++;
		},
		reset: function() {
			n = 0;
		},
		getN: function() {
			return n;
		}
	}
};

var myCounter = counter();
myCounter.increment();
console.log(myCounter.getN());

var myOtherCounter = counter();
console.log(myOtherCounter.getN());


var car = function(name) {
	var properties = {
		name: name,
		gasLevel: 100
	};
	return {
		drive: function() {
			return --properties.gasLevel;
		},
		getName: function() {
			return properties.name;
		}
	};
};

var ferrari = car("Ferrari");
console.log(ferrari.drive()); //99
var civic = car("civic");
console.log(civic.drive()); //99
console.log(ferrari.getName()); // ferrari


// Functions
// Function hoisting
// Function scoping (scoping in general)
// Higher-Order  Functions
// Closure



// Functions

// Function definition


// Function expression
var add = function(num1, num2) {
	 return num1 + num2;
};

// Function invocation(calling, running, execution)

console.log(add(6, 4));
var sum = add(10, 10);
console.log(sum, typeof sum);

// Function declaration
function add(num1, num2) {
	return num1 + num2;
}

// add(6, 4); // Error

// // Function expression
// var add = function(num1, num2) {
// 	 return num1 + num2;
// };



// HOISTING
add(6, 4); // ==> 10

// Function declaration
function add(num1, num2) {
	return num1 + num2;
}


// 객체는 해쉬맵 처럼 사용된다.
var foo = {}; // 깨끗한 새 객체를 만든다.

// 값이 12인 'test' 프로퍼티가 있는 객체를 만든다.
var bar = {test: 12};

// 프로퍼티 접근
var foo = {name: 'kitten'}
foo.name; // kitten
foo['name']; // kitten

var get = 'name';
foo[get]; // kitten

foo.1234; // SyntaxError
foo['1234']; // works

// 프로퍼티 삭제
var obj = {
    bar: 1,
    foo: 2,
    baz: 3
};
obj.bar = undefined;
obj.foo = null;
delete obj.baz;

for(var i in obj) {
    if (obj.hasOwnProperty(i)) {
        console.log(i, '' + obj[i]);
    }
}


function Foo() {
    this.value = 42;
}
Foo.prototype = {
    method: function() {}
};

function Bar() {}

// Foo의 인스턴스를 만들어 Bar의 prototype에 할당한다.
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

// Bar 함수를 생성자로 만들고
Bar.prototype.constructor = Bar;

var test = new Bar() // bar 인스턴스를 만든다.


function foo() {}
foo(); // 이 코드가 실행되기 전에 foo가 만들어지므로 잘 동작한다.
function foo() {}
var foo = function() {};
foo; // 'undefined'
foo(); // TypeError가 난다.
var foo = function() {};

var foo = function bar() {
    bar(); // 이 경우는 동작 하지만,
}
bar(); // 이 경우는 참조에러를 발생시킨다.

// Clousure mistake
for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// Clousure return values solution
for(var i = 0; i < 10; i++) {
    (function(e) {
        setTimeout(function() {
            console.log(e);
        }, 1000);
    })(i);
}


for(var i = 0; i < 10; i++) {
    setTimeout((function(e) {
        return function() {
            console.log(e);
        }
    })(i), 1000)
}

for(var i = 0; i < 10; i++) {
    setTimeout(function(e) {
        console.log(e);
    }, 1000, i);
}


for(var i = 0; i < 10; i++) {
    setTimeout(console.log.bind(console, i), 1000);
}



bulletin-board

npm i --save-d babel-cli@6.4.0
npm i --save-d babel-preset-react


"build": "babel js -d built

"babel": {
	"preset": ["react"]
}

npm i --save httpster

"start": "open http://localhost:3000 & httpster -p 3000"

Array.prototype.slice.call(arguments);

function foo() {
    bar.apply(null, arguments);
}
function bar(a, b, c) {
}
