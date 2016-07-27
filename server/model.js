'use strict';

const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
  name: {
    type: String
  },
  breed: {
    type: String
  },
  dob: {
    type: Date
  }
});

module.exports = mongoose.model('Dog', DogSchema);
