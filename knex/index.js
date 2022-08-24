const express = require('express')
const app = express()
// import {playerModel} from './models/jugadorModel'
const playerModel = require('./models/jugadorModel')
const positionModel = require('./models/posicionModel')

// decodificacion larga archivos : corta 
//es extended true cuando queremos recibir archivos
app.use(express.urlencoded({ extended: false }))//nos permite recibir archivos middlewarre 
// trabajar con  datos json
app.use(express.json())

app.get('/jugador', async (_, res) => {
    let result = await playerModel.getAllPlayer()
    console.log(result)
    res.send(result)

})
app.post('/posicion', async (req, res) => {
    const position = req.body
    console.log(position)
    let result = await positionModel.setPosition(position)
    res.send(result)

})
app.get('/posicion/:id', async (req, res) => {
    const id = req.params.id
    let result = await positionModel.getPositionById(id)
    console.log(result)
    res.send(result)

})

app.get('/jugador-por-posicion', async (_, res) => {
    let result = await playerModel.getAllPlayerByPosition()
    console.log(result)
    res.send(result)

})



app.listen(3000, () => console.log("server on "))