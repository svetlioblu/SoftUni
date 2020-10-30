function charactersInRange(a, b) {
    let start = a.charCodeAt(0)
    let end = b.charCodeAt(0)

    if (start < end) {
        console.log(increment(start, end))
    } else {
        console.log(increment(end, start))
    }

    function increment(a, b) {
        let result = ''
        for (let i = a+1; i < b; i++) {
            result += String.fromCharCode(i) + ' '
        }
        return result
    }
   
}
charactersInRange('C',
'#'
)