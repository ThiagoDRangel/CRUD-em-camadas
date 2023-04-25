const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'database',
  user: 'root',
  password: 'password',
  port: '3306',
  database: 'slido_db',
});

module.exports = connection;