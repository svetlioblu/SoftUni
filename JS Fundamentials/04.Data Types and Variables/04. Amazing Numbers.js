function amazingNumbers(num) {

    let castToString = num.toString().split('')
    let result = 0
    for (let i = 0; i < castToString.length; i++) {
        result += Number(castToString[i])
    }
    let checkIfAmazing = result.toString().includes('9')

    if (checkIfAmazing) {
        console.log(`${num} Amazing? True`);

    } else {

        console.log(`${num} Amazing? False`);

    }


}
amazingNumbers(1233)