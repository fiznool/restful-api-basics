'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Setup Mongoose
mongoose.Promise = require('bluebird');

// Connect to the database
// mongoose.connect('mongodb://localhost/no-rest-for-the-whippet');
mongoose.connect('mongodb://rest:rest@ds029675.mlab.com:29675/restful-api-basics');

// Setup express
var app = express();

// Setup body parser, which lets us parse JSON
// from the request body
app.use(bodyParser.json());

// Setup the app routes
require('./routes')(app);

// Setup the error handling
app.use(require('./middleware').errorHandler);

// And finally, start the app
app.listen(9000, function() {
  console.log('API running on port 9000');
});

