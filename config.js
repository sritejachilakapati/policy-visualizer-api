require('dotenv').config();

const {PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER, SQL_PORT} = process.env;
const sqlEncrypt = process.env.SQL_ENCRYPT === 'true';

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  sql: {
    server: SQL_SERVER,
    port: SQL_PORT,
    user: SQL_USER,
    password: SQL_PASSWORD,
    database: SQL_DATABASE,
    options: {
      encrypt: sqlEncrypt,
      enableArithAbort: true
    },
  },
};
