const Cube = require('../models/Cube')


const create = (name,description,imageUrl, difficulty) => {
    return Cube.create({name,description,imageUrl,difficulty})
}

const getAll = () => {
    return Cube.find().lean()
}


const cubeService = {
    create,
    getAll
}

module.exports = cubeService