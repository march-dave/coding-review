// console.time('animationMenu');
// console.timeEnd('animationMenu');

// console.table('me');

// node-inspector
// debugger html

// John K. Paul

// Global scope
this;

foo();

// method call
test.foo();

// constructor call
new foo();

function foo(a, b, c) {}

var bar = {};
foo.apply(bar, [1, 2, 3]); // a = 1, b = 2, c = 3으로 넘어간다.
foo.call(bar, 1, 2, 3); // 이것도... 
