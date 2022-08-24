const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : '',
      database : 'jugadores'
    }
  });

  module.exports = knex