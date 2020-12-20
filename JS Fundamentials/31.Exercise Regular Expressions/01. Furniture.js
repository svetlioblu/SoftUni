function furniture(input) {
    let furniture = input.shift()
    let total = 0
    console.log(`Bought furniture:`)
    while (furniture != 'Purchase') {
        //move pattern into the loop since using exec
        let pattern = />>([a-zA-Z]+)<<(\d+(?:\.\d+)?)!(\d+)/g
        let match = pattern.exec(furniture)
        if (match) {
            let price = Number(match[2])
            let quantity = Number(match[3])

            total += price * quantity
            console.log(match[1])
        }

        furniture = input.shift()
    }
    console.log(`Total money spend: ${total.toFixed(2)}`)
}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])