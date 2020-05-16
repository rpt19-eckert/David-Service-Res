const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    listingId: {
        type: Number,
        required: true
    },
    listingName: {
        type: String,
        required: true
    },
    pricePerNight: {
        type: Number,
        required: true
    },
    weekend: {
        type: Boolean,
        required: true
    },
    weekendPrice: {
        type: Number,
        required: true
    },
    maxGuests: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    }
})

const Listing = mongoose.model('Listing', listingSchema);

const bookingSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    listingId: {
        type: Number,
        required: true
    },
    nights: {
        type: Number,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    checkIn: {
        type: String,
        required: true
    },
    checkOut: {
        type: String,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    children: {
        type: Number,
        required: true
    },
    infants: {
        type: Number,
        required: true
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = {
    Listing,
    Booking
}