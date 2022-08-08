// Leet Code: 09 - Palindrome Number


var isPalindrome = function(x) {
    const val = x.toString();
    for(let i = 0; i < val.length; i++) {
        if(val[i] != val[val.length - 1 - i]) {
            return false;
        }
    }
    return true;
};


const result = isPalindrome(1254);
console.log(result);
