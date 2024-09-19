const fibonacci = function(fibNo) {
    fibNo = parseInt(fibNo);
    if (fibNo < 0) return "OOPS";
    let fib = [0, 1];
    for (let i = 2; i <= fibNo; i++) fib[i] = fib[i - 1] + fib[i - 2];
    return fib[fibNo];
};

// Do not edit below this line
module.exports = fibonacci;
