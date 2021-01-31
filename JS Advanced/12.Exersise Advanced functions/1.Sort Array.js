function solve(arr, sortType) {
    let action = {
        asc: (array) => {
            return array.sort((a, b) => a - b)
        },
        desc: (array) => {
            return array.sort((a, b) => b - a)
        }
    }
    return action[sortType](arr)
}
console.log(solve([3, 1, 2, 10], 'asc'))