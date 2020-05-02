const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getListingInfo = (listingId, callback) => {
  var queryStr = `Select * from listingItems Where listingId=${listingId};`

  connection.query(queryStr, (err, results) => {
    if (err) {
      callback(err, null);
      console.log('err from db')
    } else {
      callback(null, results);
      ('success from db')
    }
  })
}

const getBookedDates = (listingId, callback) => {
  var queryStr = `Select * from bookings Where listingId=${listingId};`
  connection.query(queryStr, (err, results) => {
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
    );`
  
  connection.query(queryStr, (err, results) => {
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
   ;`
  
  
  connection.query(queryStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })

}


module.exports = {
  connection, getListingInfo, getBookedDates, postBooking, updateBooking
}