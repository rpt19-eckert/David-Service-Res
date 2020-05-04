const fs = require('fs');
const generateListings = require('./generate_listings');
const generateBookings = require('./generate_bookings');

const listings = generateListings(10000000);
// const bookings = generateBookings();

fs.writeFileSync(__dirname + '/listings.txt', listings);
//fs.writeFileSync(__dirname + '/bookings.txt', bookings);
