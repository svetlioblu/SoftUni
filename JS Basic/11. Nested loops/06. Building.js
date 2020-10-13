function building(input) {
    let floorCount = Number(input[0])
    let roomsCount = Number(input[1])
    let result = ''

    for (let i = floorCount; i > 0; i--) {
        result = ''
        for (let y = 0; y < roomsCount; y++) {
            if (i === floorCount) {
                result += `L${i}${y} `
            } else {
                if (i % 2 === 0) {
                    result += `O${i}${y} `
                } else {
                    result += `A${i}${y} `

                }

            }
        }
        console.log(result)
    }
}
building([
    '9',
    '5'
])