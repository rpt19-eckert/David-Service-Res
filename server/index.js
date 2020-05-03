const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const query = require ('../database');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/listing/:listingId', (req, res) => {
  var { listingId } = req.params;
  
  query.getListingInfo(listingId, (err, results) => {
    if (err) res.status(404).send(`LISTING WITH ID OF ${listingId} NOT FOUND`);
    else res.status(200).send(JSON.stringify(results));
  });
})


app.get('/bookings/:listingId', (req, res) => {  
  var { listingId } = req.params;
  
  query.getListingBookings(listingId, (err, results) => {
    if (err) res.status(404).send(`BOOKINGS WITH LISTING OF ID ${listingId} NOT FOUND`);
    else res.status(200).send(JSON.stringify(results));
  })
})

app.post('/booking/new', (req, res) => {  
  query.postBooking(req.body, (err, results) => {
    if (err) res.status(404).send(`UNABLE TO POST NEW BOOKING`);
    else res.status(200).send(JSON.stringify(results));
  });
})

app.put('/booking/update/:bookingId', (req, res) => {  
  var { bookingId } = req.params; 

  query.updateBooking(bookingId, req.body, (err, results) => {
    if (err) res.status(404).end('NOT FOUND');
    else res.status(202).end(JSON.stringify(results));
  })
})

app.delete('/booking/delete/:bookingId', (req, res) => {  
  var { bookingId } = req.params;

  query.deleteBooking(bookingId, (err, results) => {
    if (err) res.status(404).end('NOT FOUND');
    else res.status(202).end(JSON.stringify(results));
  });
})



var port = 3001;

app.listen(port, () => {
  console.log(`Server listening at ${port}`)
})


module.exports = app;


