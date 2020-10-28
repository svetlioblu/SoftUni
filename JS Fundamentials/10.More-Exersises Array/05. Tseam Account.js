function tseamAccount(arr) {
    let accountGames = arr[0].split(' ')
    let index = 1
    while (arr[index] !== 'Play!') {
        let currentGame = arr[index].split(' ')
        let action = currentGame[0]
        let game = currentGame[1]
        switch (action) {
            case 'Install':
                if (accountGames.includes(game) === false) {
                    accountGames.push(game)
                }
                break
            case 'Uninstall':
                if (accountGames.includes(game)) {
                    let gameIndex = accountGames.indexOf(game)
                    accountGames.splice(gameIndex, 1)
                }
                break
            case 'Update':
                if (accountGames.includes(game)) {
                    let tempGameIndex = accountGames.indexOf(game)
                    let saveGame = accountGames.splice(tempGameIndex, 1).toString()
                    accountGames.push(saveGame)
                }
                break
            case 'Expansion':
                let temp = game.split('-')
                if (accountGames.includes(temp[0])) {
                    let savedGameIndex = accountGames.indexOf(temp[0])
                    temp = temp.join(':')
                    accountGames.splice(savedGameIndex + 1, 0, temp)
                }
        }
        index++
    }
    console.log(accountGames.join(' '))

}
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
)