const mysql = require('mysql');
const mysqlConfig = require('./config.js');

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

const postBooking = (values, callback) => {

  var queryStr = `
  INSERT INTO BOOKINGS 
  VALUES(
    ${obj.id}, 
    ${obj.listingId}, 
    ${obj.nights}, 
    ${obj.month}, 
    ${obj.checkIn}, 
    ${obj.checkOut}, 
    ${obj.guests}, 
    ${obj.children}, 
    ${obj.infants}
    ) `;
  
    db.query(queryStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })

}

const updateBooking = (listingId, values, callback) => {

  var queryStr = `
  UPDATE BOOKINGS 
   SET 
   listingId = ${values.listingId},
   nights = ${values.nights},
   month = ${values.month},
   checkIn = ${values.checkIn},
   checkOut = ${values.checkOut},
   guests = ${values.guests},
   children = ${values.children},
   infants = ${values.infants}
   WHERE id = ${listingId}
   `
  
  
   db.query(queryStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })

}

const deleteBooking = (listingId, values, callback) => {

  var queryStr = `
  DELETE FROM bookings
  WHERE id = listingId
  `
  
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