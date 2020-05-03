# CRUD API FOR RESERVATIONS SERVICE


## Table of Contents

1. [POST](#create---post)
1. [GET](#read---get)
1. [PUT](#update---put)
1. [DELETE](#delete---delete)



## Create - POST

### /booking/new
Create a new booking!
Receives json object following below format, and inserts into bookings table:
```javascript
{
    listingId: 10026,
    nights: 4,
    month: '04',
    checkIn: '04-22',
    checkOut: '04-26',
    guests: 2,
    children: 1,
    infants: 0
  },
```



## Read - GET

### /listing/:id
Retrieve listing information for listing specified in url params by :id

```javascript
results = {
    id : 3, 
    listingId : 10003,
    listingName : 'Multibyte_Program_Opensource_house',
    pricePerNight: 129.00,
    weekend: 0,
    weekendPrice: 1.1,
    maxGuests: 3,
    tax: 1.12
}
```

### /booking/:id
Retrieve bookings' information for listing specified in url params by :id
```javascript
results = [
  {
    id: 612,
    listingId: 10003,
    nights: 4,
    month: '04',
    checkIn: '04-22',
    checkOut: '04-26',
    guests: 2,
    children: 1,
    infants: 0
  }
  //,{},{}...
]
```



## Update - PUT

### /booking/update/:bookingId
Updates booking information, specified in url params by :bookingId, with information provided by following json object:
```javascript
{
    listingId: 10003,
    nights: 4,
    month: '04',
    checkIn: '04-22',
    checkOut: '04-26',
    guests: 2,
    children: 1,
    infants: 0
}
```



## Delete - DELETE

### /booking/delete/:bookingId
Deletes booking specified in url params by :bookingId 
