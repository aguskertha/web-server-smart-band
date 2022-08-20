const router = require('express').Router()
const { recordSensor, getSensors } = require('../controllers/sensor.controller')

router.post('/', recordSensor)
router.get('/', getSensors)

module.exports = router