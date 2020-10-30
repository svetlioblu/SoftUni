function addAndSubtract(a, b, c) {

    let firstTwoArgsSum = (a, b) => a + b
    let subtract = (a, b) => a - b

    return console.log(subtract(firstTwoArgsSum(a,b),c))
     
}
addAndSubtract(1, 17, 30)