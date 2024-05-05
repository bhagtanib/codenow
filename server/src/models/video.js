const mongoose = require('mongoose');

const User = require('./user');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  videoUrl: { type: String, required: true },
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: String,

});

// Creating a text index on the title and description fields
videoSchema.index({ title: 'text', description: 'text' });

const Video = mongoose.model('Video', videoSchema);
exports.Video =  Video
