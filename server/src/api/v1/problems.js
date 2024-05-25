const express = require("express");
const router = express.Router();
const { Problem } = require("../../models/problem");
const { Category } = require("../../models/category");

// POST a comment on a video
router.post("/", async (req, res) => {
  const { userId, videoId, content } = req.body;

  const comment = new Comment({
    userId,
    videoId,
    content,
  });

  await comment.save();
  res.send(comment);
});

// GET all comments
router.get("/", async (req, res) => {
  const problems = await Problem.find();
  res.send(problems);
});


router.get('/by-list/:listName', async (req, res) => {
  try {
    const listName = req.params.listName;
    const problems = await Problem.find({ questionList: listName })
    res.json(problems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/by-difficulty/:difficultyLevel', async (req, res) => {
  try {
    const difficultyLevel = req.params.difficultyLevel;
    const problems = await Problem.find({ difficulty: difficultyLevel })
    res.json(problems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/populate", async (req, res) => {
  const problems75 = [
    {
      "Status": false,
      "title": "Two Sum",
      "link": "https://leetcode.com/problems/two-sum/",
      "acceptance": 50,
      "difficulty": "Easy",
      "frequency": "High",
      "tags": ["Array", "Hash Table", "Two Pointers"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Best Time to Buy and Sell Stock",
      "link":
        "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      "acceptance": 49,
      "difficulty": "Easy",
      "frequency": "High",
      "tags": ["Array", "Dynamic Programming"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Contains Duplicate",
      "link": "https://leetcode.com/problems/contains-duplicate/",
      "acceptance": 55,
      "difficulty": "Easy",
      "frequency": "High",
      "tags": ["Array", "Hash Table"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Product of Array Except Self",
      "link": "https://leetcode.com/problems/product-of-array-except-self/",
      "acceptance": 59,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Array", "Prefix Sum", "Cumulative Product"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Maximum Subarray",
      "link": "https://leetcode.com/problems/maximum-subarray/",
      "acceptance": 47,
      "difficulty": "Easy",
      "frequency": "High",
      "tags": ["Array", "Dynamic Programming", "Kadane's Algorithm"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Maximum Product Subarray",
      "link": "https://leetcode.com/problems/maximum-product-subarray/",
      "acceptance": 32,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Array", "Dynamic Programming"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Find Minimum in Rotated Sorted Array",
      "link":
        "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      "acceptance": 49,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Array", "Binary Search"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Search in Rotated Sorted Array",
      "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      "acceptance": 36,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["Array", "Binary Search"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "3 Sum",
      "link": "https://leetcode.com/problems/3sum/",
      "acceptance": 28,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Array", "Two Pointers"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Container With Most Water",
      "link": "https://leetcode.com/problems/container-with-most-water/",
      "acceptance": 51,
      "difficulty": "Medium",
      "frequency": "Low",
      "tags": ["Array", "Two Pointers"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Sum of Two Integers",
      "link": "https://leetcode.com/problems/sum-of-two-integers/",
      "acceptance": 51,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["Bit Manipulation"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Number of 1 Bits",
      "link": "https://leetcode.com/problems/number-of-1-bits/",
      "acceptance": 51,
      "difficulty": "Easy",
      "frequency": "Medium",
      "tags": ["Bit Manipulation"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Counting Bits",
      "link": "https://leetcode.com/problems/counting-bits/",
      "acceptance": 69,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["Bit Manipulation", "Dynamic Programming"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Missing Number",
      "link": "https://leetcode.com/problems/missing-number/",
      "acceptance": 53,
      "difficulty": "Easy",
      "frequency": "Medium",
      "tags": ["Bit Manipulation", "Math"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Reverse Bits",
      "link": "https://leetcode.com/problems/reverse-bits/",
      "acceptance": 40,
      "difficulty": "Easy",
      "frequency": "Medium",
      "tags": ["Bit Manipulation"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Climbing Stairs",
      "link": "https://leetcode.com/problems/climbing-stairs/",
      "acceptance": 48,
      "difficulty": "Easy",
      "frequency": "High",
      "tags": ["Dynamic Programming"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Coin Change",
      "link": "https://leetcode.com/problems/coin-change/",
      "acceptance": 35,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["Dynamic Programming"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Longest Increasing Subsequence",
      "link": "https://leetcode.com/problems/longest-increasing-subsequence/",
      "acceptance": 44,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["Dynamic Programming", "Binary Search"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Longest Common Subsequence",
      "link": "https://leetcode.com/problems/longest-common-subsequence/",
      "acceptance": 54,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["Dynamic Programming"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Word Break Problem",
      "link": "https://leetcode.com/problems/word-break/",
      "acceptance": 38,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Dynamic Programming"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Combination Sum",
      "link": "https://leetcode.com/problems/combination-sum/",
      "acceptance": 54,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Dynamic Programming", "Backtracking"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "House Robber",
      "link": "https://leetcode.com/problems/house-robber/",
      "acceptance": 47,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["Dynamic Programming"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "House Robber II",
      "link": "https://leetcode.com/problems/house-robber-ii/",
      "acceptance": 36,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Dynamic Programming"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Decode Ways",
      "link": "https://leetcode.com/problems/decode-ways/",
      "acceptance": 27,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Dynamic Programming"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Unique Paths",
      "link": "https://leetcode.com/problems/unique-paths/",
      "acceptance": 53,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["Dynamic Programming"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Jump Game",
      "link": "https://leetcode.com/problems/jump-game/",
      "acceptance": 37,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["Greedy", "Dynamic Programming"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Clone Graph",
      "link": "https://leetcode.com/problems/clone-graph/",
      "acceptance": 41,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Depth-First Search", "Breadth-First Search", "Graph"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Course Schedule",
      "link": "https://leetcode.com/problems/course-schedule/",
      "acceptance": 43,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": [
        "Depth-First Search",
        "Breadth-First Search",
        "Graph",
        "Topological Sort",
      ],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Pacific Atlantic Water Flow",
      "link": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      "acceptance": 43,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Depth-First Search", "Breadth-First Search", "Graph"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Number of Islands",
      "link": "https://leetcode.com/problems/number-of-islands/",
      "acceptance": 51,
      "difficulty": "Medium",
      "frequency": "Low",
      "tags": [
        "Depth-First Search",
        "Breadth-First Search",
        "Union Find",
        "Graph",
      ],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Longest Consecutive Sequence",
      "link": "https://leetcode.com/problems/longest-consecutive-sequence/",
      "acceptance": 45,
      "difficulty": "Hard",
      "frequency": "Medium",
      "tags": ["Array", "Union Find"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Alien Dictionary",
      "link": "https://leetcode.com/problems/alien-dictionary/",
      "acceptance": 32,
      "difficulty": "Hard",
      "frequency": "Low",
      "tags": [
        "Depth-First Search",
        "Breadth-First Search",
        "Graph",
        "Topological Sort",
      ],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Graph Valid Tree",
      "link": "https://leetcode.com/problems/graph-valid-tree/",
      "acceptance": 42,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": [
        "Depth-First Search",
        "Breadth-First Search",
        "Graph",
        "Union Find",
      ],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Number of Connected Components in an Undirected Graph",
      "link":
        "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
      "acceptance": 55,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": [
        "Depth-First Search",
        "Breadth-First Search",
        "Graph",
        "Union Find",
      ],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Insert Interval",
      "link": "https://leetcode.com/problems/insert-interval/",
      "acceptance": 34,
      "difficulty": "Hard",
      "frequency": "Medium",
      "tags": ["Array", "Sort", "Interval"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Merge Intervals",
      "link": "https://leetcode.com/problems/merge-intervals/",
      "acceptance": 40,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Array", "Sort", "Interval"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Non-overlapping Intervals",
      "link": "https://leetcode.com/problems/non-overlapping-intervals/",
      "acceptance": 45,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Array", "Greedy", "Interval"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Meeting Rooms",
      "link": "https://leetcode.com/problems/meeting-rooms/",
      "acceptance": 57,
      "difficulty": "Easy",
      "frequency": "Medium",
      "tags": ["Array", "Sort", "Interval"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Meeting Rooms II",
      "link": "https://leetcode.com/problems/meeting-rooms-ii/",
      "acceptance": 47,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Array", "Heap", "Greedy", "Interval"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Reverse a Linked List",
      "link": "https://leetcode.com/problems/reverse-linked-list/",
      "acceptance": 72,
      "difficulty": "Easy",
      "frequency": "High",
      "tags": ["Linked List"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Detect Cycle in a Linked List",
      "link": "https://leetcode.com/problems/linked-list-cycle/",
      "acceptance": 42,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["Linked List", "Two Pointers"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Merge Two Sorted Lists",
      "link": "https://leetcode.com/problems/merge-two-sorted-lists/",
      "acceptance": 57,
      "difficulty": "Easy",
      "frequency": "High",
      "tags": ["Linked List"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Merge k Sorted Lists",
      "link": "https://leetcode.com/problems/merge-k-sorted-lists/",
      "acceptance": 42,
      "difficulty": "Hard",
      "frequency": "Medium",
      "tags": ["Linked List", "Heap", "Divide and Conquer"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Remove Nth Node From End of List",
      "link":
        "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      "acceptance": 37,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Linked List", "Two Pointers"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Reorder List",
      "link": "https://leetcode.com/problems/reorder-list/",
      "acceptance": 39,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Linked List"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Set Matrix Zeroes",
      "link": "https://leetcode.com/problems/set-matrix-zeroes/",
      "acceptance": 42,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Array"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Spiral Matrix",
      "link": "https://leetcode.com/problems/spiral-matrix/",
      "acceptance": 37,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Array"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Rotate Image",
      "link": "https://leetcode.com/problems/rotate-image/",
      "acceptance": 59,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Array"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Word Search",
      "link": "https://leetcode.com/problems/word-search/",
      "acceptance": 36,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Array", "Backtracking"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Longest Substring Without Repeating Characters",
      "link":
        "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      "acceptance": 30,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["Hash Table", "Two Pointers", "String", "Sliding Window"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Longest Repeating Character Replacement",
      "link":
        "https://leetcode.com/problems/longest-repeating-character-replacement/",
      "acceptance": 46,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Two Pointers", "Sliding Window", "String"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Minimum Window Substring",
      "link": "https://leetcode.com/problems/minimum-window-substring/",
      "acceptance": 32,
      "difficulty": "Hard",
      "frequency": "Medium",
      "tags": ["Hash Table", "Two Pointers", "String", "Sliding Window"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Valid Anagram",
      "link": "https://leetcode.com/problems/valid-anagram/",
      "acceptance": 61,
      "difficulty": "Easy",
      "frequency": "High",
      "tags": ["Hash Table", "Sort"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Group Anagrams",
      "link": "https://leetcode.com/problems/group-anagrams/",
      "acceptance": 58,
      "difficulty": "Medium",
      "frequency": "Low",
      "tags": ["Hash Table", "String"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Valid Parentheses",
      "link": "https://leetcode.com/problems/valid-parentheses/",
      "acceptance": 40,
      "difficulty": "Easy",
      "frequency": "High",
      "tags": ["Stack", "String"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Valid Palindrome",
      "link": "https://leetcode.com/problems/valid-palindrome/",
      "acceptance": 38,
      "difficulty": "Easy",
      "frequency": "Medium",
      "tags": ["Two Pointers", "String"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Longest Palindromic Substring",
      "link": "https://leetcode.com/problems/longest-palindromic-substring/",
      "acceptance": 30,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["String", "Dynamic Programming"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Palindromic Substrings",
      "link": "https://leetcode.com/problems/palindromic-substrings/",
      "acceptance": 64,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["String", "Dynamic Programming"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Encode and Decode Strings",
      "link": "https://leetcode.com/problems/encode-and-decode-strings/",
      "acceptance": 47,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["String"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Maximum Depth of Binary Tree",
      "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      "acceptance": 68,
      "difficulty": "Easy",
      "frequency": "High",
      "tags": ["Tree", "Depth-First Search", "Breadth-First Search"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Same Tree",
      "link": "https://leetcode.com/problems/same-tree/",
      "acceptance": 55,
      "difficulty": "Easy",
      "frequency": "High",
      "tags": ["Tree", "Depth-First Search", "Breadth-First Search"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Invert/Flip Binary Tree",
      "link": "https://leetcode.com/problems/invert-binary-tree/",
      "acceptance": 68,
      "difficulty": "Easy",
      "frequency": "High",
      "tags": ["Tree", "Depth-First Search", "Breadth-First Search"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Binary Tree Maximum Path Sum",
      "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      "acceptance": 35,
      "difficulty": "Hard",
      "frequency": "Medium",
      "tags": ["Tree", "Depth-First Search"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Binary Tree Level Order Traversal",
      "link":
        "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      "acceptance": 55,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["Tree", "Breadth-First Search"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},

    {
      "Status": false,
      "title": "Serialize and Deserialize Binary Tree",
      "link":
        "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      "acceptance": 52,
      "difficulty": "Hard",
      "frequency": "Medium",
      "tags": ["Tree", "Design"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Subtree of Another Tree",
      "link": "https://leetcode.com/problems/subtree-of-another-tree/",
      "acceptance": 44,
      "difficulty": "Easy",
      "frequency": "Medium",
      "tags": ["Tree", "Depth-First Search"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Construct Binary Tree from Preorder and Inorder Traversal",
      "link":
        "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      "acceptance": 49,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Tree", "Depth-First Search"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Validate Binary Search Tree",
      "link": "https://leetcode.com/problems/validate-binary-search-tree/",
      "acceptance": 28,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["Tree", "Depth-First Search"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Kth Smallest Element in a BST",
      "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      "acceptance": 59,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Tree", "Depth-First Search", "Binary Search"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Lowest Common Ancestor of BST",
      "link":
        "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      "acceptance": 47,
      "difficulty": "Easy",
      "frequency": "High",
      "tags": ["Tree", "Depth-First Search"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Implement Trie (Prefix Tree)",
      "link": "https://leetcode.com/problems/implement-trie-prefix-tree/",
      "acceptance": 49,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Design", "Trie"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Add and Search Word",
      "link":
        "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
      "acceptance": 33,
      "difficulty": "Medium",
      "frequency": "Medium",
      "tags": ["Design", "Trie"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Word Search II",
      "link": "https://leetcode.com/problems/word-search-ii/",
      "acceptance": 34,
      "difficulty": "Hard",
      "frequency": "Medium",
      "tags": ["Backtracking", "Trie"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Merge K Sorted Lists",
      "link": "https://leetcode.com/problems/merge-k-sorted-lists/",
      "acceptance": 42,
      "difficulty": "Hard",
      "frequency": "Medium",
      "tags": ["Linked List", "Heap", "Divide and Conquer"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
    {
      "Status": false,
      "title": "Top K Frequent Elements",
      "link": "https://leetcode.com/problems/top-k-frequent-elements/",
      "acceptance": 60,
      "difficulty": "Medium",
      "frequency": "High",
      "tags": ["Hash Table", "Heap"],
      "solution":  "",
      "category":  "663aea59aeae63a1d481e546",
      "questionList": "Top 75" 
},
  ];

  Problem.insertMany(problems75)
    .then((problems) => {
      console.log("Problems inserted successfully:", problems);
      res.send("Problems populated successfully");
    })
    .catch((error) => {
      console.error("Error inserting problems:", error);
      res.status(500).send("Error populating problems");
    });
});
module.exports = router;
