const uniqId = require('uniqid')

//if da data is saved in variable will be lost on server restart
const cubes = []

//named export
exports.getAll = () => cubes.slice()
exports.getOne = (cubeId) => cubes.slice().find(x => x.id === cubeId)

exports.create = (cubeData) => {
    const newCube = {
        id: uniqId(),
        ...cubeData
    }
    cubes.push(newCube)

    return newCube
}
