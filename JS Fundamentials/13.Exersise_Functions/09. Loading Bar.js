function loadingBar(num) {
    let bar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
    let procentage = num
    let index = 0

    while (procentage > 0) {
        bar[index] = '%'

        procentage -= 10
        index++
    }
    bar = bar.join('')
    if (num !== 100) {
        return console.log(`${num}% [${bar}]\nStill loading... `)
    } else {
        return console.log(`100% Complete!\n[${bar}]`)
        
    }
}
loadingBar(100)