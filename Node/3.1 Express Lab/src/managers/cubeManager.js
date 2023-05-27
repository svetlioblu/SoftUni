//if da data is saved in variable will be lost on server restart
const cubes = []

//named export
exports.getAll = () => cubes.slice()

exports.create = (cubeData) => {
    const newCube = {
        id: cubes.length + 1,
        ...cubeData
    }
    cubes.push(newCube)
    return newCube
}
