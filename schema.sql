
DROP DATABASE IF EXISTS reservation_service;

CREATE DATABASE reservation_service;

USE reservation_service;

CREATE TABLE listingItems (
  id int NOT NULL AUTO_INCREMENT,
  listingId int NOT NULL,
  listingName VARCHAR(100),
  pricePerNight DECIMAL(5, 2) NOT NULL,
  weekend boolean NOT NULL default 0,
  weekendPrice DECIMAL(3, 2) NOT NULL,
  maxGuests int NOT NULL,
  tax DECIMAL(3, 2) NOT NULL,
  PRIMARY KEY(id)

);

CREATE TABLE bookings (
  id int NOT NULL AUTO_INCREMENT,
  listingId int,
  nights int,
  month VARCHAR(4),
  checkIn VARCHAR(10),
  checkOut VARCHAR(10),
  guests int,
  children int default 0,
  infants int default 0,
  PRIMARY KEY(id)
);

-- INSERT into listingItems (listingId, listingName, pricePerNight, weekend, weekendPrice, maxGuests, tax) VALUES (10001, 'Super_Cute_Retro_Airstream', 129.00, 1, 1.1, 4, 1.12);
--  INSERT into listingItems (listingId, listingName, pricePerNight, weekend, weekendPrice, maxGuests, tax) VALUES (10002, 'Redundant_Driver_Strategic_house', 115.00, 0, 1.1, 3, 1.12);
--  INSERT into listingItems (listingId, listingName, pricePerNight, weekend, weekendPrice, maxGuests, tax) VALUES (10003, 'Multibyte_Program_Opensource_house', 129.00, 0, 1.1, 3, 1.12);
--  INSERT into listingItems (listingId, listingName, pricePerNight, weekend, weekendPrice, maxGuests, tax) VALUES (10004, 'Neural_Transmitter_Magnetic_house', 168.00, 1, 1.1, 2, 1.12);
--  INSERT into listingItems (listingId, listingName, pricePerNight, weekend, weekendPrice, maxGuests, tax) VALUES (10005, 'Haptic_Bandwidth_Leadingedge_house', 178.00, 0, 1.1, 3, 1.12);
--  INSERT into listingItems (listingId, listingName, pricePerNight, weekend, weekendPrice, maxGuests, tax) VALUES (10006, 'Primary_Harddrive_Killer_house', 156.00, 1, 1.1, 4, 1.12);
--  INSERT into listingItems (listingId, listingName, pricePerNight, weekend, weekendPrice, maxGuests, tax) VALUES (10007, 'Solidstate_Harddrive_Crossplatform_house', 170.00, 0, 1.1, 4, 1.12);
--  INSERT into listingItems (listingId, listingName, pricePerNight, weekend, weekendPrice, maxGuests, tax) VALUES (10008, 'Optical_Bandwidth_Robust_house', 144.00, 0, 1.1, 4, 1.12);
--  INSERT into listingItems (listingId, listingName, pricePerNight, weekend, weekendPrice, maxGuests, tax) VALUES (10009, 'Solidstate_Interface_Crossmedia_house', 145.00, 1, 1.1, 2, 1.12);
--  INSERT into listingItems (listingId, listingName, pricePerNight, weekend, weekendPrice, maxGuests, tax) VALUES (10010, 'Bluetooth_Port_Opensource_house', 155.00, 0, 1.1, 2, 1.12);
 
-- INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10001, 2, '04', '04-13', '04-15', 2, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10001, 2, '04', '04-24', '04-26', 1, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10001, 3, '05', '05-7', '05-10', 2, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10001, 5, '05', '05-18', '05-23', 2, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10001, 4, '06', '06-2', '06-6', 2, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10001, 3, '06', '06-17', '06-20', 2, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10002, 5, '04', '04-11', '04-16', 2, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10002, 3, '04', '04-26', '04-29', 1, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10002, 5, '05', '05-3', '05-8', 1, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10002, 2, '05', '05-19', '05-21', 1, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10002, 3, '06', '06-2', '06-5', 2, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10002, 3, '06', '06-14', '06-17', 2, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10003, 4, '04', '04-6', '04-10', 2, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10003, 5, '04', '04-19', '04-24', 1, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10003, 3, '04', '04-29', '05-2', 2, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10003, 5, '05', '05-7', '05-12', 1, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10003, 5, '05', '05-21', '05-26', 1, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10003, 4, '05', '05-30', '06-3', 1, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10004, 3, '04', '04-11', '04-14', 2, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10004, 3, '04', '04-22', '04-25', 2, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10004, 4, '05', '05-6', '05-10', 2, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10004, 3, '05', '05-22', '05-25', 1, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10004, 2, '06', '06-2', '06-4', 1, 0, 0 ); 
--  INSERT into bookings (listingId, nights, month, checkIn, checkOut, guests, children, infants) VALUES (10004, 3, '06', '06-14', '06-17', 2, 0, 0 ); 
 