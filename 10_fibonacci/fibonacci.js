const fibonacci = function(a) {

  th = parseInt(a);

  let sequence = [0, 1];

  if (th === 0){
    return 0;
  } else if (th < 0){
    return 'OOPS'
  }
  
  while (!sequence[th]){
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 1 - 1])
    console.log(sequence);
  }
  
  return sequence[sequence.length - 1];

};

// npm test 10_fibonacci/fibonacci.spec.js

// Do not edit below this line
module.exports = fibonacci;
