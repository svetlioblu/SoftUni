function walking(input) {
    let stepTarget = 10000
    let stepsCounter = 0
    let index = 0
    let stepStage = input[index]
    index++

    while (stepsCounter < stepTarget) {
        if (stepStage === 'Going home') {
            stepStage = input[index]
            index++
            stepsCounter += Number(stepStage)
            break
        }
        stepsCounter += Number(stepStage)
        stepStage = input[index]
        index++
    }
    if (stepsCounter >= stepTarget) {
        console.log(`Goal reached! Good job!`)
    } else {
        let leftSteps = stepTarget - stepsCounter
        console.log(`${leftSteps} more steps to reach goal.`)
    }
}
walking([
    '125',
    '250',
    '4000',
    '30',
    '2678',
    '4682'
])