const _ = require('lodash');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var randomNum = (min, max) => {
    return min + Math.floor(Math.random() * ((max + 1) - min));
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var makeCalendarDays = () => {
    var calendarDays = [];
    _each(monthsDays, (monthDays) => {
        for(var i = 1; i <= monthDays; i++) {
            calendarDays.push(i);
        }
    })
    return calendarDays;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var checkWhichMonth = function (acum) {


//   var month;
//   if (acum < 30) {
//    month = '04'; //April
//   } else if (acum >= 30 && acum <= 60) {
//   month = '05'; //May
//   } else if (acum >= 61 && acum <= 90 ) {
//     month = '06'; //June
//   } else if (acum >= 91 && acum <= 121 ) {
//     month = '07';  //July
//   }
//   return month;
}

var generateBookingsPerListing = (id, listingId) => {
    var bookingsDataForListing = '';
    var acum = 0;

    var nights = randomNum(2, 5);
    
    var rangeInBetween = randomNum(4, 12);
    
    var guests = randomNum(1, 2);

    var startingPoint = rangeInBetween + acum;

    var start = arr[startingPoint];
    
    var end = arr[nights + startingPoint];
   

    var startMonth = checkWhichMonth(startingPoint);
    var checkInDate = `${startMonth}-${start}`;

    var endMonth = checkWhichMonth(days + startingPoint);
    var checkOutDate =  `${endMonth}-${end}`;

    acum = nights + startingPoint;

    var startMonthSliced = startMonth.slice(0, 2);
    
    bookingsDataForListing += `${id},${listingId},${nights},"${startMonthSliced}","${checkInDate}","${checkOutDate}",${guests},0,0\r\n`;

    return bookingsDataForListing;
}

var generateBookings = () => {
    var calendarDays = makeCalendarDays();
    var bookingsData = '';
    var id = 0;
    for (var i = 1; i <= 100; i++) {
        for (var k = 0; k < randomNum(0, 10); k++) {
            id++;
            bookingsData += generateBookingsPerListing(id, i + 10000);
        }
    }

    return bookingsData;
};


