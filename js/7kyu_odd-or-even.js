/*
  Given a list of numbers, determine whether the sum of its elements is odd or even.

  Give your answer as a string matching "odd" or "even".

  If the input array is empty consider it as: [0] (array with a zero).
*/

const oddOrEven = array => {
  const sum = array.reduce((a, b) => a + b, 0);
  return sum % 2 == 0 ? "even" : "odd";
}
