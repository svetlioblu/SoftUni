function solve() {
    let check = document.getElementsByTagName('button')[0]
    let clear = document.getElementsByTagName('button')[1]
    let cells = document.querySelectorAll('input[type="number"]')
    check.addEventListener('click', onClickCheck)
    let isWin = true
    function onClickCheck() {
        let matrix = []
        let temp = []

        Array.from(cells).forEach((el, i) => {
            if (el.value == '') {
                //to do
            } else if (i % Math.round(Math.sqrt(cells.length)) == 0 && i != 0) {
                matrix.push(temp.slice())
                temp = []
            }
            temp.push(Number(el.value))
        })
        matrix.push(temp)
        for (let i = 1; i < matrix.length; i++) {
            let set = new Set(matrix[i])
            let checkEquals = [...set].length
            if (checkEquals < matrix[i].length) {
                isWin = false
            }

            let firstRow = matrix[0].reduce((a, b) => a + b)
            if (matrix[i].reduce((a, b) => a + b) != firstRow) {
                isWin = false
            }
        }

        let transMatrix = matrix[0].map((_, colindex) => matrix.map(row => row[colindex]))

        for (let i = 1; i < transMatrix.length; i++) {
            let set = new Set(matrix[i])
            let checkEquals = [...set].length
            if (checkEquals < matrix[i].length) {
                isWin = false
            }
            let firstRow = transMatrix[0].reduce((a, b) => a + b)
            if (transMatrix[i].reduce((a, b) => a + b) != firstRow) {
                isWin = false
            }
        }
    }
    if (isWin) {

    }
}