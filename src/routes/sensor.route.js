const router = require('express').Router()
const { recordSensor, getSensors, getLastSensor } = require('../controllers/sensor.controller')

router.post('/', recordSensor)
router.get('/last', getLastSensor)
router.get('/', getSensors)

module.exports = router