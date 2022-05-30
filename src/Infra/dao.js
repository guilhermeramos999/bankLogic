const dotenv = require('dotenv').config()
const sql = require('mysql2')

const conn = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
})

module.exports = conn;