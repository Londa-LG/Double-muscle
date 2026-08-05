const express = require("express");
const Category = require("../models/categoryModel");
const { createCategory, getCategory, getCategories, updateCategory, deleteCategory } = require("../controllers/categoryController");

const router = express.Router();

// Create
router.post("/", createCategory);

// Read
router.get("/", getCategories);
router.get("/:id", getCategory);

// Update
router.put("/:id", updateCategory);

// Delete
router.delete("/:id", deleteCategory);

module.exports = router;
