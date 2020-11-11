//answer passing judje
function movies(arr) {
    let myMovies = []

    for (let line of arr) {
        if (line.includes('addMovie')) {
            let obj = {}
            let currentmovie = line.substring(9)
            obj.name = currentmovie
            myMovies.push(obj)
        } else if (line.includes('directedBy')) {
            let [movie, director] = line.split(` directedBy `)
            myMovies.find(x => x.name === movie ? x.director = director : false)
        } else {
            let [movie, date] = line.split(` onDate `)
            myMovies.find(x => x.name === movie ? x.date = date : false)
        }

    }
    myMovies.map(x => {
        if (x.name && x.date && x.director) {
            console.log(JSON.stringify(x))
        }
        return
    })
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