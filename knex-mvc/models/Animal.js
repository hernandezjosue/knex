
const knex = require('../knexConfig')
const create = async (newAnimal) => {
    try {
        let response = await knex('animal').insert(newAnimal)
        return response
    } catch (error) {
        console.log(error)
    }
}

const findAll = async () => {
    try {
        let response = await knex('animal').select(['nombre']).from('animal')
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }

}
const findById = async (id) => {
    try {
        let response = await knex('animal').select(['*']).from('animal').where('id_animal', id)
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }

}
module.exports = {
    create,
    findAll,
    findById,
}