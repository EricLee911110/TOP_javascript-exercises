const palindromes = function (word) {
    word = word.toLowerCase().replace(/[^A-Za-z]/g, '');
    tmpWord = word.split('').reverse().join('');
    /* another solution
    let left = word.length - 1; 
    let res = true;
    for ( let i = 0; i < left; i++ ){
        if (word[i] != word[left] ){
            res = false;
        };
        left--;
    };

    return res;
    */

   return word == tmpWord;
};

// Do not edit below this line
module.exports = palindromes;


let a = "hey";
console.log(palindromes("myName is ERIC!"));