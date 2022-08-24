// const env = process.env.NODE.ENV

// const knex_file = require('./knexfile')
// const knex = require('knex')

// const knexInstance = knex(knex_file[env]) //es lo mimp que hacer knex_file.env 
// //donde env puede ser production ,stagging development 

// module.exports =knexInstance
//parte de mi server pgadmin postgres
const knex = require('knex')
({
    client: 'pg',
    connection: {
      host : process.env.HOST_PG,
      port : 5432,
      user : process.env.USER_PG,
      password : process.env.PASSWORD ,
      database : process.env.DATABASE_PG
    }
  });
  module.exports = knex