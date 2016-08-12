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
