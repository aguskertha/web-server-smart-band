const router = require('express').Router()
const { recordSensor, getSensors, getLastSensor, deleteSensors } = require('../controllers/sensor.controller')

router.post('/', recordSensor)
router.get('/last', getLastSensor)
router.get('/', getSensors)
router.delete('/', deleteSensors)

module.exports = router