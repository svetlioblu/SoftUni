function sum() {
    let cells = Array.from(document.querySelectorAll('table tr'))
    let result = 0
    for (let i = 1; i < cells.length - 1; i++) {

        result += Number(cells[i].lastChild.textContent)
    }
    document.getElementById('sum').textContent = result
}