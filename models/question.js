//import mongoose
const mongoose = require('mongoose');

//Question Schema
const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  options: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Option'
  }]
}, {
  timestamps: true
});


const Question = mongoose.model('Question', questionSchema);

//export model
module.exports = Question;