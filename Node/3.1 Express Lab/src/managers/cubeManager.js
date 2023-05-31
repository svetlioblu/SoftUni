const uniqId = require('uniqid')

const Cube = require('../models/Cube')
//if da data is saved in variable will be lost on server restart


//named export
exports.getAll = async (search, from, to) => {
    const cubes = await Cube.find().lean()
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

exports.create = async (cubeData) => {
    const cube = new Cube(cubeData)
    await cube.save()
    return cube
}
