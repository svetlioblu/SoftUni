function colorize() {
    let node = Array.from(document.querySelectorAll('table tr:nth-child(2n+2)'))
    node.forEach(el => {
        el.style.backgroundColor = 'Teal'
    })
}