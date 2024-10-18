const mysql = require('mysql2');
require('dotenv').config();

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

const connection = mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    port: 3306, 
    user: "sql12738941",
    password: "41UFfeskid",
    database: "sql12738941"
    
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection error: ', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = connection;
