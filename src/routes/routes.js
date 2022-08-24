const router = require('express').Router();
const sensorRouter = require('./sensor.route')
const heartRateRouter = require('./heart_rate.route')

router.use('/sensor', sensorRouter);
router.use('/heart-rate', heartRateRouter);

module.exports = router;