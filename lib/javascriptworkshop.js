// Functions

// Anatomy of a Functions

// function definition

// function expression
var add = function(num1, num2) {
	// This is the body
	return num1 + num2;
};

// function declaration -- hosting
function add(num1, num2) {
	// This is the body
	return num1 + num2;
}

var sum = add(6, 4);

console.log(sum);


// A Scope

// Local scoping
var func = function() {
	// Local scope
	var local = true;

	function func2() {
		console.log('Hello');
	}
};

//console.log(local); // error

// func2(); // error


// A Scope

// Local scoping
var func = function() {
	// Local scope
	var local = true;

	function func2() {
		console.log('Hello');
	}
};

//console.log(local); // error

// func2(); // error


// Global
var global = "Hello";

var func = function() {
	// Local scope
	console.log(global);
}

func();


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


// 2 (Global)

var seven = function() {

};

var five = function() {

	var nine = function() {

		var local = "Hello";
		var four = function() {
			console.log(local);
		};
	};
};


// Arguments are local
var add = function(num1, num2) {
	console.log(num1);

	return num1 + num2;
};

add(6, 4);
//console.log(num1); // error scope


// Precedence

var seven = function() {
	console.log("Hello!");
};

var five = function() {
	var seven = function() {
		console.log("Howdy");
	};
	seven();
};

five();



var x = 20;
var func1 = function() {

	var x = 50;
	var func2 = function() {
		x = 10; // reassingment not creating a variable
		console.log('2', x); // x = 10;
	};
	console.log('1', x); // x = 50;
	func2();
	console.log('3', x); // 10;
	x = 75;
	console.log('4', x); // 75
};

func1();
console.log('5', x);
