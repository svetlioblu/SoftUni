function oldBooks(input) {
    let index = 0
    let i = 0
    let bookCheckCount = 0
    let bookToSearch = input[index]
    index++
    let libraryCapacity = Number(input[index])
    index++
    let bookToCheck = input[index]
    index++

    while (i < libraryCapacity) {

        if (bookToCheck === bookToSearch) {
            return console.log(`You checked ${bookCheckCount} books and found it.`)

        }
        bookCheckCount += 1
        bookToCheck = input[index]
        index++
        i++
    }

    console.log(`The book you search is not here!\nYou checked ${bookCheckCount} books.`)
}
oldBooks([
   'Bourne',
   '32',
   'True Story',
   'Forever',
   'More Space',
   'The Girl',
   'Spaceship',
   'Strongest',
   'Profit',
   'Tripple',
   'Stella',
   'The Matrix',
   'Bourne'   
])