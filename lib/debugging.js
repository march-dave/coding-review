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


//61 ave 211  7d4

function Counter(start) {
    var count = start;
    return {
        increment: function() {
            count++;
        },

        get: function() {
            return count;
        }
    }
}

var foo = Counter(4);
foo.increment();
foo.get(); // 5
