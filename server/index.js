const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const query = require ('../database/queries');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/listing/:listingId', (req, res) => {
  var { listingId } = req.params;
  
  query.getListing(listingId)
  .then(results => res.status(200).send(JSON.stringify(results)))
  .catch(err => res.status(404).send(`LISTING WITH ID OF ${listingId} NOT FOUND`))
})


app.get('/bookings/:listingId', (req, res) => {  
  var { listingId } = req.params;
  
  query.getListingBookings(listingId)
  .then(results => res.status(200).send(JSON.stringify(results)))
  .catch(err => res.status(404).send(`BOOKINGS WITH LISTING OF ID ${listingId} NOT FOUND`))
})

app.post('/booking/new', (req, res) => {  
  query.postBooking(req.body)
  .then(() => res.status(200).send('CREATED NEW BOOKING!'))
  .catch(err => res.status(404).send(`UNABLE TO POST NEW BOOKING`))
})

app.put('/booking/update/:bookingId', (req, res) => {  
  var { bookingId } = req.params; 

  query.updateBooking(bookingId, req.body)
  .then(() => res.status(202).end('UPDATED BOOKING!'))
  .catch(err => res.status(404).end(`UNABLE TO UPDATE BOOKING ${bookingId}`))
})

app.delete('/booking/delete/:bookingId', (req, res) => {  
  var { bookingId } = req.params;

  query.deleteBooking(bookingId)
  .then(() => res.status(202).end('DELETED BOOKING'))
  .catch(err => res.status(404).end(`UNABLE TO DELETE BOOKING ${bookingId}`))
})



var port = 3001;

app.listen(port, () => {
  console.log(`Server listening at ${port}`)
})


module.exports = app;


