const express = require('express');
const router = express.Router();

//import optioncontroller
const optionsController = require('../../../controllers/optionsController');


//Option routes
router.delete('/:id/delete', optionsController.deleteOption);
router.put('/:id/add_vote', optionsController.addVote);

//export router
module.exports = router;