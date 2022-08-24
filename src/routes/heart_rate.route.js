const router = require('express').Router()
const { recordHeartRate, getHeartRates, getLastHeartRate, deleteHearRates } = require('../controllers/heart_rate.controller')

router.post('/', recordHeartRate)
router.get('/last', getLastHeartRate)
router.get('/', getHeartRates)
router.delete('/', deleteHearRates)

module.exports = router
