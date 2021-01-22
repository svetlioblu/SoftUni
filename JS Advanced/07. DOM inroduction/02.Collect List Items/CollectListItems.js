function extractText() {
    let elements = [...document.getElementsByTagName('li')]
    let target = document.getElementById('result')
    let result = ''
    elements.forEach(el => {
        result += `${el.textContent}\n`
    })
    target.value = result
}