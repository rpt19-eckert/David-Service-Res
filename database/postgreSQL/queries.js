const pool = require('./');

const getListing = (listingId) => {
    var query = `SELECT * FROM listings WHERE listingId = ${listingId}`;
    return pool.query(query);
}

const getListingBookings = (listingId) => {
    var query = `SELECT * FROM bookings WHERE listingId = ${listingId}`;
    return pool.query(query);
}

const postBooking = (newBooking) => {
    var values = [];
    for (var key in newBooking) {
        values.push(newBooking[key]);
    }
    
    const query = {
        text: 'INSERT INTO bookings(listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
        values
    }

    return pool.query(query);
}

const updateBooking = (bookingId, updates) => {
    var keyVals = '';
    for(var key in updates) {
        var update = typeof updates[key] === 'string' ? `'${updates[key]}'`: updates[key];
        keyVals+= `${key} = ${update},`;
    }
    keyVals = keyVals.substring(0, keyVals.length - 1);

    var query = `UPDATE bookings SET ${keyVals} WHERE id=${bookingId}`;
    
    return pool.query(query);
}

const deleteBooking = (bookingId) => {
    var query = `DELETE FROM bookings WHERE id=${bookingId}`;
    return pool.query(query);
}

module.exports = {
    getListing,
    getListingBookings,
    postBooking,
    updateBooking,
    deleteBooking
}
