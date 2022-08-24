const express = require('express') 
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT =process.env.PORT || 3000 //variable de entorno 
const knex = require('./knexConfig')

// toda la conf de mi bd console.log(knex.client.connectionSettings)
const router = require('./routes')
// decodificacion larga archivos : corta 
//es extended true cuando queremos recibir archivos
app.use(express.urlencoded({ extended: false }))//nos permite recibir archivos middlewarre 
// trabajar con  datos json
app.use(express.json())

app.get('/',(req, res)=> {
 
    res.status(200).send('hola bby' )
})
app.use('/api/v1',router)

app.listen(PORT, () => console.log(`string text ${PORT} string text`))