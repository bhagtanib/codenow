const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  status: Boolean,
  title: String,
  link: String,
  acceptance: Number,
  difficulty: String,
  frequency: String,
  tags: [String],
  questionList: String,
  solution: String,
});

const Problem = mongoose.model("Problem", problemSchema);

exports.Problem = Problem;
