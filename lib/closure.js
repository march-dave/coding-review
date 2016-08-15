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
