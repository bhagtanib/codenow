// Import necessary modules and models
const express = require('express');
const router = express.Router();
const {Video} = require('../../models/video');

// Route to search videos by text
// Debugging the presence of query parameters
router.get('/', async (req, res) => {
    console.log(req.query);  // This should show you all query parameters
    if (!req.query.text) {
        return res.status(400).json({ message: "No search text provided." });
    }

    try {
        const searchText = req.query.text;
        const videos = await Video.find({ $text: { $search: searchText } });
        if (videos.length === 0) {
            return res.status(404).json({ message: "No videos found." });
        }
        res.status(200).json(videos);
    } catch (error) {
        console.error("Error searching videos:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
