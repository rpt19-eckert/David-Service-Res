var pool = require('./');

var getListing = (listingId) => {
    return pool.query(`SELECT * FROM listings WHERE listingId = ${listingId}`)
}

var getListingBookings = (listingId) => {
    return pool.query(`SELECT * FROM bookings WHERE listingId = ${listingId}`)
}

module.exports = {
    getListing,
    getListingBookings
}
