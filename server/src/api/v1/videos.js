const express = require("express");
const router = express.Router();
const { Video } = require("../../models/video"); // Adjust the import path as needed
// const auth = require('../../middleware/auth'); // Import authentication middleware if needed

// GET all videos
router.get("/", async (req, res) => {
  const videos = await Video.find();
  if (videos) {
    res.send(videos);
  } else {
    res.send("<h1> You are on video page </h1>");
  }
});



router.get("/allId", async (req, res) => {
  const videos = await Video.find();
  if (videos) {
    const ids = videos.map((vid) => {
      return vid.id;
    });
    res.send(ids);
  } else {
    res.send("<h1> You are on video page </h1>");
  }
});

// GET a single video by ID

router.get('/id/:id', async (req, res) => {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).send('Video not found');
    res.send(video);
});

// POST a new video
router.post("/", async (req, res) => {
  // Us middleware to protect routes if needed
  const { error } = validateVideo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const video = new Video(req.body);
  await video.save();
  res.send(video);
});

// PUT (update) an existing video by ID
router.put("/:id", async (req, res) => {
  const { error } = validateVideo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!video) return res.status(404).send("Video not found");

  res.send(video);
});

// DELETE a video by ID
router.delete("/:id", async (req, res) => {
  const video = await Video.findByIdAndRemove(req.params.id);
  if (!video) return res.status(404).send("Video not found");

  res.send(video);
});

router.get("/populate", async (req, res) => {
  const usersData = [
    {
      title: "Nature's Beauty",
      description: "A stunning display of nature's beauty",
      videoUrl: "https://example.com/natures_beauty.mp4",
      uploader: "662cdc7cc14ea4857ebf6a28",
      category: "Nature",
    },
    {
      title: "Cooking Masterclass",
      description: "Learn how to cook delicious meals like a pro",
      videoUrl: "https://example.com/cooking_masterclass.mp4",
      uploader: "662cdbeccfbc2eeee03cc7b6",
      category: "Cooking",
    },
    {
      title: "Fitness Tips",
      description: "Get fit with these effective fitness tips",
      videoUrl: "https://example.com/fitness_tips.mp4",
      uploader: "662cd60a941c1dcf2bf5573a",
      category: "Fitness",
    },
    {
      title: "Travel Vlog",
      description: "Join us on an exciting adventure around the world",
      videoUrl: "https://example.com/travel_vlog.mp4",
      uploader: "662cdc7cc14ea4857ebf6a28",
      category: "Travel",
    },
    {
      title: "DIY Home Decor",
      description: "Transform your home with these creative DIY ideas",
      videoUrl: "https://example.com/diy_home_decor.mp4",
      uploader: "662cdbeccfbc2eeee03cc7b6",
      category: "DIY",
    },
    {
      title: "Gardening Tips",
      description: "Learn how to grow beautiful gardens with these tips",
      videoUrl: "https://example.com/gardening_tips.mp4",
      uploader: "662cd60a941c1dcf2bf5573a",
      category: "Gardening",
    },
    {
      title: "Tech Reviews",
      description: "Stay updated with the latest technology trends",
      videoUrl: "https://example.com/tech_reviews.mp4",
      uploader: "662cdc7cc14ea4857ebf6a28",
      category: "Technology",
    },
  ];

  const dsaVideos = [
    {
      title: "Introduction to Algorithms",
      description: "A comprehensive introduction to the fundamental concepts of algorithms.",
      videoUrl: "https://example.com/videos/intro-to-algorithms",
      uploader: "662cd60a941c1dcf2bf5573a",
      category: "DSA"
    },
    {
      title: "Data Structures: An Overview",
      description: "Explore the different types of data structures used in computer science.",
      videoUrl: "https://example.com/videos/data-structures-overview",
      uploader: "662cdbeccfbc2eeee03cc7b6",
      category: "DSA"
    },
    {
      title: "Binary Search Trees",
      description: "Learn how binary search trees work and how to implement them.",
      videoUrl: "https://example.com/videos/binary-search-trees",
      uploader: "662cdbeccfbc2eeee03cc7b7",
      category: "DSA"
    },
    {
      title: "Graph Theory Basics",
      description: "An introduction to graph theory and its applications in solving real-world problems.",
      videoUrl: "https://example.com/videos/graph-theory-basics",
      uploader: "662cdc7cc14ea4857ebf6a26",
      category: "DSA"
    },
    {
      title: "Sorting Algorithms Explained",
      description: "A deep dive into various sorting algorithms, including quicksort and mergesort.",
      videoUrl: "https://example.com/videos/sorting-algorithms",
      uploader: "662cdc7cc14ea4857ebf6a27",
      category: "DSA"
    },
    {
      title: "Dynamic Programming Introduction",
      description: "Introduction to dynamic programming, with examples and problem-solving strategies.",
      videoUrl: "https://example.com/videos/dynamic-programming",
      uploader: "662cdc7cc14ea4857ebf6a28",
      category: "DSA"
    },
    {
      title: "Complexity Analysis",
      description: "Understanding time complexity and space complexity in algorithms.",
      videoUrl: "https://example.com/videos/complexity-analysis",
      uploader: "662cdc7cc14ea4857ebf6a29",
      category: "DSA"
    },
    {
      title: "Linked Lists in Depth",
      description: "Mastering linked lists, including singly and doubly linked lists.",
      videoUrl: "https://example.com/videos/linked-lists",
      uploader: "662cdc7cc14ea4857ebf6a2a",
      category: "DSA"
    },
    {
      title: "Stacks and Queues",
      description: "Understanding stacks and queues and their use in algorithm design.",
      videoUrl: "https://example.com/videos/stacks-and-queues",
      uploader: "662cd60a941c1dcf2bf5573a",
      category: "DSA"
    },
    {
      title: "Hash Tables and Hash Functions",
      description: "Exploring the implementation and applications of hash tables in software development.",
      videoUrl: "https://example.com/videos/hash-tables",
      uploader: "662cdbeccfbc2eeee03cc7b6",
      category: "DSA"
    }
  ];
  
  // Use this array to populate your database.
  const leetCodeVideos = [
    {
      title: "Introduction to LeetCode",
      description: "An overview of LeetCode and its importance in coding interviews.",
      videoUrl: "https://example.com/videos/intro-to-leetcode",
      uploader: "662cd60a941c1dcf2bf5573a",
      category: "LeetCode"
    },
    {
      title: "LeetCode Easy Problems",
      description: "A walkthrough of some easy LeetCode problems and their solutions.",
      videoUrl: "https://example.com/videos/leetcode-easy",
      uploader: "662cdbeccfbc2eeee03cc7b6",
      category: "LeetCode"
    },
    {
      title: "LeetCode Medium Problems",
      description: "Exploring medium difficulty LeetCode problems and strategies to solve them.",
      videoUrl: "https://example.com/videos/leetcode-medium",
      uploader: "662cdbeccfbc2eeee03cc7b7",
      category: "LeetCode"
    },
    {
      title: "LeetCode Hard Problems",
      description: "Challenging LeetCode problems and advanced problem-solving techniques.",
      videoUrl: "https://example.com/videos/leetcode-hard",
      uploader: "662cdc7cc14ea4857ebf6a26",
      category: "LeetCode"
    },
    {
      title: "Dynamic Programming on LeetCode",
      description: "A deep dive into dynamic programming problems on LeetCode.",
      videoUrl: "https://example.com/videos/dynamic-programming-leetcode",
      uploader: "662cdc7cc14ea4857ebf6a27",
      category: "LeetCode"
    },
    {
      title: "Binary Search on LeetCode",
      description: "Mastering binary search problems on LeetCode with detailed explanations.",
      videoUrl: "https://example.com/videos/binary-search-leetcode",
      uploader: "662cdc7cc14ea4857ebf6a28",
      category: "LeetCode"
    },
    {
      title: "Graph Problems on LeetCode",
      description: "Solving graph-related problems on LeetCode and graph traversal techniques.",
      videoUrl: "https://example.com/videos/graph-problems-leetcode",
      uploader: "662cdc7cc14ea4857ebf6a29",
      category: "LeetCode"
    },
    {
      title: "String Manipulation on LeetCode",
      description: "Strategies for solving string manipulation problems on LeetCode.",
      videoUrl: "https://example.com/videos/string-manipulation-leetcode",
      uploader: "662cdc7cc14ea4857ebf6a2a",
      category: "LeetCode"
    },
    {
      title: "Tree Problems on LeetCode",
      description: "Exploring tree-related problems on LeetCode and tree traversal algorithms.",
      videoUrl: "https://example.com/videos/tree-problems-leetcode",
      uploader: "662cd60a941c1dcf2bf5573a",
      category: "LeetCode"
    },
    {
      title: "Backtracking on LeetCode",
      description: "Understanding backtracking algorithms and solving backtracking problems on LeetCode.",
      videoUrl: "https://example.com/videos/backtracking-leetcode",
      uploader: "662cdbeccfbc2eeee03cc7b6",
      category: "LeetCode"
    }
  ];
  
  // Use this array to populate your database.
  

  Video.insertMany(dsaVideos)
    .then((video) => {
      console.log("video inserted successfully:");
    })
    .catch((error) => {
      console.error("Error inserting video:", error);
    });
  res.send("Populated");
});

module.exports = router;
