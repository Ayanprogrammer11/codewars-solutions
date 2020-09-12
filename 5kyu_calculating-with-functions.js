/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:
  seven(times(five())); // must return 35
  four(plus(nine())); // must return 13
  eight(minus(three())); // must return 5
  six(dividedBy(two())); // must return 3

Requirements:
- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand
- Divison should be integer division. For example, this should return 2, not 2.666666...:
    eight(dividedBy(three()));
*/

const expression = (number, operation) => operation ? operation(number) : number;

const zero = op => expression(0, op);
const one = op => expression(1, op);
const two = op => expression(2, op);
const three = op => expression(3, op);
const four = op => expression(4, op);
const five = op => expression(5, op);
const six = op => expression(6, op);
const seven = op => expression(7, op);
const eight = op => expression(8, op);
const nine = op => expression(9, op);

const plus = num => x => x + num;
const minus = num => x => x - num;
const times = num => x => x * num;
const dividedBy = num => x => Math.floor(x / num);
