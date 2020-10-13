function printAndSum(start, end) {
    let result = ''
    let sum = 0

    for (let i = start; i <= end; i++) {
        sum += i
        result += i + ' '
    }
console.log(result.trim());
console.log(`Sum: ${sum}`);

}
printAndSum(50, 60)