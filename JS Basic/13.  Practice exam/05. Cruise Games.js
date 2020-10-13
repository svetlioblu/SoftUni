function cruiseGames(input) {
    let playerName = input.shift()
    let gamesCount = Number(input.shift())
    let gameName = input.shift()
    let pointsCount = Number(input.shift())
    let volleyballPoints = 0
    let volleyballGames = 0
    let tennisPoints = 0
    let tennisGames = 0
    let badminTonpoints = 0
    let badmintonGames = 0
    let sum = 0
    let averageScore = 0

    for (let i = 0; i < gamesCount; i++) {
        switch (gameName) {
            case 'volleyball':
                sum += pointsCount + (pointsCount * 0.07)
                volleyballPoints += pointsCount + (pointsCount * 0.07)
                volleyballGames++
                break
            case 'tennis':
                sum += pointsCount + (pointsCount * 0.05)
                tennisPoints += pointsCount + (pointsCount * 0.05)
                tennisGames++
                break
            case 'badminton':
                sum += pointsCount + (pointsCount * 0.02)
                badminTonpoints += pointsCount + (pointsCount * 0.02)
                badmintonGames++
                break
        }
        gameName = input.shift()
        pointsCount = Number(input.shift())
    }
    let avarageVolleyball = Math.floor(volleyballPoints / volleyballGames)
    let avarageTennis = Math.floor(tennisPoints / tennisGames)
    let avarageBadminton = Math.floor(badminTonpoints / badmintonGames)
    averageScore = (sum / gamesCount)
    if (averageScore >= 75 && avarageVolleyball >= 75 && avarageTennis >= 75 && avarageBadminton >= 75) {
        console.log(`Congratulations, ${playerName}! You won the cruise games with ${Math.floor(sum)} points.`)
    } else {
        console.log(`Sorry, ${playerName}, you lost. Your points are only ${Math.floor(sum)}.`)
    }
}
cruiseGames([
'Ivan',
'7',
'volleyball',
'70',
'tennis',
'100',
'badminton',
'64',
'volleyball',
'125',
'tennis',
'62',
'tennis',
'72',
'badminton',
'87',    
])