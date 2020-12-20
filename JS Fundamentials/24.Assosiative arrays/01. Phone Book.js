function phoneBook(input) {
    let catalogue = {}

    for (let line of input) {
        let [name, number] = line.split(' ')
        catalogue[name] = number
    }
    for(let row in catalogue) {
        console.log(`${row} -> ${catalogue[row]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)
