function muOnline(inputString) {
    let health = 100
    let bitcoins = 0
    let room = 0
    inputString = inputString.split('|')

    for (let line of inputString) {
        room += 1
        let [command, points] = line.split(' ')
        points = Number(points)
        switch (command) {
            case 'potion':
                if (health + points <= 100) {
                    health += points
                } else if (health < 100 && health + points > 100) {
                    points = Math.abs((health - 100))
                    health = 100
                } else {
                    health = 100
                }
                console.log(`You healed for ${points} hp.\nCurrent health: ${health} hp.`)
                break
            case 'chest':
                console.log(`You found ${points} bitcoins.`)
                bitcoins += points
                break
            default:
                health -= points
                if (health > 0) {
                    console.log(`You slayed ${command}.`)
                } else {
                    return console.log(`You died! Killed by ${command}.\nBest room: ${room}`)
                }
        }
    }
    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
    

}
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')