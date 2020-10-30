function numberModification(number) {
    let result = number


    function modifyNumAndValidate(result) {
        let count = result.toString().length
        let sum = result.toString().split('').map(Number).reduce((a, b) => a + b)
        if (sum / count > 5) {
            return console.log(result)
        } else {
            result = result.toString() + '9'
            result = Number(result)
            modifyNumAndValidate(result)
        }
    }

    return modifyNumAndValidate(result)
}
numberModification(5835)