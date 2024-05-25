const express = require('express');
const router = express.Router();
const { Category } = require("../../models/category");

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new category
router.post('/', async (req, res) => {
  const category = new Category({
    name: req.body.name,
    description: req.body.description
    // Add other fields here if needed
  });

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
