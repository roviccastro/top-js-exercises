const removeFromArray = function(original, ...modifier) {

  let result = function(){
    return (original.filter(o => !modifier.includes(o)));
  }

  return (result());
};

// Do not edit below this line
module.exports = removeFromArray;

// npm test 04_removeFromArray/removeFromArray.spec.js