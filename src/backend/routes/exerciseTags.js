const express = require("express");
const { createExerciseTag, getExerciseTag, getExerciseTags, updateExerciseTag, deleteExerciseTag } = require("../controllers/exerciseTagController");

const router = express.Router();

// Create
router.post("/", createExerciseTag);

// Read
router.get("/", getExerciseTags);
router.get("/:id", getExerciseTag);

// Update
router.put("/:id", updateExerciseTag);

// Delete
router.delete("/:id", deleteExerciseTag);

module.exports = router;
