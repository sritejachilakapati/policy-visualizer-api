require('dotenv').config();
const sql = require('mssql');

const {SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER} = process.env;
const sqlEncrypt = process.env.SQL_ENCRYPT === 'true';
const sqlPort = parseInt(process.env.SQL_PORT);

const sqlConfig = {
  server: SQL_SERVER,
  port: sqlPort,
  user: SQL_USER,
  password: SQL_PASSWORD,
  database: SQL_DATABASE,
  connectionTimeout: 120000,
  requestTimeout: 120000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: sqlEncrypt,
    enableArithAbort: true,
  },
}

console.log(sqlConfig);

const poolPromise = new sql.ConnectionPool(sqlConfig).connect()
                           .then(pool => (pool))
                          .catch(err => {throw err;})

module.exports = {
  poolPromise: poolPromise
};
