const palindromes = function (a) {
  // let output = '';

  // let reversedWord = a.split('').reverse().join('');

  // for (x of reversedWord){
  //   output += x;
  // }


  // let checker = () => {
  //   if (output.toLowerCase === a.toLowerCase){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // console.log(output);
  // return checker();

  // let originalStr = a.split('').join('').toLowerCase().split('')
  // let palindromeStr = a.split('').reverse().join().toLowerCase().split(',');

  // function isPalindrome(org, str){
    
  //   for (letter in originalStr){
  //     for (char in palindromeStr){
  //       if (originalStr[letter] === palindromeStr[char]){
  //         return true
  //       } else {
  //         return false
  //       }
  //     }
  //   }

  // }

  // return isPalindrome(originalStr, palindromeStr);

  // let originalStr = a;
  // let reversedStr = a.split('').join('')

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
