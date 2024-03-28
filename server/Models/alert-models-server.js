const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  message: String,
  pateintName: String,
});

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;
