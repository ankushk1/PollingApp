const express = require('express');
const router = express.Router();

//questions routes
router.use('/questions', require('./questions'));

//option routes
router.use('/options', require('./options'));

//export router
module.exports = router;