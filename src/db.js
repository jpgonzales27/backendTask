const { Pool } = require("pg");

const db = new Pool({
  user: "postgres",
  password: "toor",
  host: "localhost",
  port: 5432,
  database: "taskdb",
});

module.exports = db;
