function metricConverter(arg1, arg2, arg3) {
    let numberToConvert = Number(arg1)
    let input = arg2
    let output = arg3

    let result = 0

    if (input == 'm' && output == 'cm') {
        result = numberToConvert * 100
    } else if (input == 'm' && output == 'mm') {
        result = numberToConvert * 1000
    } else if (input == 'cm' && output == 'm') {
        result = numberToConvert / 100
    } else if (input == 'cm' && output == 'mm') {
        result = numberToConvert * 10
    } else if (input == 'mm' && output == 'm') {
        result = numberToConvert / 1000
    } else if (input == 'mm' && output == 'cm') {
        result = numberToConvert / 10
    }
    console.log(result.toFixed(3))
    // ------------ correct logic, imagine in sm--------------
    
    // if (input === 'm') {
    //     numberToConvert = numberToConvert * 100 // convert sm to m

    // } else if (input === 'mm') {
    //     numberToConvert = numberToConvert / 10 // convert sm to mm
    // }

    // if (output === 'm') {
    //     numberToConvert = numberToConvert / 100
    // } else if (output === 'mm') {
    //     numberToConvert = numberToConvert * 10
    // }

}
metricConverter('45', 'cm', 'mm') 
