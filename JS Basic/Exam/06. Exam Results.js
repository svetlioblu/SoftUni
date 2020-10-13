function examResults(input) {
    let currentstudent = input.shift()
    let pointsSum = 0
    let isCheating = false
    while (currentstudent !== 'Midnight') {
        pointsSum = 0
        isCheating = false

        for (let i = 0; i < 6; i++) {
            let currentPoinnts = Number(input.shift())
            if (currentPoinnts < 0) {
                console.log(`${currentstudent} was cheating!`)
                isCheating = true
                break
            }
            pointsSum += currentPoinnts
            //currentPoinnts = Number(input.shift())
        }
        if (isCheating) {
            currentstudent = input.shift()
            continue
        }
        pointsSum = Math.floor((pointsSum / 600) * 100)
        pointsSum *= 0.06
        if (pointsSum >= 5) {
            console.log(`===================`)
            console.log(`|   CERTIFICATE   |`)
            console.log(`|    ${pointsSum.toFixed(2)}/6.00    |`)
            console.log(`===================`)
            console.log(`Issued to ${currentstudent}`)
        } else if (pointsSum < 3) {
            console.log(`${currentstudent} - 2.00`)

        } else {
            console.log(`${currentstudent} - ${pointsSum.toFixed(2)}`)

        }
        currentstudent = input.shift()
    }
}
examResults([
'Andy',
'50',
'50',
'20',
'10',
'10',
'0',
'Midnight'
])