const reverseString = function(string) {
    let newString = ""
    for (let i = 0; i < string.length; i++) {
        newString = newString + string[string.length - 1 - i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
