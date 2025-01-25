const add = function(a, b) {
  let output = 0;

  output = a + b;

  return output;
};

const subtract = function(a, b) {
	let output = 0;

  output = a - b;

  return output; 
};

const sum = function(a) {
	let output = 0;

  output = a.reduce((total, num) => {
    return total + +num;
  }, 0)

  return output;
};

const multiply = function(a) {
  let output = 0;

  output = a.reduce((total, num) => {
    return total * num;
  })

  return output;
};

const power = function(a, b) {
	let output = 0;

  output = a ** b;

  return output;
};

const factorial = function(a) {
  let output = a;
  
  if (a === 0 || a === 1){
    return output = 1;
  }

  while (a > 1){
    a--;
    output *= a;
  }

  return output;
};

// npm test 08_calculator/calculator.spec.js

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
