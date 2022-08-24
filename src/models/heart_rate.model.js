const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const heartRateSchema = new Schema({
    heartRate: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: String
    },
    updatedAt: {
        type: String
    }
});

heartRateSchema.pre('save', function(next){
    this.createdAt = moment().format();
    this.updatedAt = moment().format();
    next();
});

heartRateSchema.pre('updateOne', function(next){
    this.update({},{ $set: { updatedAt: moment().format() } });
    next();
});

const HeartRate = mongoose.model('HeartRate', heartRateSchema);

module.exports = HeartRate;