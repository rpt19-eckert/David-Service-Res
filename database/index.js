const mysql = require('mysql');
const Promise = require('bluebird');
const mysqlConfig = require('./config.js');


var db = mysql.createConnection(mysqlConfig);

db = Promise.promisifyAll(db);

module.exports = db;