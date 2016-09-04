//Count and Say
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

  var startNum = 0;
  var endNum = 0;

  var str = n.toString();

  var retVal = '';

  for(var i=0; i<str.length; i++) {

    // compare start number and end number
    startNum = str[0];

    if (startNum != str[i]) {
      endNum = str[i];
    }

    retVal = str[i] + str.length;
    console.log('retVal', retVal);
  }
};

countAndSay(1);

// 1, 11, 21, 1211, 111221,
