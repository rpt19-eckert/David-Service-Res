const fs = require('fs');
const generateListings = require('./generate_listings');
const listings = generateListings();

fs.writeFileSync(__dirname + '/listings.txt', listings);
