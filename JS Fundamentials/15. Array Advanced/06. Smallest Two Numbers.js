function smallesttwoNumbers(arr) {
    let result = arr.sort((a, b) => a - b)
    .slice(0,2)
    .join(' ')
    return result
    
}
console.log(smallesttwoNumbers([3, 0, 10, 4, 7, 3]))