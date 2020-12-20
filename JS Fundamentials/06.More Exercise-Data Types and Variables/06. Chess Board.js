function chessBoard(n) {

    let currentColour = 'black'

    console.log('<div class="chessboard">')
    for (let i = 1; i <= n; i++) {
        console.log('  <div>')
        for (let j = 1; j <= n; j++) {
            console.log(`    <span class="${currentColour}"></span>`)

            if (currentColour === 'white') {
                currentColour = 'black'
            } else {
                currentColour = 'white'
            }
        }

        console.log('  </div>')
        if (i % 2 !== 0) {
            currentColour = 'white'
        } else {
            currentColour = 'black'
        }

    }
    console.log('</div>')

}
chessBoard(4)