var knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "senha",
    database: "questionario",
  },
});
module.exports = knex;
