'use strict';

function bubbleSort(arr, compare) {
  if (arr.length < 0) {
    return arr;
  }

  if(!compare) {
    compare = (a, b) => a - b;
  }

  let done = false;
  while(!done) {

    for(let i=1; i<arr.length; i++) {
      if(compare(arr[i-1], arr[i] > 0) {
        done = false;

        let temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}

// function swap(arr, i, j) {
//   console.log('swapping ' + arr[i] + ' and ' + arr[j])
//   var temp = arr[j];
//   arr[j] = arr[i];
//   arr[i] = temp;
//   return arr;
// }
// ​
// function bubbleSort(arr) {
//   console.log('bubble sorting arr ', arr)
// ​
//   for (var i = 0; i < arr.length; i++) {
//     // add flag to end the sort early if no pairs were switched
//     var done = true;
// ​
//     for (var j = 0, stop = arr.length - i; j < stop; j++) {
//       console.log('loop #' + i, 'checking ' + arr[j] + ' and ' + arr[j+1])
//       if (arr[j] > arr[j+1]) {
//         swap(arr, j, j+1)
//         done = false;
//       }
//     }
// ​
//     if (done) {
//       console.log('No swap performed, exiting bubble sort after iteration ' + i)
//       break;
//     }
// ​
//   }
//   return arr
// }
// ​
// console.log(bubbleSort([5, 1, 42, 21, 10, 7]));

module.exports = bubbleSort;
