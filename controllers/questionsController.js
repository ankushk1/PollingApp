const Question = require('../models/question');
const Option = require('../models/option');


module.exports = {

  //create question
  create: async (req, res) => {
    try {


      let question = await Question.create({
        title: req.body.title
      });

      //return question data
      return res.json(200, {
        data: {
          question: question
        },
        message: "Question created"
      });

    } catch (err) {
      return res.json(500, {
        message: "Internal Server Error"
      });
    }
  },


  //add options 
  addOptions: async function (req, res) {
    try {

      let question = await Question.findById(req.params.id);
      console.log(question);

      //check if question exists
      if (!question) {
        return res.json(404, {
          message: "Question not Found"
        });
      }

      //create option
      let option = await Option.create({
        text: req.body.text,
        question: question._id
      })

      //push option 
      question.options.push(option);
      question.save();

      return res.json(200, {
        message: "Option added successfully"
      });

    } catch (err) {
      return res.json(500, {
        message: "Internal Server Error"
      });
    }
  },


  //get question and options
  getQuestion: async function (req, res) {
    try {

      //find by id
      let question = await Question.findById(req.params.id).populate({
        path: 'options'
      });

      //check if question exists
      if (!question) {
        return res.json(404, {
          message: "Question not found"
        });
      }

      //return question and options data
      return res.json(200, {
        data: {
          question: question
        },
      });

    } catch (err) {
      return res.json(500, {
        message: "Internal Server Error"
      });
    }
  },


  //delete question
  delete: async function (req, res) {
    try {
      await Question.findByIdAndDelete(req.params.id);


      //ques deleted
      return res.json(200, {
        message: "Question deleted successfully"
      });
    } catch (err) {
      return res.json(500, {
        message: "Internal Server Error"
      });
    }
  }
}