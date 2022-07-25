const setCharAt = function(string, index, chr){
    return string.substring(0,index) + chr + string.substring(index+1, string.length);
}

const reverseString = function(string) {
    let l = string.length - 1;

    for ( let i = 0; i < l; i++ ){
        let rightChar = string[l];
        let leftChar = string[i];
        string = setCharAt(string, i, rightChar);
        string = setCharAt(string, l, leftChar);
        console.log(string)
        l--;
    }
    
    return string
};

// Do not edit below this line
module.exports = reverseString;
