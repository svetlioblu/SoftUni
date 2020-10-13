function time15Minutes(arg1, arg2) {
    let hour = Number(arg1)
    let min = Number(arg2)
    let tesult = ''

    if (min + 15 > 59 && hour < 23) {
        hour += 1

    } else if (min + 15 > 59 && hour >= 23) {
        hour = 0
    }

    if (min + 15 > 59) {
        min = (min + 15) % 60
    } else {
        min += 15
    }

    if (min < 10) {
        result = `${hour}:0${min}`
    } else {
        result = `${hour}:${min}`

    }

    console.log(result)
    // ----------other solution ------------
    // min += 15
    // if (min >= 60) {
    //     hour += 1
    //     min -= 60
    // }
    // if (min < 10) {
    //     result = `${hour}:0${min}`
    // } else {
    //     result = `${hour}:${min}`

    // }
}

time15Minutes('12', '49')