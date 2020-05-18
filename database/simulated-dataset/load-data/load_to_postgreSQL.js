const { Client } = require('pg');
var client = new Client({
    user: 'postgres',
    password: 'pw'
});

client.connect();


client
.query('DROP DATABASE IF EXISTS reservation_service')
.then(() => {
    return client.query('CREATE DATABASE reservation_service');
})
.then(() => {
    console.log('Created database reservation_service');
    client.end();
    client = new Client({
        user: 'postgres',
        password: 'pw',
        database: 'reservation_service'
    })
    client.connect();

    return client.query(
        `CREATE TABLE listings (
            listingId SERIAL NOT NULL PRIMARY KEY,
            listingName VARCHAR(100),
            pricePerNight DECIMAL(5, 2) NOT NULL,
            weekend integer NOT NULL default 0,
            weekendPrice DECIMAL(3, 2) NOT NULL,
            maxGuests int NOT NULL,
            tax DECIMAL(3, 2) NOT NULL
        )`
    );

})
.then(() => {
    console.log('Created table listings');
    return client.query(
        `CREATE TABLE bookings (
            id SERIAL NOT NULL PRIMARY KEY,
            listingId int,
            nights int,
            month VARCHAR(4),
            checkIn VARCHAR(10),
            checkOut VARCHAR(10),
            guests int,
            children int default 0,
            infants int default 0
        )`
    );
})
.then(() => {
    console.log('Created table bookings');
    
    return client.query(
        `COPY listings FROM '${__dirname}\\..\\data-csv\\listings.txt' WITH CSV HEADER`
    )
})
.then(() => {
    console.log('Populated listings table with data!');
    return client.query(
        `COPY bookings FROM '${__dirname}\\..\\data-csv\\bookings1.txt' WITH CSV HEADER`
    )
})
.then(() => {
    console.log('Populated bookings table with data (1)!');
    return client.query(
        `COPY bookings FROM '${__dirname}\\..\\data-csv\\bookings2.txt' WITH CSV HEADER`
    );
})
.then(() => {
    console.log('Populated bookings table with data (2)!');
    return client.query(
        `CREATE INDEX bookings_listingId on bookings(listingId)`
    );
})
.then(() => {
    console.log('Created bookings_listingId index!');
    client.end();

})
.catch(e => console.error(e.stack));