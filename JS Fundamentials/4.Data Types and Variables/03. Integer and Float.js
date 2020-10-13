function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3
    let checkIfFloat = Math.trunc(sum)
    if (sum === checkIfFloat) {
        console.log(`${sum} - Integer`);
        
    } else {
        console.log(`${sum} - Float`);

    }

}
integerAndFloat(100, 200, 303)