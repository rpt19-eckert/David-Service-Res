const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'ec2-54-177-203-104.us-west-1.compute.amazonaws.com',
    database: 'reservation_service',
    password: 'pw',
    port: 5432
})

module.exports = pool;