function houseParty(input) {
    let list = []
    let index = 1
    let isInList = false

    for (let element of input) {

        element = element.split(' ')
        let person = element[0]
        let isGoing = (element.length <= 3) ? true : false


        if (isGoing) {
            for (let i = index; i < input.length; i++) {
                let currentElement = input[i].split(' ')
                let currentPerson = currentElement[0]
                let currentIsGoing = (currentElement.length <= 3) ? true : false
                if (person === currentPerson && currentIsGoing) {
                    list.unshift(person)
                    list.unshift(`${person} is already in the list!`)
                    input.splice(i, 1)
                    isInList = true
                    break
                }
            }
            if (isInList) {

            } else { list.push(person) }
            isInList = false
            index++
        } else {

            if (list.includes(person)) {
                list.splice(list.indexOf(person, 1))
            } else { list.unshift(`${person} is not in the list!`) }

        }

    }
    return list.join('\n')
}
console.log(houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
))
