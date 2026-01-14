const fibonacci = function(fibNo) {
    if (fibNo < 0 ) return "OOPS";
    fibNo = parseInt(fibNo)
    if (fibNo <= 0) return 0;
    if (fibNo === 1) return 1;
    return fibonacci(fibNo - 1) + fibonacci(fibNo - 2);
};

// Do not edit below this line
module.exports = fibonacci;
