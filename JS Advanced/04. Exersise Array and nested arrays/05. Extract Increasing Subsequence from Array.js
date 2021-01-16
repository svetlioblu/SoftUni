function solve(arr) {
    //Solution 1
    /*let temp = Number.MIN_SAFE_INTEGER
    let result = []
    arr.forEach(element => {
        if (element >= temp) {
            result.push(element)
            temp = element
        }
    });
    return result*/
    //solution 2 with reduce
    return arr.reduce(function (result, current, index, initialArr) {
        if (result[result.length - 1] <= current || result.length == 0) {
            result.push(current)
        }
        return result
    }, [])
}
console.log(solve([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
console.log(`----------------`);
console.log(solve([1,
    2,
    3,
    4]
));
console.log(`----------------`);
console.log(solve([20,
    3,
    2,
    15,
    6,
    1]
));

