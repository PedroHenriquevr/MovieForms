var knex = require('knex')({
  client: 'mysql',
  connection: {
      host : 'localhost',      
      user : 'root',       
      password : 'senha',
      database : 'todo'       
   }
});
module.exports = knex