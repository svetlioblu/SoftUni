function extract(content) {
    let extract = document.getElementById(content).textContent
    let reg = /\((.+?)\)/g
    let match = reg.exec(extract)
    let result = []
    while (match) {
        result.push(match[1])
        match = reg.exec(extract)
    }
    return result.join('; ')
}