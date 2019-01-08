// Write your challenge app logic here! 

var challenge = {

    fizzBuzz: function(x) {
    
        if (x % 3 == 0 && x % 5 == 0) {
            return ("FizzBuzz");
        } else if (x % 5 == 0) {
            return ("Buzz")
        } else if (x % 3 == 0) {
            return ("Fizz")
        } else return x
}}
module.exports = challenge;