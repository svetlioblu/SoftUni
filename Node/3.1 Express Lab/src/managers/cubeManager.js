const uniqId = require('uniqid')

//if da data is saved in variable will be lost on server restart
const cubes = []

//named export
exports.getAll = (search, from, to) => {
    let result = cubes.slice()

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from))
    }
    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to))
    }

    return result
}
exports.getOne = (cubeId) => cubes.slice().find(x => x.id === cubeId)

exports.create = (cubeData) => {
    const newCube = {
        id: uniqId(),
        ...cubeData
    }
    cubes.push(newCube)

    return newCube
}
