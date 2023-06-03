const uniqId = require('uniqid')

const Cube = require('../models/Cube')
//if da data is saved in variable will be lost on server restart


//named export
exports.getAll = async (search, from, to) => {
    const cubes = await Cube.find().lean()
    let result = cubes.slice()

    //TODO: use mongoose to filter in db
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
// populate take all th ecube with his linked accessories
exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories')

exports.create = async (cubeData) => {
    const cube = new Cube(cubeData)
    await cube.save()
    return cube
}

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId)
    cube.accessories.push(accessoryId)

    return cube.save()
}
