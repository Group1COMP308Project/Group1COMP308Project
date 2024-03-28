const mongoose = require('mongoose');

const tipSchema = new mongoose.Schema({
  content: String,
  created: String,
});

const Tip = mongoose.model('Tip', tipSchema);

module.exports = Tip;
