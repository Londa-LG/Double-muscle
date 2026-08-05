const express = require("express");
const { createWorkoutCategory, getWorkoutCategories, getWorkoutCategory, updateWorkoutCategory, deleteWorkoutCategory } = require("../controllers/workoutCategoryController");

const router = express.Router();

// Create
router.post("/", createWorkoutCategory);

// Read
router.get("/", getWorkoutCategories);
router.get("/:id", getWorkoutCategory);

// Update
router.put("/:id", updateWorkoutCategory);

// Delete
router.delete("/:id", deleteWorkoutCategory);

module.exports = router;
