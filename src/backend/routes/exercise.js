const express = require("express");
const Exercise = require("../models/exerciseModel");
const { createExercise, getExercise, getExercises, updateExercise, deleteExercise } = require("../controllers/exerciseController");

const router = express.Router();

// Create
router.post("/", createExercise);

// Read
router.get("/", getExercise);
router.get("/:id", getExercise);

// Update
router.put("/:id", updateExercise);

// Delete
router.delete("/:id", deleteExercise);

module.exports = router;
