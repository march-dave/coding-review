/*
 * Complete the function below.
 */
function gemstones(rocks) {
    var result = 0;

    // find the smallest rock and filter the rest
    var smallest = rocks[0];
    var otherRocks = [];
    for (var i = 1; i < rocks.length; i++){
      if (rocks[i].length < smallest.length) {
        otherRocks.push(smallest);
        smallest = rocks[i];
      } else {
        otherRocks.push(rocks[i]);
      }
    }

    var stones = {};
    for (var i = 0; i < smallest.length; i++){
      var stone = smallest[i];

      if (!stones[stone] && checkRocks(stone)){
        result += 1;
      }

      stones[stone] = 1;
    }

    function checkRocks(stone){
      return otherRocks.every(function(rock){
        return rock.includes(stone);
      });
    }

    return result;

}

// Option 2
// function gemstones (arrayOfRocks) {
//     let totalGemStones = 0;
//     //sort the array of rocks from shortest to longest
//     let sorted = arrayOfRocks.sort(function (a, b) {
//             return a.length - b.length;
//     });
//     //will contain a string of the unique characters in the shortest "rock"
//     let compositionsToCompareWith = "";
//     //for loop on the length of the shortest "rock"
//     for (let i = 0; i < sorted[0].length; i++) {
//         //if the compositions string does not includes a letter from the shortest "rock"
//         if (!compositionsToCompareWith.includes(sorted[0].split("")[i])) {
//             //concatenate that letter to the compositions string
//             compositionsToCompareWith += sorted[0].split("")[i];
//         }
//     }
//     //for loop on the length of the compositions string
//     for (let outter = 0; outter < compositionsToCompareWith.length; outter++) {
//         // boolean set to whether there is a gemstone based on comparisons with other rocks
//         let isAGemstone = true;
//         //for loop over the remaining "rocks"
//         for (let inner = 1; inner < sorted.length - 1; inner++) {
//             //if the current rock does not include the letter in the composition string
//             if (!sorted[inner].includes(compositionsToCompareWith[outter])) {
//                 //set isAGemstone to false
//                 isAGemstone = false;
//                 //break out of the loop to avoid checking further "rocks"
//                 break;
//             }
//         }
//         // if isAGemstone is true
//         if (isAGemstone) {
//             //increase the total
//             totalGemStones++;
//         }
//     }
//     //return that there total, yo.
//     return totalGemStones;
// }

// Option #1
// function gemstones(rocks) {
//     let elementCount;
//     let answer = 0;
//
//     elementCount = rocks.map(rock => {
//         let memo = {};
//
//         rock.split('').forEach(gem => {
//             memo[gem] = 1;
//         });
//
//         return memo;
//     })
//
//     .reduce((acc, memo) => {
//         for(let key in memo) {acc[key] ? acc[key]++ : acc[key] = 1};
//         return acc;
//     });
//
//     for(let key in elementCount) {
//         if(elementCount[key] === rocks.length) answer++;
//     }
//
//     return answer;
// }
