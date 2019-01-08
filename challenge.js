// Write your challenge app logic here!
var fizzbuzz = userNum => {
  if (userNum % 5 === 0 && userNum % 3 === 0) {
    // console.log('FizzBuzz');
    return 0;
  } else if (userNum % 3 === 0) {
    // console.log('Fizz');
    return 0;
  } else if (userNum % 5 === 0) {
    // console.log('Buzz')
    return 0;
  } else {
    return 1;
  }
};

module.exports = fizzbuzz;
