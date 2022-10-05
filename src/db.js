const { Pool } = require("pg");
const { env } = require("./config");

const db = new Pool({
  user: env.user,
  password: env.password,
  host: env.host,
  port: env.port,
  database: env.database,
});

module.exports = db;
