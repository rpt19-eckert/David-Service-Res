const _ = require('lodash');
const appendFile = require('./appendFile');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var randomNum = (min, max) => {
    return min + Math.floor(Math.random() * ((max + 1) - min));
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var dateBasedOnCalendarIdx = (acum) => {
    var accumulator = 0;
    var month = 0;
    var day = 0;
    _.each(monthsDays, (monthDays, idx) => {
        accumulator+= monthDays;
        month = idx + 1;
        if (acum <= accumulator) {
            month = month < 10 ? `0${month}` : `${month}`;
            day = acum - (accumulator - monthDays);
            return false;
        }
    })
    
    return `${month}-${day}`;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var generateBookingsForListing = (id, listingId, numOfBookings) => {
    var bookingData = '';
    var acum = 0;

    for (var i = 0; i < numOfBookings; i++) {
        var nights = randomNum(2, 5);
    
        var rangeInBetween = randomNum(9, 16);
        var start = rangeInBetween + acum;
        var end = nights + start
        var checkInDate = dateBasedOnCalendarIdx(start);
        var checkOutDate =  dateBasedOnCalendarIdx(end);
        
        var guests = randomNum(1, 2);
        var children = randomNum(0, 1);
        var infants = randomNum(0, 1);
        
        acum = end;

        var startMonthSliced = checkInDate.slice(0, 2);
        
        bookingData += `${id + i},${listingId},${nights},"${startMonthSliced}","${checkInDate}","${checkOutDate}",${guests},${children},${infants}\r\n`;
    }
    return bookingData;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var generateBookings = (numOfListings) => {
    var fileName = 'bookings1';
    var bookingsData = 'id,listingId,nights,month,checkIn,checkOut,guests,children,infants\r\n';
    
    var id = 1;
    var numOfBookings = 0;
    for (var i = 1; i <= numOfListings; i++) {
        if( !(i % 50000) ) console.log(i);
        
        numOfBookings = randomNum(2, 12);
        bookingsData += generateBookingsForListing(id, i + 10000, numOfBookings);
        id+= numOfBookings;
        
        if ( !(i % 10000) ) {
            console.log('writing to bookings file');
            appendFile(fileName, bookingsData);
            bookingsData = '';
            if (i === 2500000) {
                fileName = 'bookings2';
                bookingsData = 'id,listingId,nights,month,checkIn,checkOut,guests,children,infants\r\n';
            }
            if (i === 5000000) {
                fileName = 'bookings3';
                bookingsData = 'id,listingId,nights,month,checkIn,checkOut,guests,children,infants\r\n';
            }
            if (i === 7500000) {
                fileName = 'bookings4';
                bookingsData = 'id,listingId,nights,month,checkIn,checkOut,guests,children,infants\r\n';
            }
        };

        
    }
    
    appendFile(fileName, bookingsData);
    console.log('finished writing to bookings')

    return;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = generateBookings;