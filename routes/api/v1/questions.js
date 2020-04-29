const express = require('express');
const router = express.Router();

//import questionController
const questionController = require('../../../controllers/questionsController');

//questions routes
router.post('/create', questionController.create);
router.post('/:id/options/create', questionController.addOptions);
router.get('/:id', questionController.getQuestion);
router.delete('/:id/delete', questionController.delete);

//export router
module.exports = router;