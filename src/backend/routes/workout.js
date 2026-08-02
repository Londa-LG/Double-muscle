const express = require("express");
const Workout = require("../models/workoutModel");
const { createWorkout, getWorkout, getWorkouts, updateWorkout, deleteWorkout } = require("../controllers/workoutController");

const router = express.Router();

// Create
router.post("/", createWorkout);

// Read
router.get("/", getWorkouts);
router.get("/:id", getWorkouts);

// Update
router.put("/:id", updateWorkout);

// Delete
router.delete("/:id", deleteWorkout);

module.exports = router;

