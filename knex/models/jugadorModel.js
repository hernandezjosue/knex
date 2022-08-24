const knex = require('../bd')

const getAllPlayer = async ()=>{
    try {
        let result = await knex('jugador').select('*')
        return result
    } catch (error) {
        console.log(error)
        
    }
}
const getAllPlayerByPosition = async ()=>{
    try {
        let result = await knex('jugador_por_posicion').select('*')
        return result
    } catch (error) {
        console.log(error)
        
    }
}
module.exports={
    getAllPlayer,
    getAllPlayerByPosition
}