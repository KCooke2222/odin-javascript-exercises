const fibonacci = function (n) {
    n = Number(n);
    if (n < 0) {
        return "OOPS";
    }
    else if (n === 0) {
        return 0;
    }

    res = 1
    prev = 0
    for (let i = 1; i < n; i++) {
        tmp = res;
        res += prev;
        prev = tmp;
    }
    return res;
};

// Do not edit below this line
module.exports = fibonacci;
