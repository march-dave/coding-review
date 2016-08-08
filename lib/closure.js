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
