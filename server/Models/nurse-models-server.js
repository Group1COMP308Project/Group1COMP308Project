const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NurseSchema = new Schema({

    FirstName:String,
    LastName: String,
    Email: String,
    Password: String,
    Temperature: Number,
    respitoryrate: Number,
    Bloodpressure: Number,
    HasVisitedBefore: Boolean,
    MotivationTips: String,
    MedicalConditions: String


});

module.exports = mongoose.model('Nurse',NurseSchema);


