const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const _ = require('lodash');

const db = mysql.createConnection(mysqlConfig);

const getListingInfo = (listingId, callback) => {
  
  var queryStr = `
  SELECT * FROM listingItems 
  WHERE listingId = ${listingId} `;
  
  db.query(queryStr, (err, results) => {
    if (err) {
      callback(err, null);
      console.log('err from db')
    } else {
      callback(null, results);
      console.log(results)
    }
  })
}

const getListingBookings = (listingId, callback) => {
  
  var queryStr = `
  SELECT * FROM bookings 
  WHERE listingId = ${listingId} `;
  
  db.query(queryStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

const postBooking = (newBooking, callback) => {

  var columns = '', values = '';

  _.each(newBooking, (val, key) => {
    columns+= `${key},`;
    values+= `${typeof val === 'string' ? `'${val}'` : val},`;
  })
  columns = columns.substring(0, columns.length - 1);
  values = values.substring(0, values.length - 1);
  
  var queryStr = `
  INSERT INTO BOOKINGS (${columns})
  VALUES(${values}) `;
  
    db.query(queryStr, (err, results) => {
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, results);
      }
  })

}

const updateBooking = (bookingId, updatedBooking, callback) => {

  var keyVals = '';
 _.each(updatedBooking, (val, key) => {
    keyVals+= `${key}=${typeof val === 'string' ? `'${val}'` : val},`;
  })
  keyVals = keyVals.substring(0, keyVals.length - 1);
  
  var queryStr = `
  UPDATE BOOKINGS 
   SET ${keyVals}
   WHERE id = ${bookingId}
   `;
  
   db.query(queryStr, (err, results) => {
    if (err) {
      console.log(err)
      callback(err, null);
    } else {
      callback(null, results);
    }
  })

}

const deleteBooking = (bookingId, callback) => {

  var queryStr = `
  DELETE FROM bookings
  WHERE id = ${bookingId}
  `;
  
  db.query(queryStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })

}


module.exports = {
  db, 
  getListingInfo, 
  getListingBookings, 
  postBooking, 
  updateBooking,
  deleteBooking
}