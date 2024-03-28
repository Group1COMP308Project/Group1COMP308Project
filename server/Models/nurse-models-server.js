const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NurseSchema = new Schema({

    Name:String,
    Temperature: Number,
    respitoryrate: Number,
    Bloodpressure: Number,
    HasVisitedBefore: Boolean,
    MotivationTips: String,
    MedicalConditions: String


});

module.exports = mongoose.model('Nurse',NurseSchema);


