const db = require('../database');
const _ = require('lodash');
//==================================================================
const getListing = (listingId) => {
  var queryStr = `
  SELECT * FROM listingItems 
  WHERE listingId = ${listingId} `;
  
  return db.queryAsync(queryStr);
}
//==================================================================
const getListingBookings = (listingId) => {
  var queryStr = `
  SELECT * FROM bookings 
  WHERE listingId = ${listingId} `;
  
  return db.queryAsync(queryStr);
}
//==================================================================
const postBooking = (newBooking) => {
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
  
  return db.queryAsync(queryStr);
}
//==================================================================
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
  
   return db.queryAsync(queryStr);
}
//==================================================================
const deleteBooking = (bookingId, callback) => {

  var queryStr = `
  DELETE FROM bookings
  WHERE id = ${bookingId}
  `;
  
  return db.queryAsync(queryStr);

}

module.exports = {
  db, 
  getListing, 
  getListingBookings, 
  postBooking, 
  updateBooking,
  deleteBooking
}