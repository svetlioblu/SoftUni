function sequences(arr) {
    let obj = {}

    for (let line of arr) {
        line = JSON.parse(line)
            .sort((a, b) => b - a)
        line = JSON.stringify(line)
        obj[line] = true

    }


    obj = Object.keys(obj).sort((a, b) => JSON.parse(a).length - JSON.parse(b).length)

    obj.forEach(element => {
        element = JSON.parse(element).join(', ')
        console.log(`[${element}]`);
        
    })

}
sequences(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]

)