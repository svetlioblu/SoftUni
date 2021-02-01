function add(num) {
    let sum = 0
    sum += num
    calc.toString = () => { return sum }
    return calc
    function calc(num2) {
        sum += num2
        return calc
    }
}

console.log(add(1)(6)(-3).toString());