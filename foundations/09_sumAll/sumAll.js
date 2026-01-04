const sumAll = function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
        return "ERROR"
    } 

    if (a > b) {
        const temp = a
        a = b
        b = temp
    }
        

    return b * (b + 1) / 2 - (a - 1) * a / 2;
};

// Do not edit below this line
module.exports = sumAll;
