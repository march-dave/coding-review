'use strict';

function bubblesort(arr, compare) {
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

module.exports = bubblesort;
