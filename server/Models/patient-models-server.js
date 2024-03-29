//Aruna
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PatientSchema = new Schema({

    FirstName:String,
    LastName: String,
    Email: String,
    Password: String,
    Temperature: Number,
    RespitoryRate: Number,
    Bloodpressure: Number,
    Weight:String,
    PulseRate:String,
    CovidSymptom:String,
    Date: String



});

module.exports = mongoose.model('Patient',PatientSchema);
