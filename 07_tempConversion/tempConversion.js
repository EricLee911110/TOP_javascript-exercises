const roundUp = function(temp){
  temp = Math.round(temp * 10) / 10;
  
  return temp;
}

const ftoc = function(temp) {
  return roundUp( ( temp - 32 ) * 5 / 9 );
};

const ctof = function(temp) {
  return roundUp(( temp * 9 / 5 ) + 32);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

let a = 123.5

console.log(ctof(0))