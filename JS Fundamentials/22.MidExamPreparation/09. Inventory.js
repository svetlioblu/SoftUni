function inventory(input) {
    let collection = input.shift().split(', ')

    for (let line of input) {
        if (line === 'Craft!') {
            break
        }
        let [action, item] = line.split(` - `)
        switch (action) {
            case 'Collect':
                if (!collection.includes(item)) {
                    collection.push(item)
                } else {
                    continue
                }
                break
            case 'Drop':
                if (collection.includes(item)) {
                    collection.splice(collection.indexOf(item), 1)
                } else {
                    continue
                }
                break
            case 'Combine Items':
                let [oldItem, newItem] = item.split(':')
                if (collection.includes(oldItem)) {
                    let indexOldItem = collection.indexOf(oldItem) + 1
                    collection.splice(indexOldItem, 0, newItem)
                } else {
                    continue
                }
                break
            case 'Renew':
                if (collection.includes(item)) {
                    let temp = item
                    collection = collection.filter(x => x != item)
                    collection.push(temp)
                } else {
                    continue
                }
                break
        }

    }
    console.log(collection.join(', '))

}
inventory([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ])