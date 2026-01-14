const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(array) {
	return array.reduce((total, num) => {return total + num}, 0);
};

const multiply = function(array) {
  return array.reduce((total, num) => {return total * num}, 1);
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {
	if (num === 0) return 1;
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
