const router = require('express').Router();
const sensroRouter = require('./sensor.route')

router.use('/sensor', sensroRouter);

module.exports = router;