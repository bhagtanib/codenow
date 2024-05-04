const express = require('express');
const router = express.Router();
const { Comment } = require('../../models/comment'); // Adjust the import path as needed
// const auth = require('../../middleware/auth'); // Import authentication middleware if needed

// POST a comment on a video
router.post('/', async (req, res) => {
    // Use middleware to verify user authentication if needed
    
    const { userId, videoId, content } = req.body;
    
    const comment = new Comment({
        userId,
        videoId,
        content
    });
    
    await comment.save();
    res.send(comment);
});

// GET all comments of a video
router.get('/id/:videoId', async (req, res) => {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.send(comments);
});
// GET all comments
router.get('/', async (req, res) => {
    const comments = await Comment.find();
    res.send(comments);
});

// DELETE a comment by ID
router.delete('/:id', async (req, res) => {
    const comment = await Comment.findByIdAndRemove(req.params.id);
    if (!comment) return res.status(404).send('Comment not found');
    res.send(comment);
});
router.get("/populate", async (req, res) => {
    const commentsData = [
        {
            "userId": "662cd60a941c1dcf2bf5573a",
            "videoId": "662cf3996b258590adaacfd9",
            "content": "Great video! Really enjoyed it."
        },
        {
            "userId": "662cdbeccfbc2eeee03cc7b6",
            "videoId": "662cf3996b258590adaacfd9",
            "content": "This video helped me a lot. Thanks!"
        },
        {
            "userId": "662cdbeccfbc2eeee03cc7b7",
            "videoId": "662cf3996b258590adaacfd9",
            "content": "Awesome content. Keep it up!"
        },
        {
            "userId": "662cdc7cc14ea4857ebf6a26",
            "videoId": "662cf3996b258590adaacfda",
            "content": "Very informative. Thanks for sharing!"
        },
        {
            "userId": "662cdc7cc14ea4857ebf6a27",
            "videoId": "662cf3996b258590adaacfda",
            "content": "I learned a lot from this video."
        },
        {
            "userId": "662cdc7cc14ea4857ebf6a28",
            "videoId": "662cf3996b258590adaacfdb",
            "content": "Excellent explanation. Clear and concise!"
        },
        {
            "userId": "662cdc7cc14ea4857ebf6a29",
            "videoId": "662cf3996b258590adaacfdb",
            "content": "This video deserves more views."
        },
        {
            "userId": "662cdc7cc14ea4857ebf6a2a",
            "videoId": "662cf3996b258590adaacfdc",
            "content": "I appreciate the effort put into making this video."
        },
        {
            "userId": "662cd60a941c1dcf2bf5573a",
            "videoId": "662cf3996b258590adaacfdc",
            "content": "Very helpful content. Thank you!"
        },
        {
            "userId": "662cdbeccfbc2eeee03cc7b6",
            "videoId": "662cf3996b258590adaacfdc",
            "content": "I've watched this multiple times. So informative!"
        }
    ];
    
  
    Comment.insertMany(commentsData)
      .then((Comment) => {
        console.log("Comment inserted successfully:", Comment);
      })
      .catch((error) => {
        console.error("Error inserting Comment:");
      });
    res.send("Populated");
  });
module.exports = router;
