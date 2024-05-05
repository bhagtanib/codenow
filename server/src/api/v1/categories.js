const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  // Add other fields as needed
});

module.exports = mongoose.model('Category', categorySchema);
