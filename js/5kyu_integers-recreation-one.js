/*
  Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

  Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

  The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

  #Examples:

  list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
  list_squared(42, 250) --> [[42, 2500], [246, 84100]]
  The form of the examples may change according to the language, see Example Tests: for more details.

  Note

  In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
*/

// Find all divisors of a given number and store them in an array.
const findDivisors = num => {
  const divisors = [];
  
  for (let x = 1; x <= num; x++) {
    if (num % x === 0) divisors.push(x);
  }
  
  return divisors;
}

// Given an array of divisors, calculate the sum of the square of all the divisors.
// a = accumulator, c = current
const getSumSquared = divisors => divisors.reduce((a, c) => a += c * c, 0);

// Loop through all numbers between m and n. Find their divisors and the sum of their square, then check if the sum is a square.
const listSquared = (m, n) => {
  const result = [];
  
  for (let i = m; i <= n; i++) {
    let divisors = findDivisors(i);
    let sum = getSumSquared(divisors);
    
    if (Math.sqrt(sum) % 1 === 0) result.push([i, sum]);
  }
  
  return result;
}
