const reverseString = function(str) {

  let finalString = ``;
  let lengthString = str.length;

  for (let a = lengthString - 1; a >= 0; a--){
    finalString += `${str.at(a)}`;
  };

  return finalString;
};

// Do not edit below this line
module.exports = reverseString;

// npm test 03_reverseString/reverseString.spec.js