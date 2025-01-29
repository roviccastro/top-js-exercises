const palindromes = function (a) {
 
  let original = () => {
    arr = a.split('');
    
    let output = ''
    
    for (x in arr){
      if (arr[x] !== '!' && arr[x] !== '.' && arr[x] !== ',' && arr[x] !== ' '){
        output += arr[x].toLowerCase();
      }
    }
    
    return output;
  } //original end
  
  let reversed = () => {
    let output = ''
    
    let arr = a.split('').reverse()
    
    for (x in arr){
      if (arr[x] !== '!' && arr[x] !== '.' && arr[x] !== ',' && arr[x] !== ' '){
        output += arr[x].toLowerCase();
      }
    }
    
    return output;
  } //reversed end
    
  if (original() === reversed()){
    return true
  } else {
    return false
  }

};

// npm test 09_palindromes/palindromes.spec.js
// Do not edit below this line
module.exports = palindromes;
