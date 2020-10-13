function examCategories(arg1, arg2, arg3) {
    let complexity = Number(arg1)
    let deviation = Number(arg2)
    let pages = Number(arg3)
    if (complexity >= 80 && deviation >= 80 && pages >= 8) {
        console.log('Legacy')

    } else if (complexity >= 80 && deviation <= 10) {
        console.log('Master')

    } else if (deviation >= 50 && pages >= 2) {
        console.log('Hard')

    } else if (complexity <= 30 && pages <= 1) {
        console.log('Easy')

    } else if (complexity <= 10) {
        console.log('Elementary')

    } else {
        console.log('Regular')

    }

}
examCategories('80', '40', '3')