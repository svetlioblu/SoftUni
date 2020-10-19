function dungeones(arr) {
    let health = 100
    let healed = 0
    let coins = 0
    let ifKilled = false
    let bestRoom = 1
    let roomsInArr = arr[0].split('|')

    for (let room of roomsInArr) {
        let roomPlot = room.split(' ')
        let interactionObject = roomPlot[0]
        let points = Number(roomPlot[1])
        if (interactionObject === 'potion') {
            if (health === 100) {
                console.log(`You healed for 0 hp.`)
                console.log(`Current health: ${health} hp.`)
            }
            else if (health + points >= 100) {
                healed = (health + points) - 100
                health = 100
                healed -= points
                console.log(`You healed for ${Math.abs(healed)} hp.`)
                console.log(`Current health: ${health} hp.`)
            } else {
                healed = points
                health += points
                console.log(`You healed for ${healed} hp.`)
                console.log(`Current health: ${health} hp.`)
            }
        } else if (interactionObject === 'chest') {
            coins += points
            console.log(`You found ${points} coins.`)

        } else {
            health -= points
            if (health > 0) {
                console.log(`You slayed ${interactionObject}.`)
            } else {
                console.log(`You died! Killed by ${interactionObject}.`)
                console.log(`Best room: ${bestRoom}`)
                ifKilled = true
                break
            }
        }
        bestRoom++

    }
    if (ifKilled) {
    } else {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`)
    }
}

dungeones(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])