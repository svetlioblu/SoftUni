function logIn(input) {
    let userName = input[0]
    let index = 0
    let isMatch = false
    let atteptCounts = 1
    for (let i = 1; i <= input.length - 1; i++) {
        for (let y = input[i].length - 1; y >= 0; y--) {
            // console.log(input[i][y])
            //console.log(userName[index]);
            if (input[i][y] != userName[index]) {
                if (atteptCounts == 4) {
                    return console.log(`User ${userName} blocked!`)

                } else { atteptCounts++ }
                console.log('Incorrect password. Try again.')
                isMatch = false

                break
            } else {
                isMatch = true
                index++
            }

        }

        if (isMatch) {
            return console.log(`User ${userName} logged in.`)
        }
        index = 0

    }

}
logIn(['Acer','login','go','let me in','recA'])