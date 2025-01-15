const convertToCelsius = function(degree) {

  return (+((degree - 32) * (5/9)).toFixed(1));

};

const convertToFahrenheit = function(degree) {

  return (+((degree * 1.8) + 32).toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// npm test 07_tempConversion/tempConversion.spec.js