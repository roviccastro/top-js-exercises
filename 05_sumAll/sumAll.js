const sumAll = function(numOne, numTwo) {
  let numSum = 0;

  if (typeof numOne == 'number' && 
    typeof numTwo == 'number' && 
    Number.isInteger(numOne) &&
    Number.isInteger(numOne)){

    if (numOne < 0 || numTwo < 0){
      numSum = 'ERROR';
    } else if (numOne > numTwo){
      for (let a = numOne; a >= numTwo; --a){
        numSum += a;
      }
    } else if (numOne < numTwo){
      for (let a = numOne; a <= numTwo; ++a){
        numSum += a;
      }
    } else {
      numSum = 'ERROR';
    }

  } else {
    numSum = 'ERROR';
  }

  return numSum;
};

// Do not edit below this line
module.exports = sumAll;

// npm test 05_sumAll/sumAll.spec.js