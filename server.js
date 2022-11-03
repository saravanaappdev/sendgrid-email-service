
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const {MORGAN_FORMAT_STRING} = require('./config/constants')

//enable the CORS
app.use((req, res, next) => {
   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With , Content-Type, Authorization');
   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);
   // Pass to next layer of middleware
   next();
  });

// Adding the log 
app.use(morgan('combined'));

// url encoded parser
app.use(bodyParser.urlencoded({
   extended: true,
   parameterLimit: 1000,
   limit: '5mb'
 }));
 
 // json parser
 app.use(bodyParser.json({
   limit: '5mb'
 }));

app.post('/email', function (req, res) {
    console.log("req: ", req.body);
    require('./api/email').emailer(req, res);
 })
var server = app.listen(8089, function (err, data) {
   if(!err){
      console.log("server runningin port:",server.address().port);
   }
   var host = server.address().address
   var port = server.address().port
})

