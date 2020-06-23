//const nr = require('newrelic');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const query = require ('../database/queries');
const port = 3001;
const redis = require('redis');
const client = redis.createClient({
  port: 6379,
  host: '54.151.1.96'
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public')); 
app.use(express.static(__dirname + '/../client/dist'));
app.use('/:id', express.static(__dirname + '/../client/dist')); 

// app.use((req, res, next) => {
//   console.log(req.url)
//   client.get(req.url, (err, redisValue) => {
//     if (err) console.error(err);
//     console.log(redisValue);
//     if (redisValue === null) {
//       next();
//     } else {
//       res.status(200).send(redisValue);
//     }
//   })
// })

app.get('/listing/:listingId', (req, res) => {
  var { listingId } = req.params;

  query.getListing(listingId)
  .then(results => {
    var stringedResults = JSON.stringify(results.rows[0]);
    //client.set(req.url, stringedResults, (err) => {
      //if (err) console.error(err);
      //console.log(stringedResults);
      res.status(200).send(stringedResults);
    //})
  })
  .catch(err => {
    console.log(err);
    res.status(404).send(`LISTING WITH ID OF ${listingId} NOT FOUND`);
  })
})

app.get('/bookings/:listingId', (req, res) => {  
  var { listingId } = req.params;
  query.getListingBookings(listingId)
  .then(results => {
    //console.log(results.rows)
    res.status(200).send(JSON.stringify(results.rows));
  })
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

app.listen(port, () => {
  console.log(`\n        !!SERVER!! \n||||//   vvvvvvvv   \\\\|||||\n|||//    | ${port} |    \\\\||||\n||( [====| ^__^ |====] )|||\n|||\\\\    |______|    //||||\n||||\\\\  _|      |_  //|||||\n`)
})

module.exports = app;


