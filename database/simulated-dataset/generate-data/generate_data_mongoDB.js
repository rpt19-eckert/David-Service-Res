const generateListings = require('./generate_listings');
const generateBookings = require('./generate_bookings');

const num = 10000000;
generateListings(num, 'mongoDB');
generateBookings(num, 'mongoDB');
