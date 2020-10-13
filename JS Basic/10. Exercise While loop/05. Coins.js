function coins(input) {
    let change = Number(input[0])
    let counter = 0
    let currentSum = change
    let twoLev = 2.00
    let oneLev = 1.00
    let fiftyCent = 0.50
    let twentyCent = 0.20
    let tenCent = 0.10
    let fiveCent = 0.05
    let twoCent = 0.02
    let oneCent = 0.01

    while (currentSum !== 0) {
        if (currentSum - twoLev >= 0) {
            currentSum -= twoLev
            currentSum = Number(currentSum.toFixed(2))
            counter++
            continue
        } else if (currentSum - oneLev >= 0) {
            currentSum -= oneLev
            currentSum = Number(currentSum.toFixed(2))
            counter++
            continue
        } else if (currentSum - fiftyCent >= 0) {
            currentSum -= fiftyCent
            currentSum = Number(currentSum.toFixed(2))
            counter++
            continue
        } else if (currentSum - twentyCent >= 0) {
            currentSum -= twentyCent
            currentSum = Number(currentSum.toFixed(2))
            counter++
            continue
        } else if (currentSum - tenCent >= 0) {
            currentSum -= tenCent
            currentSum = Number(currentSum.toFixed(2))
            counter++
            continue
        }
        else if (currentSum - fiveCent >= 0) {
            currentSum -= fiveCent
            currentSum = Number(currentSum.toFixed(2))
            counter++
            continue
        }
        else if (currentSum - twoCent >= 0) {
            currentSum -= twoCent
            currentSum = Number(currentSum.toFixed(2))
            counter++
            continue
        }
        else if (currentSum - oneCent >= 0) {
            currentSum -= oneCent
            currentSum = Number(currentSum.toFixed(2))
            counter++
            continue
        }
    }
    console.log(counter)
    
}
coins(['2.73'])