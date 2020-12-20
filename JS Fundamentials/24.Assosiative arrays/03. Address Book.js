function addressBook(input) {
    let addressCatalogue = {}

    for (let line of input) {
        let [name, adress] = line.split(':')
        addressCatalogue[name] = adress
    }

    let sorted = Object.entries(addressCatalogue).sort((a, b) => a[0].localeCompare(b[0]))

    for (let line of sorted) {
        
        console.log(`${line[0]} -> ${line[1]}`);
    }

}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)