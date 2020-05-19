const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'reservation_service',
    password: 'pw',
    port: 5432
})

module.exports = pool;