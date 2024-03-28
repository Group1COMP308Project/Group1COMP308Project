const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
  userId: String,
  Temperature:Number,
  heartRate:Number,
  bloodpressure: Number,
  respiratoryrate: Number,
  created: String,
});

const Visit = mongoose.model('Visit', visitSchema);

module.exports = Visit;
