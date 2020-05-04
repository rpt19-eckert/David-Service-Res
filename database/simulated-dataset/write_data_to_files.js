const fs = require('fs');
const generateListings = require('./generate_listings');
const generateBookings = require('./generate_bookings');
const listings = generateListings();

fs.writeFileSync(__dirname + '/listings.txt', listings);
