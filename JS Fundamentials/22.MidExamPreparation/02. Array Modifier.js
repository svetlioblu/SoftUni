function arrModifyer(input) {
    let arr = input.shift().split(' ').map(Number)
    let index = 0
    while (input[index] != 'end') {

        if (input[index].includes('swap')) {
            let [command, indexOne, indexTwo] = input[index].split(' ')
            let temp = arr[Number(indexOne)]
            arr.splice(indexOne, 1, arr[Number(indexTwo)])
            arr.splice(indexTwo, 1, temp)

        } else if (input[index].includes('multiply')) {
            let [command, indexOne, indexTwo] = input[index].split(' ')
            let multiply = arr[Number(indexOne)] * arr[Number(indexTwo)]
            arr.splice(indexOne, 1, multiply)
        } else if (input[index].includes('decrease')) {
            arr = arr.map(x => x - 1)
        }
        index++
    }

    console.log(arr.join(', '))

}
arrModifyer([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]  
)