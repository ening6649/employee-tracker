const mysql = require('mysql2');


const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'wildrose',
  database: 'department'
});

module.exports = db;

