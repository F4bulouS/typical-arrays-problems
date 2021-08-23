exports.min = function min(array) {
    if (arguments.length === 0 || array.length === 0) return 0;
    let minElement = Number.MAX_VALUE;
    array.forEach((element) => {
        minElement = element < minElement ? element : minElement;
    });
    return minElement;
};

exports.max = function max(array) {
    if (arguments.length === 0 || array.length === 0) return 0;
    let maxElement = Number.MIN_VALUE;
    array.forEach((element) => {
        maxElement = element > maxElement ? element : maxElement;
    });
    return maxElement;
};

exports.avg = function avg(array) {
    if (arguments.length === 0 || array.length === 0) return 0;
    return array.reduce((partial_sum, a) => partial_sum + a, 0) / array.length;
};
