// Write your challenge app logic here!
var fizzbuzz  = (x) => {
    if(x % 3 ==0 && x % 5 ==0) {return "FizzBuzz"}
    else if(x % 3 == 0) {return "Fizz"}
    else if(x % 5 == 0) {return "Buzz"}
    else {
    return x
    }
}
module.exports = {
     fizzbuzz
}