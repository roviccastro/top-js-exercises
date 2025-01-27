const findTheOldest = function(arr) {

  let pers = arr.sort(function (a, b) {
    let date1 = new Date().getFullYear();

    if (!a.yearOfDeath){
    } else if (!b.yearOfDeath){
      b.yearOfDeath = date1;
    } else {
    }
      
    if ( (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)){
      return 1;
    } else {
      return -1
    }
    
})

return pers[0]

};

// npm test 12_findTheOldest/findTheOldest.spec.js
// Do not edit below this line
module.exports = findTheOldest;
