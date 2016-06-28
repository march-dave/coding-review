// "use strict";
//
// function fib(n) {
//
//   if (n < 2) return n;
//
//   return fib(n-1) + fib(n-2);
//
//
//
// }
//
// // 0, 1, 1, 2, 3, 5, 8, 13
// console.log(fib(5));  // 3
// console.log(fib(0));  // 0
// console.log(fib(1));  // 1
//
//
//


function gemstone(rocks) {

    var arr = [];
    rocks.forEach(function(c){
        arr.push(c.split('').sort().join(''));

    });

    var icount = 0, ihighest = 0;
    rocks.forEach(function (c) {
       c.reduce(function (p, c2) {

         if ( p == c2) {
           icount++;

           if (icount > ihighest) {
             ihighest = icount;
           }
         }

       });

       icount = 0;

      });



	console.log(arr);
	//reutrn 0;
}


// abcdde
// baccd
// eeabg
var arr = ['abcdde', 'baccd', 'eeabg'];
console.log(gemstone(arr));
