function pianist(input) {
    let n = Number(input.shift())
    let songsCollection = {}
    let actions = {
        Add(piece, composer, key) {
            if (!songsCollection.hasOwnProperty(piece)) {
                songsCollection[piece] = [composer, key]
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            } else {
                console.log(`${piece} is already in the collection!`)
            }
        },
        Remove(piece) {
            if (!songsCollection.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            } else {
                console.log(`Successfully removed ${piece}!`)
                delete songsCollection[piece]
            }
        },
        ChangeKey(piece, newKey) {
            if (!songsCollection.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            } else {
                songsCollection[piece][1] = newKey
                console.log(`Changed the key of ${piece} to ${newKey}!`)
            }
        }
    }
    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input.shift().split('|')
        if (!songsCollection.hasOwnProperty(piece)) {
            songsCollection[piece] = [composer, key]
        }
    }
    let line = input.shift()
    while (line != 'Stop') {
        let [action, piece, composer, key] = line.split('|')
        actions[action](piece, composer, key)
        line = input.shift()
    }
    let sorted = Object.entries(songsCollection).sort(sortedSongs)
    for (let line of sorted) {
        console.log(`${line[0]} -> Composer: ${line[1][0]}, Key: ${line[1][1]}`)
    }
   
    function sortedSongs([nameA, paramsA], [nameB, paramsB]) {
        return nameA.localeCompare(nameB) || paramsA[0].localeCompare(paramsB[0])
    }
}
pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  
)