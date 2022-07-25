const sumAll = function(num1, num2) {
    if ( (typeof(num1) && typeof(num2)) === "number"){
        if ( (num1 || num2) <0 ){
            return "ERROR";
        };

        if (num2 < num1){
            let tmp = num1;
            num1 = num2;
            num2 = tmp;
        };
        console.log(num1, num2)
        let res = 0;
        for ( let i = num1; i < num2+1; i++){
            res += i;
        };
        return res;

    };
    
    return "ERROR";
    
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(10, "90"))
console.log( (typeof(90) && typeof(90)) === "number" ); 