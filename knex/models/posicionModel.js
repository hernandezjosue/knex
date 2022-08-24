const knex = require('../bd')

const getAllPosition = async ()=>{
    try {
        let result = await knex('posicion').select('*')
        return result
    } catch (error) {
        console.log(error)
        
    }
}


const setPosition = async (posicion)=>{

    try {
        let result = await knex('posicion').insert(posicion)
        return result
    } catch (error) {
        console.log(error)
        
    }
}

const getPositionById = async (id)=>{

    try {
        let result = await knex('posicion').where('id_posicion',id)
        return result
    } catch (error) {
        console.log(error)
        
    }
}

module.exports={
    getAllPosition,
    setPosition,
    getPositionById
}