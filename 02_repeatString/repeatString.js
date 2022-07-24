const repeatString = function(keyword, repeat_times) {
    if (repeat_times < 0){
        return 'ERROR';
    } else {
        let res = '';
        for ( i = 1; i <= repeat_times; i++){
            res += keyword;
        }
        return res;
    };


};

// Do not edit below this line
module.exports = repeatString;
