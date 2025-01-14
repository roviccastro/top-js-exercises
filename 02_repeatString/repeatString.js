const repeatString = function(str, num) {

  let finalString = ``;

  if (num < 0) finalString = `ERROR`;

  while (num > 0){

    finalString += str;
    num--;
  }

  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
