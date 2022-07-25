const leapYears = function(year) {
    let res = year % 4 === 0 && ( year % 100 !==0 || year % 400 === 0) 

    return res
};

// Do not edit below this line
module.exports = leapYears;

console.log(leapYears(1960))