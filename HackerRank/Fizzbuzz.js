// Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:
// Prints "Fizz" for multiples of three.
// Prints "Buzz" for multiples of five.
// Prints "FizzBuzz" for multiples of both three and five.
// else prints the the i

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i / 3 === 0 && i / 5 === 0) {
      console.log("FizzBuzz");
    } else if (i / 3 === 0) {
      console.log("Fizz");
    } else if (i / 5 == 0) {
      console.log("Buzz");
    }
    console.log(i);
  }
};
