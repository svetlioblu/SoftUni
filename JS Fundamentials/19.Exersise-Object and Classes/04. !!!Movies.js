function movies(arr) {


    let tempArr = arr.slice()
    let collectResults = []
    let indexDirector = 0
    let indexDate = 0
    let movie = ''

    for (let token of arr) {
        let currentObj = {}
        let movieToCheck = takeMovieNameFromString(token)
        movie = movieToCheck
        let checkAllInfo = tempArr.filter((x) => x.includes(movieToCheck)).length
        if (checkAllInfo >= 3) {
            let director = tempArr.filter(takeIndexAndDirector)
                .join('')
                .replace(/^(.*?)directedBy /, '')

            let date = tempArr.filter(takeIndexAndDate)
                .join('')
                .replace(/^(.*?)onDate /, '')
            currentObj.name = movieToCheck
            if (indexDirector < indexDate) {
                currentObj.director = director
                currentObj.date = date
            } else {
                currentObj.date = date
                currentObj.director = director
            }
            collectResults.push(currentObj)
            tempArr = tempArr.filter(x => !x.includes(movieToCheck))
        }

    }
    console.log(collectResults.map(x => JSON.stringify(x)).join('\n'))



    function takeMovieNameFromString(token) {
        let result = ''
        if (token.includes('addMovie')) {
            result = token.replace('addMovie ', '')
        } else if (token.includes('directedBy')) {
            let reg = /^.*(?=( directedBy))/
            result = token.match(reg)[0]
        } else if (token.includes('onDate')) {
            let reg = /^.*(?=( onDate))/
            result = token.match(reg)[0]
        }
        return result
    }
    function takeIndexAndDirector(x, i) {
        if (x.includes(movie) && x.includes(`directedBy`)) {
            indexDirector = i
            return true
        }
    }
    function takeIndexAndDate(x, i) {
        if (x.includes(movie) && x.includes(`onDate`)) {
            indexDate = i
            return true
        }
    }


}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)