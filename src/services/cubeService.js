const Cube = require('../models/Cube')


const create = (name,description,imageUrl, difficulty) => {
    return Cube.create({name,description,imageUrl,difficulty})
}

const getAll = () => {
    return Cube.find().lean()
}

const findById = (id) => {
    return Cube.findById(id)
}


const cubeService = {
    create,
    getAll,
    findById
}

module.exports = cubeService