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
