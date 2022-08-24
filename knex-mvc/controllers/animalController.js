const { Animal } = require('../models')
const create = async(req,res) => {
    try {
        const newAnimal = req.body
        const response = await Animal.create(newAnimal)
        console.log(response)
        res.status(201).send(response)
    } catch (error) {
        res.status(409).send(error)
    }
}

const getAllAnimals = async (_, res) => {

    try {
        const response = await Animal.findAll()
        res.status(201).send(response)
    } catch (error) {
        res.status(409).send(error)
    }
}
const getAnimalById = async (req, res) => {
    const id= req.params.idAnimal
    try {
        const response = await Animal.findById(id)
        res.status(201).send(response)
    } catch (error) {
        res.status(409).send(error)
    }
}


module.exports = {
    create,
    getAllAnimals,
    getAnimalById,
}