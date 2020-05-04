const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    password: 'pw'
});

client.connect();


client
.query('SELECT NOW() as now')
.then(res => console.log(res.rows[0]))
.catch(e => console.error(e.stack));