function arrayManipulator(arrOne, arrTwo) {
    let myArr = arrOne.slice()
    let commands = arrTwo.slice()
    for (let currentCommand of commands) {
        currentCommand = currentCommand.split(' ')
        if (currentCommand.includes('add')) {
            myArr = add(currentCommand, myArr)

        } else if (currentCommand.includes('addMany')) {

            myArr = addMany(currentCommand, myArr)

        } else if (currentCommand.includes('contains')) {
            console.log(myArr.indexOf(Number(currentCommand[1])))
        } else if (currentCommand.includes('remove')) {
            myArr = remove(currentCommand, myArr)
        } else if (currentCommand.includes('shift')) {
            myArr = shift(currentCommand, myArr)

        } else if (currentCommand.includes('sumPairs')) {
            myArr = sumPars(myArr)
        } else if (currentCommand.includes('print')) {
            return myArr
        }
    }
    return myArr
    function add(element, arr) {
        arr.splice(Number(element[1]), 0, Number(element[2]))
        return arr
    }

    function addMany(addManyCommand, arr) {
        addManyCommand.shift()
        addManyCommand = addManyCommand.map(Number)
        let index = addManyCommand.shift()
        addManyCommand.reverse().map(x => arr.splice(index, 0, x))
        return arr
    }
    function remove(element, arr) {
        let index = Number(element[1])
        arr.splice(index, 1)
        return arr
    }
    function shift(element, arr) {
        let position = Number(element[1])
        let index = 0
        while (index < position) {
            let currentNUmber = arr.shift()
            arr.push(currentNUmber)
            index++
        }
        return arr
    }
    function sumPars(arr) {
        let result = []
        for (let i = 0; i < arr.length; i += 2) {
            result.push(arr[i] + arr[i + 1])

        }
        Number.isNaN(result[result.length - 1]) ? result[result.length - 1] = arr[arr.length - 1] : false
        return result
    }
}
console.log(arrayManipulator([1, 2, 4, 5, 6, 7],
    ["add 1 8", "contains 1", "contains -3", "print"]

))