function searchForAnumber(arrOne, arrTwo) {
    let elementsToTake = arrTwo.shift()
    let elementsToDelete = arrTwo.shift()
    let numberSearch = arrTwo.shift()
    let myArr = arrOne.slice(0, elementsToTake + 1)
    myArr.splice(0, elementsToDelete)


    let number = myArr.filter(x => x === numberSearch)


    return `Number ${numberSearch} occurs ${number.length} times.`

}
console.log(searchForAnumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
))