function onTimeForTheExam(arg1, arg2, arg3, arg4) {
    let examHour = Number(arg1)
    let examMinute = Number(arg2)
    let arriveHour = Number(arg3)
    let arriveMinute = Number(arg4)
    let examInMinutes = examHour * 60 + examMinute
    let arriveInMinutes = arriveHour * 60 + arriveMinute
    let calculationEarly = examInMinutes - arriveInMinutes
    let calculationLate = arriveInMinutes - examInMinutes
    let IsOntime = 'Early'
    let resultH = 0
    let resultM = 0

    if (examInMinutes === arriveInMinutes) {
        return console.log('On time')
    } else if (examInMinutes > arriveInMinutes) {
        if (calculationEarly <= 30) {
            IsOntime = 'On time'
            return console.log(`${IsOntime}\n${calculationEarly} minutes before the start`)
        } else if (calculationEarly > 30 && calculationEarly < 60) {
            return console.log(`${IsOntime}\n${calculationEarly} minutes before the start`)
        } else if (calculationEarly > 59) {
            resultH = parseInt(calculationEarly / 60)
            resultM = calculationEarly % 60
            if (resultM < 10) {
                return console.log(`${IsOntime}\n${resultH}:0${resultM} hours before the start`)

            } else {
                return console.log(`${IsOntime}\n${resultH}:${resultM} hours before the start`)
            }
        }
    } else if (arriveInMinutes > examInMinutes) {
        IsOntime = 'Late'
        if (calculationLate < 60) {
            return console.log(`${IsOntime}\n${calculationLate} minutes after the start`)
        } else {
            resultH = parseInt(calculationLate / 60)
            resultM = calculationLate % 60
            if (resultM < 10) {
                return console.log(`${IsOntime}\n${resultH}:0${resultM} hours after the start`)

            } else {
                return console.log(`${IsOntime}\n${resultH}:${resultM} hours after the start`)
            }
        }

    }
}
    onTimeForTheExam('11', '30', '12', '29')