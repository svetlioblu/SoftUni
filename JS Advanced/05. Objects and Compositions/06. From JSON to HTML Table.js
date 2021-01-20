function fromJSONtoHTML(params) {
    let result = '<table>\n   '
    let obj = JSON.parse(params)
    let headers = Object.keys(obj[0])
        .map(el => {
            return `<th>${el}</th>`
        }).join('').replace(/\s/g,'')
       
    result += `<tr>${headers}</tr>\n   `

    obj.forEach((el, i) => {
        let tableRow = Object.values(el).map(x => {
            return `<td>${x}</td>`
        }).join('').replace(/\s/g,'')
        
        if (obj.length - 1 === i) {
            result += `<tr>${tableRow}</tr>\n`
        } else {
            result += `<tr>${tableRow}</tr>\n   `
        }
    })

    return result + '</table>'
}

console.log(fromJSONtoHTML('[{"Name":"Pesho","Score":4," Grade":8},{"Name":"Gosho","Score":5," Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]'))