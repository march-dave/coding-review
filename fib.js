"use strict";

function fib(n) {

  if (n < 2) return n;

  return fib(n-1) + fib(n-2);



}

// 0, 1, 1, 2, 3, 5, 8, 13
console.log(fib(5));  // 3
console.log(fib(0));  // 0
console.log(fib(1));  // 1
