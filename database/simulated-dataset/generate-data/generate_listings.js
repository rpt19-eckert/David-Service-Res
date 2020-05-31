const faker = require ('faker');
const fs = require('fs');
const appendFile = require('./appendFile');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var generateListingName = () => {
  var catchPhrase = faker.hacker.adjective()
  var bsAdjective = faker.hacker.noun()
  var adjective =faker.company.bsAdjective()
  var wordOne = catchPhrase[0].toUpperCase() + catchPhrase.slice(1)
  var wordTwo = bsAdjective[0].toUpperCase() + bsAdjective.slice(1)
  var wordThree = adjective[0].toUpperCase() + adjective.slice(1)

  var str = wordOne + '_' + wordTwo +'_' + wordThree + '_house'
  str = str.replace(/( |-)/g, '');
  return str;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var generateListings = (numOfListings) => {
  var weekend, pricePerNight, random, maxGuests;
  var listingData = 'listingId,listingName,pricePerNight,weekend,weekendPrice,maxGuests,tax\r\n';
 
  
  for (var i = 10001; i < 10001 + numOfListings; i++) {
    if( !((i - 10000) % 50000) ) console.log(i - 10000);
    listingName = generateListingName();
    
    pricePerNight = faker.commerce.price(100, 180.00, 2); 
    
    random = Math.floor(Math.random() * 10);
    weekend = random % 2 ? 1 : 0;
    
    maxGuests = Math.floor(Math.random() * 3 + 2);
    
    listingData += `${i},"${listingName}",${pricePerNight},${weekend},1.1,${maxGuests},1.12\r\n`;
    
    

    if (!(i % 250000)) {
      console.log('writing to listings file');
      appendFile('listings', listingData);
      listingData = '';
    }
    
  }

  appendFile('listings', listingData);
  console.log('finished writing to listings')
  return;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = generateListings;







