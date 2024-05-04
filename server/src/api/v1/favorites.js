const express = require('express');
const router = express.Router();
const Favorite  = require('../../models/favorite'); // Adjust the import path as needed

// POST a video to favorites
router.post('/', async (req, res) => {
    // Use middleware to verify user authentication if needed
    
    const { userId, videoId } = req.body;
    
    const favorite = new Favorite({
        userId,
        videoId
    });
    
    await favorite.save();
    res.send(favorite);
});

// GET all favorites of a user
router.get('/id/:userId', async (req, res) => {
    const favorites = await Favorite.find({ userId: req.params.userId });
    res.send(favorites);
});

// DELETE a favorite by ID
router.delete('/:id', async (req, res) => {
    const favorite = await Favorite.findByIdAndRemove(req.params.id);
    if (!favorite) return res.status(404).send('Favorite not found');
    res.send(favorite);
});

router.get("/", async (req, res) => {
  const favorite = await Favorite.find();
  res.send(favorite)

})
// Route to populate favorites
router.get("/populate", async (req, res) => {

  try {
    const favoritesData = [
      {
        userId: "662cd60a941c1dcf2bf5573a",
        videoId: "662cf3996b258590adaacfd9"
      },
      {
        userId: "662cdbeccfbc2eeee03cc7b6",
        videoId: "662cf3996b258590adaacfda"
      },
      {
        userId: "662cdbeccfbc2eeee03cc7b7",
        videoId: "662cf3996b258590adaacfdb"
      },
      {
        userId: "662cdc7cc14ea4857ebf6a26",
        videoId: "662cf3996b258590adaacfdc"
      },
      {
        userId: "662cdc7cc14ea4857ebf6a27",
        videoId: "662cf3996b258590adaacfdd"
      },
      {
        userId: "662cdc7cc14ea4857ebf6a28",
        videoId: "662cf3996b258590adaacfde"
      },
      {
        userId: "662cdc7cc14ea4857ebf6a29",
        videoId: "662cf3996b258590adaacfdf"
      },
      {
        userId: "662cdc7cc14ea4857ebf6a2a",
        videoId: "662cf3996b258590adaacfe0"
      },
      {
        userId: "662cd60a941c1dcf2bf5573a",
        videoId: "662cf3996b258590adaacfe1"
      },
      {
        userId: "662cdbeccfbc2eeee03cc7b6",
        videoId: "662cf3996b258590adaacfe2"
      },
      // Add more favorite objects as needed
    ];

    // Insert favorites into the database
    const favorites = await Favorite.insertMany(favoritesData);
    console.log("Favorites inserted successfully:", favorites);
    res.send("Favorites Populated");
  } catch (error) {
    console.error("Error inserting favorites:", error);
    res.status(500).send("Error Populating Favorites");
  }
});


module.exports = router;
