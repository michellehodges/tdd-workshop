// Write your challenge app logic here!

var Challenge = {
    fizzBuzz: function(a) {
      if (( a % 3 === 0 ) && ( a % 5 === 0 )) {
          return "fizz buzz"
      }
      else if (a % 3 === 0) {
          return "Fizz"
      }
      else if (a % 5 === 0) {
          return "Buzz"
      }
   
      return "none"
    },
    array: function() {
      var array = [];
      for (var i = 1; i <= 100; i++) {
        array.push(i);
      }
      return array
    }
  };
  Challenge.array();
  module.exports = Challenge;
  
  // module.exports = fizz = () => {
  //     var Fizz = "Fizz"
  //      return Fizz
  // }
  // module.exports = buzz = () => {
  //     var Buzz = "Buzz"
  //         return Buzz
  // }
  //   var array = [];
  // console.log(firstValue, secondValue)
  //   for (var i = 1; i <= 101; i++) {
  //     array.push(i);
  //   }
  //   for (var i = 1; i < array.length; i++) {
  //     if ( array[i] % firstValue === 0) {
  //       console.log("Fizz")
  //     }
  //     // if( array[i] % secondValue === 0 ){
  //     //     console.log("Buzz")
  //     // }
  //     // if( ( array[i] % firstValue != 0 ) && ( array[i] % secondValue != 0 ) ){
  //     //     console.log(array[i])
  //     // }
  //     // if( ( array[i] % firstValue === 0 ) && ( array[i] % secondValue === 0 ) ){
  //     //     console.log("fizzbuzz")
  //     // }
  // }
  