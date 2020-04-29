//import mongoose
const mongoose = require('mongoose');

//Option Schema
const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  votes: {
    type: Number
  },
  link_to_vote: {
    type: String
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }
}, {
  timestamps: true
});


const Option = mongoose.model('Option', optionSchema);

//export model
module.exports = Option;