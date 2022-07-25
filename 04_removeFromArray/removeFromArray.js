const removeFromArray = function(...args) {
    let array = args[0];
    let newArray = [];

    for ( let i = 0; i < array.length; i++){
        if ( !args.includes(array[i]) ){
            newArray.push(array[i]);
        };
    };

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

removeFromArray([1,2,3],3,4,5,6,4,"1")