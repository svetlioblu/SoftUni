function subNum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN
    }
    if (Number(start) < 0) {
        start = 0
    }
    if (Number(end) > arr.length) {
        end = arr.length
    } else { end += 1 }

    return arr.slice(start, end).reduce((a, b) => a + Number(b), 0)
}
console.log(subNum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subNum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subNum([10, 'twenty', 30, 40], 0, 2));
console.log(subNum([], 1, 2));
console.log(subNum('text', 0, 2));
