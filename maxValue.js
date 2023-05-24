function maxValue(array) {
    const max= array.reduce((acc, val) => {
        return acc > val ? acc : val;
    });
    return max;
}

console.log(maxValue([1, 8, 23, 5]));
