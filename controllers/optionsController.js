const Question = require('../models/question');
const Option = require('../models/option');


module.exports = {

  //add vote to an option
  addVote: async function (req, res) {
    try {
      let id = req.params.id;


      //find the option
      await Option.findByIdAndUpdate(id, {
        $inc: {
          votes: 1
        }
      });


      return res.json(200, {
        message: "Vote added successfully"
      });
    } catch (err) {
      return res.json(500, {
        message: "Internal Server Error"
      });
    }
  },


  //delete option from question
  deleteOption: async function (req, res) {
    try {


      let option = await Option.findById(req.params.id);


      //votes are not 0, cant delete
      if (option.votes > 0) {
        return res.json(400, {
          message: "Cannot delete"
        });
      }

      //delete option
      await Option.findByIdAndDelete(req.params.id);

      return res.json(200, {
        message: " Option Deleted successfully"
      });

    } catch (err) {

      return res.json(500, {
        message: "Internal Server Error"
      });
    }
  }


}