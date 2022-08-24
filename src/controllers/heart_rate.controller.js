const HeartRate = require('../models/heart_rate.model')

const recordHeartRate = async (req, res, next) => {
    try {
        const {heartRate} = req.body;
        const newHeartRate = new HeartRate({heartRate})
        await newHeartRate.save()
        res.json({message: 'Successfully record HeartRate!'})

    } catch (error) {
        res.status(400).json({message: error.toString()})
    }
}

const getHeartRates = async (req, res, next) => {
    try {
        const heartRates = await HeartRate.find().sort({createdAt: -1})
        res.json(heartRates)
    } catch (error) {
        res.status(400).json({message: error.toString()})
    }
}

const getLastHeartRate = async (req, res, next) => {
    try {
        const heartRates = await HeartRate.find().sort({createdAt: -1})
        if(heartRates.length <= 0) throw 'HeartRates is empty!'
        const heartRate = heartRates[0]
        res.json(heartRate)
    } catch (error) {
        res.status(400).json({message: error.toString()})
    }
}

const deleteHearRates = async (req, res, next) =>{
    try {
        await HeartRate.deleteMany()
        res.json({message: 'Successfully deleted Heart Rates!'})
    } catch (error) {
        res.status(400).json({message: error.toString()})
    }
}
module.exports = {
    recordHeartRate,
    getLastHeartRate,
    getHeartRates,
    deleteHearRates
}