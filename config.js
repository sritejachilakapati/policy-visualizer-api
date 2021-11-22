require('dotenv').config();

const {PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER} = process.env;
const sqlEncrypt = process.env.SQL_ENCRYPT === 'true';
const sqlPort = parseInt(process.env.SQL_PORT);

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  sql: {
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
  },
};
