//Aruna
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PatientSchema = new Schema({

    firstName:String,
    lastName:String,
    age: String,
    address: String,
    dateOfBirth: String,
    HealthCardNumber: String,
    Gender: String


});

module.exports = mongoose.model('Patient',PatientSchema);
