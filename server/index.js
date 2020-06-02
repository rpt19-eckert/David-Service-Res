const nr = require('newrelic');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const query = require ('../database/queries');
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use('/:id', express.static(__dirname + '/../client/dist')); //this one is when not using proxy, but just requesting this service from the browser

app.get('/listing/:listingId', (req, res) => {
  var { listingId } = req.params;
  
  query.getListing(listingId)
  .then(results => res.status(200).send(JSON.stringify(results.rows[0])))
  .catch(err => {
    console.log(err);
    res.status(404).send(`LISTING WITH ID OF ${listingId} NOT FOUND`);
  })
})


app.get('/bookings/:listingId', (req, res) => {  
  var { listingId } = req.params;
  query.getListingBookings(listingId)
  .then(results => res.status(200).send(JSON.stringify(results.rows)))
  .catch(err => {
    res.status(404).send(`BOOKINGS WITH LISTING OF ID ${listingId} NOT FOUND`);
  })
})

app.post('/booking/new', (req, res) => {  
  query.postBooking(req.body)
  .then(() => res.status(200).send('CREATED NEW BOOKING!'))
  .catch(err => {
    console.log(err.stack);
    res.status(404).send(`UNABLE TO POST NEW BOOKING`);
  })
})

app.put('/booking/update/:bookingId', (req, res) => {  
  var { bookingId } = req.params; 

  query.updateBooking(bookingId, req.body)
  .then(() => res.status(202).end('UPDATED BOOKING!'))
  .catch(err => {
    console.log(err)
    res.status(404).end(`UNABLE TO UPDATE BOOKING ${bookingId}`);
  })
})

app.delete('/booking/delete/:bookingId', (req, res) => {  
  var { bookingId } = req.params;

  query.deleteBooking(bookingId)
  .then(() => res.status(202).end('DELETED BOOKING'))
  .catch(err => res.status(404).end(`UNABLE TO DELETE BOOKING ${bookingId}`))
})

app.listen(port, () => {
  console.log(`\n        !!SERVER!! \n||||//   vvvvvvvv   \\\\|||||\n|||//    | ${port} |    \\\\||||\n||( [====| ^__^ |====] )|||\n|||\\\\    |______|    //||||\n||||\\\\  _|      |_  //|||||\n`)
})

module.exports = app;


