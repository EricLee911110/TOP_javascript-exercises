const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let res = 0;
  if ( arr.length === 0 ){
    return res;
  } else {
    for ( let i = 0; i < arr.length; i++){
      res += arr[i];
    };
  };

  return res;
};

const multiply = function(arr) {
  return arr.reduce((total, next) => total * next);
};

const power = function(num1, num2) {
	let res = 1;
  for ( let i = 0; i < num2; i++){
    res *= num1;
  }

  return res;
};

const factorial = function(num) {
  if ( num === 0 ){
    return 1;
  } 
  return num * factorial(num -1);
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

