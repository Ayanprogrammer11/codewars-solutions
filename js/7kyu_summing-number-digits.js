/*
  Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:
    sumDigits(10);  // Returns 1
    sumDigits(99);  // Returns 18
    sumDigits(-32); // Returns 5
  Let's assume that all numbers in the input will be integer values.
*/

const sumDigits = number => Math.abs(number).toString().split('').map(Number).reduce((a,b) => a + b);

// 1. This approach eliminates the use of map which COULD be expensive for larger arrays. It uses javascript type coercion power to automatically handle that for us
const sumDigits1 = number => Math.abs(number).toString().split('').reduce((a, b) => a + +b, 0);

// 2. A little bit longer solution but far more efficient.
const sumDigits2 = num => {
  const absNum = Math.abs(num);
  let sum = 0;

  while (absNum > 0) {
    sum += absNum % 10;
    absNum = Math.floor(absNum / 10);
  }

  return sum;
};
// It reduces unnecessary array creation using split, and also eliminates the use of map. 
