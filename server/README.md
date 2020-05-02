# CRUD API

##Table of Contents

1. [GET](#GET)
1. [POST](#POST)
1. [PUT](#PUT)
1. [DELETE](#DELETE)

##GET

###/listingInfo
returns an object based on row selected (which is based on listingId) in the **listing items** table:
id | listingId | listingName | pricePerNight | weekend | weekendPrice | maxGuests | tax
-- | --------- | ----------- | ------------- | ------- | ------------ | --------- | ---
3 | 10003 | 'Multibyte_Program_Opensource_house' | 129.00 | 0 | 1.1 | 3 | 1.12

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

###/getBookedDates
returns an object based on rows selected (which are based on listingId) in the **listing items** table:
id | listingId | nights | month | checkIn | checkOut | guests | children | infants
-- | --------- | ------ | ----- | ------- | -------- | ------ | -------- | -------
13 | 10003 | 4 | '04' | '04-6' | '04-10' | 2 | 0 | 0
14 | 10003 | 3 | '04' | '04-29' | '05-2' | 2 | 0 | 0 
15 | 10003 | 5 | '05' | '05-7' | '05-12' | 1 | 0 | 0
16 | 10003 | 5 | '05' | '05-21' | '05-26' | 1 | 0 | 0 
17 | 10003 | 4 | '05' | '05-30' | '06-3' | 1 | 0 | 0 

[
  {
    id: 13,
    listingId: 10003,
    nights: 4,
    month: '04',
    checkIn: '04-6',
    checkOut: '04-10',
    guests: 2,
    children: 0,
    infants: 0
  },
  {
    id: 14,
    listingId: 10003,
    nights: 3,
    month: '04',
    checkIn: '04-29',
    checkOut: '05-2',
    guests: 2,
    children: 0,
    infants: 0
  },
  {
    id: 15,
    listingId: 10003,
    nights: 5,
    month: '05',
    checkIn: '05-7',
    checkOut: '05-12',
    guests: 1,
    children: 0,
    infants: 0
  },
  {
    id: 16,
    listingId: 10003,
    nights: 5,
    month: '05',
    checkIn: '05-21',
    checkOut: '05-26',
    guests: 1,
    children: 0,
    infants: 0
  },
  {
    id: 17,
    listingId: 10003,
    nights: 4,
    month: '05',
    checkIn: '05-30',
    checkOut: '06-3',
    guests: 1,
    children: 0,
    infants: 0
  }
]

##POST
###/postBookedDates


##PUT

##PATCH

##DELETE