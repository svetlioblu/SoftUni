function makeADictionary(arr) {
    let dictionary = {}
    let arrToSort
    let dictionarySorted = {}

    for (let term of arr) {
        term = JSON.parse(term)

        for (let key of Object.keys(term)) {
            dictionary[key] = term[key]
        }

    }
    arrToSort = Object.entries(dictionary)
    arrToSort = arrToSort.sort((a, b) => a[0].localeCompare(b[0]))

    for (let key of arrToSort) {
        dictionarySorted[key[0]] = key[1]
    }
    for (let key of Object.keys(dictionarySorted)) {
        console.log(`Term: ${key} => Definition: ${dictionarySorted[key]}`)

    }

}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    
)