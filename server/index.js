const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const { db, getListingInfo, getListingBookings } = require ('../database');
const fs = require('fs');
const fullPath = '/Users/yingwenchen/Desktop/HR project/HR_RPT/FEC/FEC_Yingwen_service/client/dist/index.html';
const cors = require('cors');
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());


app.use(express.static(__dirname + '/../client/dist'));


app.get('/getListingInfo', (req, res) => {
  //should give listingId 10001 back to the client when page first renders
  var { listingId } = req.query;
  
  getListingInfo(listingId, (err, results) => {
    if (err) res.status(404).send('NOT FOUND');
      
    res.status(200).send(JSON.stringify(results));
  });
})

//**i want to change to get
// app.post('/getBookedDates', (req, res) => {
app.get('/getListingBookings', (req, res) => {  
  var { listingId } = req.body;
  
  getListingBookings(listingId, (err, results) => {
    if (err) res.status(404).send('NOT FOUND');

    res.status(200).send(JSON.stringify(results));
  })

})

app.post('/postBooking', (req, res) => {  
  var { booking } = req.body;
  console.log('booking', booking)
  
  postBooking(booking, (err, results) => {
    if (err) {
      res.status(404).end('NOT FOUND');
    } else {
      var stringifyResults = JSON.stringify(results);
      res.status(202).end(stringifyResults);
    }
  })

})

app.put('/updateBooking', (req, res) => {  
  var { updates } = req.body;

  console.log('reqbody', req.body)
  // //console.log('listingId from getBookedDates', listingId)
  updateBooking(listingId, updates, (err, results) => {
    if (err) {
      res.status(404).end('NOT FOUND');
    } else {
      var stringifyResults = JSON.stringify(results);
     // console.log(stringifyResults)
      res.status(202).end(stringifyResults);
    }
  })

})

app.delete('/deleteBooking', (req, res) => {  
  var { updates } = req.body;

  console.log('reqbody', req.body)
  // //console.log('listingId from getBookedDates', listingId)
  deleteBooking(listingId, updates, (err, results) => {
    if (err) {
      res.status(404).end('NOT FOUND');
    } else {
      var stringifyResults = JSON.stringify(results);
     // console.log(stringifyResults)
      res.status(202).end(stringifyResults);
    }
  })

})


// app.get('/:id', (req, res) => {
//  // console.log('hit here', __dirname)
//   //res.render(fullPath)
//   fs.readFile(fullPath, 'utf8', (err, results) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.end(results);
//     }
//   })
// })








var port = 3001;

app.listen(port, () => {
  console.log(`server listening at ${port}`)
})


module.exports = app;


