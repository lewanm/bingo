require('dotenv').config()
const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    database: 'bingo',
    user: 'root',
    password: ''
    
    
});

module.exports = pool;
