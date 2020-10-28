function addAndRemove(arr) {
    let result = []
    let sum = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'remove') {
            result.pop()
            //arr.pop()
            sum++
        } else {
            result.push(sum)
            sum++
        }

    }
    if (result.length === 0) {
        console.log('Empty')

    } else {

        console.log(result.join(' '))
    }

}
addAndRemove(['add', 'add', 'remove', 'add', 'add'])