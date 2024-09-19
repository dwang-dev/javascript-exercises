const VALID_CHARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789"

const palindromes = function(str) {
    /* method
    - To lowercase
    - Seperate characters
    - FIlter characters
    - Join as new string
    */
   const filteredStr = str.toLowerCase().split("").filter((character) => VALID_CHARACTERS.includes(character)).join("");
   const reversedStr = filteredStr.split("").reverse().join("");
   console.log(filteredStr);
   console.log(reversedStr);
   return (filteredStr === reversedStr);
};

// Do not edit below this line
module.exports = palindromes;
