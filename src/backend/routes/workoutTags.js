const express = require("express");
const { createWorkoutTag, getWorkoutTags, getWorkoutTag, updateWorkoutTag, deleteWorkoutTag } = require("../controllers/workoutTagController");

const router = express.Router();

// Create
router.post("/", createWorkoutTag);

// Read
router.get("/", getWorkoutTags);
router.get("/:id", getWorkoutTag);

// Update
router.put("/:id", updateWorkoutTag);

// Delete
router.delete("/:id", deleteWorkoutTag);

module.exports = router;
