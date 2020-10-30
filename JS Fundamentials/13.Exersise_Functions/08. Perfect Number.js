function perfectNumber(num) {
    let sum = 0
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i
        }
    }
    if (num ===sum) {
        return console.log(`We have a perfect number!`)
        
    } else {
        return console.log(`It's not so perfect.`);
        
    }
}
perfectNumber(1236498)