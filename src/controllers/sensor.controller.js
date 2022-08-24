const Sensor = require('../models/sensor.model')

const recordSensor = async (req, res, next) => {
    try {
        const {heartRate, oxiRate} = req.body;
        const newSensor = new Sensor({heartRate, oxiRate})
        await newSensor.save()
        res.json({message: 'Successfully record sensor!'})

    } catch (error) {
        res.status(400).json({message: error.toString()})
    }
}

const getSensors = async (req, res, next) => {
    try {
        const sensors = await Sensor.find().sort({createdAt: -1})
        res.json(sensors)
    } catch (error) {
        res.status(400).json({message: error.toString()})
    }
}

const getLastSensor = async (req, res, next) => {
    try {
        const sensors = await Sensor.find().sort({createdAt: -1})
        if(sensors.length <= 0) throw 'Sensors is empty!'
        const sensor = sensors[0]
        res.json(sensor)
    } catch (error) {
        res.status(400).json({message: error.toString()})
    }
}

const deleteSensors = async (req, res, next) => {
    try {
        await Sensor.deleteMany()
        res.json({message: 'Successfully deleted Sensors!'})
    } catch (error) {
        res.status(400).json({message: error.toString()})
    }
}

module.exports = {
    recordSensor,
    getLastSensor,
    getSensors,
    deleteSensors
}