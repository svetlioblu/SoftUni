function rotatearray(arr) {
    let rotateCount = +arr.pop()
    if (Number.isNaN(rotateCount)) {
        return console.log('Empty');

    }
    while (rotateCount > 0) {
        let currennt = arr.pop()
        arr.unshift(currennt)
        rotateCount--
    }
    console.log(arr.join(' '));
}
rotatearray(['Banana', 'Orange', 'Coconut'])