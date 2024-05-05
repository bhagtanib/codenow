const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video', required: true },
  dateAdded: { type: Date, default: Date.now },
  // Add other fields as needed
});

module.exports = mongoose.model('Favorite', favoriteSchema);
