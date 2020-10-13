function sumSeconds(arg1, arg2, arg3) {
    let playerOne = Number(arg1)
    let playerTwo = Number(arg2)
    let playerThree = Number(arg3)

    let fullTime = playerOne + playerTwo + playerThree

    let min = parseInt(fullTime / 60)
    let sec = fullTime % 60

    if (sec > 9) {
        console.log(`${min}:${sec}`)
    } else {
        console.log(`${min}:0${sec}`)
    }

}
sumSeconds('35', '45', '44')