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
