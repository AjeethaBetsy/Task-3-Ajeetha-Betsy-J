// db.js
// This file is responsible for creating a connection pool to our MySQL database.
// A "pool" is better than a single connection because it can handle
// multiple requests at the same time without crashing the server.

const mysql = require('mysql2');
require('dotenv').config(); // loads the values from our .env file

const taskDatabasePool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// We use .promise() so we can use async/await syntax later,
// instead of older callback-style code.
const taskDb = taskDatabasePool.promise();

module.exports = taskDb;