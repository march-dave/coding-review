// 'use strict';

// function normalsort(arr) {
//   return arr.reduce( function(p, c) {
//       return (p > c);
//   })
// }

function naturalsort(arr) {
  return arr.reduce( function(p, c) {

      if (p < c) {
        return -1;
      } else if (p < c) {
        return 0;
      } else if (p > c) {
        return 1;
      }

  })
}

// console.log(normalsort(['a10', 'a2', 'a3', 'b20', 'b81', 'b9'] ));
// naturalsort a2, a3, a10, b9, b20, b81
// console.log(naturalsort());
